module.exports = {
  env: {
    node: true,
    es6: true
  },
  extends: [
    'eslint:all',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended'
  ],
  plugins: [
    '@typescript-eslint'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json'
  },
  rules: {
    // Specific settings for this project
    'no-console': 'off',  // To allow for CLI project

    // Disable Lint settings
    'no-warning-comments':                     'warn',  // To allow for development productivity.
    'class-methods-use-this':                  'off',   // To prioritize semantics of writing utilities as static methods.
    'max-classes-per-file':                    'off',   // To grouping of meaningful classes. (e.g. grouping similar models and/or models attached to related class)
    'no-magic-numbers':                        'off',   // To handle numerical values directly like HTTP status code.
    'no-negated-condition':                    'off',   // To prioritize semantics of conditional expressions.
    'no-undefined':                            'off',   // To use of TypeScript is prohibited from changing global objects.
    'sort-keys':                               'off',   // To prioritize semantic order over alphabetical order. (e.g. prefer 'id, name, email' to 'email, id, name')
    '@typescript-eslint/no-use-before-define': 'off',   // To keep readability by declaring lower importance(like private function) at low position in file.

    // Customize Lint settings
    'newline-per-chained-call': [ 'error', { ignoreChainWithDepth: 4 }],  // To take advantage of chained call flexibility.

    // Switch rule from ESLint to plugins
    'no-extra-parens':        'off',  '@typescript-eslint/no-extra-parens':        'error',
    'no-useless-constructor': 'off',  '@typescript-eslint/no-useless-constructor': 'error',
    'require-await':          'off',  '@typescript-eslint/require-await':          'error',

    // By the coding style of project
    'array-bracket-newline':            [ 'error', 'consistent' ],
    'array-bracket-spacing':            [ 'error', 'always', { 'arraysInArrays': false, 'objectsInArrays': false }],
    'array-element-newline':            [ 'error', 'consistent' ],
    'brace-style':                      [ 'error', '1tbs', { 'allowSingleLine': true }],
    'dot-location':                     [ 'off' ],
    'function-call-argument-newline':   [ 'error', 'consistent' ],
    'indent':                           [ 'error', 2, { 'SwitchCase': 1 }],
    'key-spacing':                      [ 'error', { 'mode': 'minimum' }],
    'line-comment-position':            [ 'off' ],
    'lines-around-comment':             [ 'error', { 'allowBlockStart': true }],
    'lines-between-class-members':      [ 'error', 'always', { exceptAfterSingleLine: true }],
    'multiline-ternary':                [ 'error', 'always-multiline' ],
    'multiline-comment-style':          [ 'error', 'separate-lines' ],
    'no-inline-comments':               [ 'off' ],
    'no-multi-spaces':                  [ 'error', { 'exceptions': { 'Property': true, 'VariableDeclarator': true }, ignoreEOLComments: true }],
    'no-nested-ternary':                [ 'off' ],
    'no-ternary':                       [ 'off' ],
    'object-curly-spacing':             [ 'error', 'always', { 'arraysInObjects': false, 'objectsInObjects': false }],
    'object-property-newline':          [ 'error', { 'allowAllPropertiesOnSameLine': true }],
    'one-var':                          [ 'error', 'never' ],
    'padded-blocks':                    [ 'error', { 'blocks': 'never', 'switches': 'never' }, { 'allowSingleLineBlocks': true }],
    'prefer-destructuring':             [ 'error', { AssignmentExpression: { array: false }}],
    'quotes':                           [ 'error', 'single', { 'avoidEscape': true }],
    'quote-props':                      [ 'error', 'consistent-as-needed' ],
    'sort-imports':                     [ 'off' ],
    'space-before-function-paren':      [ 'error', { 'anonymous': 'never', 'named': 'never' }],
    'yoda':                             [ 'off' ],

    // Disable for existing projects, however enable rules for new projects
    'max-len':                  'off',
    'max-lines':                'off',
    'max-lines-per-function':   'off',
    'max-params':               'off',
    'max-statements':           'off',
    'max-statements-per-line':  'off'
  }
}
