# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > yield > function-name-generator-method`

```javascript
Program {
  comments: Array []
  corrupt: false
  diagnostics: Array []
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
      column: 1
      index: 25
      line: 3
    }
    start: Object {
      column: 0
      index: 0
      line: 1
    }
  }
  body: Array [
    ClassDeclaration {
      id: BindingIdentifier {
        name: 'A'
        loc: Object {
          filename: 'input.js'
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
      loc: Object {
        filename: 'input.js'
        end: Object {
          column: 1
          index: 25
          line: 3
        }
        start: Object {
          column: 0
          index: 0
          line: 1
        }
      }
      meta: ClassHead {
        implements: undefined
        superClass: undefined
        superTypeParameters: undefined
        typeParameters: undefined
        loc: Object {
          filename: 'input.js'
          end: Object {
            column: 1
            index: 25
            line: 3
          }
          start: Object {
            column: 0
            index: 0
            line: 1
          }
        }
        body: Array [
          ClassMethod {
            kind: 'method'
            key: StaticPropertyKey {
              value: Identifier {
                name: 'yield'
                loc: Object {
                  filename: 'input.js'
                  end: Object {
                    column: 8
                    index: 18
                    line: 2
                  }
                  start: Object {
                    column: 3
                    index: 13
                    line: 2
                  }
                }
              }
              variance: undefined
              loc: Object {
                filename: 'input.js'
                end: Object {
                  column: 8
                  index: 18
                  line: 2
                }
                start: Object {
                  column: 3
                  index: 13
                  line: 2
                }
              }
            }
            loc: Object {
              filename: 'input.js'
              end: Object {
                column: 13
                index: 23
                line: 2
              }
              start: Object {
                column: 2
                index: 12
                line: 2
              }
            }
            body: BlockStatement {
              body: Array []
              directives: Array []
              loc: Object {
                filename: 'input.js'
                end: Object {
                  column: 13
                  index: 23
                  line: 2
                }
                start: Object {
                  column: 11
                  index: 21
                  line: 2
                }
              }
            }
            head: FunctionHead {
              async: false
              generator: true
              hasHoistedVars: false
              params: Array []
              predicate: undefined
              rest: undefined
              returnType: undefined
              thisType: undefined
              typeParameters: undefined
              loc: Object {
                filename: 'input.js'
                end: Object {
                  column: 11
                  index: 21
                  line: 2
                }
                start: Object {
                  column: 8
                  index: 18
                  line: 2
                }
              }
            }
            meta: ClassPropertyMeta {
              abstract: false
              accessibility: undefined
              optional: false
              readonly: false
              static: false
              typeAnnotation: undefined
              start: Object {
                column: 2
                index: 12
                line: 2
              }
              loc: Object {
                filename: 'input.js'
                end: Object {
                  column: 8
                  index: 18
                  line: 2
                }
                start: Object {
                  column: 2
                  index: 12
                  line: 2
                }
              }
            }
          }
        ]
      }
    }
  ]
}
```
