/* eslint-disable key-spacing */      // 'cuz configuration file
/* eslint-disable no-magic-numbers */ // 'cuz configuration file

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: 'tsconfig.json',
    extraFileExtensions: [ '.vue' ]
  },
  plugins: [
    'nuxt',
    '@typescript-eslint'
  ],
  extends: [
    'eslint:all',
    'plugin:vue/recommended',
    'plugin:nuxt/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended'
  ],
  rules: {

    // Warning configurations
    'capitalized-comments':                    'warn', // To allow for development productivity.
    'no-console':                              'warn', // To be removed by bundler when production stage
    'no-warning-comments':                     'warn', // To allow for development productivity.

    // Disabled configurations
    'max-classes-per-file':                    'off', // To grouping of meaningful classes. (e.g. grouping similar models and/or models attached to related class)
    'no-negated-condition':                    'off', // To prioritize semantics of conditional expressions.
    'no-undefined':                            'off', // To use of TypeScript is prohibited from changing global objects.
    'no-use-before-define':                    'off', // To keep readability by declaring lower importance(like private function) at low position in file.
    'sort-imports':                            'off', // No rules fit project's coding conventions, review to confirm
    'sort-keys':                               'off', // To prioritize semantic order over alphabetical order. (e.g. prefer 'id, name, email' to 'email, id, name')
    '@typescript-eslint/no-use-before-define': 'off', // To keep readability by declaring lower importance(like private function) at low position in file.

    // Customized configurations
    'id-length':                [ 'error', { exceptions: [ 'i', 'k', 'l', 'r', 'v', 'x', 'y', 'z' ]}], // To allow general key words and short.
    'newline-per-chained-call': [ 'error', { ignoreChainWithDepth: 4 }],                               // To take advantage of chained call flexibility.
    'no-magic-numbers':         [ 'error', { ignore: [ -1, 0, 1, 2, 24, 60, 120, 200, 400, 500 ]}],    // To handle numerical values directly like time, HTTP status code, etc...

    // Switch rule from ESLint to plugins
    'no-useless-constructor': 'off', '@typescript-eslint/no-useless-constructor': 'error', // eslint-disable-line object-property-newline

    // By the coding style of project
    'array-bracket-newline':          [ 'error', 'consistent' ],
    'array-bracket-spacing':          [ 'error', 'always', { arraysInArrays: false, objectsInArrays: false }],
    'array-element-newline':          [ 'error', 'consistent' ],
    'brace-style':                    [ 'error', '1tbs', { allowSingleLine: true }],
    'function-call-argument-newline': [ 'error', 'consistent' ],
    'implicit-arrow-linebreak':       [ 'off' ],
    'indent':                         [ 'error', 2, { SwitchCase: 1 }],
    'line-comment-position':          [ 'off' ],
    'lines-around-comment':           [ 'error', { allowBlockStart: true }],
    'lines-between-class-members':    [ 'error', 'always', { exceptAfterSingleLine: true }],
    'max-len':                        [ 'off' ],
    'max-lines':                      [ 'off' ],
    'max-lines-per-function':         [ 'off' ],
    'max-params':                     [ 'off' ],
    'max-statements':                 [ 'off' ],
    'max-statements-per-line':        [ 'off' ],
    'multiline-ternary':              [ 'error', 'always-multiline' ],
    'no-confusing-arrow':             [ 'off' ],
    'no-inline-comments':             [ 'off' ],
    'no-loss-of-precision':           [ 'off' ],
    'no-mixed-operators':             [ 'off' ],
    'no-multi-spaces':                [ 'error', { exceptions: { Property: true, VariableDeclarator: true }, ignoreEOLComments: true }],
    'no-nested-ternary':              [ 'off' ],
    'no-plusplus':                    [ 'off' ],
    'no-ternary':                     [ 'off' ],
    'object-curly-spacing':           [ 'error', 'always', { arraysInObjects: false, objectsInObjects: false }],
    'object-property-newline':        [ 'error', { allowAllPropertiesOnSameLine: true }],
    'one-var':                        [ 'error', 'never' ],
    'padded-blocks':                  [ 'error', { switches: 'never' }, { allowSingleLineBlocks: true }],
    'quotes':                         [ 'error', 'single', { avoidEscape: true }],
    'quote-props':                    [ 'error', 'consistent-as-needed' ],
    'space-before-function-paren':    [ 'error', { anonymous: 'never', named: 'never' }],
    'yoda':                           [ 'off' ],
    'vue/max-attributes-per-line':                 [ 'off' ],
    'vue/multiline-html-element-content-newline':  [ 'error', { allowEmptyLines: true }],
    'vue/singleline-html-element-content-newline': [ 'off', { ignores: [ 'a','h1', 'h2', 'span', 'g-link', 'n-link', 'v-btn', 'v-icon' ]}]
  }
};
