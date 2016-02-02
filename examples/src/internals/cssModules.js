import cssModules from 'css-modules-require-hook';

cssModules({
  // generateScopedName: '[name]__[local]___[hash:base64:4]',
  generateScopedName: '[name]__[local]'
});

export default cssModules;
