module.exports = {
  root: true,
  extends: ["plugin:tailwindcss/recommended", 'eslint-config-prettier'],
  plugins: ["tailwindcss"],
  
  overrides: [
    {
      "files": ["src/**/*.js"],
      "extends": ["eslint:recommended"],
      "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": 'module',
      },
      "env": {
        "browser": true,
        "node": true,
      },
    },
    {
      "files": ['*.vue'],
      "parser": 'vue-eslint-parser',
      "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": 'module',
      },
    },
  ],
  "rules": {
    "tailwindcss/classnames-order": "warn",
    "tailwindcss/no-custom-classname": "warn",
    "tailwindcss/no-contradicting-classname": "error"
  }
};