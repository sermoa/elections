let multiplier = 17;

let regions = [
  {
    name: "Alaska",
    short: "AK",
    areas: [
      {
        result: 'republican',
        coordinates: [
          [0, 0], [1, 0],
                  [1, 1]
        ]
      }
    ]
  },
  {
    name: "Washington",
    short: "WA",
    areas: [
      {
        result: 'democrat',
        coordinates: [
                          [6, 3], [7, 3],
          [4, 4], [5, 4], [6, 4], [7, 4],
                  [5, 5], [6, 5], [7, 5],
                  [5, 6], [6, 6], [7, 6]
        ]
      }
    ]
  },
  {
    name: "Oregon",
    short: "OR",
    areas: [
      {
        result: 'democrat',
        coordinates: [
          [3, 7],
          [3, 8], [4, 8], [5, 8],
          [3, 9], [4, 9], [5, 9]
        ]
      }
    ]
  },
  {
    name: "Nevada",
    short: "NV",
    areas: [
      {
        result: 'democrat',
        coordinates: [
          [7, 9], [8, 9],
          [7, 10], [8, 10],
          [7, 11], [8, 11]
        ]
      }
    ]
  },
  {
    name: "California",
    short: "CA",
    areas: [
      {
        result: 'democrat',
        coordinates: [
          [3, 11], [4, 11], [5, 11],
          [3, 12], [4, 12], [5, 12],
          [3, 13], [4, 13], [5, 13],
          [3, 14], [4, 14], [5, 14], [6, 14],
          [3, 15], [4, 15], [5, 15], [6, 15],
          [3, 16], [4, 16], [5, 16], [6, 16],
          [3, 17], [4, 17], [5, 17], [6, 17], [7, 17],
                   [4, 18], [5, 18], [6, 18], [7, 18], [8, 18],
                   [4, 19], [5, 19], [6, 19], [7, 19], [8, 19], [9, 19],
                            [5, 20], [6, 20], [7, 20], [8, 20], [9, 20], [10, 20],
                                     [6, 21], [7, 21], [8, 21], [9, 21], [10, 21],
                                              [7, 22], [8, 22], [9, 22], [10, 22],
                                                       [8, 23], [9, 23], [10, 23]
        ]
      }
    ]
  },
  {
    name: "Hawaii",
    short: "HI",
    areas: [
      {
        result: 'democrat',
        coordinates: [
          [2, 29],
          [3, 30],
          [4, 31], [5, 31]
        ]
      }
    ]
  },
  {
    name: "Idaho",
    short: "ID",
    areas: [
      {
        result: 'republican',
        coordinates: [
          [9, 5],
          [9, 6],
          [9, 7 ], [10, 7]
        ]
      }
    ]
  },
  {
    name: "Utah",
    short: "UT",
    areas: [
      {
        result: 'republican',
        coordinates: [
          [10, 10], [11, 10],
          [10, 11], [11, 11],
          [10, 12], [11, 12],
        ]
      }
    ]
  },
  {
    name: "Arizona",
    short: "AZ",
    areas: [
      {
        result: 'democrat',
        coordinates: [
          [9, 14], [10, 14], [11, 14],
          [9, 15], [10, 15], [11, 15],
          [9, 16], [10, 16], [11, 16],
                   [10, 17], [11, 17],
        ]
      }
    ]
  },
  {
    name: "Montana",
    short: "MT",
    areas: [
      {
        result: 'republican',
        coordinates: [
          [12, 5], [13, 5], [14, 5]
        ]
      }
    ]
  },
  {
    name: "Wyoming",
    short: "WY",
    areas: [
      {
        result: 'republican',
        coordinates: [
          [12, 7], [13, 7], [14, 7]
        ]
      }
    ]
  },
  {
    name: "Colorado",
    short: "CO",
    areas: [
      {
        result: 'democrat',
        coordinates: [
          [13, 10], [14, 10], [15, 10],
          [13, 11], [14, 11], [15, 11],
          [13, 12], [14, 12], [15, 12]
        ]
      }
    ]
  },
  {
    name: "New Mexico",
    short: "NM",
    areas: [
      {
        result: 'democrat',
        coordinates: [
          [13, 14], [14, 14],
          [13, 15], [14, 15],
          [13, 16]
        ]
      }
    ]
  },
  {
    name: "Texas",
    short: "TX",
    areas: [
      {
        result: 'republican',
        coordinates: [
                              [14, 18], [15, 18],
                              [14, 19], [15, 19], [16, 19], [17, 19], [18, 19], [19, 19],
          [12, 20], [13, 20], [14, 20], [15, 20], [16, 20], [17, 20], [18, 20], [19, 20],
                    [13, 21], [14, 21], [15, 21], [16, 21], [17, 21], [18, 21], [19, 21],
                    [13, 22], [14, 22], [15, 22], [16, 22], [17, 22], [18, 22],
                              [14, 23], [15, 23], [16, 23], [17, 23],
                              [14, 24], [15, 24], [16, 24],
                                        [15, 25], [16, 25]
        ]
      }
    ]
  },
  {
    name: "North Dakota",
    short: "ND",
    areas: [
      {
        result: 'republican',
        coordinates: [
          [16, 5], [17, 5], [18, 5]
        ]
      }
    ]
  },
  {
    name: "South Dakota",
    short: "SD",
    areas: [
      {
        result: 'republican',
        coordinates: [
          [16, 7], [17, 7], [18, 7]
        ]
      }
    ]
  },
  {
    name: "Nebraska",
    short: "NE",
    areas: [
      {
        result: 'republican',
        coordinates: [
          [17, 10], [18, 10],
                    [18, 11], [19, 11]
        ]
      },
      {
        result: 'democrat',
        coordinates: [
          [19, 10]
        ]
      }
    ]
  },
  {
    name: "Kansas",
    short: "KS",
    areas: [
      {
        result: 'republican',
        coordinates: [
          [17, 13], [18, 13], [19, 13],
          [17, 14], [18, 14], [19, 14]
        ]
      }
    ]
  },
  {
    name: "Oklahoma",
    short: "OK",
    areas: [
      {
        result: 'republican',
        coordinates: [
          [16, 16], [17, 16], [18, 16], [19, 16],
                    [17, 17], [18, 17], [19, 17]
        ]
      }
    ]
  },
  {
    name: "Minnesota",
    short: "MN",
    areas: [
      {
        result: 'democrat',
        coordinates: [
          [20, 4], [21, 4], [22, 4],
          [20, 5], [21, 5],
          [20, 6], [21, 6],
          [20, 7], [21, 7], [22, 7]
        ]
      }
    ]
  },
  {
    name: "Iowa",
    short: "IA",
    areas: [
      {
        result: 'republican',
        coordinates: [
          [21, 9], [22, 9],
          [21, 10], [22, 10],
          [21, 11], [22, 11]
        ]
      }
    ]
  },
  {
    name: "Missouri",
    short: "MO",
    areas: [
      {
        result: 'republican',
        coordinates: [
          [21, 13], [22, 13],
          [21, 14], [22, 14],
          [21, 15], [22, 15], [23, 15],
          [21, 16], [22, 16], [23, 16]
        ]
      }
    ]
  },
  {
    name: "Arkensas",
    short: "AR",
    areas: [
      {
        result: 'republican',
        coordinates: [
          [21, 18], [22, 18], [23, 18],
          [21, 19], [22, 19],
          [21, 20]
        ]
      }
    ]
  },
  {
    name: "Louisiana",
    short: "LA",
    areas: [
      {
        result: 'republican',
        coordinates: [
          [21, 22], [22, 22],
          [21, 23], [22, 23], [23, 23],
          [21, 24], [22, 24], [23, 24]
        ]
      }
    ]
  },
  {
    name: "Wisconsin",
    short: "WI",
    areas: [
      {
        result: 'democrat',
        coordinates: [
          [24, 5], [25, 5],
          [24, 6], [25, 6], [26, 6],
          [24, 7], [25, 7], [26, 7],
                   [25, 8], [26, 8],
        ]
      }
    ]
  },
  {
    name: "Illinois",
    short: "IL",
    areas: [
      {
        result: 'democrat',
        coordinates: [
          [24, 10], [25, 10], [26, 10],
          [24, 11], [25, 11], [26, 11],
          [24, 12], [25, 12], [26, 12],
          [24, 13], [25, 13], [26, 13],
                    [25, 14], [26, 14],
                    [25, 15], [26, 15],
                    [25, 16], [26, 16],
                    [25, 17], [26, 17]
        ]
      }
    ]
  },
  {
    name: "Tennessee",
    short: "TN",
    areas: [
      {
        result: 'republican',
        coordinates: [
          [25, 19], [26, 19], [27, 19], [28, 19], [29, 19], [30, 19],
          [25, 20], [26, 20], [27, 20], [28, 20], [29, 20]
        ]
      }
    ]
  },
  {
    name: "Mississippi",
    short: "MS",
    areas: [
      {
        result: 'republican',
        coordinates: [
          [25, 22], [26, 22],
          [25, 23], [26, 23],
          [25, 24], [26, 24]
        ]
      }
    ]
  },
  {
    name: "Michigan",
    short: "MI",
    areas: [
      {
        result: 'democrat',
        coordinates: [
          [28, 4], [29, 4],
                   [29, 5], [30, 5], [31, 5],
                   [29, 6], [30, 6], [31, 6], [32, 6],
                   [29, 7], [30, 7], [31, 7], [32, 7],
                   [29, 8], [30, 8], [31, 8]
        ]
      }
    ]
  },
  {
    name: "Indiana",
    short: "IN",
    areas: [
      {
        result: 'republican',
        coordinates: [
          [28, 10], [29, 10],
          [28, 11], [29, 11],
          [28, 12], [29, 12],
          [28, 13], [29, 13],
          [28, 14], [29, 14],
          [28, 15]
        ]
      }
    ]
  },
  {
    name: "Kentucky",
    short: "KY",
    areas: [
      {
        result: 'republican',
        coordinates: [
                              [30, 16], [31, 16], [32, 16],
          [28, 17], [29, 17], [30, 17], [31, 17], [32, 17]
        ]
      }
    ]
  },
  {
    name: "Alabama",
    short: "AL",
    areas: [
      {
        result: 'republican',
        coordinates: [
          [28, 22], [29, 22], [30, 22],
          [28, 23], [29, 23], [30, 23],
          [28, 24], [29, 24], [30, 24]
        ]
      }
    ]
  },
  {
    name: "Ohio",
    short: "OH",
    areas: [
      {
        result: 'republican',
        coordinates: [
          [31, 10], [32, 10], [33, 10], [34, 10],
          [31, 11], [32, 11], [33, 11], [34, 11],
          [31, 12], [32, 12], [33, 12], [34, 12],
          [31, 13], [32, 13], [33, 13], [34, 13],
                    [32, 14], [33, 14]
        ]
      }
    ]
  },
  {
    name: "Georgia",
    short: "GA",
    areas: [
      {
        result: 'democrat',
        coordinates: [
          [32, 20], [33, 20],
          [32, 21], [33, 21], [34, 21],
          [32, 22], [33, 22], [34, 22],
          [32, 23], [33, 23], [34, 23], [35, 23],
          [32, 24], [33, 24], [34, 24], [35, 24]
        ]
      }
    ]
  },
  {
    name: "Florida",
    short: "FL",
    areas: [
      {
        result: 'republican',
        coordinates: [
          [31, 26], [32, 26], [33, 26], [34, 26], [35, 26], [36, 26], [37, 26], [38, 26],
                                                  [35, 27], [36, 27], [37, 27], [38, 27],
                                                  [35, 28], [36, 28], [37, 28], [38, 28], [39, 28],
                                                  [35, 29], [36, 29], [37, 29], [38, 29], [39, 29],
                                                            [36, 30], [37, 30], [38, 30], [39, 30],
                                                                                [38, 31], [39, 31],
                                                                                          [39, 32]
        ]
      }
    ]
  },
  {
    name: "New York",
    short: "NY",
    areas: [
      {
        result: 'democrat',
        coordinates: [
                                                       [42, 3], [43, 3],
                                              [41, 4], [42, 4], [43, 4],
                                     [40, 5], [41, 5], [42, 5], [43, 5],
                            [39, 6], [40, 6], [41, 6], [42, 6], [43, 6],
                   [38, 7], [39, 7], [40, 7], [41, 7], [42, 7], [43, 7],
          [37, 8], [38, 8], [39, 8], [40, 8], [41, 8], [42, 8], [43, 8],
                                                                [43, 9], [44, 9]
        ]
      }
    ]
  },
  {
    name: "Pennsylvania",
    short: "PA",
    areas: [
      {
        result: 'democrat',
        coordinates: [
          [36, 10], [37, 10], [38, 10], [39, 10], [40, 10], [41, 10],
          [36, 11], [37, 11], [38, 11], [39, 11], [40, 11], [41, 11], [42, 11],
          [36, 12], [37, 12], [38, 12], [39, 12], [40, 12], [41, 12], [42, 12]
        ]
      }
    ]
  },
  {
    name: "West Virgina",
    short: "WV",
    areas: [
      {
        result: 'republican',
        coordinates: [
          [35, 15], [36, 15], [37, 15],
          [35, 16], [36, 16]
        ]
      }
    ]
  },
  {
    name: "Virgina",
    short: "VA",
    areas: [
      {
        result: 'democrat',
        coordinates: [
                                                            [39, 16], [40, 16],
                                                  [38, 17], [39, 17], [40, 17],
          [34, 18], [35, 18], [36, 18], [37, 18], [38, 18], [39, 18], [40, 18], [41, 18]
        ]
      }
    ]
  },
  {
    name: "North Carolina",
    short: "NC",
    areas: [
      {
        result: 'republican',
        coordinates: [
          [36, 20], [37, 20], [38, 20], [39, 20], [40, 20], [41, 20], [42, 20], [43, 20],
          [36, 21], [37, 21], [38, 21], [39, 21], [40, 21], [41, 21], [42, 21]
        ]
      }
    ]
  },
  {
    name: "South Carolina",
    short: "SC",
    areas: [
      {
        result: 'republican',
        coordinates: [
          [37, 23], [38, 23], [39, 23], [40, 23], [41, 23],
          [37, 24], [38, 24], [39, 24], [40, 24]
        ]
      }
    ]
  },
  {
    name: "Maryland",
    short: "MD",
    areas: [
      {
        result: 'democrat',
        coordinates: [
          [39, 14], [40, 14], [41, 14], [42, 14],
                                        [42, 15], [43, 15], [44, 15],
                                        [42, 16], [43, 16], [44, 16]
        ]
      }
    ]
  },
  {
    name: "District of Columbia",
    short: "DC",
    areas: [
      {
        result: 'democrat',
        coordinates: [
          [43, 18], [44, 18], [45, 18]
        ]
      }
    ]
  },
  {
    name: "Delaware",
    short: "DE",
    areas: [
      {
        result: 'democrat',
        coordinates: [
          [46, 16], [47, 16],
                    [47, 17]
        ]
      }
    ]
  },
  {
    name: "New Jersey",
    short: "NJ",
    areas: [
      {
        result: 'democrat',
        coordinates: [
          [44, 11], [45, 11], [46, 11], [47, 11],
          [44, 12], [45, 12], [46, 12], [47, 12],
          [44, 13], [45, 13], [46, 13], [47, 13],
                              [46, 14], [47, 14]
        ]
      }
    ]
  },
  {
    name: "Connecticut",
    short: "CT",
    areas: [
      {
        result: 'democrat',
        coordinates: [
          [45, 6], [46, 6], [47, 6],
          [45, 7], [46, 7], [47, 7],
                            [47, 8]
        ]
      }
    ]
  },
  {
    name: "Rhode Island",
    short: "RI",
    areas: [
      {
        result: 'democrat',
        coordinates: [
          [49, 6], [50, 6],
          [49, 7], [50, 7]
        ]
      }
    ]
  },
  {
    name: "Massachusetts",
    short: "MA",
    areas: [
      {
        result: 'democrat',
        coordinates: [
          [45, 3], [46, 3], [47, 3], [48, 3], [49, 3],
          [45, 4], [46, 4], [47, 4], [48, 4], [49, 4], [50, 4]
        ]
      }
    ]
  },
  {
    name: "Vermont",
    short: "VT",
    areas: [
      {
        result: 'democrat',
        coordinates: [
                   [45, 0],
          [44, 1], [45, 1]
        ]
      }
    ]
  },
  {
    name: "New Hampshire",
    short: "NH",
    areas: [
      {
        result: 'democrat',
        coordinates: [
          [47, 0], [48, 0],
          [47, 1], [48, 1]
        ]
      }
    ]
  },
  {
    name: "Maine",
    short: "ME",
    areas: [
      {
        result: 'republican',
        coordinates: [
          [50, 0],
          [50, 1], [51, 1]
        ]
      },
      {
        result: 'democrat',
        coordinates: [
          [51, 0]
        ]
      }
    ]
  }
];
