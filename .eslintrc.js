module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    'eslint:all',
    'plugin:vue/recommended',
    'plugin:nuxt/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended'
  ],
  plugins: [
    'nuxt',
    '@typescript-eslint'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: 'tsconfig.json',
    sourceType: 'module',
    extraFileExtensions: [ '.vue' ]
  },
  rules: {
    // Disable Lint settings
    'capitalized-comments':                    'warn',  // To allow for development productivity.
    'no-warning-comments':                     'warn',  // To allow for development productivity.
    'class-methods-use-this':                  'off',   // To prioritize semantics of writing utilities as static methods.
    'max-classes-per-file':                    'off',   // To grouping of meaningful classes. (e.g. grouping similar models and/or models attached to related class)
    'no-console':                              'off',   // To be removed by bundler when production stage
    'no-magic-numbers':                        'off',   // To handle numerical values directly like HTTP status code.
    'no-negated-condition':                    'off',   // To prioritize semantics of conditional expressions.
    'no-undefined':                            'off',   // To use of TypeScript is prohibited from changing global objects.
    'sort-keys':                               'off',   // To prioritize semantic order over alphabetical order. (e.g. prefer 'id, name, email' to 'email, id, name')
    '@typescript-eslint/no-use-before-define': 'off',   // To keep readability by declaring lower importance(like private function) at low position in file.

    // Customize Lint settings
    'id-length':                [ 'error', { exceptions: [ 'i', 'k', 'l', 'r', 'v', 'x', 'y', 'z' ]}],  // To allow general key words and short.
    'newline-per-chained-call': [ 'error', { ignoreChainWithDepth: 4 }],                                // To take advantage of chained call flexibility.
    'no-multiple-empty-lines':  [ 'error', { max: 2 }],                                                 // To make code block meaningful.

    // Switch rule from ESLint to plugins
    'no-extra-parens':        'off', '@typescript-eslint/no-extra-parens':        'error',  // eslint-disable-line object-property-newline
    'no-unused-expressions':  'off', '@typescript-eslint/no-unused-expressions':  'error',  // eslint-disable-line object-property-newline
    'no-useless-constructor': 'off', '@typescript-eslint/no-useless-constructor': 'error',  // eslint-disable-line object-property-newline
    'require-await':          'off', '@typescript-eslint/require-await':          'error',  // eslint-disable-line object-property-newline

    // Override rule, see override key below
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-var-requires':               'off',

    // By the coding style of project
    'array-bracket-newline':            [ 'error', 'consistent' ],
    'array-bracket-spacing':            [ 'error', 'always', { arraysInArrays: false, objectsInArrays: false }],
    'array-element-newline':            [ 'error', 'consistent' ],
    'brace-style':                      [ 'error', '1tbs', { allowSingleLine: true }],
    'dot-location':                     [ 'off' ],
    'function-call-argument-newline':   [ 'error', 'consistent' ],
    'indent':                           [ 'error', 2, { SwitchCase: 1 }],
    'key-spacing':                      [ 'error', { mode: 'minimum' }],
    'line-comment-position':            [ 'off' ],
    'lines-around-comment':             [ 'error', { allowBlockStart: true }],
    'lines-between-class-members':      [ 'error', 'always', { exceptAfterSingleLine: true }],
    'max-len':                          [ 'off' ],
    'max-lines':                        [ 'off' ],
    'max-lines-per-function':           [ 'off' ],
    'max-params':                       [ 'off' ],
    'max-statements':                   [ 'off' ],
    'max-statements-per-line':          [ 'off' ],
    'multiline-ternary':                [ 'error', 'always-multiline' ],
    'multiline-comment-style':          [ 'error', 'separate-lines' ],
    'no-confusing-arrow':               [ 'off' ],
    'no-inline-comments':               [ 'off' ],
    'no-multi-spaces':                  [ 'error', { exceptions: { Property: true, VariableDeclarator: true }, ignoreEOLComments: true }],
    'no-nested-ternary':                [ 'off' ],
    'no-plusplus':                      [ 'off' ],
    'no-ternary':                       [ 'off' ],
    'object-curly-spacing':             [ 'error', 'always', { arraysInObjects: false, objectsInObjects: false }],
    'object-property-newline':          [ 'error', { allowAllPropertiesOnSameLine: true }],
    'one-var':                          [ 'error', 'never' ],
    'padded-blocks':                    [ 'error', { blocks: 'never', switches: 'never' }, { allowSingleLineBlocks: true }],
    'prefer-destructuring':             [ 'error', { AssignmentExpression: { array: false }}],
    'quotes':                           [ 'error', 'single', { avoidEscape: true }],
    'quote-props':                      [ 'error', 'consistent-as-needed' ],
    'semi':                             [ 'error', 'always' ],
    'sort-imports':                     [ 'off' ],
    'space-before-function-paren':      [ 'error', { anonymous: 'never', named: 'never' }],
    'yoda':                             [ 'off' ],
    'vue/max-attributes-per-line':                 [ 'off' ],
    'vue/multiline-html-element-content-newline':  [ 'error', { allowEmptyLines: true }],
    'vue/singleline-html-element-content-newline': [ 'off', { ignores: [ 'a','h1', 'h2', 'span', 'g-link', 'n-link', 'v-btn', 'v-icon' ]}]
  },
  overrides: [
    {
      files: [ '*.ts', '*.tsx' ],
      rules: {
        '@typescript-eslint/explicit-function-return-type': [ 'error' ],
        '@typescript-eslint/no-var-requires': [ 'error' ]
      }
    }
  ]
};
