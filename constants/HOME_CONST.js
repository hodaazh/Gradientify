const HOME_CONST = {
  directionItems: [
    { id: 1, dir: "left" },
    { id: 2, dir: "right" },
    { id: 3, dir: "top" },
    { id: 4, dir: "bottom" },
  ],
  gradientItems: [
    {
      id: 1,
      colors: ["#F86BDF", "#6B6BF8"],
    },
    {
      id: 2,
      colors: ["#B86BF8", "#6BB5F8"],
    },
    {
      id: 3,
      colors: ["#FC8E51", "#FA61F9"],
    },
    {
      id: 4,
      colors: ["#12c2e9", "#c471ed", "#f64f59"],
    },
    {
      id: 5,
      colors: ["#833ab4", "#fd1d1d", "#fcb045"],
    },
    {
      id: 6,
      colors: ["#FC466B", "#3F5EFB"],
    },
    {
      id: 7,
      colors: ["#D24074", "#1268C3"],
    },
    {
      id: 8,
      colors: ["#9C7CF4", "#F49782"],
    },
    {
      id: 9,
      colors: ["#A1FF8B", "#3F93FF"],
    },
    {
      id: 10,
      colors: ["#3f5efb", "#af50a6", "#fc466b"],
    },
    {
      id: 11,
      colors: ["#4158D0", "#C850C0", "#FFCC70"],
    },
    {
      id: 12,
      colors: ["#9C1EBC", "#FF7676"],
    },
    {
      id: 13,
      colors: ["#764dff", "#239eb9", "#d73e87"],
    },
    {
      id: 14,
      colors: ["#feac5e", "#c779d0", "#4bc0c8"],
    },
    {
      id: 15,
      colors: ["#172368", "#E249AF"],
    },
    {
      id: 16,
      colors: ["#6964DE", "#FCA6E9"],
    },
    {
      id: 17,
      colors: ["#FFCBA0", "#DD5789", "#9B5BE6"],
    },
    {
      id: 18,
      colors: ["#3d10BD", "#62bdff"],
    },
    {
      id: 19,
      colors: ["#1D41BE", "#CB5DFF"],
    },
    {
      id: 20,
      colors: ["#0D57C6", "#37CFFF"],
    },
    {
      id: 21,
      colors: ["#4B55DB", "#34E0E0"],
    },
    {
      id: 22,
      colors: ["#B0FF4B", "#11876B"],
    },
    {
      id: 23,
      colors: ["#7D2DFF", "#41DDFF"],
    },
    {
      id: 24,
      colors: ["#f093fb", "#f5576c"],
    },
    {
      id: 25,
      colors: ["#FFCA58", "#8B49FF"],
    },
    {
      id: 26,
      colors: ["#FDBD55", "#F983FF"],
    },
    {
      id: 27,
      colors: ["#6F2370", "#EE4BF0"],
    },
    {
      id: 28,
      colors: ["#3378FF", "#9442FE"],
    },
    {
      id: 29,
      colors: ["#C15CFF", "#FF5454"],
    },
    {
      id: 30,
      colors: ["#fa709a ", "#fee140"],
    },
    {
      id: 31,
      colors: ["#c471f5", "#fa71cd "],
    },
    {
      id: 32,
      colors: ["#f83600", "#f9d423"],
    },
    {
      id: 33,
      colors: ["#12C2E9", "#C471ED", "#F64F59"],
    },
    {
      id: 34,
      colors: ["#EB0000", "#95008A", "#3300FC"],
    },
    {
      id: 35,
      colors: ["#6025F5", "#FF5555"],
    },
    {
      id: 36,
      colors: ["#6025F5", "#FF5555"],
    },
    {
      id: 37,
      colors: ["#BDC3C7", "#2C3E50"],
    },
    {
      id: 38,
      colors: ["#FF0000", "#FDCF58"],
    },
    {
      id: 39,
      colors: ["#7EC6BC", "#EBE717"],
    },
    {
      id: 40,
      colors: ["#A8EB12", "#00BF72", "#051937"],
    },
    {
      id: 41,
      colors: ["#8A2387", "#E94057", "#F27121"],
    },
    {
      id: 42,
      colors: ["#81FF8A", "#64965E"],
    },
    {
      id: 43,
      colors: ["#009FFF", "#EC2F4B"],
    },
    {
      id: 44,
      colors: ["#00FFF0", "#0083FE"],
    },
    {
      id: 45,
      colors: ["#59CDE9", "#0A2A88"],
    },
    {
      id: 46,
      colors: ["#FDC830", "#F37335"],
    },
    {
      id: 47,
      colors: ["#F953C6", "#B91D73"],
    },
    {
      id: 48,
      colors: ["#F12711", "#F5AF19"],
    },
    {
      id: 49,
      colors: ["#FEAC5E", "#C779D0", "#4bc0c8"],
    },
    {
      id: 50,
      colors: ["#fc00ff", "#00dbde"],
    },
    {
      id: 51,
      colors: ["#00c6ff", "#0072ff"],
    },
    {
      id: 52,
      colors: ["#f857a6", "#ff5858"],
    },
    {
      id: 53,
      colors: ["#0093E9", "#80D0C7"],
    },
    {
      id: 54,
      colors: ["#FBDA61", "#FF5ACD"],
    },
    {
      id: 55,
      colors: ["#FBDA61", "#418CB7"],
    },
    {
      id: 56,
      colors: ["#FF8570", "#418CB7"],
    },
    {
      id: 57,
      colors: ["#D0004B", "#88069D"],
    },
    {
      id: 58,
      colors: ["#00E0EE", "#AD00FE"],
    },
    {
      id: 59,
      colors: ["#00E0EE", "#19087E"],
    },
    {
      id: 60,
      colors: ["#D7003A", "#19087E"],
    },
    {
      id: 61,
      colors: ["#FF0000", "#470000"],
    },
    {
      id: 62,
      colors: ["#5EE2FF", "#00576A"],
    },
    {
      id: 63,
      colors: ["#5EE2FF", "#FF7A00"],
    },
    {
      id: 64,
      colors: ["#9F25FF", "#FF7A00"],
    },
    {
      id: 65,
      colors: ["#FFC328", "#E20000"],
    },
    {
      id: 66,
      colors: ["#FFF500", "#FF00B8"],
    },
    {
      id: 67,
      colors: ["#FF5EEF", "#456EFF"],
    },
    {
      id: 68,
      colors: ["#FFDC99", "#FF62C0"],
    },
    {
      id: 69,
      colors: ["#DD7BFF", "#FF6C6C"],
    },
    {
      id: 70,
      colors: ["#FFEB3A", "#4DEF8E"],
    },
    {
      id: 71,
      colors: ["#8A88FB", "#D079EE"],
    },
    {
      id: 72,
      colors: ["#7CF7FF", "#4B73FF"],
    },
    {
      id: 73,
      colors: ["#8FFF85", "#39A0FF"],
    },
    {
      id: 74,
      colors: ["#FF896D", "#D02020"],
    },
    {
      id: 75,
      colors: ["#FF896D", "#4300B1"],
    },
    {
      id: 76,
      colors: ["#A531DC", "#4300B1"],
    },
    {
      id: 77,
      colors: ["#4776E6", "#8E54E9"],
    },
    {
      id: 78,
      colors: ["#1D976C", "#93F9B9"],
    },
    {
      id: 79,
      colors: ["#FFD439", "#FF7A00"],
    },
    {
      id: 80,
      colors: ["#3793FF", "#0017E4"],
    },
    {
      id: 81,
      colors: ["#24CFC5", "#001C63"],
    },
    {
      id: 82,
      colors: ["#FF5E98", "#0F213E"],
    },
    {
      id: 83,
      colors: ["#61C695", "#133114"],
    },
    {
      id: 84,
      colors: ["#B10EEC", "#FF130F"],
    },
    {
      id: 85,
      colors: ["#89F7EA", "#6675F1"],
    },
    {
      id: 86,
      colors: ["#F574B9", "#5961DF"],
    },
    {
      id: 87,
      colors: ["#FF68C0", "#6854F9"],
    },
    {
      id: 88,
      colors: ["#FF5555", "#5555FF"],
    },
    {
      id: 89,
      colors: ["#FE0368", "#6703FF"],
    },
    {
      id: 90,
      colors: ["#696eff", "#f8acff"],
    },
    {
      id: 91,
      colors: ["#f86ca7", "#f4d444"],
    },
    {
      id: 92,
      colors: ["#f44369", "#3e3b92"],
    },
    {
      id: 93,
      colors: ["#0965c0", "#c53a94"],
    },
    {
      id: 94,
      colors: ["#f4e784", "#f24389", "#a478f1"],
    },
    {
      id: 95,
      colors: ["#68e3f9", "#f55a9b", "#4f4ed7"],
    },
    {
      id: 96,
      colors: ["#5de0f0", "#f7a6f5", "#e64f6f"],
    },
    {
      id: 97,
      colors: ["#fff1bf", "#ec458d", "#474ed7"],
    },
    {
      id: 98,
      colors: ["#fcef64", "#fcc44b", "#f44c7d"],
    },
    {
      id: 99,
      colors: ["#1cdce8", "#bb77ed", "#f34a62"],
    },
    {
      id: 100,
      colors: ["#53dbf2", "#ce9eec", "#3a7ff2"],
    },
    {
      id: 101,
      colors: ["#f7ea60", "#3cf2de", "#f774bb"],
    },
    {
      id: 102,
      colors: ["#51c26f", "#f2e901"],
    },
    {
      id: 103,
      colors: ["#fcb0f3", "#3d05dd"],
    },
    {
      id: 104,
      colors: ["#b6f3c9", "#4766f4"],
    },
  ],
};

export { HOME_CONST };
