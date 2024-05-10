module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.ts',
          '.tsx',
          '.json',
          '.ios.tsx',
          '.android.tsx',
        ],
        alias: {
          tests: ['./__tests__/'],
          '@components': './src/components',
          '@pages': './src/pages',
          '@constants': './src/constants',
          '@helpers': './src/helpers',
          '@models': './src/models',
          '@services': './src/services',
          '@themes': './src/themes',
          '@store': './src/store',
          '@configs': './configs',
          '@assets': './src/assets',
          '@plugins': './src/plugins',
        },
      },
    ],
  ],
};
