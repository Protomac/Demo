import { errorObj, successObj } from "../../../config/settings";
import Async from "async";
const exec = require("child_process").exec;
const console = require("tracer").colorConsole();

const score = {
  tableHeader: [],
  colElements: [],
  gameMode: [],
  reqdScore: [],
}
const headerValues = ["Kills", "Damage", "Survived", "Survival Time", "Rating"]

const processImg = {
  //extract => IN: {row: {min, max}, column: {min, max}, saveAs: ""}
  extractAndSave: (imgSaveData) => {
    const { filePath, saveAs, row, col } = imgSaveData
    return new Promise(resolve => {
      exec(`octave ${__dirname}\\SaveImage.m ${filePath} ${saveAs} ${row.min} ${row.max} ${col.min} ${col.max}`, (err, stdout, stderr) => {
        if (err || stderr) {
          console.error(err, stderr)
          return resolve({ ...errorObj, error: { err, stderr } })
        }
        return resolve({ ...successObj, data: stdout })
      })
    })
  },
  feedToAPI: (filePath) => {
    return new Promise(resolve => {
      //https://cloud.google.com/vision/docs/ocr

      const data = {
        "responses": [
          {
            "textAnnotations": [
              {
                "locale": "en",
                "description": "Health Restored\nDamage\nRating\nPlayer\nKills\nSurvived\nRevive\n",
                "boundingPoly": {
                  "vertices": [
                    {
                      "x": 96,
                      "y": 17
                    },
                    {
                      "x": 970,
                      "y": 17
                    },
                    {
                      "x": 970,
                      "y": 35
                    },
                    {
                      "x": 96,
                      "y": 35
                    }
                  ]
                }
              },
              {
                "description": "Health",
                "boundingPoly": {
                  "vertices": [
                    {
                      "x": 749,
                      "y": 17
                    },
                    {
                      "x": 785,
                      "y": 18
                    },
                    {
                      "x": 785,
                      "y": 33
                    },
                    {
                      "x": 749,
                      "y": 32
                    }
                  ]
                }
              },
              {
                "description": "Restored",
                "boundingPoly": {
                  "vertices": [
                    {
                      "x": 791,
                      "y": 18
                    },
                    {
                      "x": 840,
                      "y": 19
                    },
                    {
                      "x": 840,
                      "y": 33
                    },
                    {
                      "x": 791,
                      "y": 32
                    }
                  ]
                }
              },
              {
                "description": "Damage",
                "boundingPoly": {
                  "vertices": [
                    {
                      "x": 529,
                      "y": 19
                    },
                    {
                      "x": 571,
                      "y": 19
                    },
                    {
                      "x": 571,
                      "y": 33
                    },
                    {
                      "x": 529,
                      "y": 33
                    }
                  ]
                }
              },
              {
                "description": "Rating",
                "boundingPoly": {
                  "vertices": [
                    {
                      "x": 936,
                      "y": 19
                    },
                    {
                      "x": 970,
                      "y": 20
                    },
                    {
                      "x": 969,
                      "y": 35
                    },
                    {
                      "x": 935,
                      "y": 34
                    }
                  ]
                }
              },
              {
                "description": "Player",
                "boundingPoly": {
                  "vertices": [
                    {
                      "x": 96,
                      "y": 20
                    },
                    {
                      "x": 131,
                      "y": 21
                    },
                    {
                      "x": 131,
                      "y": 35
                    },
                    {
                      "x": 96,
                      "y": 34
                    }
                  ]
                }
              },
              {
                "description": "Kills",
                "boundingPoly": {
                  "vertices": [
                    {
                      "x": 420,
                      "y": 20
                    },
                    {
                      "x": 441,
                      "y": 20
                    },
                    {
                      "x": 441,
                      "y": 32
                    },
                    {
                      "x": 420,
                      "y": 32
                    }
                  ]
                }
              },
              {
                "description": "Survived",
                "boundingPoly": {
                  "vertices": [
                    {
                      "x": 650,
                      "y": 20
                    },
                    {
                      "x": 696,
                      "y": 20
                    },
                    {
                      "x": 696,
                      "y": 32
                    },
                    {
                      "x": 650,
                      "y": 32
                    }
                  ]
                }
              },
              {
                "description": "Revive",
                "boundingPoly": {
                  "vertices": [
                    {
                      "x": 870,
                      "y": 20
                    },
                    {
                      "x": 904,
                      "y": 20
                    },
                    {
                      "x": 904,
                      "y": 32
                    },
                    {
                      "x": 870,
                      "y": 32
                    }
                  ]
                }
              }
            ],
            "fullTextAnnotation": {
              "pages": [
                {
                  "property": {
                    "detectedLanguages": [
                      {
                        "languageCode": "en",
                        "confidence": 1
                      }
                    ]
                  },
                  "width": 1102,
                  "height": 51,
                  "blocks": [
                    {
                      "property": {
                        "detectedLanguages": [
                          {
                            "languageCode": "en",
                            "confidence": 1
                          }
                        ]
                      },
                      "boundingBox": {
                        "vertices": [
                          {
                            "x": 749,
                            "y": 17
                          },
                          {
                            "x": 840,
                            "y": 19
                          },
                          {
                            "x": 840,
                            "y": 34
                          },
                          {
                            "x": 749,
                            "y": 32
                          }
                        ]
                      },
                      "paragraphs": [
                        {
                          "property": {
                            "detectedLanguages": [
                              {
                                "languageCode": "en",
                                "confidence": 1
                              }
                            ]
                          },
                          "boundingBox": {
                            "vertices": [
                              {
                                "x": 749,
                                "y": 17
                              },
                              {
                                "x": 840,
                                "y": 19
                              },
                              {
                                "x": 840,
                                "y": 34
                              },
                              {
                                "x": 749,
                                "y": 32
                              }
                            ]
                          },
                          "words": [
                            {
                              "property": {
                                "detectedLanguages": [
                                  {
                                    "languageCode": "en"
                                  }
                                ]
                              },
                              "boundingBox": {
                                "vertices": [
                                  {
                                    "x": 749,
                                    "y": 17
                                  },
                                  {
                                    "x": 785,
                                    "y": 18
                                  },
                                  {
                                    "x": 785,
                                    "y": 33
                                  },
                                  {
                                    "x": 749,
                                    "y": 32
                                  }
                                ]
                              },
                              "symbols": [
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 749,
                                        "y": 17
                                      },
                                      {
                                        "x": 758,
                                        "y": 17
                                      },
                                      {
                                        "x": 758,
                                        "y": 32
                                      },
                                      {
                                        "x": 749,
                                        "y": 32
                                      }
                                    ]
                                  },
                                  "text": "H"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 759,
                                        "y": 17
                                      },
                                      {
                                        "x": 763,
                                        "y": 17
                                      },
                                      {
                                        "x": 763,
                                        "y": 32
                                      },
                                      {
                                        "x": 759,
                                        "y": 32
                                      }
                                    ]
                                  },
                                  "text": "e"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 764,
                                        "y": 17
                                      },
                                      {
                                        "x": 771,
                                        "y": 17
                                      },
                                      {
                                        "x": 771,
                                        "y": 32
                                      },
                                      {
                                        "x": 764,
                                        "y": 32
                                      }
                                    ]
                                  },
                                  "text": "a"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 772,
                                        "y": 17
                                      },
                                      {
                                        "x": 774,
                                        "y": 17
                                      },
                                      {
                                        "x": 774,
                                        "y": 32
                                      },
                                      {
                                        "x": 772,
                                        "y": 32
                                      }
                                    ]
                                  },
                                  "text": "l"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 775,
                                        "y": 17
                                      },
                                      {
                                        "x": 779,
                                        "y": 17
                                      },
                                      {
                                        "x": 779,
                                        "y": 32
                                      },
                                      {
                                        "x": 775,
                                        "y": 32
                                      }
                                    ]
                                  },
                                  "text": "t"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ],
                                    "detectedBreak": {
                                      "type": "SPACE"
                                    }
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 780,
                                        "y": 18
                                      },
                                      {
                                        "x": 785,
                                        "y": 18
                                      },
                                      {
                                        "x": 785,
                                        "y": 33
                                      },
                                      {
                                        "x": 780,
                                        "y": 33
                                      }
                                    ]
                                  },
                                  "text": "h"
                                }
                              ]
                            },
                            {
                              "property": {
                                "detectedLanguages": [
                                  {
                                    "languageCode": "en"
                                  }
                                ]
                              },
                              "boundingBox": {
                                "vertices": [
                                  {
                                    "x": 791,
                                    "y": 18
                                  },
                                  {
                                    "x": 840,
                                    "y": 19
                                  },
                                  {
                                    "x": 840,
                                    "y": 33
                                  },
                                  {
                                    "x": 791,
                                    "y": 32
                                  }
                                ]
                              },
                              "symbols": [
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 791,
                                        "y": 19
                                      },
                                      {
                                        "x": 795,
                                        "y": 19
                                      },
                                      {
                                        "x": 795,
                                        "y": 32
                                      },
                                      {
                                        "x": 791,
                                        "y": 32
                                      }
                                    ]
                                  },
                                  "text": "R"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 796,
                                        "y": 19
                                      },
                                      {
                                        "x": 800,
                                        "y": 19
                                      },
                                      {
                                        "x": 800,
                                        "y": 32
                                      },
                                      {
                                        "x": 796,
                                        "y": 32
                                      }
                                    ]
                                  },
                                  "text": "e"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 801,
                                        "y": 19
                                      },
                                      {
                                        "x": 808,
                                        "y": 19
                                      },
                                      {
                                        "x": 808,
                                        "y": 32
                                      },
                                      {
                                        "x": 801,
                                        "y": 32
                                      }
                                    ]
                                  },
                                  "text": "s"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 809,
                                        "y": 19
                                      },
                                      {
                                        "x": 814,
                                        "y": 19
                                      },
                                      {
                                        "x": 814,
                                        "y": 32
                                      },
                                      {
                                        "x": 809,
                                        "y": 32
                                      }
                                    ]
                                  },
                                  "text": "t"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 815,
                                        "y": 19
                                      },
                                      {
                                        "x": 822,
                                        "y": 19
                                      },
                                      {
                                        "x": 822,
                                        "y": 32
                                      },
                                      {
                                        "x": 815,
                                        "y": 32
                                      }
                                    ]
                                  },
                                  "text": "o"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 823,
                                        "y": 19
                                      },
                                      {
                                        "x": 827,
                                        "y": 19
                                      },
                                      {
                                        "x": 827,
                                        "y": 32
                                      },
                                      {
                                        "x": 823,
                                        "y": 32
                                      }
                                    ]
                                  },
                                  "text": "r"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 828,
                                        "y": 19
                                      },
                                      {
                                        "x": 832,
                                        "y": 19
                                      },
                                      {
                                        "x": 832,
                                        "y": 32
                                      },
                                      {
                                        "x": 828,
                                        "y": 32
                                      }
                                    ]
                                  },
                                  "text": "e"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ],
                                    "detectedBreak": {
                                      "type": "EOL_SURE_SPACE"
                                    }
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 833,
                                        "y": 19
                                      },
                                      {
                                        "x": 840,
                                        "y": 19
                                      },
                                      {
                                        "x": 840,
                                        "y": 32
                                      },
                                      {
                                        "x": 833,
                                        "y": 32
                                      }
                                    ]
                                  },
                                  "text": "d"
                                }
                              ]
                            }
                          ]
                        }
                      ],
                      "blockType": "TEXT"
                    },
                    {
                      "property": {
                        "detectedLanguages": [
                          {
                            "languageCode": "en",
                            "confidence": 1
                          }
                        ]
                      },
                      "boundingBox": {
                        "vertices": [
                          {
                            "x": 529,
                            "y": 19
                          },
                          {
                            "x": 571,
                            "y": 19
                          },
                          {
                            "x": 571,
                            "y": 33
                          },
                          {
                            "x": 529,
                            "y": 33
                          }
                        ]
                      },
                      "paragraphs": [
                        {
                          "property": {
                            "detectedLanguages": [
                              {
                                "languageCode": "en",
                                "confidence": 1
                              }
                            ]
                          },
                          "boundingBox": {
                            "vertices": [
                              {
                                "x": 529,
                                "y": 19
                              },
                              {
                                "x": 571,
                                "y": 19
                              },
                              {
                                "x": 571,
                                "y": 33
                              },
                              {
                                "x": 529,
                                "y": 33
                              }
                            ]
                          },
                          "words": [
                            {
                              "property": {
                                "detectedLanguages": [
                                  {
                                    "languageCode": "en"
                                  }
                                ]
                              },
                              "boundingBox": {
                                "vertices": [
                                  {
                                    "x": 529,
                                    "y": 19
                                  },
                                  {
                                    "x": 571,
                                    "y": 19
                                  },
                                  {
                                    "x": 571,
                                    "y": 33
                                  },
                                  {
                                    "x": 529,
                                    "y": 33
                                  }
                                ]
                              },
                              "symbols": [
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 529,
                                        "y": 19
                                      },
                                      {
                                        "x": 535,
                                        "y": 19
                                      },
                                      {
                                        "x": 535,
                                        "y": 33
                                      },
                                      {
                                        "x": 529,
                                        "y": 33
                                      }
                                    ]
                                  },
                                  "text": "D"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 536,
                                        "y": 19
                                      },
                                      {
                                        "x": 540,
                                        "y": 19
                                      },
                                      {
                                        "x": 540,
                                        "y": 33
                                      },
                                      {
                                        "x": 536,
                                        "y": 33
                                      }
                                    ]
                                  },
                                  "text": "a"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 541,
                                        "y": 19
                                      },
                                      {
                                        "x": 550,
                                        "y": 19
                                      },
                                      {
                                        "x": 550,
                                        "y": 33
                                      },
                                      {
                                        "x": 541,
                                        "y": 33
                                      }
                                    ]
                                  },
                                  "text": "m"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 551,
                                        "y": 19
                                      },
                                      {
                                        "x": 555,
                                        "y": 19
                                      },
                                      {
                                        "x": 555,
                                        "y": 33
                                      },
                                      {
                                        "x": 551,
                                        "y": 33
                                      }
                                    ]
                                  },
                                  "text": "a"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 556,
                                        "y": 19
                                      },
                                      {
                                        "x": 565,
                                        "y": 19
                                      },
                                      {
                                        "x": 565,
                                        "y": 33
                                      },
                                      {
                                        "x": 556,
                                        "y": 33
                                      }
                                    ]
                                  },
                                  "text": "g"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ],
                                    "detectedBreak": {
                                      "type": "EOL_SURE_SPACE"
                                    }
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 566,
                                        "y": 19
                                      },
                                      {
                                        "x": 571,
                                        "y": 19
                                      },
                                      {
                                        "x": 571,
                                        "y": 33
                                      },
                                      {
                                        "x": 566,
                                        "y": 33
                                      }
                                    ]
                                  },
                                  "text": "e"
                                }
                              ]
                            }
                          ]
                        }
                      ],
                      "blockType": "TEXT"
                    },
                    {
                      "property": {
                        "detectedLanguages": [
                          {
                            "languageCode": "en",
                            "confidence": 1
                          }
                        ]
                      },
                      "boundingBox": {
                        "vertices": [
                          {
                            "x": 936,
                            "y": 19
                          },
                          {
                            "x": 970,
                            "y": 20
                          },
                          {
                            "x": 969,
                            "y": 35
                          },
                          {
                            "x": 935,
                            "y": 34
                          }
                        ]
                      },
                      "paragraphs": [
                        {
                          "property": {
                            "detectedLanguages": [
                              {
                                "languageCode": "en",
                                "confidence": 1
                              }
                            ]
                          },
                          "boundingBox": {
                            "vertices": [
                              {
                                "x": 936,
                                "y": 19
                              },
                              {
                                "x": 970,
                                "y": 20
                              },
                              {
                                "x": 969,
                                "y": 35
                              },
                              {
                                "x": 935,
                                "y": 34
                              }
                            ]
                          },
                          "words": [
                            {
                              "property": {
                                "detectedLanguages": [
                                  {
                                    "languageCode": "en"
                                  }
                                ]
                              },
                              "boundingBox": {
                                "vertices": [
                                  {
                                    "x": 936,
                                    "y": 19
                                  },
                                  {
                                    "x": 970,
                                    "y": 20
                                  },
                                  {
                                    "x": 969,
                                    "y": 35
                                  },
                                  {
                                    "x": 935,
                                    "y": 34
                                  }
                                ]
                              },
                              "symbols": [
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 936,
                                        "y": 19
                                      },
                                      {
                                        "x": 939,
                                        "y": 19
                                      },
                                      {
                                        "x": 938,
                                        "y": 33
                                      },
                                      {
                                        "x": 935,
                                        "y": 33
                                      }
                                    ]
                                  },
                                  "text": "R"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 940,
                                        "y": 19
                                      },
                                      {
                                        "x": 945,
                                        "y": 19
                                      },
                                      {
                                        "x": 944,
                                        "y": 33
                                      },
                                      {
                                        "x": 939,
                                        "y": 33
                                      }
                                    ]
                                  },
                                  "text": "a"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 946,
                                        "y": 20
                                      },
                                      {
                                        "x": 954,
                                        "y": 20
                                      },
                                      {
                                        "x": 953,
                                        "y": 34
                                      },
                                      {
                                        "x": 945,
                                        "y": 34
                                      }
                                    ]
                                  },
                                  "text": "t"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 955,
                                        "y": 20
                                      },
                                      {
                                        "x": 959,
                                        "y": 20
                                      },
                                      {
                                        "x": 958,
                                        "y": 34
                                      },
                                      {
                                        "x": 954,
                                        "y": 34
                                      }
                                    ]
                                  },
                                  "text": "i"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 960,
                                        "y": 20
                                      },
                                      {
                                        "x": 962,
                                        "y": 20
                                      },
                                      {
                                        "x": 961,
                                        "y": 34
                                      },
                                      {
                                        "x": 959,
                                        "y": 34
                                      }
                                    ]
                                  },
                                  "text": "n"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ],
                                    "detectedBreak": {
                                      "type": "EOL_SURE_SPACE"
                                    }
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 963,
                                        "y": 20
                                      },
                                      {
                                        "x": 970,
                                        "y": 20
                                      },
                                      {
                                        "x": 969,
                                        "y": 34
                                      },
                                      {
                                        "x": 962,
                                        "y": 34
                                      }
                                    ]
                                  },
                                  "text": "g"
                                }
                              ]
                            }
                          ]
                        }
                      ],
                      "blockType": "TEXT"
                    },
                    {
                      "property": {
                        "detectedLanguages": [
                          {
                            "languageCode": "en",
                            "confidence": 1
                          }
                        ]
                      },
                      "boundingBox": {
                        "vertices": [
                          {
                            "x": 96,
                            "y": 20
                          },
                          {
                            "x": 131,
                            "y": 21
                          },
                          {
                            "x": 131,
                            "y": 35
                          },
                          {
                            "x": 96,
                            "y": 34
                          }
                        ]
                      },
                      "paragraphs": [
                        {
                          "property": {
                            "detectedLanguages": [
                              {
                                "languageCode": "en",
                                "confidence": 1
                              }
                            ]
                          },
                          "boundingBox": {
                            "vertices": [
                              {
                                "x": 96,
                                "y": 20
                              },
                              {
                                "x": 131,
                                "y": 21
                              },
                              {
                                "x": 131,
                                "y": 35
                              },
                              {
                                "x": 96,
                                "y": 34
                              }
                            ]
                          },
                          "words": [
                            {
                              "property": {
                                "detectedLanguages": [
                                  {
                                    "languageCode": "en"
                                  }
                                ]
                              },
                              "boundingBox": {
                                "vertices": [
                                  {
                                    "x": 96,
                                    "y": 20
                                  },
                                  {
                                    "x": 131,
                                    "y": 21
                                  },
                                  {
                                    "x": 131,
                                    "y": 35
                                  },
                                  {
                                    "x": 96,
                                    "y": 34
                                  }
                                ]
                              },
                              "symbols": [
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 96,
                                        "y": 20
                                      },
                                      {
                                        "x": 103,
                                        "y": 20
                                      },
                                      {
                                        "x": 103,
                                        "y": 33
                                      },
                                      {
                                        "x": 96,
                                        "y": 33
                                      }
                                    ]
                                  },
                                  "text": "P"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 104,
                                        "y": 20
                                      },
                                      {
                                        "x": 106,
                                        "y": 20
                                      },
                                      {
                                        "x": 106,
                                        "y": 33
                                      },
                                      {
                                        "x": 104,
                                        "y": 33
                                      }
                                    ]
                                  },
                                  "text": "l"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 107,
                                        "y": 20
                                      },
                                      {
                                        "x": 112,
                                        "y": 20
                                      },
                                      {
                                        "x": 112,
                                        "y": 33
                                      },
                                      {
                                        "x": 107,
                                        "y": 33
                                      }
                                    ]
                                  },
                                  "text": "a"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 113,
                                        "y": 21
                                      },
                                      {
                                        "x": 117,
                                        "y": 21
                                      },
                                      {
                                        "x": 117,
                                        "y": 34
                                      },
                                      {
                                        "x": 113,
                                        "y": 34
                                      }
                                    ]
                                  },
                                  "text": "y"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 118,
                                        "y": 21
                                      },
                                      {
                                        "x": 123,
                                        "y": 21
                                      },
                                      {
                                        "x": 123,
                                        "y": 34
                                      },
                                      {
                                        "x": 118,
                                        "y": 34
                                      }
                                    ]
                                  },
                                  "text": "e"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ],
                                    "detectedBreak": {
                                      "type": "EOL_SURE_SPACE"
                                    }
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 124,
                                        "y": 21
                                      },
                                      {
                                        "x": 131,
                                        "y": 21
                                      },
                                      {
                                        "x": 131,
                                        "y": 34
                                      },
                                      {
                                        "x": 124,
                                        "y": 34
                                      }
                                    ]
                                  },
                                  "text": "r"
                                }
                              ]
                            }
                          ]
                        }
                      ],
                      "blockType": "TEXT"
                    },
                    {
                      "property": {
                        "detectedLanguages": [
                          {
                            "languageCode": "en",
                            "confidence": 1
                          }
                        ]
                      },
                      "boundingBox": {
                        "vertices": [
                          {
                            "x": 420,
                            "y": 20
                          },
                          {
                            "x": 441,
                            "y": 20
                          },
                          {
                            "x": 441,
                            "y": 32
                          },
                          {
                            "x": 420,
                            "y": 32
                          }
                        ]
                      },
                      "paragraphs": [
                        {
                          "property": {
                            "detectedLanguages": [
                              {
                                "languageCode": "en",
                                "confidence": 1
                              }
                            ]
                          },
                          "boundingBox": {
                            "vertices": [
                              {
                                "x": 420,
                                "y": 20
                              },
                              {
                                "x": 441,
                                "y": 20
                              },
                              {
                                "x": 441,
                                "y": 32
                              },
                              {
                                "x": 420,
                                "y": 32
                              }
                            ]
                          },
                          "words": [
                            {
                              "property": {
                                "detectedLanguages": [
                                  {
                                    "languageCode": "en"
                                  }
                                ]
                              },
                              "boundingBox": {
                                "vertices": [
                                  {
                                    "x": 420,
                                    "y": 20
                                  },
                                  {
                                    "x": 441,
                                    "y": 20
                                  },
                                  {
                                    "x": 441,
                                    "y": 32
                                  },
                                  {
                                    "x": 420,
                                    "y": 32
                                  }
                                ]
                              },
                              "symbols": [
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 420,
                                        "y": 20
                                      },
                                      {
                                        "x": 423,
                                        "y": 20
                                      },
                                      {
                                        "x": 423,
                                        "y": 32
                                      },
                                      {
                                        "x": 420,
                                        "y": 32
                                      }
                                    ]
                                  },
                                  "text": "K"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 424,
                                        "y": 20
                                      },
                                      {
                                        "x": 429,
                                        "y": 20
                                      },
                                      {
                                        "x": 429,
                                        "y": 32
                                      },
                                      {
                                        "x": 424,
                                        "y": 32
                                      }
                                    ]
                                  },
                                  "text": "i"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 430,
                                        "y": 20
                                      },
                                      {
                                        "x": 432,
                                        "y": 20
                                      },
                                      {
                                        "x": 432,
                                        "y": 32
                                      },
                                      {
                                        "x": 430,
                                        "y": 32
                                      }
                                    ]
                                  },
                                  "text": "l"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 433,
                                        "y": 20
                                      },
                                      {
                                        "x": 438,
                                        "y": 20
                                      },
                                      {
                                        "x": 438,
                                        "y": 32
                                      },
                                      {
                                        "x": 433,
                                        "y": 32
                                      }
                                    ]
                                  },
                                  "text": "l"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ],
                                    "detectedBreak": {
                                      "type": "EOL_SURE_SPACE"
                                    }
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 439,
                                        "y": 20
                                      },
                                      {
                                        "x": 441,
                                        "y": 20
                                      },
                                      {
                                        "x": 441,
                                        "y": 32
                                      },
                                      {
                                        "x": 439,
                                        "y": 32
                                      }
                                    ]
                                  },
                                  "text": "s"
                                }
                              ]
                            }
                          ]
                        }
                      ],
                      "blockType": "TEXT"
                    },
                    {
                      "property": {
                        "detectedLanguages": [
                          {
                            "languageCode": "en",
                            "confidence": 1
                          }
                        ]
                      },
                      "boundingBox": {
                        "vertices": [
                          {
                            "x": 650,
                            "y": 20
                          },
                          {
                            "x": 696,
                            "y": 20
                          },
                          {
                            "x": 696,
                            "y": 32
                          },
                          {
                            "x": 650,
                            "y": 32
                          }
                        ]
                      },
                      "paragraphs": [
                        {
                          "property": {
                            "detectedLanguages": [
                              {
                                "languageCode": "en",
                                "confidence": 1
                              }
                            ]
                          },
                          "boundingBox": {
                            "vertices": [
                              {
                                "x": 650,
                                "y": 20
                              },
                              {
                                "x": 696,
                                "y": 20
                              },
                              {
                                "x": 696,
                                "y": 32
                              },
                              {
                                "x": 650,
                                "y": 32
                              }
                            ]
                          },
                          "words": [
                            {
                              "property": {
                                "detectedLanguages": [
                                  {
                                    "languageCode": "en"
                                  }
                                ]
                              },
                              "boundingBox": {
                                "vertices": [
                                  {
                                    "x": 650,
                                    "y": 20
                                  },
                                  {
                                    "x": 696,
                                    "y": 20
                                  },
                                  {
                                    "x": 696,
                                    "y": 32
                                  },
                                  {
                                    "x": 650,
                                    "y": 32
                                  }
                                ]
                              },
                              "symbols": [
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 650,
                                        "y": 20
                                      },
                                      {
                                        "x": 653,
                                        "y": 20
                                      },
                                      {
                                        "x": 653,
                                        "y": 32
                                      },
                                      {
                                        "x": 650,
                                        "y": 32
                                      }
                                    ]
                                  },
                                  "text": "S"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 654,
                                        "y": 20
                                      },
                                      {
                                        "x": 662,
                                        "y": 20
                                      },
                                      {
                                        "x": 662,
                                        "y": 32
                                      },
                                      {
                                        "x": 654,
                                        "y": 32
                                      }
                                    ]
                                  },
                                  "text": "u"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 663,
                                        "y": 20
                                      },
                                      {
                                        "x": 668,
                                        "y": 20
                                      },
                                      {
                                        "x": 668,
                                        "y": 32
                                      },
                                      {
                                        "x": 663,
                                        "y": 32
                                      }
                                    ]
                                  },
                                  "text": "r"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 669,
                                        "y": 20
                                      },
                                      {
                                        "x": 673,
                                        "y": 20
                                      },
                                      {
                                        "x": 673,
                                        "y": 32
                                      },
                                      {
                                        "x": 669,
                                        "y": 32
                                      }
                                    ]
                                  },
                                  "text": "v"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 674,
                                        "y": 20
                                      },
                                      {
                                        "x": 679,
                                        "y": 20
                                      },
                                      {
                                        "x": 679,
                                        "y": 32
                                      },
                                      {
                                        "x": 674,
                                        "y": 32
                                      }
                                    ]
                                  },
                                  "text": "i"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 680,
                                        "y": 20
                                      },
                                      {
                                        "x": 685,
                                        "y": 20
                                      },
                                      {
                                        "x": 685,
                                        "y": 32
                                      },
                                      {
                                        "x": 680,
                                        "y": 32
                                      }
                                    ]
                                  },
                                  "text": "v"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 686,
                                        "y": 20
                                      },
                                      {
                                        "x": 687,
                                        "y": 20
                                      },
                                      {
                                        "x": 687,
                                        "y": 32
                                      },
                                      {
                                        "x": 686,
                                        "y": 32
                                      }
                                    ]
                                  },
                                  "text": "e"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ],
                                    "detectedBreak": {
                                      "type": "EOL_SURE_SPACE"
                                    }
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 688,
                                        "y": 20
                                      },
                                      {
                                        "x": 696,
                                        "y": 20
                                      },
                                      {
                                        "x": 696,
                                        "y": 32
                                      },
                                      {
                                        "x": 688,
                                        "y": 32
                                      }
                                    ]
                                  },
                                  "text": "d"
                                }
                              ]
                            }
                          ]
                        }
                      ],
                      "blockType": "TEXT"
                    },
                    {
                      "property": {
                        "detectedLanguages": [
                          {
                            "languageCode": "en",
                            "confidence": 1
                          }
                        ]
                      },
                      "boundingBox": {
                        "vertices": [
                          {
                            "x": 870,
                            "y": 20
                          },
                          {
                            "x": 904,
                            "y": 20
                          },
                          {
                            "x": 904,
                            "y": 32
                          },
                          {
                            "x": 870,
                            "y": 32
                          }
                        ]
                      },
                      "paragraphs": [
                        {
                          "property": {
                            "detectedLanguages": [
                              {
                                "languageCode": "en",
                                "confidence": 1
                              }
                            ]
                          },
                          "boundingBox": {
                            "vertices": [
                              {
                                "x": 870,
                                "y": 20
                              },
                              {
                                "x": 904,
                                "y": 20
                              },
                              {
                                "x": 904,
                                "y": 32
                              },
                              {
                                "x": 870,
                                "y": 32
                              }
                            ]
                          },
                          "words": [
                            {
                              "property": {
                                "detectedLanguages": [
                                  {
                                    "languageCode": "en"
                                  }
                                ]
                              },
                              "boundingBox": {
                                "vertices": [
                                  {
                                    "x": 870,
                                    "y": 20
                                  },
                                  {
                                    "x": 904,
                                    "y": 20
                                  },
                                  {
                                    "x": 904,
                                    "y": 32
                                  },
                                  {
                                    "x": 870,
                                    "y": 32
                                  }
                                ]
                              },
                              "symbols": [
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 870,
                                        "y": 20
                                      },
                                      {
                                        "x": 876,
                                        "y": 20
                                      },
                                      {
                                        "x": 876,
                                        "y": 32
                                      },
                                      {
                                        "x": 870,
                                        "y": 32
                                      }
                                    ]
                                  },
                                  "text": "R"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 877,
                                        "y": 20
                                      },
                                      {
                                        "x": 881,
                                        "y": 20
                                      },
                                      {
                                        "x": 881,
                                        "y": 32
                                      },
                                      {
                                        "x": 877,
                                        "y": 32
                                      }
                                    ]
                                  },
                                  "text": "e"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 882,
                                        "y": 20
                                      },
                                      {
                                        "x": 888,
                                        "y": 20
                                      },
                                      {
                                        "x": 888,
                                        "y": 32
                                      },
                                      {
                                        "x": 882,
                                        "y": 32
                                      }
                                    ]
                                  },
                                  "text": "v"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 889,
                                        "y": 20
                                      },
                                      {
                                        "x": 893,
                                        "y": 20
                                      },
                                      {
                                        "x": 893,
                                        "y": 32
                                      },
                                      {
                                        "x": 889,
                                        "y": 32
                                      }
                                    ]
                                  },
                                  "text": "i"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 894,
                                        "y": 20
                                      },
                                      {
                                        "x": 898,
                                        "y": 20
                                      },
                                      {
                                        "x": 898,
                                        "y": 32
                                      },
                                      {
                                        "x": 894,
                                        "y": 32
                                      }
                                    ]
                                  },
                                  "text": "v"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ],
                                    "detectedBreak": {
                                      "type": "EOL_SURE_SPACE"
                                    }
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 899,
                                        "y": 20
                                      },
                                      {
                                        "x": 904,
                                        "y": 20
                                      },
                                      {
                                        "x": 904,
                                        "y": 32
                                      },
                                      {
                                        "x": 899,
                                        "y": 32
                                      }
                                    ]
                                  },
                                  "text": "e"
                                }
                              ]
                            }
                          ]
                        }
                      ],
                      "blockType": "TEXT"
                    }
                  ]
                }
              ],
              "text": "Health Restored\nDamage\nRating\nPlayer\nKills\nSurvived\nRevive\n"
            }
          }
        ]
      }
      const data2 = {
        "responses": [
          {
            "textAnnotations": [
              {
                "locale": "en",
                "description": "Rating\n55.5\n39.5\n851\n281\n",
                "boundingPoly": {
                  "vertices": [
                    {
                      "x": 27,
                      "y": 5
                    },
                    {
                      "x": 61,
                      "y": 5
                    },
                    {
                      "x": 61,
                      "y": 227
                    },
                    {
                      "x": 27,
                      "y": 227
                    }
                  ]
                }
              },
              {
                "description": "Rating",
                "boundingPoly": {
                  "vertices": [
                    {
                      "x": 27,
                      "y": 5
                    },
                    {
                      "x": 61,
                      "y": 6
                    },
                    {
                      "x": 60,
                      "y": 21
                    },
                    {
                      "x": 27,
                      "y": 20
                    }
                  ]
                }
              },
              {
                "description": "55.5",
                "boundingPoly": {
                  "vertices": [
                    {
                      "x": 33,
                      "y": 53
                    },
                    {
                      "x": 61,
                      "y": 54
                    },
                    {
                      "x": 61,
                      "y": 70
                    },
                    {
                      "x": 33,
                      "y": 69
                    }
                  ]
                }
              },
              {
                "description": "39.5",
                "boundingPoly": {
                  "vertices": [
                    {
                      "x": 32,
                      "y": 106
                    },
                    {
                      "x": 60,
                      "y": 105
                    },
                    {
                      "x": 61,
                      "y": 121
                    },
                    {
                      "x": 33,
                      "y": 122
                    }
                  ]
                }
              },
              {
                "description": "851",
                "boundingPoly": {
                  "vertices": [
                    {
                      "x": 35,
                      "y": 157
                    },
                    {
                      "x": 57,
                      "y": 157
                    },
                    {
                      "x": 57,
                      "y": 174
                    },
                    {
                      "x": 35,
                      "y": 174
                    }
                  ]
                }
              },
              {
                "description": "281",
                "boundingPoly": {
                  "vertices": [
                    {
                      "x": 35,
                      "y": 213
                    },
                    {
                      "x": 57,
                      "y": 213
                    },
                    {
                      "x": 57,
                      "y": 227
                    },
                    {
                      "x": 35,
                      "y": 227
                    }
                  ]
                }
              }
            ],
            "fullTextAnnotation": {
              "pages": [
                {
                  "property": {
                    "detectedLanguages": [
                      {
                        "languageCode": "en",
                        "confidence": 0.3
                      }
                    ]
                  },
                  "width": 65,
                  "height": 246,
                  "blocks": [
                    {
                      "property": {
                        "detectedLanguages": [
                          {
                            "languageCode": "en",
                            "confidence": 1
                          }
                        ]
                      },
                      "boundingBox": {
                        "vertices": [
                          {
                            "x": 27,
                            "y": 5
                          },
                          {
                            "x": 61,
                            "y": 6
                          },
                          {
                            "x": 60,
                            "y": 21
                          },
                          {
                            "x": 27,
                            "y": 20
                          }
                        ]
                      },
                      "paragraphs": [
                        {
                          "property": {
                            "detectedLanguages": [
                              {
                                "languageCode": "en",
                                "confidence": 1
                              }
                            ]
                          },
                          "boundingBox": {
                            "vertices": [
                              {
                                "x": 27,
                                "y": 5
                              },
                              {
                                "x": 61,
                                "y": 6
                              },
                              {
                                "x": 60,
                                "y": 21
                              },
                              {
                                "x": 27,
                                "y": 20
                              }
                            ]
                          },
                          "words": [
                            {
                              "property": {
                                "detectedLanguages": [
                                  {
                                    "languageCode": "en"
                                  }
                                ]
                              },
                              "boundingBox": {
                                "vertices": [
                                  {
                                    "x": 27,
                                    "y": 5
                                  },
                                  {
                                    "x": 61,
                                    "y": 6
                                  },
                                  {
                                    "x": 60,
                                    "y": 21
                                  },
                                  {
                                    "x": 27,
                                    "y": 20
                                  }
                                ]
                              },
                              "symbols": [
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 27,
                                        "y": 5
                                      },
                                      {
                                        "x": 31,
                                        "y": 5
                                      },
                                      {
                                        "x": 31,
                                        "y": 19
                                      },
                                      {
                                        "x": 27,
                                        "y": 19
                                      }
                                    ]
                                  },
                                  "text": "R"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 32,
                                        "y": 5
                                      },
                                      {
                                        "x": 37,
                                        "y": 5
                                      },
                                      {
                                        "x": 37,
                                        "y": 19
                                      },
                                      {
                                        "x": 32,
                                        "y": 19
                                      }
                                    ]
                                  },
                                  "text": "a"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 38,
                                        "y": 6
                                      },
                                      {
                                        "x": 43,
                                        "y": 6
                                      },
                                      {
                                        "x": 43,
                                        "y": 20
                                      },
                                      {
                                        "x": 38,
                                        "y": 20
                                      }
                                    ]
                                  },
                                  "text": "t"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 44,
                                        "y": 6
                                      },
                                      {
                                        "x": 50,
                                        "y": 6
                                      },
                                      {
                                        "x": 50,
                                        "y": 20
                                      },
                                      {
                                        "x": 44,
                                        "y": 20
                                      }
                                    ]
                                  },
                                  "text": "i"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 51,
                                        "y": 6
                                      },
                                      {
                                        "x": 56,
                                        "y": 6
                                      },
                                      {
                                        "x": 56,
                                        "y": 20
                                      },
                                      {
                                        "x": 51,
                                        "y": 20
                                      }
                                    ]
                                  },
                                  "text": "n"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ],
                                    "detectedBreak": {
                                      "type": "EOL_SURE_SPACE"
                                    }
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 57,
                                        "y": 6
                                      },
                                      {
                                        "x": 61,
                                        "y": 6
                                      },
                                      {
                                        "x": 61,
                                        "y": 20
                                      },
                                      {
                                        "x": 57,
                                        "y": 20
                                      }
                                    ]
                                  },
                                  "text": "g"
                                }
                              ]
                            }
                          ]
                        }
                      ],
                      "blockType": "TEXT"
                    },
                    {
                      "boundingBox": {
                        "vertices": [
                          {
                            "x": 33,
                            "y": 53
                          },
                          {
                            "x": 61,
                            "y": 54
                          },
                          {
                            "x": 61,
                            "y": 70
                          },
                          {
                            "x": 33,
                            "y": 69
                          }
                        ]
                      },
                      "paragraphs": [
                        {
                          "boundingBox": {
                            "vertices": [
                              {
                                "x": 33,
                                "y": 53
                              },
                              {
                                "x": 61,
                                "y": 54
                              },
                              {
                                "x": 61,
                                "y": 70
                              },
                              {
                                "x": 33,
                                "y": 69
                              }
                            ]
                          },
                          "words": [
                            {
                              "boundingBox": {
                                "vertices": [
                                  {
                                    "x": 33,
                                    "y": 53
                                  },
                                  {
                                    "x": 61,
                                    "y": 54
                                  },
                                  {
                                    "x": 61,
                                    "y": 70
                                  },
                                  {
                                    "x": 33,
                                    "y": 69
                                  }
                                ]
                              },
                              "symbols": [
                                {
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 33,
                                        "y": 53
                                      },
                                      {
                                        "x": 41,
                                        "y": 53
                                      },
                                      {
                                        "x": 41,
                                        "y": 68
                                      },
                                      {
                                        "x": 33,
                                        "y": 68
                                      }
                                    ]
                                  },
                                  "text": "5"
                                },
                                {
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 42,
                                        "y": 53
                                      },
                                      {
                                        "x": 48,
                                        "y": 53
                                      },
                                      {
                                        "x": 48,
                                        "y": 68
                                      },
                                      {
                                        "x": 42,
                                        "y": 68
                                      }
                                    ]
                                  },
                                  "text": "5"
                                },
                                {
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 49,
                                        "y": 54
                                      },
                                      {
                                        "x": 56,
                                        "y": 54
                                      },
                                      {
                                        "x": 56,
                                        "y": 69
                                      },
                                      {
                                        "x": 49,
                                        "y": 69
                                      }
                                    ]
                                  },
                                  "text": "."
                                },
                                {
                                  "property": {
                                    "detectedBreak": {
                                      "type": "EOL_SURE_SPACE"
                                    }
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 57,
                                        "y": 54
                                      },
                                      {
                                        "x": 61,
                                        "y": 54
                                      },
                                      {
                                        "x": 61,
                                        "y": 69
                                      },
                                      {
                                        "x": 57,
                                        "y": 69
                                      }
                                    ]
                                  },
                                  "text": "5"
                                }
                              ]
                            }
                          ]
                        }
                      ],
                      "blockType": "TEXT"
                    },
                    {
                      "boundingBox": {
                        "vertices": [
                          {
                            "x": 32,
                            "y": 106
                          },
                          {
                            "x": 60,
                            "y": 105
                          },
                          {
                            "x": 61,
                            "y": 121
                          },
                          {
                            "x": 33,
                            "y": 122
                          }
                        ]
                      },
                      "paragraphs": [
                        {
                          "boundingBox": {
                            "vertices": [
                              {
                                "x": 32,
                                "y": 106
                              },
                              {
                                "x": 60,
                                "y": 105
                              },
                              {
                                "x": 61,
                                "y": 121
                              },
                              {
                                "x": 33,
                                "y": 122
                              }
                            ]
                          },
                          "words": [
                            {
                              "boundingBox": {
                                "vertices": [
                                  {
                                    "x": 32,
                                    "y": 106
                                  },
                                  {
                                    "x": 60,
                                    "y": 105
                                  },
                                  {
                                    "x": 61,
                                    "y": 121
                                  },
                                  {
                                    "x": 33,
                                    "y": 122
                                  }
                                ]
                              },
                              "symbols": [
                                {
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 32,
                                        "y": 107
                                      },
                                      {
                                        "x": 42,
                                        "y": 107
                                      },
                                      {
                                        "x": 42,
                                        "y": 122
                                      },
                                      {
                                        "x": 32,
                                        "y": 122
                                      }
                                    ]
                                  },
                                  "text": "3"
                                },
                                {
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 43,
                                        "y": 106
                                      },
                                      {
                                        "x": 50,
                                        "y": 106
                                      },
                                      {
                                        "x": 50,
                                        "y": 121
                                      },
                                      {
                                        "x": 43,
                                        "y": 121
                                      }
                                    ]
                                  },
                                  "text": "9"
                                },
                                {
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 51,
                                        "y": 106
                                      },
                                      {
                                        "x": 54,
                                        "y": 106
                                      },
                                      {
                                        "x": 54,
                                        "y": 121
                                      },
                                      {
                                        "x": 51,
                                        "y": 121
                                      }
                                    ]
                                  },
                                  "text": "."
                                },
                                {
                                  "property": {
                                    "detectedBreak": {
                                      "type": "EOL_SURE_SPACE"
                                    }
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 55,
                                        "y": 106
                                      },
                                      {
                                        "x": 60,
                                        "y": 106
                                      },
                                      {
                                        "x": 60,
                                        "y": 121
                                      },
                                      {
                                        "x": 55,
                                        "y": 121
                                      }
                                    ]
                                  },
                                  "text": "5"
                                }
                              ]
                            }
                          ]
                        }
                      ],
                      "blockType": "TEXT"
                    },
                    {
                      "boundingBox": {
                        "vertices": [
                          {
                            "x": 35,
                            "y": 157
                          },
                          {
                            "x": 57,
                            "y": 157
                          },
                          {
                            "x": 57,
                            "y": 174
                          },
                          {
                            "x": 35,
                            "y": 174
                          }
                        ]
                      },
                      "paragraphs": [
                        {
                          "boundingBox": {
                            "vertices": [
                              {
                                "x": 35,
                                "y": 157
                              },
                              {
                                "x": 57,
                                "y": 157
                              },
                              {
                                "x": 57,
                                "y": 174
                              },
                              {
                                "x": 35,
                                "y": 174
                              }
                            ]
                          },
                          "words": [
                            {
                              "boundingBox": {
                                "vertices": [
                                  {
                                    "x": 35,
                                    "y": 157
                                  },
                                  {
                                    "x": 57,
                                    "y": 157
                                  },
                                  {
                                    "x": 57,
                                    "y": 174
                                  },
                                  {
                                    "x": 35,
                                    "y": 174
                                  }
                                ]
                              },
                              "symbols": [
                                {
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 35,
                                        "y": 157
                                      },
                                      {
                                        "x": 42,
                                        "y": 157
                                      },
                                      {
                                        "x": 42,
                                        "y": 174
                                      },
                                      {
                                        "x": 35,
                                        "y": 174
                                      }
                                    ]
                                  },
                                  "text": "8"
                                },
                                {
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 44,
                                        "y": 157
                                      },
                                      {
                                        "x": 50,
                                        "y": 157
                                      },
                                      {
                                        "x": 50,
                                        "y": 174
                                      },
                                      {
                                        "x": 44,
                                        "y": 174
                                      }
                                    ]
                                  },
                                  "text": "5"
                                },
                                {
                                  "property": {
                                    "detectedBreak": {
                                      "type": "EOL_SURE_SPACE"
                                    }
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 53,
                                        "y": 157
                                      },
                                      {
                                        "x": 57,
                                        "y": 157
                                      },
                                      {
                                        "x": 57,
                                        "y": 174
                                      },
                                      {
                                        "x": 53,
                                        "y": 174
                                      }
                                    ]
                                  },
                                  "text": "1"
                                }
                              ]
                            }
                          ]
                        }
                      ],
                      "blockType": "TEXT"
                    },
                    {
                      "boundingBox": {
                        "vertices": [
                          {
                            "x": 35,
                            "y": 213
                          },
                          {
                            "x": 57,
                            "y": 213
                          },
                          {
                            "x": 57,
                            "y": 227
                          },
                          {
                            "x": 35,
                            "y": 227
                          }
                        ]
                      },
                      "paragraphs": [
                        {
                          "boundingBox": {
                            "vertices": [
                              {
                                "x": 35,
                                "y": 213
                              },
                              {
                                "x": 57,
                                "y": 213
                              },
                              {
                                "x": 57,
                                "y": 227
                              },
                              {
                                "x": 35,
                                "y": 227
                              }
                            ]
                          },
                          "words": [
                            {
                              "boundingBox": {
                                "vertices": [
                                  {
                                    "x": 35,
                                    "y": 213
                                  },
                                  {
                                    "x": 57,
                                    "y": 213
                                  },
                                  {
                                    "x": 57,
                                    "y": 227
                                  },
                                  {
                                    "x": 35,
                                    "y": 227
                                  }
                                ]
                              },
                              "symbols": [
                                {
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 35,
                                        "y": 213
                                      },
                                      {
                                        "x": 41,
                                        "y": 213
                                      },
                                      {
                                        "x": 41,
                                        "y": 227
                                      },
                                      {
                                        "x": 35,
                                        "y": 227
                                      }
                                    ]
                                  },
                                  "text": "2"
                                },
                                {
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 44,
                                        "y": 213
                                      },
                                      {
                                        "x": 50,
                                        "y": 213
                                      },
                                      {
                                        "x": 50,
                                        "y": 227
                                      },
                                      {
                                        "x": 44,
                                        "y": 227
                                      }
                                    ]
                                  },
                                  "text": "8"
                                },
                                {
                                  "property": {
                                    "detectedBreak": {
                                      "type": "EOL_SURE_SPACE"
                                    }
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 53,
                                        "y": 213
                                      },
                                      {
                                        "x": 57,
                                        "y": 213
                                      },
                                      {
                                        "x": 57,
                                        "y": 227
                                      },
                                      {
                                        "x": 53,
                                        "y": 227
                                      }
                                    ]
                                  },
                                  "text": "1"
                                }
                              ]
                            }
                          ]
                        }
                      ],
                      "blockType": "TEXT"
                    }
                  ]
                }
              ],
              "text": "Rating\n55.5\n39.5\n851\n281\n"
            }
          }
        ]
      }
      const kills = {
        "responses": [
          {}
        ]
      }
      const damage = {
        "responses": [
          {
            "textAnnotations": [
              {
                "locale": "und",
                "description": "52\n",
                "boundingPoly": {
                  "vertices": [
                    {
                      "x": 28,
                      "y": 5
                    },
                    {
                      "x": 40,
                      "y": 5
                    },
                    {
                      "x": 40,
                      "y": 15
                    },
                    {
                      "x": 28,
                      "y": 15
                    }
                  ]
                }
              },
              {
                "description": "52",
                "boundingPoly": {
                  "vertices": [
                    {
                      "x": 28,
                      "y": 5
                    },
                    {
                      "x": 40,
                      "y": 5
                    },
                    {
                      "x": 40,
                      "y": 15
                    },
                    {
                      "x": 28,
                      "y": 15
                    }
                  ]
                }
              }
            ],
            "fullTextAnnotation": {
              "pages": [
                {
                  "width": 58,
                  "height": 23,
                  "blocks": [
                    {
                      "boundingBox": {
                        "vertices": [
                          {
                            "x": 28,
                            "y": 5
                          },
                          {
                            "x": 40,
                            "y": 5
                          },
                          {
                            "x": 40,
                            "y": 15
                          },
                          {
                            "x": 28,
                            "y": 15
                          }
                        ]
                      },
                      "paragraphs": [
                        {
                          "boundingBox": {
                            "vertices": [
                              {
                                "x": 28,
                                "y": 5
                              },
                              {
                                "x": 40,
                                "y": 5
                              },
                              {
                                "x": 40,
                                "y": 15
                              },
                              {
                                "x": 28,
                                "y": 15
                              }
                            ]
                          },
                          "words": [
                            {
                              "boundingBox": {
                                "vertices": [
                                  {
                                    "x": 28,
                                    "y": 5
                                  },
                                  {
                                    "x": 40,
                                    "y": 5
                                  },
                                  {
                                    "x": 40,
                                    "y": 15
                                  },
                                  {
                                    "x": 28,
                                    "y": 15
                                  }
                                ]
                              },
                              "symbols": [
                                {
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 28,
                                        "y": 5
                                      },
                                      {
                                        "x": 33,
                                        "y": 5
                                      },
                                      {
                                        "x": 33,
                                        "y": 15
                                      },
                                      {
                                        "x": 28,
                                        "y": 15
                                      }
                                    ]
                                  },
                                  "text": "5"
                                },
                                {
                                  "property": {
                                    "detectedBreak": {
                                      "type": "EOL_SURE_SPACE"
                                    }
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 35,
                                        "y": 5
                                      },
                                      {
                                        "x": 40,
                                        "y": 5
                                      },
                                      {
                                        "x": 40,
                                        "y": 15
                                      },
                                      {
                                        "x": 35,
                                        "y": 15
                                      }
                                    ]
                                  },
                                  "text": "2"
                                }
                              ]
                            }
                          ]
                        }
                      ],
                      "blockType": "TEXT"
                    }
                  ]
                }
              ],
              "text": "52\n"
            }
          }
        ]
      }
      const survived = {
        "responses": [
          {
            "textAnnotations": [
              {
                "locale": "und",
                "description": "Jm\n",
                "boundingPoly": {
                  "vertices": [
                    {
                      "x": 27,
                      "y": 5
                    },
                    {
                      "x": 43,
                      "y": 5
                    },
                    {
                      "x": 43,
                      "y": 15
                    },
                    {
                      "x": 27,
                      "y": 15
                    }
                  ]
                }
              },
              {
                "description": "Jm",
                "boundingPoly": {
                  "vertices": [
                    {
                      "x": 27,
                      "y": 5
                    },
                    {
                      "x": 43,
                      "y": 5
                    },
                    {
                      "x": 43,
                      "y": 15
                    },
                    {
                      "x": 27,
                      "y": 15
                    }
                  ]
                }
              }
            ],
            "fullTextAnnotation": {
              "pages": [
                {
                  "width": 58,
                  "height": 23,
                  "blocks": [
                    {
                      "boundingBox": {
                        "vertices": [
                          {
                            "x": 27,
                            "y": 5
                          },
                          {
                            "x": 43,
                            "y": 5
                          },
                          {
                            "x": 43,
                            "y": 15
                          },
                          {
                            "x": 27,
                            "y": 15
                          }
                        ]
                      },
                      "paragraphs": [
                        {
                          "boundingBox": {
                            "vertices": [
                              {
                                "x": 27,
                                "y": 5
                              },
                              {
                                "x": 43,
                                "y": 5
                              },
                              {
                                "x": 43,
                                "y": 15
                              },
                              {
                                "x": 27,
                                "y": 15
                              }
                            ]
                          },
                          "words": [
                            {
                              "boundingBox": {
                                "vertices": [
                                  {
                                    "x": 27,
                                    "y": 5
                                  },
                                  {
                                    "x": 43,
                                    "y": 5
                                  },
                                  {
                                    "x": 43,
                                    "y": 15
                                  },
                                  {
                                    "x": 27,
                                    "y": 15
                                  }
                                ]
                              },
                              "symbols": [
                                {
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 27,
                                        "y": 5
                                      },
                                      {
                                        "x": 28,
                                        "y": 5
                                      },
                                      {
                                        "x": 28,
                                        "y": 15
                                      },
                                      {
                                        "x": 27,
                                        "y": 15
                                      }
                                    ]
                                  },
                                  "text": "J"
                                },
                                {
                                  "property": {
                                    "detectedBreak": {
                                      "type": "EOL_SURE_SPACE"
                                    }
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 31,
                                        "y": 5
                                      },
                                      {
                                        "x": 43,
                                        "y": 5
                                      },
                                      {
                                        "x": 43,
                                        "y": 15
                                      },
                                      {
                                        "x": 31,
                                        "y": 15
                                      }
                                    ]
                                  },
                                  "text": "m"
                                }
                              ]
                            }
                          ]
                        }
                      ],
                      "blockType": "TEXT"
                    }
                  ]
                }
              ],
              "text": "Jm\n"
            }
          }
        ]
      }
      const rating = {
        "responses": [
          {
            "textAnnotations": [
              {
                "locale": "und",
                "description": "16.8\n",
                "boundingPoly": {
                  "vertices": [
                    {
                      "x": 31,
                      "y": 5
                    },
                    {
                      "x": 48,
                      "y": 5
                    },
                    {
                      "x": 48,
                      "y": 15
                    },
                    {
                      "x": 31,
                      "y": 15
                    }
                  ]
                }
              },
              {
                "description": "16.8",
                "boundingPoly": {
                  "vertices": [
                    {
                      "x": 31,
                      "y": 5
                    },
                    {
                      "x": 48,
                      "y": 5
                    },
                    {
                      "x": 48,
                      "y": 15
                    },
                    {
                      "x": 31,
                      "y": 15
                    }
                  ]
                }
              }
            ],
            "fullTextAnnotation": {
              "pages": [
                {
                  "width": 58,
                  "height": 23,
                  "blocks": [
                    {
                      "boundingBox": {
                        "vertices": [
                          {
                            "x": 31,
                            "y": 5
                          },
                          {
                            "x": 48,
                            "y": 5
                          },
                          {
                            "x": 48,
                            "y": 15
                          },
                          {
                            "x": 31,
                            "y": 15
                          }
                        ]
                      },
                      "paragraphs": [
                        {
                          "boundingBox": {
                            "vertices": [
                              {
                                "x": 31,
                                "y": 5
                              },
                              {
                                "x": 48,
                                "y": 5
                              },
                              {
                                "x": 48,
                                "y": 15
                              },
                              {
                                "x": 31,
                                "y": 15
                              }
                            ]
                          },
                          "words": [
                            {
                              "boundingBox": {
                                "vertices": [
                                  {
                                    "x": 31,
                                    "y": 5
                                  },
                                  {
                                    "x": 48,
                                    "y": 5
                                  },
                                  {
                                    "x": 48,
                                    "y": 15
                                  },
                                  {
                                    "x": 31,
                                    "y": 15
                                  }
                                ]
                              },
                              "symbols": [
                                {
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 31,
                                        "y": 5
                                      },
                                      {
                                        "x": 32,
                                        "y": 5
                                      },
                                      {
                                        "x": 32,
                                        "y": 15
                                      },
                                      {
                                        "x": 31,
                                        "y": 15
                                      }
                                    ]
                                  },
                                  "text": "1"
                                },
                                {
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 34,
                                        "y": 5
                                      },
                                      {
                                        "x": 39,
                                        "y": 5
                                      },
                                      {
                                        "x": 39,
                                        "y": 15
                                      },
                                      {
                                        "x": 34,
                                        "y": 15
                                      }
                                    ]
                                  },
                                  "text": "6"
                                },
                                {
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 41,
                                        "y": 15
                                      },
                                      {
                                        "x": 42,
                                        "y": 15
                                      },
                                      {
                                        "x": 42,
                                        "y": 15
                                      },
                                      {
                                        "x": 41,
                                        "y": 15
                                      }
                                    ]
                                  },
                                  "text": "."
                                },
                                {
                                  "property": {
                                    "detectedBreak": {
                                      "type": "EOL_SURE_SPACE"
                                    }
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 44,
                                        "y": 5
                                      },
                                      {
                                        "x": 48,
                                        "y": 5
                                      },
                                      {
                                        "x": 48,
                                        "y": 15
                                      },
                                      {
                                        "x": 44,
                                        "y": 15
                                      }
                                    ]
                                  },
                                  "text": "8"
                                }
                              ]
                            }
                          ]
                        }
                      ],
                      "blockType": "TEXT"
                    }
                  ]
                }
              ],
              "text": "16.8\n"
            }
          }
        ]
      }
      const mode = {
        "responses": [
          {
            "textAnnotations": [
              {
                "locale": "en",
                "description": "Classic (TPP) Squad-Erange!\n",
                "boundingPoly": {
                  "vertices": [
                    {
                      "x": 36,
                      "y": 6
                    },
                    {
                      "x": 228,
                      "y": 6
                    },
                    {
                      "x": 228,
                      "y": 25
                    },
                    {
                      "x": 36,
                      "y": 25
                    }
                  ]
                }
              },
              {
                "description": "Classic",
                "boundingPoly": {
                  "vertices": [
                    {
                      "x": 36,
                      "y": 6
                    },
                    {
                      "x": 81,
                      "y": 6
                    },
                    {
                      "x": 81,
                      "y": 22
                    },
                    {
                      "x": 36,
                      "y": 22
                    }
                  ]
                }
              },
              {
                "description": "(TPP)",
                "boundingPoly": {
                  "vertices": [
                    {
                      "x": 88,
                      "y": 10
                    },
                    {
                      "x": 117,
                      "y": 10
                    },
                    {
                      "x": 117,
                      "y": 23
                    },
                    {
                      "x": 88,
                      "y": 23
                    }
                  ]
                }
              },
              {
                "description": "Squad-Erange!",
                "boundingPoly": {
                  "vertices": [
                    {
                      "x": 131,
                      "y": 9
                    },
                    {
                      "x": 228,
                      "y": 9
                    },
                    {
                      "x": 228,
                      "y": 25
                    },
                    {
                      "x": 131,
                      "y": 25
                    }
                  ]
                }
              }
            ],
            "fullTextAnnotation": {
              "pages": [
                {
                  "property": {
                    "detectedLanguages": [
                      {
                        "languageCode": "en",
                        "confidence": 1
                      }
                    ]
                  },
                  "width": 240,
                  "height": 34,
                  "blocks": [
                    {
                      "property": {
                        "detectedLanguages": [
                          {
                            "languageCode": "en",
                            "confidence": 1
                          }
                        ]
                      },
                      "boundingBox": {
                        "vertices": [
                          {
                            "x": 36,
                            "y": 6
                          },
                          {
                            "x": 228,
                            "y": 7
                          },
                          {
                            "x": 228,
                            "y": 25
                          },
                          {
                            "x": 36,
                            "y": 24
                          }
                        ]
                      },
                      "paragraphs": [
                        {
                          "property": {
                            "detectedLanguages": [
                              {
                                "languageCode": "en",
                                "confidence": 1
                              }
                            ]
                          },
                          "boundingBox": {
                            "vertices": [
                              {
                                "x": 36,
                                "y": 6
                              },
                              {
                                "x": 228,
                                "y": 7
                              },
                              {
                                "x": 228,
                                "y": 25
                              },
                              {
                                "x": 36,
                                "y": 24
                              }
                            ]
                          },
                          "words": [
                            {
                              "property": {
                                "detectedLanguages": [
                                  {
                                    "languageCode": "en"
                                  }
                                ]
                              },
                              "boundingBox": {
                                "vertices": [
                                  {
                                    "x": 36,
                                    "y": 6
                                  },
                                  {
                                    "x": 81,
                                    "y": 6
                                  },
                                  {
                                    "x": 81,
                                    "y": 22
                                  },
                                  {
                                    "x": 36,
                                    "y": 22
                                  }
                                ]
                              },
                              "symbols": [
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 36,
                                        "y": 6
                                      },
                                      {
                                        "x": 50,
                                        "y": 6
                                      },
                                      {
                                        "x": 50,
                                        "y": 22
                                      },
                                      {
                                        "x": 36,
                                        "y": 22
                                      }
                                    ]
                                  },
                                  "text": "C"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 51,
                                        "y": 6
                                      },
                                      {
                                        "x": 54,
                                        "y": 6
                                      },
                                      {
                                        "x": 54,
                                        "y": 22
                                      },
                                      {
                                        "x": 51,
                                        "y": 22
                                      }
                                    ]
                                  },
                                  "text": "l"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 55,
                                        "y": 6
                                      },
                                      {
                                        "x": 57,
                                        "y": 6
                                      },
                                      {
                                        "x": 57,
                                        "y": 22
                                      },
                                      {
                                        "x": 55,
                                        "y": 22
                                      }
                                    ]
                                  },
                                  "text": "a"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 58,
                                        "y": 6
                                      },
                                      {
                                        "x": 64,
                                        "y": 6
                                      },
                                      {
                                        "x": 64,
                                        "y": 22
                                      },
                                      {
                                        "x": 58,
                                        "y": 22
                                      }
                                    ]
                                  },
                                  "text": "s"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 65,
                                        "y": 6
                                      },
                                      {
                                        "x": 71,
                                        "y": 6
                                      },
                                      {
                                        "x": 71,
                                        "y": 22
                                      },
                                      {
                                        "x": 65,
                                        "y": 22
                                      }
                                    ]
                                  },
                                  "text": "s"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 72,
                                        "y": 6
                                      },
                                      {
                                        "x": 78,
                                        "y": 6
                                      },
                                      {
                                        "x": 78,
                                        "y": 22
                                      },
                                      {
                                        "x": 72,
                                        "y": 22
                                      }
                                    ]
                                  },
                                  "text": "i"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ],
                                    "detectedBreak": {
                                      "type": "SPACE"
                                    }
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 79,
                                        "y": 6
                                      },
                                      {
                                        "x": 81,
                                        "y": 6
                                      },
                                      {
                                        "x": 81,
                                        "y": 22
                                      },
                                      {
                                        "x": 79,
                                        "y": 22
                                      }
                                    ]
                                  },
                                  "text": "c"
                                }
                              ]
                            },
                            {
                              "property": {
                                "detectedLanguages": [
                                  {
                                    "languageCode": "en"
                                  }
                                ]
                              },
                              "boundingBox": {
                                "vertices": [
                                  {
                                    "x": 88,
                                    "y": 10
                                  },
                                  {
                                    "x": 117,
                                    "y": 10
                                  },
                                  {
                                    "x": 117,
                                    "y": 23
                                  },
                                  {
                                    "x": 88,
                                    "y": 23
                                  }
                                ]
                              },
                              "symbols": [
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 88,
                                        "y": 10
                                      },
                                      {
                                        "x": 90,
                                        "y": 10
                                      },
                                      {
                                        "x": 90,
                                        "y": 23
                                      },
                                      {
                                        "x": 88,
                                        "y": 23
                                      }
                                    ]
                                  },
                                  "text": "("
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 93,
                                        "y": 10
                                      },
                                      {
                                        "x": 97,
                                        "y": 10
                                      },
                                      {
                                        "x": 97,
                                        "y": 21
                                      },
                                      {
                                        "x": 93,
                                        "y": 21
                                      }
                                    ]
                                  },
                                  "text": "T"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 100,
                                        "y": 10
                                      },
                                      {
                                        "x": 105,
                                        "y": 10
                                      },
                                      {
                                        "x": 105,
                                        "y": 21
                                      },
                                      {
                                        "x": 100,
                                        "y": 21
                                      }
                                    ]
                                  },
                                  "text": "P"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 107,
                                        "y": 10
                                      },
                                      {
                                        "x": 112,
                                        "y": 10
                                      },
                                      {
                                        "x": 112,
                                        "y": 22
                                      },
                                      {
                                        "x": 107,
                                        "y": 22
                                      }
                                    ]
                                  },
                                  "text": "P"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ],
                                    "detectedBreak": {
                                      "type": "SPACE"
                                    }
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 115,
                                        "y": 10
                                      },
                                      {
                                        "x": 117,
                                        "y": 10
                                      },
                                      {
                                        "x": 117,
                                        "y": 23
                                      },
                                      {
                                        "x": 115,
                                        "y": 23
                                      }
                                    ]
                                  },
                                  "text": ")"
                                }
                              ]
                            },
                            {
                              "property": {
                                "detectedLanguages": [
                                  {
                                    "languageCode": "en"
                                  }
                                ]
                              },
                              "boundingBox": {
                                "vertices": [
                                  {
                                    "x": 131,
                                    "y": 9
                                  },
                                  {
                                    "x": 228,
                                    "y": 9
                                  },
                                  {
                                    "x": 228,
                                    "y": 25
                                  },
                                  {
                                    "x": 131,
                                    "y": 25
                                  }
                                ]
                              },
                              "symbols": [
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 131,
                                        "y": 9
                                      },
                                      {
                                        "x": 145,
                                        "y": 9
                                      },
                                      {
                                        "x": 145,
                                        "y": 24
                                      },
                                      {
                                        "x": 131,
                                        "y": 24
                                      }
                                    ]
                                  },
                                  "text": "S"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 146,
                                        "y": 9
                                      },
                                      {
                                        "x": 152,
                                        "y": 9
                                      },
                                      {
                                        "x": 152,
                                        "y": 24
                                      },
                                      {
                                        "x": 146,
                                        "y": 24
                                      }
                                    ]
                                  },
                                  "text": "q"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 153,
                                        "y": 10
                                      },
                                      {
                                        "x": 159,
                                        "y": 10
                                      },
                                      {
                                        "x": 159,
                                        "y": 25
                                      },
                                      {
                                        "x": 153,
                                        "y": 25
                                      }
                                    ]
                                  },
                                  "text": "u"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 160,
                                        "y": 10
                                      },
                                      {
                                        "x": 166,
                                        "y": 10
                                      },
                                      {
                                        "x": 166,
                                        "y": 25
                                      },
                                      {
                                        "x": 160,
                                        "y": 25
                                      }
                                    ]
                                  },
                                  "text": "a"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 167,
                                        "y": 10
                                      },
                                      {
                                        "x": 173,
                                        "y": 10
                                      },
                                      {
                                        "x": 173,
                                        "y": 25
                                      },
                                      {
                                        "x": 167,
                                        "y": 25
                                      }
                                    ]
                                  },
                                  "text": "d"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 174,
                                        "y": 10
                                      },
                                      {
                                        "x": 183,
                                        "y": 10
                                      },
                                      {
                                        "x": 183,
                                        "y": 25
                                      },
                                      {
                                        "x": 174,
                                        "y": 25
                                      }
                                    ]
                                  },
                                  "text": "-"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 184,
                                        "y": 10
                                      },
                                      {
                                        "x": 194,
                                        "y": 10
                                      },
                                      {
                                        "x": 194,
                                        "y": 25
                                      },
                                      {
                                        "x": 184,
                                        "y": 25
                                      }
                                    ]
                                  },
                                  "text": "E"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 195,
                                        "y": 10
                                      },
                                      {
                                        "x": 197,
                                        "y": 10
                                      },
                                      {
                                        "x": 197,
                                        "y": 25
                                      },
                                      {
                                        "x": 195,
                                        "y": 25
                                      }
                                    ]
                                  },
                                  "text": "r"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 198,
                                        "y": 10
                                      },
                                      {
                                        "x": 204,
                                        "y": 10
                                      },
                                      {
                                        "x": 204,
                                        "y": 25
                                      },
                                      {
                                        "x": 198,
                                        "y": 25
                                      }
                                    ]
                                  },
                                  "text": "a"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 205,
                                        "y": 10
                                      },
                                      {
                                        "x": 211,
                                        "y": 10
                                      },
                                      {
                                        "x": 211,
                                        "y": 25
                                      },
                                      {
                                        "x": 205,
                                        "y": 25
                                      }
                                    ]
                                  },
                                  "text": "n"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 212,
                                        "y": 10
                                      },
                                      {
                                        "x": 218,
                                        "y": 10
                                      },
                                      {
                                        "x": 218,
                                        "y": 25
                                      },
                                      {
                                        "x": 212,
                                        "y": 25
                                      }
                                    ]
                                  },
                                  "text": "g"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 219,
                                        "y": 10
                                      },
                                      {
                                        "x": 222,
                                        "y": 10
                                      },
                                      {
                                        "x": 222,
                                        "y": 25
                                      },
                                      {
                                        "x": 219,
                                        "y": 25
                                      }
                                    ]
                                  },
                                  "text": "e"
                                },
                                {
                                  "property": {
                                    "detectedLanguages": [
                                      {
                                        "languageCode": "en"
                                      }
                                    ],
                                    "detectedBreak": {
                                      "type": "EOL_SURE_SPACE"
                                    }
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 223,
                                        "y": 10
                                      },
                                      {
                                        "x": 228,
                                        "y": 10
                                      },
                                      {
                                        "x": 228,
                                        "y": 25
                                      },
                                      {
                                        "x": 223,
                                        "y": 25
                                      }
                                    ]
                                  },
                                  "text": "!"
                                }
                              ]
                            }
                          ]
                        }
                      ],
                      "blockType": "TEXT"
                    }
                  ]
                }
              ],
              "text": "Classic (TPP) Squad-Erange!\n"
            }
          }
        ]
      }
      

      const value = (data.responses[0].textAnnotations || [0, 0])
      const value2 = (data2.responses[0].textAnnotations || [0, 0])
      const value3 = (kills.responses[0].textAnnotations || [0, 0])
      const value4 = (damage.responses[0].textAnnotations || [0, 0])
      const value5 = (survived.responses[0].textAnnotations || [0, 0])
      const value6 = (rating.responses[0].textAnnotations || [0, 0])
      const value7 = (mode.responses[0].textAnnotations || [0, 0])
      resolve({
        analysedData: value,
        analysedData2: value2,
        analysedData3: value3,
        analysedData4: value4,
        analysedData5: value5,
        analysedData6: value6,
        analysedData7: value7,
      })
    })
  },
  extractHeaderPos: (apiRes) => {
    return new Promise(resolve => {
      apiRes.forEach((item, key) => {
        //ignores the first iteration
        if (key == 0)
          return;
        // console.log(item, key)
        //only save/push those fields that matches Kills, Damage, Survived, Survival, Survival Time
        if (headerValues.indexOf(item.description) > -1) {
          const data = {
            elementVal: item.description,
            position: {
              topLeft: { x: item.boundingPoly.vertices[0].x - 15, y: item.boundingPoly.vertices[0].y - 3 },
              bottomRight: { x: item.boundingPoly.vertices[2].x + 15, y: item.boundingPoly.vertices[2].y + 3 }
            }
          }
          score.tableHeader.push(data)
        }
      })
      resolve()
    })
  },
  //extractScore from API response
  extractScorePos: (apiRes) => {
    return new Promise(resolve => {
      apiRes.forEach((item, key) => {
        //ignores the first iteration
        if (key == 0)
          return;
        // console.log(item, key)
        if (item.description != ('Rating' || "MVP")) {
          const data = {
            elementVal: item.description,
            position: {
              topLeft: { x: item.boundingPoly.vertices[0].x - 15, y: item.boundingPoly.vertices[0].y - 5 },
              bottomRight: { x: item.boundingPoly.vertices[2].x + 15, y: item.boundingPoly.vertices[2].y + 5 }
            }
          }
          score.colElements.push(data)
        }
      })
      resolve()
    })
  },
  extractGameMode: (apiRes) => {
    return new Promise(resolve => {
      apiRes.forEach((item, key) => {
        //ignores the first iteration
        if (key == 0)
          return;
        // console.log(item, key)
        if (
          /Classic/.test(item.description)
          ||
          /Duo/.test(item.description)
          ||
          /Squad/.test(item.description)
          ||
          /Solo/.test(item.description)
        ) {
          const data = {
            elementVal: item.description,
          }
          score.gameMode.push(data)
        }
      })
      resolve()
    })
  },
  //Find required Row
  reqdRow: (filePath) => {
    return new Promise(resolve => {
      let scoreList = ""
      Async.each(score.colElements, (item, next) => {
        scoreList = `${scoreList}${item.position.topLeft.y + 5} ${item.position.bottomRight.y - 5} `
        next()
      }, (error) => {
        if (error)
          return resolve({ ...errorObj, error: err })
        console.log(scoreList)
        exec(`octave ${__dirname}\\reqdRow.m ${filePath} ${scoreList}`, (err, stdout, stderr) => {
          if (err || stderr) return resolve({ ...errorObj, error: { err, stderr } })
          console.log(stdout)
          return resolve({ ...successObj, returned: parseInt(stdout, 10) })
        })
      })

    })
  },

  //master controller
  start: async (screenShotPath) => {
    score.tableHeader = []
    score.colElements = []
    score.reqdScore = []
    return new Promise(async (resolve) => {
      let imgSaveData = {
        filePath: screenShotPath,
        saveAs: `${__dirname}\\gameMode.jpg`,
        row: { min: 17, max: 23 },
        col: { min: 78, max: 99 },
      }
      await processImg.extractAndSave(imgSaveData)
      // return resolve({ ...successObj, message: "image processed successfully"})  //===============>1
      const { analysedData7 } = await processImg.feedToAPI("./app/controllers/imageProcessing/gameMode.jpg")
      // console.log(analysedData7)
      await processImg.extractGameMode(analysedData7)
      if (score.gameMode.length == 0) {
        return resolve(
          {
            ...errorObj,
            message: "coudn't process image. Probably: wrong game mode selected",
            data: { ...score }
          })
      }

      imgSaveData = {
        filePath: screenShotPath,
        saveAs: `${__dirname}\\tableHeader.jpg`,
        row: { min: 50, max: 57 },
        col: { min: 14, max: 100 },
      }
      let { data, error } = await processImg.extractAndSave(imgSaveData)
      // return resolve({ ...successObj, message: "image processed successfully"})  //===============>2
      data = data.split(" ")
      const colSize = (data.pop())
      const rowSize = (data.pop())

      let { analysedData } = await processImg.feedToAPI("./app/controllers/imageProcessing/tableHeader.jpg")
      await processImg.extractHeaderPos(analysedData)
      // const index = score.tableHeader.findIndex((element) => { return element.elementVal == ("Survived" || "Survival Time") });
      const index = score.tableHeader.findIndex((element) => { return element.elementVal == ("Rating") });
      // console.log(index, score.tableHeader[index].elementVal, score.tableHeader[index].position)
      const { topLeft } = score.tableHeader[index].position
      const { bottomRight } = score.tableHeader[index].position
      // console.log(topLeft, bottomRight)
      imgSaveData = {
        filePath: screenShotPath,
        saveAs: `${__dirname}\\savedColumn.jpg`,
        row: { min: Math.floor((topLeft.y / rowSize) * 100) + 50, max: 86 },
        col: { min: Math.floor((topLeft.x / colSize) * 100) + 14, max: Math.floor((bottomRight.x / colSize) * 100) + 14 },
      }
      await processImg.extractAndSave(imgSaveData)
      const { analysedData2 } = await processImg.feedToAPI("./app/controllers/imageProcessing/savedColumn.jpg")
      await processImg.extractScorePos(analysedData2)
      const { returned } = await processImg.reqdRow(`${__dirname}\\savedColumn.jpg`)
      // console.log(typeof returned, returned)
      // return resolve({ ...successObj, message: "image processed successfully"}) //==============>3
      Async.each(score.tableHeader, async (item, next) => {
        const imgSaveData = {
          filePath: screenShotPath,
          saveAs: `${__dirname}\\${item.elementVal}Element.jpg`,
          row: {
            min: Math.floor(((score.colElements[returned - 1].position.topLeft.y + topLeft.y) / rowSize) * 100) + 50,
            max: Math.floor(((score.colElements[returned - 1].position.bottomRight.y + topLeft.y) / rowSize) * 100) + 50
          },
          col: {
            min: Math.floor((item.position.topLeft.x / colSize) * 100) + 14,
            max: Math.floor((item.position.bottomRight.x / colSize) * 100) + 14
          },
        }
        await processImg.extractAndSave(imgSaveData)
        // ========================================Important========================================
        // De-Comment when feedToAPI is complete
        // const { analysedData } = await processImg.feedToAPI("./app/controllers/imageProcessing/savedColumn.jpg")
        // const scoreElement = {
        //   item: item.elementVal,
        //   score: (isNaN(parseFloat(analysedData[1].description))) ? 0: parseFloat(analysedData[1].description)
        // }
        // score.reqdScore.push(scoreElement)
        // =========================================================================================
        next()
      }, async (err) => {
        if (err) console.error(err)


        return resolve({ ...successObj, message: "image processed successfully"})
        const { analysedData3 } = await processImg.feedToAPI("./app/controllers/imageProcessing/KillsElement.jpg")
        let scoreElement = {
          item: "KillsElement",
          score: (isNaN(parseFloat(analysedData3[1].description))) ? 0 : parseFloat(analysedData3[1].description)
        }
        score.reqdScore.push(scoreElement)

        const { analysedData4 } = await processImg.feedToAPI("./app/controllers/imageProcessing/DamageElement.jpg")
        scoreElement = {
          item: "DamageElement",
          score: (isNaN(parseFloat(analysedData4[1].description))) ? 0 : parseFloat(analysedData4[1].description)
        }
        score.reqdScore.push(scoreElement)

        const { analysedData5 } = await processImg.feedToAPI("./app/controllers/imageProcessing/SurvivedElement.jpg")
        scoreElement = {
          item: "SurvivedElement",
          score: (isNaN(parseFloat(analysedData5[1].description))) ? 0 : parseFloat(analysedData5[1].description)
        }
        score.reqdScore.push(scoreElement)

        const { analysedData6 } = await processImg.feedToAPI("./app/controllers/imageProcessing/RatingElement.jpg")
        scoreElement = {
          item: "RatingElement",
          score: (isNaN(parseFloat(analysedData6[1].description))) ? 0 : parseFloat(analysedData6[1].description)
        }
        score.reqdScore.push(scoreElement)
        return resolve({ ...successObj, message: "image processed successfully", data: { ...score } })
      })
    })
  },
}
// processImg.start("./app/controllers/imageProcessing/aman.jpeg")

export default processImg;
