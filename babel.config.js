module.exports =
{
  presets: ['babel-preset-expo'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx'],
        alias: {
          '@insync': './src/@insync',
        }
      },
    ],
  ]
}
