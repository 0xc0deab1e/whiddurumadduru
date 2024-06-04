const pollData = [
    {
        name: '노태우',
        data: [
            [1, 29, 46, 0],
            [13, 57, 16, 0],
            [25, 53, 25, 0],
            [37, 41, 27, 0],
            [49, 45, 25, 0],
            [61, 28, 41, 0],
            [73, 26, 45, 0],
            [97, 28, 40, 0],
            [109, 18, 62, 0],
            [121, 28, 55, 0],
            [133, 25, 54, 0],
            [145, 12, 40, 0],
            [181, 15, 41, 0],
            [205, 12, 56, 0]]
    },
    {
        name: '김영삼',
        data: [
            [1, 71, 7, 0],
            [13, 83, 4, 0],
            [25, 83, 6, 0],
            [37, 59, 18, 0],
            [49, 55, 24, 0],
            [61, 55, 21, 0],
            [73, 44, 25, 0],
            [85, 36, 33, 0],
            [97, 37, 34, 0],
            [109, 28, 41, 0],
            [121, 29, 45, 0],
            [133, 32, 39, 0],
            [145, 41, 33, 0],
            [157, 41, 37, 0],
            [169, 34, 40, 0],
            [181, 28, 47, 0],
            [193, 14, 65, 0],
            [205, 7, 74, 0],
            [217, 8, 78, 0],
            [229, 6, 74, 0]]
    },
    {
        name: '김대중',
        data: [
            [1, 71, 7, 0],
            [13, 62, 11, 0],
            [25, 56, 17, 0],
            [37, 63, 14, 0],
            [49, 60, 16, 0],
            [61, 52, 22, 0],
            [73, 46, 29, 0],
            [85, 50, 24, 0],
            [97, 49, 20, 0],
            [109, 38, 26, 0],
            [121, 54, 18, 0],
            [133, 30, 51, 0],
            [145, 27, 55, 0],
            [157, 29, 52, 0],
            [169, 28, 49, 0],
            [181, 31, 49, 0],
            [193, 33, 41, 0],
            [205, 26, 53, 0],
            [217, 28, 52, 0],
            [229, 24, 56, 0]]
    },
    {
        name: '노무현',
        data: [
            [1, 60, 19, 0],
            [13, 40, 41, 0],
            [25, 29, 53, 0],
            [37, 22, 62, 0],
            [49, 25, 57, 0],
            [61, 34, 46, 0],
            [73, 23, 60, 0],
            [85, 27, 57, 0],
            [97, 33, 55, 0],
            [109, 34, 53, 0],
            [121, 28, 61, 0],
            [133, 23, 67, 0],
            [145, 27, 63, 0],
            [157, 20, 70, 0],
            [169, 16, 74, 0],
            [181, 12, 79, 0],
            [193, 16, 78, 0],
            [205, 24, 66, 0],
            [217, 27, 64, 0],
            [229, 27, 62, 0]]
    },
    {
        name: '이명박',
        data: [
            [1, 52, 52, 0],
            [13, 21, 21, 0],
            [25, 24, 24, 0],
            [37, 32, 32, 0],
            [49, 34, 34, 0],
            [61, 27, 27, 0],
            [73, 36, 36, 0],
            [85, 47, 47, 0],
            [97, 44, 44, 0],
            [109, 49, 49, 0],
            [121, 44, 44, 0],
            [133, 47, 47, 0],
            [145, 43, 43, 0],
            [157, 39, 39, 0],
            [169, 37, 37, 0],
            [181, 32, 32, 0],
            [193, 26, 63, 11],
            [194, 24, 65, 11],
            [195, 22, 65, 13],
            [196, 24, 64, 13],
            [197, 22, 65, 13],
            [198, 24, 64, 12],
            [199, 23, 62, 15],
            [200, 24, 60, 16],
            [201, 26, 60, 14],
            [202, 24, 61, 14],
            [203, 27, 58, 14],
            [204, 26, 58, 17],
            [205, 29, 54, 17],
            [206, 23, 63, 14],
            [207, 24, 64, 11],
            [208, 28, 56, 16],
            [209, 23, 62, 15],
            [210, 24, 59, 17],
            [211, 24, 58, 18],
            [212, 24, 57, 18],
            [213, 24, 57, 18],
            [214, 26, 56, 18],
            [215, 28, 53, 19],
            [216, 23, 56, 21],
            [217, 25, 56, 19],
            [218, 23, 55, 22],
            [219, 21, 58, 21],
            [220, 20, 63, 16],
            [221, 18, 62, 20],
            [222, 19, 64, 18],
            [223, 17, 64, 19],
            [224, 20, 60, 21],
            [225, 26, 54, 20],
            [226, 27, 53, 19],
            [227, 28, 55, 17],
            [228, 25, 57, 18],
            [229, 26, 55, 18],
            [230, 25, 58, 16],
            [231, 26, 59, 15],
            [232, 26, 61, 13],
            [233, 24, 57, 18],
            [234, 26, 63, 12],
            [235, 25, 62, 13],
            [236, 23, 66, 11],
            [237, 23, 66, 11],
            [238, 25, 65, 10],
            [239, 26, 64, 11],
            [240, 21, 62, 17],
            [241, 22, 64, 14],
            [246, 22, 56, 23],
            [247, 22, 52, 26],
            [248, 19, 63, 18],
            [249, 23, 55, 21]]
    },
    {
        name: '박근혜',
        data: [
            [1, 49, 29, 22],
            [2, 44, 32, 24],
            [3, 44, 19, 38],
            [4, 41, 28, 32],
            [5, 41, 29, 30],
            [6, 44, 29, 26],
            [7, 48, 25, 27],
            [8, 46, 24, 31],
            [9, 50, 23, 28],
            [10, 56, 17, 27],
            [11, 51, 27, 22],
            [12, 53, 22, 25],
            [13, 52, 23, 25],
            [14, 53, 20, 27],
            [15, 60, 17, 24],
            [16, 59, 20, 21],
            [17, 54, 21, 25],
            [18, 63, 16, 21],
            [19, 61, 17, 23],
            [20, 59, 19, 22],
            [21, 57, 16, 27],
            [22, 57, 17, 25],
            [23, 59, 21, 19],
            [24, 54, 26, 21],
            [25, 59, 25, 16],
            [26, 61, 24, 15],
            [27, 64, 22, 14],
            [28, 67, 19, 15],
            [30, 60, 29, 11],
            [31, 56, 34, 10],
            [32, 56, 31, 13],
            [33, 56, 31, 14],
            [34, 53, 34, 13],
            [35, 58, 29, 13],
            [36, 57, 30, 13],
            [37, 57, 31, 12],
            [38, 53, 33, 14],
            [39, 53, 34, 12],
            [40, 54, 35, 11],
            [41, 48, 41, 11],
            [44, 53, 39, 8],
            [45, 52, 39, 10],
            [46, 54, 37, 8],
            [47, 53, 37, 10],
            [48, 55, 35, 10],
            [49, 55, 34, 11],
            [50, 56, 34, 10],
            [51, 57, 31, 11],
            [52, 57, 35, 8],
            [53, 55, 34, 11],
            [54, 56, 31, 13],
            [55, 59, 28, 13],
            [56, 61, 28, 11],
            [57, 59, 28, 12],
            [58, 59, 28, 13],
            [60, 48, 40, 12],
            [61, 46, 41, 12],
            [62, 46, 42, 12],
            [63, 48, 41, 11],
            [64, 47, 42, 11],
            [66, 47, 43, 9],
            [67, 43, 48, 9],
            [68, 42, 48, 10],
            [69, 40, 48, 12],
            [70, 43, 48, 10],
            [71, 44, 47, 9],
            [72, 40, 50, 9],
            [73, 40, 49, 11],
            [74, 46, 43, 10],
            [75, 46, 45, 9],
            [76, 46, 44, 9],
            [77, 45, 44, 10],
            [78, 45, 45, 10],
            [80, 44, 47, 9],
            [81, 49, 44, 7],
            [82, 49, 42, 9],
            [83, 48, 42, 10],
            [84, 46, 41, 12],
            [85, 46, 45, 10],
            [86, 46, 44, 10],
            [87, 46, 42, 11],
            [88, 45, 45, 10],
            [89, 44, 45, 11],
            [90, 44, 45, 11],
            [91, 42, 48, 10],
            [92, 41, 48, 12],
            [93, 37, 52, 10],
            [96, 40, 51, 10],
            [97, 35, 55, 11],
            [98, 30, 60, 10],
            [99, 29, 63, 8],
            [100, 29, 62, 9],
            [101, 30, 62, 8],
            [103, 33, 58, 9],
            [104, 37, 54, 9],
            [105, 39, 52, 9],
            [106, 36, 54, 10],
            [107, 38, 51, 11],
            [108, 40, 52, 8],
            [109, 39, 52, 10],
            [110, 34, 54, 12],
            [111, 35, 57, 8],
            [112, 39, 52, 9],
            [113, 39, 52, 9],
            [114, 40, 50, 10],
            [115, 39, 51, 10],
            [116, 40, 47, 13],
            [117, 34, 55, 10],
            [118, 33, 58, 9],
            [119, 29, 61, 10],
            [120, 33, 58, 9],
            [121, 34, 58, 8],
            [122, 32, 59, 8],
            [123, 33, 58, 10],
            [124, 32, 60, 8],
            [125, 34, 57, 10],
            [126, 33, 55, 12],
            [127, 33, 56, 10],
            [128, 34, 56, 10],
            [129, 49, 44, 7],
            [130, 54, 38, 8],
            [131, 50, 42, 8],
            [132, 50, 41, 9],
            [133, 48, 43, 9],
            [135, 47, 41, 12],
            [136, 43, 44, 13],
            [137, 42, 47, 12],
            [138, 44, 44, 13],
            [139, 41, 49, 9],
            [140, 40, 48, 12],
            [141, 42, 48, 11],
            [142, 44, 47, 9],
            [143, 44, 45, 10],
            [144, 43, 47, 10],
            [145, 43, 46, 11],
            [148, 40, 53, 8],
            [149, 43, 47, 10],
            [150, 39, 49, 12],
            [151, 39, 49, 12],
            [152, 41, 48, 11],
            [154, 43, 46, 10],
            [155, 42, 45, 13],
            [156, 39, 49, 13],
            [157, 42, 45, 13],
            [158, 40, 49, 12],
            [159, 36, 52, 13],
            [160, 38, 51, 12],
            [161, 43, 46, 10],
            [162, 39, 48, 14],
            [163, 29, 58, 13],
            [164, 30, 56, 13],
            [165, 33, 52, 15],
            [166, 32, 53, 15],
            [167, 30, 58, 12],
            [168, 32, 53, 15],
            [169, 34, 54, 12],
            [170, 31, 54, 14],
            [171, 32, 54, 14],
            [172, 30, 56, 13],
            [173, 34, 54, 12],
            [174, 31, 52, 17],
            [175, 32, 54, 14],
            [176, 32, 55, 13],
            [177, 31, 55, 14],
            [178, 33, 52, 14],
            [179, 33, 53, 13],
            [180, 33, 54, 14],
            [181, 30, 57, 13],
            [182, 30, 55, 15],
            [183, 33, 56, 11],
            [185, 31, 56, 14],
            [186, 30, 56, 15],
            [187, 29, 57, 14],
            [188, 26, 59, 14],
            [189, 25, 64, 12],
            [190, 17, 74, 9],
            [191, 5, 89, 6],
            [192, 5, 90, 4],
            [193, 5, 90, 6],
            [194, 4, 93, 4],
            [195, 4, 91, 5],
            [196, 5, 91, 5]]
    },
    {
        name: '문재인',
        data: [
            [4, 84, 7, 8],
            [5, 82, 10, 8],
            [6, 83, 10, 7],
            [7, 79, 14, 7],
            [8, 80, 13, 7],
            [9, 83, 9, 9],
            [10, 80, 12, 8],
            [11, 74, 16, 10],
            [12, 77, 13, 9],
            [13, 77, 15, 8],
            [14, 78, 14, 8],
            [15, 78, 15, 7],
            [16, 79, 14, 8],
            [17, 76, 16, 8],
            [18, 72, 20, 8],
            [19, 69, 23, 9],
            [20, 70, 24, 6],
            [21, 65, 26, 8],
            [23, 73, 19, 8],
            [24, 70, 23, 8],
            [25, 73, 19, 8],
            [26, 73, 18, 8],
            [27, 74, 18, 7],
            [28, 73, 20, 7],
            [29, 72, 18, 10],
            [30, 75, 17, 8],
            [31, 74, 18, 8],
            [32, 70, 21, 9],
            [35, 72, 20, 8],
            [36, 73, 17, 9],
            [37, 73, 17, 9],
            [38, 67, 24, 9],
            [39, 64, 27, 9],
            [40, 63, 30, 7],
            [41, 63, 28, 9],
            [43, 68, 22, 9],
            [44, 64, 26, 10],
            [45, 71, 22, 8],
            [46, 74, 18, 9],
            [47, 71, 19, 11],
            [48, 70, 21, 9],
            [49, 74, 17, 9],
            [50, 72, 19, 9],
            [51, 70, 21, 8],
            [52, 73, 18, 9],
            [53, 83, 10, 8],
            [54, 78, 13, 9],
            [55, 76, 14, 10],
            [56, 76, 14, 10],
            [57, 75, 15, 10],
            [59, 79, 12, 8],
            [60, 75, 16, 9],
            [61, 73, 16, 11],
            [62, 71, 18, 11],
            [63, 69, 21, 9],
            [64, 67, 25, 9],
            [65, 62, 28, 9],
            [66, 60, 29, 11],
            [67, 58, 31, 11],
            [68, 60, 32, 9],
            [69, 56, 33, 11],
            [70, 53, 38, 8],
            [71, 49, 42, 9],
            [72, 50, 39, 10],
            [73, 61, 30, 10],
            [75, 64, 26, 10],
            [76, 65, 25, 9],
            [77, 62, 27, 10],
            [78, 58, 32, 10],
            [79, 55, 35, 10],
            [80, 54, 36, 10],
            [81, 52, 40, 9],
            [82, 53, 38, 9],
            [83, 53, 39, 8],
            [84, 49, 41, 11],
            [85, 45, 44, 11],
            [86, 45, 46, 8],
            [89, 48, 44, 9],
            [90, 47, 44, 10],
            [91, 46, 45, 9],
            [92, 47, 44, 8],
            [94, 47, 44, 10],
            [95, 45, 45, 10],
            [96, 49, 42, 9],
            [97, 46, 45, 10],
            [98, 44, 46, 10],
            [99, 45, 44, 11],
            [100, 43, 46, 10],
            [101, 41, 49, 9],
            [102, 47, 45, 8],
            [103, 48, 42, 10],
            [104, 44, 47, 9],
            [105, 45, 46, 9],
            [106, 47, 45, 8],
            [107, 44, 47, 9],
            [108, 46, 44, 10],
            [109, 45, 45, 10],
            [110, 46, 46, 9],
            [111, 47, 44, 10],
            [112, 45, 45, 11],
            [113, 46, 45, 10],
            [114, 49, 40, 10],
            [115, 45, 45, 9],
            [116, 48, 44, 9],
            [117, 48, 42, 10],
            [118, 48, 41, 10],
            [119, 47, 43, 10],
            [121, 45, 49, 7],
            [122, 44, 49, 7],
            [123, 43, 49, 8],
            [125, 40, 53, 7],
            [126, 41, 50, 9],
            [127, 42, 51, 6],
            [128, 43, 51, 7],
            [129, 39, 53, 8],
            [130, 41, 50, 8],
            [131, 44, 47, 8],
            [132, 45, 47, 8],
            [133, 46, 46, 9],
            [134, 45, 48, 8],
            [135, 46, 46, 8],
            [136, 48, 45, 7],
            [137, 49, 43, 8],
            [138, 44, 46, 9],
            [141, 47, 43, 10],
            [142, 45, 46, 10],
            [144, 41, 50, 9],
            [145, 44, 49, 8],
            [146, 44, 49, 7],
            [147, 45, 46, 8],
            [148, 42, 51, 6],
            [149, 44, 48, 8],
            [150, 49, 45, 6],
            [151, 49, 42, 9],
            [152, 55, 39, 6],
            [153, 56, 36, 8],
            [154, 57, 35, 8],
            [155, 59, 33, 8],
            [156, 62, 30, 8],
            [157, 64, 26, 10],
            [158, 71, 21, 8],
            [159, 65, 27, 8],
            [160, 65, 26, 9],
            [161, 65, 25, 8],
            [162, 62, 27, 11],
            [163, 60, 32, 9],
            [164, 55, 35, 10],
            [165, 52, 39, 9],
            [166, 50, 39, 11],
            [167, 47, 44, 9],
            [168, 46, 43, 12],
            [169, 45, 48, 7],
            [170, 44, 45, 10],
            [171, 44, 46, 10],
            [172, 39, 53, 8],
            [173, 47, 45, 8],
            [174, 47, 43, 9],
            [175, 45, 44, 10],
            [176, 46, 45, 10],
            [177, 45, 45, 9],
            [178, 44, 48, 8],
            [181, 47, 42, 11],
            [182, 43, 45, 11],
            [183, 43, 46, 11],
            [184, 43, 47, 10],
            [185, 46, 45, 9],
            [186, 44, 45, 11],
            [187, 40, 48, 12],
            [188, 39, 51, 10],
            [189, 38, 54, 8],
            [190, 40, 52, 8],
            [193, 38, 55, 7],
            [194, 38, 53, 9],
            [195, 37, 54, 10],
            [196, 38, 52, 10],
            [197, 39, 52, 9],
            [199, 39, 50, 11],
            [200, 39, 52, 9]]
    },
    {
        name: '윤석열',
        data: [
            [1, 50.5, 41.6, 6.5],
            [2, 50, 42.9, 5.5],
            [3, 50.7, 43.3, 3.4],
            [4, 50, 44.7, 3.8],
            [5, 49.5, 45.1, 4],
            [6, 50.7, 42.9, 4.8],
            [7, 48.7, 44.3, 5.1],
            [8, 48.6, 43.9, 5],
            [9, 51.2, 42.1, 5.2],
            [10, 51.7, 42.1, 4.3],
            [11, 49.8, 41.6, 7.2],
            [12, 52, 38.7, 6.3],
            [13, 52.8, 36.2, 7.9],
            [14, 52.1, 37.7, 7],
            [15, 49.9, 40, 7.1],
            [16, 47.6, 44.2, 5.2],
            [17, 45.9, 45.3, 6.3],
            [18, 42.4, 50.5, 4.9],
            [19, 35.3, 57.3, 5.2],
            [20, 32.3, 61.6, 4.1],
            [21, 33.2, 61.6, 3.2],
            [22, 29.2, 64.8, 3.3],
            [23, 28, 67.1, 2.9],
            [24, 29.5, 66.4, 3],
            [25, 30.5, 63.2, 1.6],
            [26, 32, 63.3, 3],
            [27, 31.2, 63.8, 2.8],
            [28, 32.8, 62.3, 3.3],
            [29, 34.5, 62.2, 1.7],
            [30, 31, 63.6, 2.4],
            [31, 31.2, 64.8, 2.6],
            [32, 30.7, 64.7, 2.4],
            [33, 31.9, 63.5, 3.6],
            [34, 32.1, 63, 3.1],
            [35, 34.6, 61, 3.8],
            [36, 33.6, 62.4, 2.7],
            [37, 30.3, 63.4, 2.7],
            [38, 32.4, 62.7, 3.4],
            [39, 35.7, 59.9, 3.1],
            [40, 36.7, 58.7, 3],
            [41, 38.3, 56.4, 3.8],
            [42, 39.1, 55.8, 4.4],
            [43, 39.8, 55.7, 2.3],
            [44, 38.7, 55.4, 4.1],
            [45, 37.4, 56, 4.7],
            [46, 39, 56.4, 2.7],
            [47, 39, 55.9, 3.9],
            [48, 38.4, 56.4, 3.3],
            [49, 36.7, 58.3, 3.8],
            [50, 36.9, 58.3, 2.8],
            [51, 39.2, 55.8, 3.3],
            [52, 38.3, 56, 3.5],
            [53, 39.7, 55.6, 2.9],
            [54, 37.3, 58, 3],
            [55, 35.5, 59.7, 3.3],
            [56, 36.6, 59, 3.3],
            [57, 34.3, 60.2, 3.3],
            [58, 32.9, 62, 3.1],
            [59, 33, 62, 3.1],
            [60, 33.3, 61.9, 3.1],
            [61, 34.5, 59.8, 4],
            [62, 37.6, 58.2, 3.5],
            [63, 37.6, 57.6, 2],
            [64, 38.5, 56.8, 3.2],
            [65, 37.8, 57.3, 3.8],
            [66, 37.8, 58.6, 3.7],
            [67, 37.2, 57.7, 4.2],
            [68, 38.3, 56.9, 3.2],
            [69, 39.3, 56, 3.7],
            [70, 39.4, 55.3, 5.7],
            [71, 36.4, 58.1, 2.7],
            [72, 36.2, 58.7, 3.7],
            [73, 36.3, 59.1, 2.8],
            [74, 37.8, 57.2, 3.6],
            [75, 38.4, 56.9, 7.7],
            [76, 35.5, 59.4, 3.1],
            [77, 35.6, 59.8, 3.3],
            [78, 35.6, 60, 3.2],
            [79, 34.9, 60.3, 6.4],
            [80, 36.4, 59, 3.2],
            [81, 33, 60.9, 4.5],
            [82, 35.9, 59.1, 3.9],
            [83, 36.8, 58.7, 2.9],
            [84, 36.2, 59, 4.2],
            [85, 32.5, 61.8, 5.3],
            [86, 31, 62.8, 4.5],
            [87, 32.5, 61.5, 3.9],
            [88, 35, 60, 4.8],
            [89, 35, 59.7, 4.2],
            [90, 35.9, 59.5, 3.5],
            [91, 36.3, 58.4, 4],
            [92, 34.9, 59.6, 4.9],
            [93, 37, 58.5, 3.6],
            [94, 34.8, 59.8, 4.2],
            [95, 37.4, 58, 3.8],
            [96, 37.4, 57.8, 4.4],
            [97, 37.6, 58, 3.2],
            [98, 36.6, 58.8, 3.5],
            [99, 35.2, 59.8, 3.3],
            [100, 34.8, 61, 3.3],
            [101, 35.2, 60.2, 3.1],
            [102, 37.6, 58.4, 2.9],
            [103, 38.7, 56.6, 3.3],
            [104, 39.3, 56.6, 3.2],
            [105, 40.4, 55.7, 2.8],
            [106, 39.8, 56.5, 2.5],
            [107, 38.7, 57.4, 2.4],
            [108, 35.9, 59.7, 2.8],
            [109, 35.6, 60.3, 2.9]
        ]
    }];

function getPollDataByName(name) {
    if (!name) {
        return pollData;
    }
    else if (parseInt(name)) {
        return getPollDataByDate(name);
    }
    let result = [];
    pollData.forEach((item) => {
        let val = item.values.find(x => x.key === name);
        if (val) {
            result.push({ date: item.date, values: [val] })
        }
    })
    return result;
}

function getPollDataByDate(year) {
    return pollData.filter(x => x.date.getFullYear() == year);
}

function getVoteDataByDate(date) {
    const VoteData = [
        { date: new Date("1948-07-24"), value: [91.80, '180', '이승만'] },
        { date: new Date("1952-08-15"), value: [74.60, '5,238,769', '이승만'] },
        { date: new Date("1956-08-15"), value: [70.00, '5,046,437', '이승만'] },
        { date: new Date("1960-08-12"), value: [79.10, '208', '윤보선'] },
        { date: new Date("1963-12-17"), value: [46.60, '4,702,640', '박정희'] },
        { date: new Date("1967-07-01"), value: [51.40, '5,688,666', '박정희'] },
        { date: new Date("1971-07-01"), value: [53.20, '6,342,828', '박정희'] },
        { date: new Date("1972-12-27"), value: [99.90, '2,357', '박정희'] },
        { date: new Date("1978-12-27"), value: [99.80, '2,577', '박정희'] },
        { date: new Date("1979-12-06"), value: [96.30, '2,465', '최규하'] },
        { date: new Date("1980-08-27"), value: [99.40, '2,524', '전두환'] },
        { date: new Date("1981-02-25"), value: [90.10, '4,755', '전두환'] },
        { date: new Date("1988-02-25"), value: [36.60, '8,282,738', '노태우'] },
        { date: new Date("1993-02-25"), value: [42.00, '9,977,332', '김영삼'] },
        { date: new Date("1998-02-25"), value: [40.30, '10,326,275', '김대중'] },
        { date: new Date("2003-02-25"), value: [48.90, '12,014,277', '노무현'] },
        { date: new Date("2008-02-25"), value: [48.70, '11,492,389', '이명박'] },
        { date: new Date("2013-02-25"), value: [51.60, '15,773,128', '박근혜'] },
        { date: new Date("2017-05-10"), value: [41.10, '13,423,800', '문재인'] },
        { date: new Date("2022-05-10"), value: [48.60, '16,394,815', '윤석열'] }];
    return VoteData.filter(x => x.date <= date).sort((x, y) => y.date - x.date)[0].value;
}

function getRepresentativesByDate(date) {
    const representatives = [
        { date: new Date("1940-01-01"), value: [80, 70, 20] },
        { date: new Date("1950-01-01"), value: [70, 70, 100] },
        { date: new Date("1960-01-01"), value: [60, 70, 20] },
        { date: new Date("1970-01-01"), value: [50, 10, 20] },
        { date: new Date("1975-01-01"), value: [80, 70, 20] },
        { date: new Date("1980-01-01"), value: [10, 70, 20] },
        { date: new Date("1980-01-01"), value: [20, 60, 20] },
        { date: new Date("1990-01-01"), value: [80, 70, 20] },
        { date: new Date("2000-01-01"), value: [80, 70, 10] },
        { date: new Date("2010-01-01"), value: [80, 50, 20] },
        { date: new Date("2020-01-01"), value: [80, 70, 20] },
        { date: new Date("2024-01-01"), value: [80, 70, 20] },
    ];
    return representatives.filter(x => x.date <= date).sort((x, y) => y.date - x.date)[0].value;
}

function getPresidentByDate(date) {
    const presidents = [{ name: '이승만', value: new Date("1948-7-24") },
    { name: '윤보선', value: new Date("1960-8-12") },
    { name: '박정희', value: new Date("1963-12-17") },
    { name: '최규하', value: new Date("1979-12-6") },
    { name: '전두환', value: new Date("1980-8-27") },
    { name: '노태우', value: new Date("1988-2-25") },
    { name: '김영삼', value: new Date("1993-2-25") },
    { name: '김대중', value: new Date("1998-2-25") },
    { name: '노무현', value: new Date("2003-2-25") },
    { name: '이명박', value: new Date("2008-2-25") },
    { name: '박근혜', value: new Date("2013-2-25") },
    { name: '문재인', value: new Date("2017-5-10") },
    { name: '윤석열', value: new Date("2022-5-10") }];
    return presidents.filter(x => x.value <= date).sort((x, y) => y.value - x.value)[0].name;
}