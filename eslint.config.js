import eslint from '@typescript-eslint/eslint-plugin';
import perfectionist from 'eslint-plugin-perfectionist';
import pluginReact from 'eslint-plugin-react';
import reactCompiler from 'eslint-plugin-react-compiler';
import reactHooks from 'eslint-plugin-react-hooks';
import pluginReactRefresh from 'eslint-plugin-react-refresh';
import sonarjs from 'eslint-plugin-sonarjs';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
	{
		files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
		languageOptions: { globals: globals.browser },
	},
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	{
		plugins: {
			eslint,
			perfectionist,
			pluginReactRefresh,
			reactCompiler,
			reactHooks,
			sonarjs,
		},
		rules: {
			'react-hooks/exhaustive-deps': 'warn',
			'react-hooks/rules-of-hooks': 'error',
			'@typescript-eslint/ban-ts-comment': 'off',
			'@typescript-eslint/no-empty-interface': 'off',
			'@typescript-eslint/no-empty-object-type': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-non-null-assertion': 'off',
			'@typescript-eslint/no-unused-vars': 'error',
			'no-unused-vars': 'off',
			'padding-line-between-statements': 'warn',
			'perfectionist/sort-enums': 'warn',
			'perfectionist/sort-imports': 'warn',
			'perfectionist/sort-interfaces': 'warn',
			'perfectionist/sort-jsx-props': [
				'warn',
				{
					ignoreCase: false,
					order: 'asc',
				},
			],
			'perfectionist/sort-objects': [
				'warn',
				{
					ignoreCase: true,
					order: 'asc',
					partitionByComment: false,
					partitionByNewLine: false,
					type: 'alphabetical',
				},
			],
			'perfectionist/sort-variable-declarations': 'warn',
			'prefer-const': ['error', { ignoreReadBeforeAssign: true }],
			'react/jsx-sort-props': 'off',
			'react/no-unescaped-entities': 'off',
			'react/prop-types': 'off',
			'react/react-in-jsx-scope': 'off',
			'react/self-closing-comp': 'warn',
			'reactCompiler/react-compiler': 'error',
		},
	},
];
