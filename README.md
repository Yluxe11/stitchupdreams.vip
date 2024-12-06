<!doctype html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Stitch Up Dreams (SUD) - حيث تلتقي الأحلام بالتصميم</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <style>
      body {
        font-family: 'Cairo', sans-serif;
      }
    </style>
  </head>
  <body class="bg-gray-100 text-gray-900">
    <header class="bg-blue-600 text-white py-4 shadow-md">
      <div class="container mx-auto px-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold">Stitch Up Dreams</h1>
        <nav>
          <ul class="flex space-x-4">
            <li><a href="#" class="hover:text-blue-200">الرئيسية</a></li>
            <li><a href="#" class="hover:text-blue-200">خدماتنا</a></li>
            <li><a href="#" class="hover:text-blue-200">معرض الأعمال</a></li>
            <li><a href="#" class="hover:text-blue-200">اتصل بنا</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  }
);
