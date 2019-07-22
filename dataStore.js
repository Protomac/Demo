//aman google api data
feedToAPI: (filePath) => {
    return new Promise(resolve => {
      //https://cloud.google.com/vision/docs/ocr

      const data = {
        "responses": [
          {
            "textAnnotations": [
              {
                "locale": "en",
                "description": "Player\nHealth Restorad\nKills\nDamage\nSurvived\nRevive\nRating\n",
                "boundingPoly": {
                  "vertices": [
                    {
                      "x": 88,
                      "y": 13
                    },
                    {
                      "x": 882,
                      "y": 13
                    },
                    {
                      "x": 882,
                      "y": 26
                    },
                    {
                      "x": 88,
                      "y": 26
                    }
                  ]
                }
              },
              {
                "description": "Player",
                "boundingPoly": {
                  "vertices": [
                    {
                      "x": 88,
                      "y": 13
                    },
                    {
                      "x": 119,
                      "y": 13
                    },
                    {
                      "x": 119,
                      "y": 26
                    },
                    {
                      "x": 88,
                      "y": 26
                    }
                  ]
                }
              },
              {
                "description": "Health",
                "boundingPoly": {
                  "vertices": [
                    {
                      "x": 695,
                      "y": 15
                    },
                    {
                      "x": 720,
                      "y": 15
                    },
                    {
                      "x": 720,
                      "y": 24
                    },
                    {
                      "x": 695,
                      "y": 24
                    }
                  ]
                }
              },
              {
                "description": "Restorad",
                "boundingPoly": {
                  "vertices": [
                    {
                      "x": 725,
                      "y": 14
                    },
                    {
                      "x": 762,
                      "y": 14
                    },
                    {
                      "x": 762,
                      "y": 25
                    },
                    {
                      "x": 725,
                      "y": 25
                    }
                  ]
                }
              },
              {
                "description": "Kills",
                "boundingPoly": {
                  "vertices": [
                    {
                      "x": 337,
                      "y": 15
                    },
                    {
                      "x": 351,
                      "y": 15
                    },
                    {
                      "x": 351,
                      "y": 24
                    },
                    {
                      "x": 337,
                      "y": 24
                    }
                  ]
                }
              },
              {
                "description": "Damage",
                "boundingPoly": {
                  "vertices": [
                    {
                      "x": 440,
                      "y": 15
                    },
                    {
                      "x": 471,
                      "y": 15
                    },
                    {
                      "x": 471,
                      "y": 25
                    },
                    {
                      "x": 440,
                      "y": 25
                    }
                  ]
                }
              },
              {
                "description": "Survived",
                "boundingPoly": {
                  "vertices": [
                    {
                      "x": 575,
                      "y": 15
                    },
                    {
                      "x": 610,
                      "y": 15
                    },
                    {
                      "x": 610,
                      "y": 24
                    },
                    {
                      "x": 575,
                      "y": 24
                    }
                  ]
                }
              },
              {
                "description": "Revive",
                "boundingPoly": {
                  "vertices": [
                    {
                      "x": 808,
                      "y": 15
                    },
                    {
                      "x": 832,
                      "y": 15
                    },
                    {
                      "x": 832,
                      "y": 24
                    },
                    {
                      "x": 808,
                      "y": 24
                    }
                  ]
                }
              },
              {
                "description": "Rating",
                "boundingPoly": {
                  "vertices": [
                    {
                      "x": 857,
                      "y": 15
                    },
                    {
                      "x": 882,
                      "y": 15
                    },
                    {
                      "x": 882,
                      "y": 25
                    },
                    {
                      "x": 857,
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
                  "width": 982,
                  "height": 38,
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
                            "x": 88,
                            "y": 13
                          },
                          {
                            "x": 119,
                            "y": 13
                          },
                          {
                            "x": 119,
                            "y": 26
                          },
                          {
                            "x": 88,
                            "y": 26
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
                                "x": 88,
                                "y": 13
                              },
                              {
                                "x": 119,
                                "y": 13
                              },
                              {
                                "x": 119,
                                "y": 26
                              },
                              {
                                "x": 88,
                                "y": 26
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
                                    "x": 88,
                                    "y": 13
                                  },
                                  {
                                    "x": 119,
                                    "y": 13
                                  },
                                  {
                                    "x": 119,
                                    "y": 26
                                  },
                                  {
                                    "x": 88,
                                    "y": 26
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
                                        "y": 13
                                      },
                                      {
                                        "x": 97,
                                        "y": 13
                                      },
                                      {
                                        "x": 97,
                                        "y": 26
                                      },
                                      {
                                        "x": 88,
                                        "y": 26
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
                                        "x": 98,
                                        "y": 13
                                      },
                                      {
                                        "x": 100,
                                        "y": 13
                                      },
                                      {
                                        "x": 100,
                                        "y": 26
                                      },
                                      {
                                        "x": 98,
                                        "y": 26
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
                                        "x": 101,
                                        "y": 13
                                      },
                                      {
                                        "x": 105,
                                        "y": 13
                                      },
                                      {
                                        "x": 105,
                                        "y": 26
                                      },
                                      {
                                        "x": 101,
                                        "y": 26
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
                                        "x": 106,
                                        "y": 13
                                      },
                                      {
                                        "x": 107,
                                        "y": 13
                                      },
                                      {
                                        "x": 107,
                                        "y": 26
                                      },
                                      {
                                        "x": 106,
                                        "y": 26
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
                                        "x": 108,
                                        "y": 13
                                      },
                                      {
                                        "x": 112,
                                        "y": 13
                                      },
                                      {
                                        "x": 112,
                                        "y": 26
                                      },
                                      {
                                        "x": 108,
                                        "y": 26
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
                                        "x": 113,
                                        "y": 13
                                      },
                                      {
                                        "x": 119,
                                        "y": 13
                                      },
                                      {
                                        "x": 119,
                                        "y": 26
                                      },
                                      {
                                        "x": 113,
                                        "y": 26
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
                            "x": 695,
                            "y": 14
                          },
                          {
                            "x": 762,
                            "y": 15
                          },
                          {
                            "x": 762,
                            "y": 26
                          },
                          {
                            "x": 695,
                            "y": 25
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
                                "x": 695,
                                "y": 14
                              },
                              {
                                "x": 762,
                                "y": 15
                              },
                              {
                                "x": 762,
                                "y": 26
                              },
                              {
                                "x": 695,
                                "y": 25
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
                                    "x": 695,
                                    "y": 15
                                  },
                                  {
                                    "x": 720,
                                    "y": 15
                                  },
                                  {
                                    "x": 720,
                                    "y": 24
                                  },
                                  {
                                    "x": 695,
                                    "y": 24
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
                                        "x": 695,
                                        "y": 15
                                      },
                                      {
                                        "x": 699,
                                        "y": 15
                                      },
                                      {
                                        "x": 699,
                                        "y": 24
                                      },
                                      {
                                        "x": 695,
                                        "y": 24
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
                                        "x": 700,
                                        "y": 15
                                      },
                                      {
                                        "x": 701,
                                        "y": 15
                                      },
                                      {
                                        "x": 701,
                                        "y": 24
                                      },
                                      {
                                        "x": 700,
                                        "y": 24
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
                                        "x": 702,
                                        "y": 15
                                      },
                                      {
                                        "x": 708,
                                        "y": 15
                                      },
                                      {
                                        "x": 708,
                                        "y": 24
                                      },
                                      {
                                        "x": 702,
                                        "y": 24
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
                                        "x": 709,
                                        "y": 15
                                      },
                                      {
                                        "x": 713,
                                        "y": 15
                                      },
                                      {
                                        "x": 713,
                                        "y": 24
                                      },
                                      {
                                        "x": 709,
                                        "y": 24
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
                                        "x": 714,
                                        "y": 15
                                      },
                                      {
                                        "x": 715,
                                        "y": 15
                                      },
                                      {
                                        "x": 715,
                                        "y": 24
                                      },
                                      {
                                        "x": 714,
                                        "y": 24
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
                                        "x": 716,
                                        "y": 15
                                      },
                                      {
                                        "x": 720,
                                        "y": 15
                                      },
                                      {
                                        "x": 720,
                                        "y": 24
                                      },
                                      {
                                        "x": 716,
                                        "y": 24
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
                                    "x": 725,
                                    "y": 14
                                  },
                                  {
                                    "x": 762,
                                    "y": 14
                                  },
                                  {
                                    "x": 762,
                                    "y": 25
                                  },
                                  {
                                    "x": 725,
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
                                        "x": 725,
                                        "y": 14
                                      },
                                      {
                                        "x": 729,
                                        "y": 14
                                      },
                                      {
                                        "x": 729,
                                        "y": 24
                                      },
                                      {
                                        "x": 725,
                                        "y": 24
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
                                        "x": 730,
                                        "y": 14
                                      },
                                      {
                                        "x": 731,
                                        "y": 14
                                      },
                                      {
                                        "x": 731,
                                        "y": 24
                                      },
                                      {
                                        "x": 730,
                                        "y": 24
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
                                        "x": 732,
                                        "y": 14
                                      },
                                      {
                                        "x": 738,
                                        "y": 14
                                      },
                                      {
                                        "x": 738,
                                        "y": 24
                                      },
                                      {
                                        "x": 732,
                                        "y": 24
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
                                        "x": 739,
                                        "y": 14
                                      },
                                      {
                                        "x": 741,
                                        "y": 14
                                      },
                                      {
                                        "x": 741,
                                        "y": 24
                                      },
                                      {
                                        "x": 739,
                                        "y": 24
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
                                        "x": 742,
                                        "y": 14
                                      },
                                      {
                                        "x": 748,
                                        "y": 14
                                      },
                                      {
                                        "x": 748,
                                        "y": 24
                                      },
                                      {
                                        "x": 742,
                                        "y": 24
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
                                        "x": 749,
                                        "y": 14
                                      },
                                      {
                                        "x": 752,
                                        "y": 14
                                      },
                                      {
                                        "x": 752,
                                        "y": 24
                                      },
                                      {
                                        "x": 749,
                                        "y": 24
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
                                        "x": 753,
                                        "y": 14
                                      },
                                      {
                                        "x": 757,
                                        "y": 14
                                      },
                                      {
                                        "x": 757,
                                        "y": 24
                                      },
                                      {
                                        "x": 753,
                                        "y": 24
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
                                    ],
                                    "detectedBreak": {
                                      "type": "EOL_SURE_SPACE"
                                    }
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 758,
                                        "y": 15
                                      },
                                      {
                                        "x": 762,
                                        "y": 15
                                      },
                                      {
                                        "x": 762,
                                        "y": 25
                                      },
                                      {
                                        "x": 758,
                                        "y": 25
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
                            "x": 337,
                            "y": 15
                          },
                          {
                            "x": 351,
                            "y": 15
                          },
                          {
                            "x": 351,
                            "y": 24
                          },
                          {
                            "x": 337,
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
                                "x": 337,
                                "y": 15
                              },
                              {
                                "x": 351,
                                "y": 15
                              },
                              {
                                "x": 351,
                                "y": 24
                              },
                              {
                                "x": 337,
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
                                    "x": 337,
                                    "y": 15
                                  },
                                  {
                                    "x": 351,
                                    "y": 15
                                  },
                                  {
                                    "x": 351,
                                    "y": 24
                                  },
                                  {
                                    "x": 337,
                                    "y": 24
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
                                        "x": 337,
                                        "y": 15
                                      },
                                      {
                                        "x": 340,
                                        "y": 15
                                      },
                                      {
                                        "x": 340,
                                        "y": 24
                                      },
                                      {
                                        "x": 337,
                                        "y": 24
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
                                        "x": 341,
                                        "y": 15
                                      },
                                      {
                                        "x": 342,
                                        "y": 15
                                      },
                                      {
                                        "x": 342,
                                        "y": 24
                                      },
                                      {
                                        "x": 341,
                                        "y": 24
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
                                        "x": 343,
                                        "y": 15
                                      },
                                      {
                                        "x": 344,
                                        "y": 15
                                      },
                                      {
                                        "x": 344,
                                        "y": 24
                                      },
                                      {
                                        "x": 343,
                                        "y": 24
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
                                        "x": 345,
                                        "y": 15
                                      },
                                      {
                                        "x": 348,
                                        "y": 15
                                      },
                                      {
                                        "x": 348,
                                        "y": 24
                                      },
                                      {
                                        "x": 345,
                                        "y": 24
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
                                        "x": 349,
                                        "y": 15
                                      },
                                      {
                                        "x": 351,
                                        "y": 15
                                      },
                                      {
                                        "x": 351,
                                        "y": 24
                                      },
                                      {
                                        "x": 349,
                                        "y": 24
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
                            "x": 440,
                            "y": 15
                          },
                          {
                            "x": 471,
                            "y": 15
                          },
                          {
                            "x": 471,
                            "y": 25
                          },
                          {
                            "x": 440,
                            "y": 25
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
                                "x": 440,
                                "y": 15
                              },
                              {
                                "x": 471,
                                "y": 15
                              },
                              {
                                "x": 471,
                                "y": 25
                              },
                              {
                                "x": 440,
                                "y": 25
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
                                    "x": 440,
                                    "y": 15
                                  },
                                  {
                                    "x": 471,
                                    "y": 15
                                  },
                                  {
                                    "x": 471,
                                    "y": 25
                                  },
                                  {
                                    "x": 440,
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
                                        "x": 440,
                                        "y": 15
                                      },
                                      {
                                        "x": 442,
                                        "y": 15
                                      },
                                      {
                                        "x": 442,
                                        "y": 25
                                      },
                                      {
                                        "x": 440,
                                        "y": 25
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
                                        "x": 443,
                                        "y": 15
                                      },
                                      {
                                        "x": 446,
                                        "y": 15
                                      },
                                      {
                                        "x": 446,
                                        "y": 25
                                      },
                                      {
                                        "x": 443,
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
                                        "x": 447,
                                        "y": 15
                                      },
                                      {
                                        "x": 455,
                                        "y": 15
                                      },
                                      {
                                        "x": 455,
                                        "y": 25
                                      },
                                      {
                                        "x": 447,
                                        "y": 25
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
                                        "x": 456,
                                        "y": 15
                                      },
                                      {
                                        "x": 459,
                                        "y": 15
                                      },
                                      {
                                        "x": 459,
                                        "y": 25
                                      },
                                      {
                                        "x": 456,
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
                                        "x": 460,
                                        "y": 15
                                      },
                                      {
                                        "x": 466,
                                        "y": 15
                                      },
                                      {
                                        "x": 466,
                                        "y": 25
                                      },
                                      {
                                        "x": 460,
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
                                    ],
                                    "detectedBreak": {
                                      "type": "EOL_SURE_SPACE"
                                    }
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 467,
                                        "y": 15
                                      },
                                      {
                                        "x": 471,
                                        "y": 15
                                      },
                                      {
                                        "x": 471,
                                        "y": 25
                                      },
                                      {
                                        "x": 467,
                                        "y": 25
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
                            "x": 575,
                            "y": 15
                          },
                          {
                            "x": 610,
                            "y": 15
                          },
                          {
                            "x": 610,
                            "y": 24
                          },
                          {
                            "x": 575,
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
                                "x": 575,
                                "y": 15
                              },
                              {
                                "x": 610,
                                "y": 15
                              },
                              {
                                "x": 610,
                                "y": 24
                              },
                              {
                                "x": 575,
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
                                    "x": 575,
                                    "y": 15
                                  },
                                  {
                                    "x": 610,
                                    "y": 15
                                  },
                                  {
                                    "x": 610,
                                    "y": 24
                                  },
                                  {
                                    "x": 575,
                                    "y": 24
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
                                        "x": 575,
                                        "y": 15
                                      },
                                      {
                                        "x": 580,
                                        "y": 15
                                      },
                                      {
                                        "x": 580,
                                        "y": 24
                                      },
                                      {
                                        "x": 575,
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
                                        "x": 581,
                                        "y": 15
                                      },
                                      {
                                        "x": 585,
                                        "y": 15
                                      },
                                      {
                                        "x": 585,
                                        "y": 24
                                      },
                                      {
                                        "x": 581,
                                        "y": 24
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
                                        "x": 586,
                                        "y": 15
                                      },
                                      {
                                        "x": 590,
                                        "y": 15
                                      },
                                      {
                                        "x": 590,
                                        "y": 24
                                      },
                                      {
                                        "x": 586,
                                        "y": 24
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
                                        "x": 591,
                                        "y": 15
                                      },
                                      {
                                        "x": 595,
                                        "y": 15
                                      },
                                      {
                                        "x": 595,
                                        "y": 24
                                      },
                                      {
                                        "x": 591,
                                        "y": 24
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
                                        "x": 596,
                                        "y": 15
                                      },
                                      {
                                        "x": 597,
                                        "y": 15
                                      },
                                      {
                                        "x": 597,
                                        "y": 24
                                      },
                                      {
                                        "x": 596,
                                        "y": 24
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
                                        "x": 598,
                                        "y": 15
                                      },
                                      {
                                        "x": 600,
                                        "y": 15
                                      },
                                      {
                                        "x": 600,
                                        "y": 24
                                      },
                                      {
                                        "x": 598,
                                        "y": 24
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
                                        "x": 601,
                                        "y": 15
                                      },
                                      {
                                        "x": 605,
                                        "y": 15
                                      },
                                      {
                                        "x": 605,
                                        "y": 24
                                      },
                                      {
                                        "x": 601,
                                        "y": 24
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
                                        "x": 606,
                                        "y": 15
                                      },
                                      {
                                        "x": 610,
                                        "y": 15
                                      },
                                      {
                                        "x": 610,
                                        "y": 24
                                      },
                                      {
                                        "x": 606,
                                        "y": 24
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
                            "x": 808,
                            "y": 15
                          },
                          {
                            "x": 832,
                            "y": 15
                          },
                          {
                            "x": 832,
                            "y": 24
                          },
                          {
                            "x": 808,
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
                                "x": 808,
                                "y": 15
                              },
                              {
                                "x": 832,
                                "y": 15
                              },
                              {
                                "x": 832,
                                "y": 24
                              },
                              {
                                "x": 808,
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
                                    "x": 808,
                                    "y": 15
                                  },
                                  {
                                    "x": 832,
                                    "y": 15
                                  },
                                  {
                                    "x": 832,
                                    "y": 24
                                  },
                                  {
                                    "x": 808,
                                    "y": 24
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
                                        "x": 808,
                                        "y": 15
                                      },
                                      {
                                        "x": 811,
                                        "y": 15
                                      },
                                      {
                                        "x": 811,
                                        "y": 24
                                      },
                                      {
                                        "x": 808,
                                        "y": 24
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
                                        "x": 812,
                                        "y": 15
                                      },
                                      {
                                        "x": 816,
                                        "y": 15
                                      },
                                      {
                                        "x": 816,
                                        "y": 24
                                      },
                                      {
                                        "x": 812,
                                        "y": 24
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
                                        "x": 817,
                                        "y": 15
                                      },
                                      {
                                        "x": 820,
                                        "y": 15
                                      },
                                      {
                                        "x": 820,
                                        "y": 24
                                      },
                                      {
                                        "x": 817,
                                        "y": 24
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
                                        "x": 821,
                                        "y": 15
                                      },
                                      {
                                        "x": 824,
                                        "y": 15
                                      },
                                      {
                                        "x": 824,
                                        "y": 24
                                      },
                                      {
                                        "x": 821,
                                        "y": 24
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
                                        "x": 825,
                                        "y": 15
                                      },
                                      {
                                        "x": 829,
                                        "y": 15
                                      },
                                      {
                                        "x": 829,
                                        "y": 24
                                      },
                                      {
                                        "x": 825,
                                        "y": 24
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
                                        "x": 830,
                                        "y": 15
                                      },
                                      {
                                        "x": 832,
                                        "y": 15
                                      },
                                      {
                                        "x": 832,
                                        "y": 24
                                      },
                                      {
                                        "x": 830,
                                        "y": 24
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
                            "x": 857,
                            "y": 15
                          },
                          {
                            "x": 882,
                            "y": 15
                          },
                          {
                            "x": 882,
                            "y": 25
                          },
                          {
                            "x": 857,
                            "y": 25
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
                                "x": 857,
                                "y": 15
                              },
                              {
                                "x": 882,
                                "y": 15
                              },
                              {
                                "x": 882,
                                "y": 25
                              },
                              {
                                "x": 857,
                                "y": 25
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
                                    "x": 857,
                                    "y": 15
                                  },
                                  {
                                    "x": 882,
                                    "y": 15
                                  },
                                  {
                                    "x": 882,
                                    "y": 25
                                  },
                                  {
                                    "x": 857,
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
                                        "x": 857,
                                        "y": 15
                                      },
                                      {
                                        "x": 860,
                                        "y": 15
                                      },
                                      {
                                        "x": 860,
                                        "y": 25
                                      },
                                      {
                                        "x": 857,
                                        "y": 25
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
                                        "x": 861,
                                        "y": 15
                                      },
                                      {
                                        "x": 864,
                                        "y": 15
                                      },
                                      {
                                        "x": 864,
                                        "y": 25
                                      },
                                      {
                                        "x": 861,
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
                                        "x": 865,
                                        "y": 15
                                      },
                                      {
                                        "x": 869,
                                        "y": 15
                                      },
                                      {
                                        "x": 869,
                                        "y": 25
                                      },
                                      {
                                        "x": 865,
                                        "y": 25
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
                                        "x": 870,
                                        "y": 15
                                      },
                                      {
                                        "x": 873,
                                        "y": 15
                                      },
                                      {
                                        "x": 873,
                                        "y": 25
                                      },
                                      {
                                        "x": 870,
                                        "y": 25
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
                                        "x": 874,
                                        "y": 15
                                      },
                                      {
                                        "x": 877,
                                        "y": 15
                                      },
                                      {
                                        "x": 877,
                                        "y": 25
                                      },
                                      {
                                        "x": 874,
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
                                    ],
                                    "detectedBreak": {
                                      "type": "EOL_SURE_SPACE"
                                    }
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 878,
                                        "y": 15
                                      },
                                      {
                                        "x": 882,
                                        "y": 15
                                      },
                                      {
                                        "x": 882,
                                        "y": 25
                                      },
                                      {
                                        "x": 878,
                                        "y": 25
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
                    }
                  ]
                }
              ],
              "text": "Player\nHealth Restorad\nKills\nDamage\nSurvived\nRevive\nRating\n"
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
  }

//harsh google api data
feedToAPI: (filePath) => {
    return new Promise(resolve => {
      //https://cloud.google.com/vision/docs/ocr

      const data = {
        "responses": [
          {
            "textAnnotations": [
              {
                "locale": "en",
                "description": "Player\nHealth Restorad\nKills\nDamage\nSurvived\nRevive\nRating\n",
                "boundingPoly": {
                  "vertices": [
                    {
                      "x": 88,
                      "y": 13
                    },
                    {
                      "x": 882,
                      "y": 13
                    },
                    {
                      "x": 882,
                      "y": 26
                    },
                    {
                      "x": 88,
                      "y": 26
                    }
                  ]
                }
              },
              {
                "description": "Player",
                "boundingPoly": {
                  "vertices": [
                    {
                      "x": 88,
                      "y": 13
                    },
                    {
                      "x": 119,
                      "y": 13
                    },
                    {
                      "x": 119,
                      "y": 26
                    },
                    {
                      "x": 88,
                      "y": 26
                    }
                  ]
                }
              },
              {
                "description": "Health",
                "boundingPoly": {
                  "vertices": [
                    {
                      "x": 695,
                      "y": 15
                    },
                    {
                      "x": 720,
                      "y": 15
                    },
                    {
                      "x": 720,
                      "y": 24
                    },
                    {
                      "x": 695,
                      "y": 24
                    }
                  ]
                }
              },
              {
                "description": "Restorad",
                "boundingPoly": {
                  "vertices": [
                    {
                      "x": 725,
                      "y": 14
                    },
                    {
                      "x": 762,
                      "y": 14
                    },
                    {
                      "x": 762,
                      "y": 25
                    },
                    {
                      "x": 725,
                      "y": 25
                    }
                  ]
                }
              },
              {
                "description": "Kills",
                "boundingPoly": {
                  "vertices": [
                    {
                      "x": 337,
                      "y": 15
                    },
                    {
                      "x": 351,
                      "y": 15
                    },
                    {
                      "x": 351,
                      "y": 24
                    },
                    {
                      "x": 337,
                      "y": 24
                    }
                  ]
                }
              },
              {
                "description": "Damage",
                "boundingPoly": {
                  "vertices": [
                    {
                      "x": 440,
                      "y": 15
                    },
                    {
                      "x": 471,
                      "y": 15
                    },
                    {
                      "x": 471,
                      "y": 25
                    },
                    {
                      "x": 440,
                      "y": 25
                    }
                  ]
                }
              },
              {
                "description": "Survived",
                "boundingPoly": {
                  "vertices": [
                    {
                      "x": 575,
                      "y": 15
                    },
                    {
                      "x": 610,
                      "y": 15
                    },
                    {
                      "x": 610,
                      "y": 24
                    },
                    {
                      "x": 575,
                      "y": 24
                    }
                  ]
                }
              },
              {
                "description": "Revive",
                "boundingPoly": {
                  "vertices": [
                    {
                      "x": 808,
                      "y": 15
                    },
                    {
                      "x": 832,
                      "y": 15
                    },
                    {
                      "x": 832,
                      "y": 24
                    },
                    {
                      "x": 808,
                      "y": 24
                    }
                  ]
                }
              },
              {
                "description": "Rating",
                "boundingPoly": {
                  "vertices": [
                    {
                      "x": 857,
                      "y": 15
                    },
                    {
                      "x": 882,
                      "y": 15
                    },
                    {
                      "x": 882,
                      "y": 25
                    },
                    {
                      "x": 857,
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
                  "width": 982,
                  "height": 38,
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
                            "x": 88,
                            "y": 13
                          },
                          {
                            "x": 119,
                            "y": 13
                          },
                          {
                            "x": 119,
                            "y": 26
                          },
                          {
                            "x": 88,
                            "y": 26
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
                                "x": 88,
                                "y": 13
                              },
                              {
                                "x": 119,
                                "y": 13
                              },
                              {
                                "x": 119,
                                "y": 26
                              },
                              {
                                "x": 88,
                                "y": 26
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
                                    "x": 88,
                                    "y": 13
                                  },
                                  {
                                    "x": 119,
                                    "y": 13
                                  },
                                  {
                                    "x": 119,
                                    "y": 26
                                  },
                                  {
                                    "x": 88,
                                    "y": 26
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
                                        "y": 13
                                      },
                                      {
                                        "x": 97,
                                        "y": 13
                                      },
                                      {
                                        "x": 97,
                                        "y": 26
                                      },
                                      {
                                        "x": 88,
                                        "y": 26
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
                                        "x": 98,
                                        "y": 13
                                      },
                                      {
                                        "x": 100,
                                        "y": 13
                                      },
                                      {
                                        "x": 100,
                                        "y": 26
                                      },
                                      {
                                        "x": 98,
                                        "y": 26
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
                                        "x": 101,
                                        "y": 13
                                      },
                                      {
                                        "x": 105,
                                        "y": 13
                                      },
                                      {
                                        "x": 105,
                                        "y": 26
                                      },
                                      {
                                        "x": 101,
                                        "y": 26
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
                                        "x": 106,
                                        "y": 13
                                      },
                                      {
                                        "x": 107,
                                        "y": 13
                                      },
                                      {
                                        "x": 107,
                                        "y": 26
                                      },
                                      {
                                        "x": 106,
                                        "y": 26
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
                                        "x": 108,
                                        "y": 13
                                      },
                                      {
                                        "x": 112,
                                        "y": 13
                                      },
                                      {
                                        "x": 112,
                                        "y": 26
                                      },
                                      {
                                        "x": 108,
                                        "y": 26
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
                                        "x": 113,
                                        "y": 13
                                      },
                                      {
                                        "x": 119,
                                        "y": 13
                                      },
                                      {
                                        "x": 119,
                                        "y": 26
                                      },
                                      {
                                        "x": 113,
                                        "y": 26
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
                            "x": 695,
                            "y": 14
                          },
                          {
                            "x": 762,
                            "y": 15
                          },
                          {
                            "x": 762,
                            "y": 26
                          },
                          {
                            "x": 695,
                            "y": 25
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
                                "x": 695,
                                "y": 14
                              },
                              {
                                "x": 762,
                                "y": 15
                              },
                              {
                                "x": 762,
                                "y": 26
                              },
                              {
                                "x": 695,
                                "y": 25
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
                                    "x": 695,
                                    "y": 15
                                  },
                                  {
                                    "x": 720,
                                    "y": 15
                                  },
                                  {
                                    "x": 720,
                                    "y": 24
                                  },
                                  {
                                    "x": 695,
                                    "y": 24
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
                                        "x": 695,
                                        "y": 15
                                      },
                                      {
                                        "x": 699,
                                        "y": 15
                                      },
                                      {
                                        "x": 699,
                                        "y": 24
                                      },
                                      {
                                        "x": 695,
                                        "y": 24
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
                                        "x": 700,
                                        "y": 15
                                      },
                                      {
                                        "x": 701,
                                        "y": 15
                                      },
                                      {
                                        "x": 701,
                                        "y": 24
                                      },
                                      {
                                        "x": 700,
                                        "y": 24
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
                                        "x": 702,
                                        "y": 15
                                      },
                                      {
                                        "x": 708,
                                        "y": 15
                                      },
                                      {
                                        "x": 708,
                                        "y": 24
                                      },
                                      {
                                        "x": 702,
                                        "y": 24
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
                                        "x": 709,
                                        "y": 15
                                      },
                                      {
                                        "x": 713,
                                        "y": 15
                                      },
                                      {
                                        "x": 713,
                                        "y": 24
                                      },
                                      {
                                        "x": 709,
                                        "y": 24
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
                                        "x": 714,
                                        "y": 15
                                      },
                                      {
                                        "x": 715,
                                        "y": 15
                                      },
                                      {
                                        "x": 715,
                                        "y": 24
                                      },
                                      {
                                        "x": 714,
                                        "y": 24
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
                                        "x": 716,
                                        "y": 15
                                      },
                                      {
                                        "x": 720,
                                        "y": 15
                                      },
                                      {
                                        "x": 720,
                                        "y": 24
                                      },
                                      {
                                        "x": 716,
                                        "y": 24
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
                                    "x": 725,
                                    "y": 14
                                  },
                                  {
                                    "x": 762,
                                    "y": 14
                                  },
                                  {
                                    "x": 762,
                                    "y": 25
                                  },
                                  {
                                    "x": 725,
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
                                        "x": 725,
                                        "y": 14
                                      },
                                      {
                                        "x": 729,
                                        "y": 14
                                      },
                                      {
                                        "x": 729,
                                        "y": 24
                                      },
                                      {
                                        "x": 725,
                                        "y": 24
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
                                        "x": 730,
                                        "y": 14
                                      },
                                      {
                                        "x": 731,
                                        "y": 14
                                      },
                                      {
                                        "x": 731,
                                        "y": 24
                                      },
                                      {
                                        "x": 730,
                                        "y": 24
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
                                        "x": 732,
                                        "y": 14
                                      },
                                      {
                                        "x": 738,
                                        "y": 14
                                      },
                                      {
                                        "x": 738,
                                        "y": 24
                                      },
                                      {
                                        "x": 732,
                                        "y": 24
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
                                        "x": 739,
                                        "y": 14
                                      },
                                      {
                                        "x": 741,
                                        "y": 14
                                      },
                                      {
                                        "x": 741,
                                        "y": 24
                                      },
                                      {
                                        "x": 739,
                                        "y": 24
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
                                        "x": 742,
                                        "y": 14
                                      },
                                      {
                                        "x": 748,
                                        "y": 14
                                      },
                                      {
                                        "x": 748,
                                        "y": 24
                                      },
                                      {
                                        "x": 742,
                                        "y": 24
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
                                        "x": 749,
                                        "y": 14
                                      },
                                      {
                                        "x": 752,
                                        "y": 14
                                      },
                                      {
                                        "x": 752,
                                        "y": 24
                                      },
                                      {
                                        "x": 749,
                                        "y": 24
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
                                        "x": 753,
                                        "y": 14
                                      },
                                      {
                                        "x": 757,
                                        "y": 14
                                      },
                                      {
                                        "x": 757,
                                        "y": 24
                                      },
                                      {
                                        "x": 753,
                                        "y": 24
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
                                    ],
                                    "detectedBreak": {
                                      "type": "EOL_SURE_SPACE"
                                    }
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 758,
                                        "y": 15
                                      },
                                      {
                                        "x": 762,
                                        "y": 15
                                      },
                                      {
                                        "x": 762,
                                        "y": 25
                                      },
                                      {
                                        "x": 758,
                                        "y": 25
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
                            "x": 337,
                            "y": 15
                          },
                          {
                            "x": 351,
                            "y": 15
                          },
                          {
                            "x": 351,
                            "y": 24
                          },
                          {
                            "x": 337,
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
                                "x": 337,
                                "y": 15
                              },
                              {
                                "x": 351,
                                "y": 15
                              },
                              {
                                "x": 351,
                                "y": 24
                              },
                              {
                                "x": 337,
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
                                    "x": 337,
                                    "y": 15
                                  },
                                  {
                                    "x": 351,
                                    "y": 15
                                  },
                                  {
                                    "x": 351,
                                    "y": 24
                                  },
                                  {
                                    "x": 337,
                                    "y": 24
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
                                        "x": 337,
                                        "y": 15
                                      },
                                      {
                                        "x": 340,
                                        "y": 15
                                      },
                                      {
                                        "x": 340,
                                        "y": 24
                                      },
                                      {
                                        "x": 337,
                                        "y": 24
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
                                        "x": 341,
                                        "y": 15
                                      },
                                      {
                                        "x": 342,
                                        "y": 15
                                      },
                                      {
                                        "x": 342,
                                        "y": 24
                                      },
                                      {
                                        "x": 341,
                                        "y": 24
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
                                        "x": 343,
                                        "y": 15
                                      },
                                      {
                                        "x": 344,
                                        "y": 15
                                      },
                                      {
                                        "x": 344,
                                        "y": 24
                                      },
                                      {
                                        "x": 343,
                                        "y": 24
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
                                        "x": 345,
                                        "y": 15
                                      },
                                      {
                                        "x": 348,
                                        "y": 15
                                      },
                                      {
                                        "x": 348,
                                        "y": 24
                                      },
                                      {
                                        "x": 345,
                                        "y": 24
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
                                        "x": 349,
                                        "y": 15
                                      },
                                      {
                                        "x": 351,
                                        "y": 15
                                      },
                                      {
                                        "x": 351,
                                        "y": 24
                                      },
                                      {
                                        "x": 349,
                                        "y": 24
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
                            "x": 440,
                            "y": 15
                          },
                          {
                            "x": 471,
                            "y": 15
                          },
                          {
                            "x": 471,
                            "y": 25
                          },
                          {
                            "x": 440,
                            "y": 25
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
                                "x": 440,
                                "y": 15
                              },
                              {
                                "x": 471,
                                "y": 15
                              },
                              {
                                "x": 471,
                                "y": 25
                              },
                              {
                                "x": 440,
                                "y": 25
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
                                    "x": 440,
                                    "y": 15
                                  },
                                  {
                                    "x": 471,
                                    "y": 15
                                  },
                                  {
                                    "x": 471,
                                    "y": 25
                                  },
                                  {
                                    "x": 440,
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
                                        "x": 440,
                                        "y": 15
                                      },
                                      {
                                        "x": 442,
                                        "y": 15
                                      },
                                      {
                                        "x": 442,
                                        "y": 25
                                      },
                                      {
                                        "x": 440,
                                        "y": 25
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
                                        "x": 443,
                                        "y": 15
                                      },
                                      {
                                        "x": 446,
                                        "y": 15
                                      },
                                      {
                                        "x": 446,
                                        "y": 25
                                      },
                                      {
                                        "x": 443,
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
                                        "x": 447,
                                        "y": 15
                                      },
                                      {
                                        "x": 455,
                                        "y": 15
                                      },
                                      {
                                        "x": 455,
                                        "y": 25
                                      },
                                      {
                                        "x": 447,
                                        "y": 25
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
                                        "x": 456,
                                        "y": 15
                                      },
                                      {
                                        "x": 459,
                                        "y": 15
                                      },
                                      {
                                        "x": 459,
                                        "y": 25
                                      },
                                      {
                                        "x": 456,
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
                                        "x": 460,
                                        "y": 15
                                      },
                                      {
                                        "x": 466,
                                        "y": 15
                                      },
                                      {
                                        "x": 466,
                                        "y": 25
                                      },
                                      {
                                        "x": 460,
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
                                    ],
                                    "detectedBreak": {
                                      "type": "EOL_SURE_SPACE"
                                    }
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 467,
                                        "y": 15
                                      },
                                      {
                                        "x": 471,
                                        "y": 15
                                      },
                                      {
                                        "x": 471,
                                        "y": 25
                                      },
                                      {
                                        "x": 467,
                                        "y": 25
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
                            "x": 575,
                            "y": 15
                          },
                          {
                            "x": 610,
                            "y": 15
                          },
                          {
                            "x": 610,
                            "y": 24
                          },
                          {
                            "x": 575,
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
                                "x": 575,
                                "y": 15
                              },
                              {
                                "x": 610,
                                "y": 15
                              },
                              {
                                "x": 610,
                                "y": 24
                              },
                              {
                                "x": 575,
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
                                    "x": 575,
                                    "y": 15
                                  },
                                  {
                                    "x": 610,
                                    "y": 15
                                  },
                                  {
                                    "x": 610,
                                    "y": 24
                                  },
                                  {
                                    "x": 575,
                                    "y": 24
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
                                        "x": 575,
                                        "y": 15
                                      },
                                      {
                                        "x": 580,
                                        "y": 15
                                      },
                                      {
                                        "x": 580,
                                        "y": 24
                                      },
                                      {
                                        "x": 575,
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
                                        "x": 581,
                                        "y": 15
                                      },
                                      {
                                        "x": 585,
                                        "y": 15
                                      },
                                      {
                                        "x": 585,
                                        "y": 24
                                      },
                                      {
                                        "x": 581,
                                        "y": 24
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
                                        "x": 586,
                                        "y": 15
                                      },
                                      {
                                        "x": 590,
                                        "y": 15
                                      },
                                      {
                                        "x": 590,
                                        "y": 24
                                      },
                                      {
                                        "x": 586,
                                        "y": 24
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
                                        "x": 591,
                                        "y": 15
                                      },
                                      {
                                        "x": 595,
                                        "y": 15
                                      },
                                      {
                                        "x": 595,
                                        "y": 24
                                      },
                                      {
                                        "x": 591,
                                        "y": 24
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
                                        "x": 596,
                                        "y": 15
                                      },
                                      {
                                        "x": 597,
                                        "y": 15
                                      },
                                      {
                                        "x": 597,
                                        "y": 24
                                      },
                                      {
                                        "x": 596,
                                        "y": 24
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
                                        "x": 598,
                                        "y": 15
                                      },
                                      {
                                        "x": 600,
                                        "y": 15
                                      },
                                      {
                                        "x": 600,
                                        "y": 24
                                      },
                                      {
                                        "x": 598,
                                        "y": 24
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
                                        "x": 601,
                                        "y": 15
                                      },
                                      {
                                        "x": 605,
                                        "y": 15
                                      },
                                      {
                                        "x": 605,
                                        "y": 24
                                      },
                                      {
                                        "x": 601,
                                        "y": 24
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
                                        "x": 606,
                                        "y": 15
                                      },
                                      {
                                        "x": 610,
                                        "y": 15
                                      },
                                      {
                                        "x": 610,
                                        "y": 24
                                      },
                                      {
                                        "x": 606,
                                        "y": 24
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
                            "x": 808,
                            "y": 15
                          },
                          {
                            "x": 832,
                            "y": 15
                          },
                          {
                            "x": 832,
                            "y": 24
                          },
                          {
                            "x": 808,
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
                                "x": 808,
                                "y": 15
                              },
                              {
                                "x": 832,
                                "y": 15
                              },
                              {
                                "x": 832,
                                "y": 24
                              },
                              {
                                "x": 808,
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
                                    "x": 808,
                                    "y": 15
                                  },
                                  {
                                    "x": 832,
                                    "y": 15
                                  },
                                  {
                                    "x": 832,
                                    "y": 24
                                  },
                                  {
                                    "x": 808,
                                    "y": 24
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
                                        "x": 808,
                                        "y": 15
                                      },
                                      {
                                        "x": 811,
                                        "y": 15
                                      },
                                      {
                                        "x": 811,
                                        "y": 24
                                      },
                                      {
                                        "x": 808,
                                        "y": 24
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
                                        "x": 812,
                                        "y": 15
                                      },
                                      {
                                        "x": 816,
                                        "y": 15
                                      },
                                      {
                                        "x": 816,
                                        "y": 24
                                      },
                                      {
                                        "x": 812,
                                        "y": 24
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
                                        "x": 817,
                                        "y": 15
                                      },
                                      {
                                        "x": 820,
                                        "y": 15
                                      },
                                      {
                                        "x": 820,
                                        "y": 24
                                      },
                                      {
                                        "x": 817,
                                        "y": 24
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
                                        "x": 821,
                                        "y": 15
                                      },
                                      {
                                        "x": 824,
                                        "y": 15
                                      },
                                      {
                                        "x": 824,
                                        "y": 24
                                      },
                                      {
                                        "x": 821,
                                        "y": 24
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
                                        "x": 825,
                                        "y": 15
                                      },
                                      {
                                        "x": 829,
                                        "y": 15
                                      },
                                      {
                                        "x": 829,
                                        "y": 24
                                      },
                                      {
                                        "x": 825,
                                        "y": 24
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
                                        "x": 830,
                                        "y": 15
                                      },
                                      {
                                        "x": 832,
                                        "y": 15
                                      },
                                      {
                                        "x": 832,
                                        "y": 24
                                      },
                                      {
                                        "x": 830,
                                        "y": 24
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
                            "x": 857,
                            "y": 15
                          },
                          {
                            "x": 882,
                            "y": 15
                          },
                          {
                            "x": 882,
                            "y": 25
                          },
                          {
                            "x": 857,
                            "y": 25
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
                                "x": 857,
                                "y": 15
                              },
                              {
                                "x": 882,
                                "y": 15
                              },
                              {
                                "x": 882,
                                "y": 25
                              },
                              {
                                "x": 857,
                                "y": 25
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
                                    "x": 857,
                                    "y": 15
                                  },
                                  {
                                    "x": 882,
                                    "y": 15
                                  },
                                  {
                                    "x": 882,
                                    "y": 25
                                  },
                                  {
                                    "x": 857,
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
                                        "x": 857,
                                        "y": 15
                                      },
                                      {
                                        "x": 860,
                                        "y": 15
                                      },
                                      {
                                        "x": 860,
                                        "y": 25
                                      },
                                      {
                                        "x": 857,
                                        "y": 25
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
                                        "x": 861,
                                        "y": 15
                                      },
                                      {
                                        "x": 864,
                                        "y": 15
                                      },
                                      {
                                        "x": 864,
                                        "y": 25
                                      },
                                      {
                                        "x": 861,
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
                                        "x": 865,
                                        "y": 15
                                      },
                                      {
                                        "x": 869,
                                        "y": 15
                                      },
                                      {
                                        "x": 869,
                                        "y": 25
                                      },
                                      {
                                        "x": 865,
                                        "y": 25
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
                                        "x": 870,
                                        "y": 15
                                      },
                                      {
                                        "x": 873,
                                        "y": 15
                                      },
                                      {
                                        "x": 873,
                                        "y": 25
                                      },
                                      {
                                        "x": 870,
                                        "y": 25
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
                                        "x": 874,
                                        "y": 15
                                      },
                                      {
                                        "x": 877,
                                        "y": 15
                                      },
                                      {
                                        "x": 877,
                                        "y": 25
                                      },
                                      {
                                        "x": 874,
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
                                    ],
                                    "detectedBreak": {
                                      "type": "EOL_SURE_SPACE"
                                    }
                                  },
                                  "boundingBox": {
                                    "vertices": [
                                      {
                                        "x": 878,
                                        "y": 15
                                      },
                                      {
                                        "x": 882,
                                        "y": 15
                                      },
                                      {
                                        "x": 882,
                                        "y": 25
                                      },
                                      {
                                        "x": 878,
                                        "y": 25
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
                    }
                  ]
                }
              ],
              "text": "Player\nHealth Restorad\nKills\nDamage\nSurvived\nRevive\nRating\n"
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
  }