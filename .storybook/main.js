module.exports = {
  stories: [
    "../src/component/**/*.stories.mdx",
    "../src/component/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-interactions",
  ],
  features: {
    interactionsDebugger: true,
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: "babel-loader",
      options: {
        presets: [
          ["react-app", { flow: false, typescript: true }],
          "@emotion/babel-preset-css-prop",
        ],
      },
    });
    return config;
  },
};
