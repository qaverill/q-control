module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'import/no-unresolved': [2, { ignore: ['@q'] }],
    'react/forbid-prop-types': 0,
    'react/prop-types': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src/packages'],
      },
    },
  },
};
