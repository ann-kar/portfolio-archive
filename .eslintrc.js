module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    "quotes": [2, "double"],
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }]
  },
};
