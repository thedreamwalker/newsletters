module.exports = {
  root: true,

  parserOptions: {
    sourceType: 'module',
    requireConfigFile: false,
    ecmaVersion: 2023,
    ecmaFeatures: {
      modules: true
    }
  },

  env: {
    node: true,
    browser: true
  },

  globals: {
    defineProps: true,
    defineEmits: true,
    defineExpose: true
  },

  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:tailwindcss/recommended',
    'plugin:prettier/recommended',
    'prettier'
  ],

  plugins: ['tailwindcss', 'prettier']
}
