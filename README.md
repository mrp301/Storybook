# Storybook を体系定期に学ぶリポジトリ

https://mrp301.github.io/Storybook/

## emotion 使えるようにする

### 追加するモジュール

- `@emotion/react`
- `@emotion/babel-preset-css-prop`
- `@emotion/babel-plugin`
- `@babel-loader`

### Webpack の設定追加

#### main.js

```js
module.exports = {
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
```

## markdown のプレビュー方法

- `Command + Shift + P`を押して、コマンドパレット表示
- `Markdown: Open Preview to the Side`
