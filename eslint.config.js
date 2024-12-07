import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  // Ignore specific directories and files
  { 
    ignores: [
      'dist', 
      'build', 
      'node_modules', 
      '**/*.d.ts', 
      '**/*.config.js',
      '**/*.config.ts'
    ] 
  },
  {
    // Extends recommended configurations for JavaScript and TypeScript
    extends: [
      js.configs.recommended, 
      ...tseslint.configs.recommended,
      // Add additional recommended configs if needed
      // 'plugin:react/recommended',
      // 'plugin:react-hooks/recommended'
    ],
    
    // Apply to TypeScript and TypeScript React files
    files: ['**/*.{ts,tsx}'],
    
    // Language and environment settings
    languageOptions: {
      ecmaVersion: 'latest', // Use latest ECMAScript version
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    
    // Plugins for React and React Hooks
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    
    // Customized ESLint rules
    rules: {
      // React Hooks rules
      ...reactHooks.configs.recommended.rules,
      
      // React Refresh rule
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      
      // Additional recommended TypeScript rules
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      
      // Best practices
      'no-console': 'warn',
      'no-unused-vars': 'warn',
      'prefer-const': 'error',
      
      // TypeScript-specific rules
      '@typescript-eslint/naming-convention': [
        'warn',
        {
          selector: 'variable',
          format: ['camelCase', 'UPPER_CASE', 'PascalCase']
        },
        {
          selector: 'function',
          format: ['camelCase', 'PascalCase']
        }
      ]
    },
    
    // Optional: settings for specific plugins
    settings: {
      react: {
        version: 'detect' // Automatically detect React version
      }
    }
  }
);
