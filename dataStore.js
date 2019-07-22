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