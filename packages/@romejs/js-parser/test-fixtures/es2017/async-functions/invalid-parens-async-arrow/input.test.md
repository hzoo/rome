# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `es2017 > async-functions > invalid-parens-async-arrow`

```javascript
Program {
  comments: Array []
  corrupt: true
  directives: Array []
  filename: 'input.js'
  hasHoistedVars: false
  interpreter: undefined
  mtime: undefined
  sourceType: 'script'
  syntax: Array []
  loc: Object {
    filename: 'input.js'
    end: Object {
      column: 0
      index: 17
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
        category: 'parse/js'
        message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: 'Expected a semicolon or a line terminator'}
      }
      location: Object {
        filename: 'input.js'
        mtime: undefined
        sourceType: 'script'
        end: Object {
          column: 10
          index: 10
          line: 1
        }
        start: Object {
          column: 11
          index: 11
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
          column: 10
          index: 10
          line: 1
        }
        start: Object {
          column: 0
          index: 0
          line: 1
        }
      }
      expression: CallExpression {
        loc: Object {
          filename: 'input.js'
          end: Object {
            column: 10
            index: 10
            line: 1
          }
          start: Object {
            column: 0
            index: 0
            line: 1
          }
        }
        callee: ReferenceIdentifier {
          name: 'async'
          loc: Object {
            filename: 'input.js'
            end: Object {
              column: 6
              index: 6
              line: 1
            }
            start: Object {
              column: 1
              index: 1
              line: 1
            }
          }
        }
        arguments: Array [
          ReferenceIdentifier {
            name: 'a'
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
        ]
      }
    }
    ExpressionStatement {
      loc: Object {
        filename: 'input.js'
        end: Object {
          column: 13
          index: 13
          line: 1
        }
        start: Object {
          column: 11
          index: 11
          line: 1
        }
      }
      expression: ReferenceIdentifier {
        name: 'INVALID_PLACEHOLDER'
        loc: Object {
          filename: 'input.js'
          end: Object {
            column: 13
            index: 13
            line: 1
          }
          start: Object {
            column: 11
            index: 11
            line: 1
          }
        }
      }
    }
    BlockStatement {
      body: Array []
      directives: Array []
      loc: Object {
        filename: 'input.js'
        end: Object {
          column: 16
          index: 16
          line: 1
        }
        start: Object {
          column: 14
          index: 14
          line: 1
        }
      }
    }
  ]
}
```
