# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `typescript > cast > null-assertion-and-assign-2`

```javascript
Program {
  comments: Array []
  corrupt: false
  diagnostics: Array []
  directives: Array []
  filename: 'input.ts'
  hasHoistedVars: false
  interpreter: undefined
  mtime: undefined
  sourceType: 'module'
  syntax: Array ['ts']
  loc: Object {
    filename: 'input.ts'
    end: Object {
      column: 0
      index: 8
      line: 2
    }
    start: Object {
      column: 0
      index: 0
      line: 1
    }
  }
  body: Array [
    ExpressionStatement {
      loc: Object {
        filename: 'input.ts'
        end: Object {
          column: 7
          index: 7
          line: 1
        }
        start: Object {
          column: 0
          index: 0
          line: 1
        }
      }
      expression: AssignmentExpression {
        operator: '*='
        loc: Object {
          filename: 'input.ts'
          end: Object {
            column: 7
            index: 7
            line: 1
          }
          start: Object {
            column: 0
            index: 0
            line: 1
          }
        }
        right: NumericLiteral {
          value: 1
          format: undefined
          loc: Object {
            filename: 'input.ts'
            end: Object {
              column: 7
              index: 7
              line: 1
            }
            start: Object {
              column: 6
              index: 6
              line: 1
            }
          }
        }
        left: TSAssignmentNonNullExpression {
          loc: Object {
            filename: 'input.ts'
            end: Object {
              column: 2
              index: 2
              line: 1
            }
            start: Object {
              column: 0
              index: 0
              line: 1
            }
          }
          expression: AssignmentIdentifier {
            name: 'x'
            loc: Object {
              filename: 'input.ts'
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
        }
      }
    }
  ]
}
```
