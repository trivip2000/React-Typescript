module.exports = {
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true,
    jest:true
  },
  "plugins": ["prettier"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  parser: '@typescript-eslint/parser',
  extends: ["plugin:@typescript-eslint/recommended",'eslint:recommended', 'plugin:react/recommended',"prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        "singleQuote": false,
        semicolons:false,
        semi:false,
        'react/jsx-max-props-per-line': [ 'error', { 'maximum': 3 }],
        printWidth:150,
        endOfLine:"auto"
      }
    ],
    'react/prop-types': 0,
    "no-console": "off",
    "no-redeclare":"off",
    quotes: [1, 'double'],
    "@typescript-eslint/no-namespace":"off",
    "@typescript-eslint/member-delimiter-style":"off",
    "@typescript-eslint/no-explicit-any":"off",
    "@typescript-eslint/explicit-function-return-type":"off",
    "typescript-eslint/no-var-requires":"off",
    'react/jsx-uses-vars': 2,
    "semi": [2, "never"],
    "no-multiple-empty-lines": [2, { "max": 1, "maxEOF": 2 }],
    "react/no-children-prop":"off",
    'react/jsx-boolean-value': 'error',
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-equals-spacing': 'error',
    'react/jsx-first-prop-new-line': 'error',
    'react/jsx-indent-props': [ 'warning', 2 ],
    'react/jsx-indent': [ 'warning', 2 ],
    'react/jsx-key': 'error',
    'react/jsx-no-literals': 'off',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-pascal-case': 'warning',
    'react/jsx-space-before-closing': 'error',
  }
};
