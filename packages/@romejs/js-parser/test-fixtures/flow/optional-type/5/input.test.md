# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `flow > optional-type > 5`

```javascript
Program {
  comments: Array []
  corrupt: true
  directives: Array []
  filename: 'input.js'
  hasHoistedVars: false
  interpreter: undefined
  mtime: undefined
  sourceType: 'module'
  syntax: Array [
    'jsx'
    'flow'
  ]
  loc: Object {
    filename: 'input.js'
    end: Object {
      column: 0
      index: 69
      line: 2
    }
    start: Object {
      column: 0
      index: 0
      line: 1
    }
  }
  diagnostics: Array [
    Object {
      origins: Array [Object {category: 'js-parser'}]
      description: Object {
        advice: Array []
        category: 'parse/js'
        message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: 'Unexpected token, expected ,'}
      }
      location: Object {
        filename: 'input.js'
        mtime: undefined
        sourceType: 'module'
        end: Object {
          column: 59
          index: 59
          line: 1
        }
        start: Object {
          column: 59
          index: 59
          line: 1
        }
      }
    }
  ]
  body: Array [
    ExpressionStatement {
      loc: Object {
        filename: 'input.js'
        end: Object {
          column: 60
          index: 60
          line: 1
        }
        start: Object {
          column: 0
          index: 0
          line: 1
        }
      }
      expression: ConditionalExpression {
        loc: Object {
          filename: 'input.js'
          end: Object {
            column: 60
            index: 60
            line: 1
          }
          start: Object {
            column: 0
            index: 0
            line: 1
          }
        }
        consequent: ReferenceIdentifier {
          name: 'b'
          loc: Object {
            filename: 'input.js'
            end: Object {
              column: 5
              index: 5
              line: 1
            }
            start: Object {
              column: 4
              index: 4
              line: 1
            }
          }
        }
        test: ReferenceIdentifier {
          name: 'a'
          loc: Object {
            filename: 'input.js'
            end: Object {
              column: 1
              index: 1
              line: 1
            }
            start: Object {
              column: 0
              index: 0
              line: 1
            }
          }
        }
        alternate: ConditionalExpression {
          loc: Object {
            filename: 'input.js'
            end: Object {
              column: 60
              index: 60
              line: 1
            }
            start: Object {
              column: 8
              index: 8
              line: 1
            }
          }
          consequent: ReferenceIdentifier {
            name: 'd'
            loc: Object {
              filename: 'input.js'
              end: Object {
                column: 13
                index: 13
                line: 1
              }
              start: Object {
                column: 12
                index: 12
                line: 1
              }
            }
          }
          test: ReferenceIdentifier {
            name: 'c'
            loc: Object {
              filename: 'input.js'
              end: Object {
                column: 9
                index: 9
                line: 1
              }
              start: Object {
                column: 8
                index: 8
                line: 1
              }
            }
          }
          alternate: ConditionalExpression {
            loc: Object {
              filename: 'input.js'
              end: Object {
                column: 60
                index: 60
                line: 1
              }
              start: Object {
                column: 16
                index: 16
                line: 1
              }
            }
            consequent: ReferenceIdentifier {
              name: 'f'
              loc: Object {
                filename: 'input.js'
                end: Object {
                  column: 21
                  index: 21
                  line: 1
                }
                start: Object {
                  column: 20
                  index: 20
                  line: 1
                }
              }
            }
            test: ReferenceIdentifier {
              name: 'e'
              loc: Object {
                filename: 'input.js'
                end: Object {
                  column: 17
                  index: 17
                  line: 1
                }
                start: Object {
                  column: 16
                  index: 16
                  line: 1
                }
              }
            }
            alternate: ConditionalExpression {
              loc: Object {
                filename: 'input.js'
                end: Object {
                  column: 60
                  index: 60
                  line: 1
                }
                start: Object {
                  column: 24
                  index: 24
                  line: 1
                }
              }
              consequent: ReferenceIdentifier {
                name: 'h'
                loc: Object {
                  filename: 'input.js'
                  end: Object {
                    column: 29
                    index: 29
                    line: 1
                  }
                  start: Object {
                    column: 28
                    index: 28
                    line: 1
                  }
                }
              }
              test: ReferenceIdentifier {
                name: 'g'
                loc: Object {
                  filename: 'input.js'
                  end: Object {
                    column: 25
                    index: 25
                    line: 1
                  }
                  start: Object {
                    column: 24
                    index: 24
                    line: 1
                  }
                }
              }
              alternate: ConditionalExpression {
                loc: Object {
                  filename: 'input.js'
                  end: Object {
                    column: 60
                    index: 60
                    line: 1
                  }
                  start: Object {
                    column: 32
                    index: 32
                    line: 1
                  }
                }
                consequent: ReferenceIdentifier {
                  name: 'j'
                  loc: Object {
                    filename: 'input.js'
                    end: Object {
                      column: 37
                      index: 37
                      line: 1
                    }
                    start: Object {
                      column: 36
                      index: 36
                      line: 1
                    }
                  }
                }
                test: ReferenceIdentifier {
                  name: 'i'
                  loc: Object {
                    filename: 'input.js'
                    end: Object {
                      column: 33
                      index: 33
                      line: 1
                    }
                    start: Object {
                      column: 32
                      index: 32
                      line: 1
                    }
                  }
                }
                alternate: ConditionalExpression {
                  loc: Object {
                    filename: 'input.js'
                    end: Object {
                      column: 60
                      index: 60
                      line: 1
                    }
                    start: Object {
                      column: 40
                      index: 40
                      line: 1
                    }
                  }
                  consequent: ReferenceIdentifier {
                    name: 'l'
                    loc: Object {
                      filename: 'input.js'
                      end: Object {
                        column: 45
                        index: 45
                        line: 1
                      }
                      start: Object {
                        column: 44
                        index: 44
                        line: 1
                      }
                    }
                  }
                  test: ReferenceIdentifier {
                    name: 'k'
                    loc: Object {
                      filename: 'input.js'
                      end: Object {
                        column: 41
                        index: 41
                        line: 1
                      }
                      start: Object {
                        column: 40
                        index: 40
                        line: 1
                      }
                    }
                  }
                  alternate: ConditionalExpression {
                    loc: Object {
                      filename: 'input.js'
                      end: Object {
                        column: 60
                        index: 60
                        line: 1
                      }
                      start: Object {
                        column: 48
                        index: 48
                        line: 1
                      }
                    }
                    alternate: ReferenceIdentifier {
                      name: 'o'
                      loc: Object {
                        filename: 'input.js'
                        end: Object {
                          column: 58
                          index: 58
                          line: 1
                        }
                        start: Object {
                          column: 57
                          index: 57
                          line: 1
                        }
                      }
                    }
                    consequent: ReferenceIdentifier {
                      name: 'n'
                      loc: Object {
                        filename: 'input.js'
                        end: Object {
                          column: 53
                          index: 53
                          line: 1
                        }
                        start: Object {
                          column: 52
                          index: 52
                          line: 1
                        }
                      }
                    }
                    test: ReferenceIdentifier {
                      name: 'm'
                      loc: Object {
                        filename: 'input.js'
                        end: Object {
                          column: 49
                          index: 49
                          line: 1
                        }
                        start: Object {
                          column: 48
                          index: 48
                          line: 1
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    LabeledStatement {
      loc: Object {
        filename: 'input.js'
        end: Object {
          column: 66
          index: 66
          line: 1
        }
        start: Object {
          column: 61
          index: 61
          line: 1
        }
      }
      label: Identifier {
        name: 'p'
        loc: Object {
          filename: 'input.js'
          end: Object {
            column: 62
            index: 62
            line: 1
          }
          start: Object {
            column: 61
            index: 61
            line: 1
          }
        }
      }
      body: ExpressionStatement {
        loc: Object {
          filename: 'input.js'
          end: Object {
            column: 66
            index: 66
            line: 1
          }
          start: Object {
            column: 65
            index: 65
            line: 1
          }
        }
        expression: ReferenceIdentifier {
          name: 'INVALID_PLACEHOLDER'
          loc: Object {
            filename: 'input.js'
            end: Object {
              column: 66
              index: 66
              line: 1
            }
            start: Object {
              column: 65
              index: 65
              line: 1
            }
          }
        }
      }
    }
    ExpressionStatement {
      loc: Object {
        filename: 'input.js'
        end: Object {
          column: 68
          index: 68
          line: 1
        }
        start: Object {
          column: 66
          index: 66
          line: 1
        }
      }
      expression: ReferenceIdentifier {
        name: 'INVALID_PLACEHOLDER'
        loc: Object {
          filename: 'input.js'
          end: Object {
            column: 67
            index: 67
            line: 1
          }
          start: Object {
            column: 66
            index: 66
            line: 1
          }
        }
      }
    }
  ]
}
```
