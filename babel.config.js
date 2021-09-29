module.exports = {
  "presets": [
    ["@babel/env", {
      "useBuiltIns": "usage",
      "corejs": 3
    }],
    "@babel/preset-typescript"
  ],
  "plugins": [
    "@babel/proposal-class-properties",
    "@babel/proposal-object-rest-spread"
  ],
  sourceType: 'unambiguous'
};
