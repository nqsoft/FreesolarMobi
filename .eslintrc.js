module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-hook'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  'prettier/prettier': [
    'error',
    {
      bracketSpacing: true,
      jsxBracketSameLine: true,
      singleQuote: true,
      trailingComma: 'all',
      printWidth: 120,
      endOfLine: 'auto',
      semi: true,
    },
  ],
};
