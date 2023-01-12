module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      // To Make Smaller bundler of react native paper
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    ['@babel/plugin-proposal-optional-catch-binding'],
    [
      'module-resolver',
      {
        root: ['./app'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@components': './app/components',
          '@screens': './app/screens',
          '@styles': './app/styles',
          '@services': './app/services',
          '@theme': './app/theme',
          '@routers': './app/routers',
          '@redux': './app/redux',
          '@assets': './app/assets',
          '@helper': './app/helper',
          '@images': './app/assets/images',
          '@utils': './app/utils',
          '@navigators': './app/navigators',
          '@models': './app/models',
          '@story': './storybook',
          '@store': './app/store',
          '@hooks': './app/hooks',
        },
      },
    ],
  ],
};
