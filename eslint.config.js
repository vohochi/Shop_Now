import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import importPlugin from 'eslint-plugin-import'
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'
import prettierConfig from 'eslint-config-prettier'

export default [
  // Cấu hình mặc định từ các plugin
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  reactPlugin.configs.recommended,
  reactHooksPlugin.configs.recommended,
  importPlugin.configs.recommended,
  jsxA11yPlugin.configs.recommended,
  prettierConfig,

  // Bỏ qua các thư mục/file không cần lint
  {
    ignores: ['node_modules/', 'dist/', 'build/', '*.config.js']
  },

  // Cấu hình chính cho các file JS/TS
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    settings: {
      // Tự động phát hiện phiên bản React
      react: {
        version: 'detect'
      },
      // Cấu hình resolver cho import
      'import/resolver': {
        node: {
          paths: ['src'],
          extensions: ['.js', '.jsx', '.ts', '.tsx']
        }
      }
    },
    rules: {
      // Tắt rule yêu cầu import React trong file JSX
      'react/react-in-jsx-scope': 'off',
      // Cảnh báo khi thẻ <a> không có rel="noreferrer"
      'react/jsx-no-target-blank': 'warn',
      // Tích hợp Prettier rules
      'prettier/prettier': [
        'warn',
        {
          arrowParens: 'always',
          semi: false,
          trailingComma: 'none',
          tabWidth: 2,
          endOfLine: 'auto',
          useTabs: false,
          singleQuote: true,
          printWidth: 120,
          jsxSingleQuote: true
        }
      ]
    }
  }
]
