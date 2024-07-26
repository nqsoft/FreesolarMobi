module.exports = {
  presets: ['module:metro-react-native-babel-preset', '@babel/preset-flow'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@src': ['./src'],
          '@utils': ['./src/utils'],
          '@store': ['./src/store'],
          '@assets': ['./src/assets'],
          '@themes': ['./src/themes'],
          '@common': ['./src/common'],
          '@config': ['./src/config'],
          '@screens': ['./src/screens'],
          '@components': ['./src/components'],
          '@navigation': ['./src/navigation'],
        },
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
      },
    ],
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
};
