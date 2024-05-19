import pandas as pd
import json
import os

# Get the absolute path to the directory containing the script
script_dir = os.path.dirname(os.path.abspath(__file__))

# Define the relative path to the Excel file
relative_excel_path = '../../데이터 (대통령).xlsx'

# Construct the absolute path to the Excel file
file_path = os.path.join(script_dir, relative_excel_path)

# Load the Excel file
excel_data = pd.ExcelFile(file_path)

# Initialize an empty list to store the event data
event_data = []

# Process each sheet from the second to the last
for sheet in excel_data.sheet_names[1:]:
    # Read the sheet into a DataFrame
    df = pd.read_excel(file_path, sheet_name=sheet)

    # Check if the sheet has 'year' and 'title' columns
    if 'year' in df.columns and 'title' in df.columns:
        # Append the data to the event_data list, excluding rows with NaN in 'year' or 'title'
        for _, row in df.dropna(subset=['year', 'title']).iterrows():
            try:
                date = pd.to_datetime(row['year'])
                title = row['title']
                # Check if date conversion was successful and title is not NaN or "nan"
                if pd.notna(date) and title != "nan":
                    event_data.append({
                        'date': date,
                        'date_js': f'new Date({date.year}, {date.month - 1}, {date.day})',
                        'title': title
                    })
            except Exception as e:
                continue

# Sort event_data by date
event_data.sort(key=lambda x: x['date'])

# Convert event_data to the desired JavaScript object format
event_data_js = ",\n".join(
    [f"{{ date: {event['date_js']}, title: \"{event['title']}\" }}" for event in event_data]
)

# Define the content to be saved in eventBars.js
js_content = f"const eventBars = [\n{event_data_js}\n];"

# Define the output path for eventBars.js in the same directory as the script
output_path = os.path.join(script_dir, 'eventBarData.js')

# Check if the file already exists and delete it if it does
if os.path.exists(output_path):
    os.remove(output_path)

# Save the content to eventBars.js
with open(output_path, 'w', encoding='utf-8') as file:
    file.write(js_content)

print("Data has been written to", output_path)
