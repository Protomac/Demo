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
                "description": "Classic (TPP) -Squad-Erangel\n",
                "boundingPoly": {
                  "vertices": [
                    {
                      "y": 9
                    },
                    {
                      "x": 252,
                      "y": 9
                    },
                    {
                      "x": 252,
                      "y": 33
                    },
                    {
                      "y": 33
                    }
                  ]
                }
              },
              {
                "description": "Classic",
                "boundingPoly": {
                  "vertices": [
                    {
                      "y": 9
                    },
                    {
                      "x": 57,
                      "y": 9
                    },
                    {
                      "x": 57,
                      "y": 30
                    },
                    {
                      "y": 30
                    }
                  ]
                }
              },
              {
                "description": "(TPP)",
                "boundingPoly": {
                  "vertices": [
                    {
                      "x": 65,
                      "y": 12
                    },
                    {
                      "x": 105,
                      "y": 12
                    },
                    {
                      "x": 105,
                      "y": 31
                    },
                    {
                      "x": 65,
                      "y": 31
                    }
                  ]
                }
              },
              {
                "description": "-Squad-Erangel",
                "boundingPoly": {
                  "vertices": [
                    {
                      "x": 123,
                      "y": 13
                    },
                    {
                      "x": 252,
                      "y": 13
                    },
                    {
                      "x": 252,
                      "y": 33
                    },
                    {
                      "x": 123,
                      "y": 33
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
                  "width": 270,
                  "height": 44,
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
                            "y": 9
                          },
                          {
                            "x": 252,
                            "y": 9
                          },
                          {
                            "x": 252,
                            "y": 33
                          },
                          {
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
                                "y": 9
                              },
                              {
                                "x": 252,
                                "y": 9
                              },
                              {
                                "x": 252,
                                "y": 33
                              },
                              {
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
                                    "y": 9
                                  },
                                  {
                                    "x": 57,
                                    "y": 9
                                  },
                                  {
                                    "x": 57,
                                    "y": 30
                                  },
                                  {
                                    "y": 30
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
                                        "y": 9
                                      },
                                      {
                                        "x": 12,
                                        "y": 9
                                      },
                                      {
                                        "x": 12,
                                        "y": 30
                                      },
                                      {
                                        "y": 30
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
                                        "x": 13,
                                        "y": 9
                                      },
                                      {
                                        "x": 21,
                                        "y": 9
                                      },
                                      {
                                        "x": 21,
                                        "y": 30
                                      },
                                      {
                                        "x": 13,
                                        "y": 30
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
                                        "x": 22,
                                        "y": 9
                                      },
                                      {
                                        "x": 26,
                                        "y": 9
                                      },
                                      {
                                        "x": 26,
                                        "y": 30
                                      },
                                      {
                                        "x": 22,
                                        "y": 30
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
                                        "x": 27,
                                        "y": 9
                                      },
                                      {
                                        "x": 35,
                                        "y": 9
                                      },
                                      {
                                        "x": 35,
                                        "y": 30
                                      },
                                      {
                                        "x": 27,
                                        "y": 30
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
                                        "x": 36,
                                        "y": 9
                                      },
                                      {
                                        "x": 45,
                                        "y": 9
                                      },
                                      {
                                        "x": 45,
                                        "y": 30
                                      },
                                      {
                                        "x": 36,
                                        "y": 30
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
                                        "x": 46,
                                        "y": 9
                                      },
                                      {
                                        "x": 54,
                                        "y": 9
                                      },
                                      {
                                        "x": 54,
                                        "y": 30
                                      },
                                      {
                                        "x": 46,
                                        "y": 30
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
                                        "x": 55,
                                        "y": 9
                                      },
                                      {
                                        "x": 57,
                                        "y": 9
                                      },
                                      {
                                        "x": 57,
                                        "y": 30
                                      },
                                      {
                                        "x": 55,
                                        "y": 30
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
                                    "x": 65,
                                    "y": 12
                                  },
                                  {
                                    "x": 105,
                                    "y": 12
                                  },
                                  {
                                    "x": 105,
                                    "y": 31
                                  },
                                  {
                                    "x": 65,
                                    "y": 31
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
                                        "x": 65,
                                        "y": 13
                                      },
                                      {
                                        "x": 69,
                                        "y": 13
                                      },
                                      {
                                        "x": 69,
                                        "y": 31
                                      },
                                      {
                                        "x": 65,
                                        "y": 31
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
                                        "x": 71,
                                        "y": 12
                                      },
                                      {
                                        "x": 78,
                                        "y": 12
                                      },
                                      {
                                        "x": 78,
                                        "y": 29
                                      },
                                      {
                                        "x": 71,
                                        "y": 29
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
                                        "x": 81,
                                        "y": 12
                                      },
                                      {
                                        "x": 88,
                                        "y": 12
                                      },
                                      {
                                        "x": 88,
                                        "y": 29
                                      },
                                      {
                                        "x": 81,
                                        "y": 29
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
                                        "x": 91,
                                        "y": 13
                                      },
                                      {
                                        "x": 98,
                                        "y": 13
                                      },
                                      {
                                        "x": 98,
                                        "y": 29
                                      },
                                      {
                                        "x": 91,
                                        "y": 29
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
                                        "x": 101,
                                        "y": 12
                                      },
                                      {
                                        "x": 105,
                                        "y": 12
                                      },
                                      {
                                        "x": 105,
                                        "y": 31
                                      },
                                      {
                                        "x": 101,
                                        "y": 31
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
                                    "x": 123,
                                    "y": 13
                                  },
                                  {
                                    "x": 252,
                                    "y": 13
                                  },
                                  {
                                    "x": 252,
                                    "y": 33
                                  },
                                  {
                                    "x": 123,
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
                                        "x": 123,
                                        "y": 22
                                      },
                                      {
                                        "x": 127,
                                        "y": 22
                                      },
                                      {
                                        "x": 127,
                                        "y": 23
                                      },
                                      {
                                        "x": 123,
                                        "y": 23
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
                                        "x": 135,
                                        "y": 13
                                      },
                                      {
                                        "x": 142,
                                        "y": 13
                                      },
                                      {
                                        "x": 142,
                                        "y": 29
                                      },
                                      {
                                        "x": 135,
                                        "y": 29
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
                                        "x": 145,
                                        "y": 19
                                      },
                                      {
                                        "x": 151,
                                        "y": 19
                                      },
                                      {
                                        "x": 151,
                                        "y": 33
                                      },
                                      {
                                        "x": 145,
                                        "y": 33
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
                                        "x": 154,
                                        "y": 18
                                      },
                                      {
                                        "x": 160,
                                        "y": 18
                                      },
                                      {
                                        "x": 160,
                                        "y": 29
                                      },
                                      {
                                        "x": 154,
                                        "y": 29
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
                                        "x": 163,
                                        "y": 18
                                      },
                                      {
                                        "x": 169,
                                        "y": 18
                                      },
                                      {
                                        "x": 169,
                                        "y": 29
                                      },
                                      {
                                        "x": 163,
                                        "y": 29
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
                                        "x": 172,
                                        "y": 13
                                      },
                                      {
                                        "x": 178,
                                        "y": 13
                                      },
                                      {
                                        "x": 178,
                                        "y": 29
                                      },
                                      {
                                        "x": 172,
                                        "y": 29
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
                                        "x": 185,
                                        "y": 22
                                      },
                                      {
                                        "x": 190,
                                        "y": 22
                                      },
                                      {
                                        "x": 190,
                                        "y": 23
                                      },
                                      {
                                        "x": 185,
                                        "y": 23
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
                                        "x": 198,
                                        "y": 13
                                      },
                                      {
                                        "x": 204,
                                        "y": 13
                                      },
                                      {
                                        "x": 204,
                                        "y": 29
                                      },
                                      {
                                        "x": 198,
                                        "y": 29
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
                                        "x": 207,
                                        "y": 19
                                      },
                                      {
                                        "x": 213,
                                        "y": 19
                                      },
                                      {
                                        "x": 213,
                                        "y": 29
                                      },
                                      {
                                        "x": 207,
                                        "y": 29
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
                                        "x": 215,
                                        "y": 18
                                      },
                                      {
                                        "x": 221,
                                        "y": 18
                                      },
                                      {
                                        "x": 221,
                                        "y": 29
                                      },
                                      {
                                        "x": 215,
                                        "y": 29
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
                                        "x": 224,
                                        "y": 19
                                      },
                                      {
                                        "x": 230,
                                        "y": 19
                                      },
                                      {
                                        "x": 230,
                                        "y": 29
                                      },
                                      {
                                        "x": 224,
                                        "y": 29
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
                                        "x": 233,
                                        "y": 19
                                      },
                                      {
                                        "x": 239,
                                        "y": 19
                                      },
                                      {
                                        "x": 239,
                                        "y": 33
                                      },
                                      {
                                        "x": 233,
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
                                    ]
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 242,
                                        "y": 19
                                      },
                                      {
                                        "x": 248,
                                        "y": 19
                                      },
                                      {
                                        "x": 248,
                                        "y": 29
                                      },
                                      {
                                        "x": 242,
                                        "y": 29
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
                                        "x": 251,
                                        "y": 13
                                      },
                                      {
                                        "x": 252,
                                        "y": 13
                                      },
                                      {
                                        "x": 252,
                                        "y": 29
                                      },
                                      {
                                        "x": 251,
                                        "y": 29
                                      }
                                    ]
                                  },
                                  "text": "l"
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
              "text": "Classic (TPP) -Squad-Erangel\n"
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
                "description": "Rating\n236\n16.8\n69.9\n11.2\n",
                "boundingPoly": {
                  "vertices": [
                    {
                      "x": 25,
                      "y": 5
                    },
                    {
                      "x": 50,
                      "y": 5
                    },
                    {
                      "x": 50,
                      "y": 171
                    },
                    {
                      "x": 25,
                      "y": 171
                    }
                  ]
                }
              },
              {
                "description": "Rating",
                "boundingPoly": {
                  "vertices": [
                    {
                      "x": 25,
                      "y": 5
                    },
                    {
                      "x": 50,
                      "y": 6
                    },
                    {
                      "x": 50,
                      "y": 17
                    },
                    {
                      "x": 25,
                      "y": 16
                    }
                  ]
                }
              },
              {
                "description": "236",
                "boundingPoly": {
                  "vertices": [
                    {
                      "x": 29,
                      "y": 41
                    },
                    {
                      "x": 49,
                      "y": 41
                    },
                    {
                      "x": 49,
                      "y": 51
                    },
                    {
                      "x": 29,
                      "y": 51
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
                      "y": 81
                    },
                    {
                      "x": 48,
                      "y": 81
                    },
                    {
                      "x": 48,
                      "y": 91
                    },
                    {
                      "x": 31,
                      "y": 91
                    }
                  ]
                }
              },
              {
                "description": "69.9",
                "boundingPoly": {
                  "vertices": [
                    {
                      "x": 29,
                      "y": 117
                    },
                    {
                      "x": 50,
                      "y": 117
                    },
                    {
                      "x": 50,
                      "y": 131
                    },
                    {
                      "x": 29,
                      "y": 131
                    }
                  ]
                }
              },
              {
                "description": "11.2",
                "boundingPoly": {
                  "vertices": [
                    {
                      "x": 32,
                      "y": 160
                    },
                    {
                      "x": 46,
                      "y": 160
                    },
                    {
                      "x": 46,
                      "y": 171
                    },
                    {
                      "x": 32,
                      "y": 171
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
                        "confidence": 0.29
                      }
                    ]
                  },
                  "width": 58,
                  "height": 185,
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
                            "x": 25,
                            "y": 5
                          },
                          {
                            "x": 50,
                            "y": 6
                          },
                          {
                            "x": 50,
                            "y": 17
                          },
                          {
                            "x": 25,
                            "y": 16
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
                                "x": 25,
                                "y": 5
                              },
                              {
                                "x": 50,
                                "y": 6
                              },
                              {
                                "x": 50,
                                "y": 17
                              },
                              {
                                "x": 25,
                                "y": 16
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
                                    "x": 25,
                                    "y": 5
                                  },
                                  {
                                    "x": 50,
                                    "y": 6
                                  },
                                  {
                                    "x": 50,
                                    "y": 17
                                  },
                                  {
                                    "x": 25,
                                    "y": 16
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
                                        "x": 25,
                                        "y": 5
                                      },
                                      {
                                        "x": 26,
                                        "y": 5
                                      },
                                      {
                                        "x": 26,
                                        "y": 15
                                      },
                                      {
                                        "x": 25,
                                        "y": 15
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
                                        "x": 27,
                                        "y": 5
                                      },
                                      {
                                        "x": 31,
                                        "y": 5
                                      },
                                      {
                                        "x": 31,
                                        "y": 15
                                      },
                                      {
                                        "x": 27,
                                        "y": 15
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
                                        "x": 32,
                                        "y": 5
                                      },
                                      {
                                        "x": 36,
                                        "y": 5
                                      },
                                      {
                                        "x": 36,
                                        "y": 15
                                      },
                                      {
                                        "x": 32,
                                        "y": 15
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
                                        "x": 37,
                                        "y": 6
                                      },
                                      {
                                        "x": 41,
                                        "y": 6
                                      },
                                      {
                                        "x": 41,
                                        "y": 16
                                      },
                                      {
                                        "x": 37,
                                        "y": 16
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
                                        "x": 42,
                                        "y": 6
                                      },
                                      {
                                        "x": 46,
                                        "y": 6
                                      },
                                      {
                                        "x": 46,
                                        "y": 16
                                      },
                                      {
                                        "x": 42,
                                        "y": 16
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
                                        "x": 47,
                                        "y": 6
                                      },
                                      {
                                        "x": 50,
                                        "y": 6
                                      },
                                      {
                                        "x": 50,
                                        "y": 16
                                      },
                                      {
                                        "x": 47,
                                        "y": 16
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
                            "x": 29,
                            "y": 41
                          },
                          {
                            "x": 49,
                            "y": 41
                          },
                          {
                            "x": 49,
                            "y": 51
                          },
                          {
                            "x": 29,
                            "y": 51
                          }
                        ]
                      },
                      "paragraphs": [
                        {
                          "boundingBox": {
                            "vertices": [
                              {
                                "x": 29,
                                "y": 41
                              },
                              {
                                "x": 49,
                                "y": 41
                              },
                              {
                                "x": 49,
                                "y": 51
                              },
                              {
                                "x": 29,
                                "y": 51
                              }
                            ]
                          },
                          "words": [
                            {
                              "boundingBox": {
                                "vertices": [
                                  {
                                    "x": 29,
                                    "y": 41
                                  },
                                  {
                                    "x": 49,
                                    "y": 41
                                  },
                                  {
                                    "x": 49,
                                    "y": 51
                                  },
                                  {
                                    "x": 29,
                                    "y": 51
                                  }
                                ]
                              },
                              "symbols": [
                                {
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 29,
                                        "y": 41
                                      },
                                      {
                                        "x": 34,
                                        "y": 41
                                      },
                                      {
                                        "x": 34,
                                        "y": 51
                                      },
                                      {
                                        "x": 29,
                                        "y": 51
                                      }
                                    ]
                                  },
                                  "text": "2"
                                },
                                {
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 36,
                                        "y": 41
                                      },
                                      {
                                        "x": 41,
                                        "y": 41
                                      },
                                      {
                                        "x": 41,
                                        "y": 51
                                      },
                                      {
                                        "x": 36,
                                        "y": 51
                                      }
                                    ]
                                  },
                                  "text": "3"
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
                                        "x": 43,
                                        "y": 41
                                      },
                                      {
                                        "x": 49,
                                        "y": 41
                                      },
                                      {
                                        "x": 49,
                                        "y": 51
                                      },
                                      {
                                        "x": 43,
                                        "y": 51
                                      }
                                    ]
                                  },
                                  "text": "6"
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
                            "x": 31,
                            "y": 81
                          },
                          {
                            "x": 48,
                            "y": 81
                          },
                          {
                            "x": 48,
                            "y": 91
                          },
                          {
                            "x": 31,
                            "y": 91
                          }
                        ]
                      },
                      "paragraphs": [
                        {
                          "boundingBox": {
                            "vertices": [
                              {
                                "x": 31,
                                "y": 81
                              },
                              {
                                "x": 48,
                                "y": 81
                              },
                              {
                                "x": 48,
                                "y": 91
                              },
                              {
                                "x": 31,
                                "y": 91
                              }
                            ]
                          },
                          "words": [
                            {
                              "boundingBox": {
                                "vertices": [
                                  {
                                    "x": 31,
                                    "y": 81
                                  },
                                  {
                                    "x": 48,
                                    "y": 81
                                  },
                                  {
                                    "x": 48,
                                    "y": 91
                                  },
                                  {
                                    "x": 31,
                                    "y": 91
                                  }
                                ]
                              },
                              "symbols": [
                                {
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 31,
                                        "y": 81
                                      },
                                      {
                                        "x": 35,
                                        "y": 81
                                      },
                                      {
                                        "x": 35,
                                        "y": 91
                                      },
                                      {
                                        "x": 31,
                                        "y": 91
                                      }
                                    ]
                                  },
                                  "text": "1"
                                },
                                {
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 36,
                                        "y": 81
                                      },
                                      {
                                        "x": 40,
                                        "y": 81
                                      },
                                      {
                                        "x": 40,
                                        "y": 91
                                      },
                                      {
                                        "x": 36,
                                        "y": 91
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
                                        "y": 81
                                      },
                                      {
                                        "x": 43,
                                        "y": 81
                                      },
                                      {
                                        "x": 43,
                                        "y": 91
                                      },
                                      {
                                        "x": 41,
                                        "y": 91
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
                                        "y": 81
                                      },
                                      {
                                        "x": 48,
                                        "y": 81
                                      },
                                      {
                                        "x": 48,
                                        "y": 91
                                      },
                                      {
                                        "x": 44,
                                        "y": 91
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
                    },
                    {
                      "boundingBox": {
                        "vertices": [
                          {
                            "x": 29,
                            "y": 117
                          },
                          {
                            "x": 50,
                            "y": 117
                          },
                          {
                            "x": 50,
                            "y": 131
                          },
                          {
                            "x": 29,
                            "y": 131
                          }
                        ]
                      },
                      "paragraphs": [
                        {
                          "boundingBox": {
                            "vertices": [
                              {
                                "x": 29,
                                "y": 117
                              },
                              {
                                "x": 50,
                                "y": 117
                              },
                              {
                                "x": 50,
                                "y": 131
                              },
                              {
                                "x": 29,
                                "y": 131
                              }
                            ]
                          },
                          "words": [
                            {
                              "boundingBox": {
                                "vertices": [
                                  {
                                    "x": 29,
                                    "y": 117
                                  },
                                  {
                                    "x": 50,
                                    "y": 117
                                  },
                                  {
                                    "x": 50,
                                    "y": 131
                                  },
                                  {
                                    "x": 29,
                                    "y": 131
                                  }
                                ]
                              },
                              "symbols": [
                                {
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 29,
                                        "y": 117
                                      },
                                      {
                                        "x": 36,
                                        "y": 117
                                      },
                                      {
                                        "x": 36,
                                        "y": 131
                                      },
                                      {
                                        "x": 29,
                                        "y": 131
                                      }
                                    ]
                                  },
                                  "text": "6"
                                },
                                {
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 37,
                                        "y": 117
                                      },
                                      {
                                        "x": 42,
                                        "y": 117
                                      },
                                      {
                                        "x": 42,
                                        "y": 131
                                      },
                                      {
                                        "x": 37,
                                        "y": 131
                                      }
                                    ]
                                  },
                                  "text": "9"
                                },
                                {
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 43,
                                        "y": 117
                                      },
                                      {
                                        "x": 45,
                                        "y": 117
                                      },
                                      {
                                        "x": 45,
                                        "y": 131
                                      },
                                      {
                                        "x": 43,
                                        "y": 131
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
                                        "x": 46,
                                        "y": 117
                                      },
                                      {
                                        "x": 50,
                                        "y": 117
                                      },
                                      {
                                        "x": 50,
                                        "y": 131
                                      },
                                      {
                                        "x": 46,
                                        "y": 131
                                      }
                                    ]
                                  },
                                  "text": "9"
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
                            "y": 160
                          },
                          {
                            "x": 46,
                            "y": 160
                          },
                          {
                            "x": 46,
                            "y": 171
                          },
                          {
                            "x": 32,
                            "y": 171
                          }
                        ]
                      },
                      "paragraphs": [
                        {
                          "boundingBox": {
                            "vertices": [
                              {
                                "x": 32,
                                "y": 160
                              },
                              {
                                "x": 46,
                                "y": 160
                              },
                              {
                                "x": 46,
                                "y": 171
                              },
                              {
                                "x": 32,
                                "y": 171
                              }
                            ]
                          },
                          "words": [
                            {
                              "boundingBox": {
                                "vertices": [
                                  {
                                    "x": 32,
                                    "y": 160
                                  },
                                  {
                                    "x": 46,
                                    "y": 160
                                  },
                                  {
                                    "x": 46,
                                    "y": 171
                                  },
                                  {
                                    "x": 32,
                                    "y": 171
                                  }
                                ]
                              },
                              "symbols": [
                                {
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 32,
                                        "y": 160
                                      },
                                      {
                                        "x": 35,
                                        "y": 160
                                      },
                                      {
                                        "x": 35,
                                        "y": 171
                                      },
                                      {
                                        "x": 32,
                                        "y": 171
                                      }
                                    ]
                                  },
                                  "text": "1"
                                },
                                {
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 36,
                                        "y": 160
                                      },
                                      {
                                        "x": 41,
                                        "y": 160
                                      },
                                      {
                                        "x": 41,
                                        "y": 171
                                      },
                                      {
                                        "x": 36,
                                        "y": 171
                                      }
                                    ]
                                  },
                                  "text": "1"
                                },
                                {
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 42,
                                        "y": 160
                                      },
                                      {
                                        "x": 44,
                                        "y": 160
                                      },
                                      {
                                        "x": 44,
                                        "y": 171
                                      },
                                      {
                                        "x": 42,
                                        "y": 171
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
                                        "x": 45,
                                        "y": 160
                                      },
                                      {
                                        "x": 46,
                                        "y": 160
                                      },
                                      {
                                        "x": 46,
                                        "y": 171
                                      },
                                      {
                                        "x": 45,
                                        "y": 171
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
              "text": "Rating\n236\n16.8\n69.9\n11.2\n"
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
        scoreList = `${scoreList}${item.position.topLeft.y} ${item.position.bottomRight.y} `
        next()
      }, (error) => {
        if (error)
          return resolve({ ...errorObj, error: err })
        // console.log(scoreList)
        exec(`octave ${__dirname}\\reqdRow.m ${filePath} ${scoreList}`, (err, stdout, stderr) => {
          if (err || stderr) return resolve({ ...errorObj, error: { err, stderr } })
          // console.log(stdout)
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
      return resolve({ ...successObj, message: "image processed successfully"})  //===============>2
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
