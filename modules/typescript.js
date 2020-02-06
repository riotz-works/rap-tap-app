module.exports = function() {
  this.nuxt.options.extensions.push('ts');
  this.extendBuild(config => {
    config.module.rules.push({ test: /\.tsx?$/, use: 'ts-loader' });

    for (const rule of config.module.rules) {
      if (rule.loader === 'vue-loader') {
        rule.options.loaders.ts = 'ts-loader?{"appendTsSuffixTo":["\\\\.vue$"]}';
      }
    };

    if (config.resolve.extensions.indexOf('.ts') === -1) {
      config.resolve.extensions.push('.ts');
    };
  });
};
