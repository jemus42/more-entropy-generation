module.exports = {
	env: {
		browser: true,
		es6: true
	},
	extends: ["airbnb", "prettier", "prettier/react", "prettier/@typescript-eslint"],
	globals: {
		Atomics: "readonly",
		SharedArrayBuffer: "readonly"
	},
	settings: {
		"import/resolver": {
			node: {
				extensions: [".js", ".jsx", ".ts", ".tsx"]
			},
			alias: {
				map: [
					['@ssc', './src']
				],
				extensions: ['.js', '.jsx', '.ts', '.tsx']
			}
		}
	},
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 2018,
		sourceType: "module"
	},
	plugins: ["react", "@typescript-eslint", "prettier", "react-hooks"],
	//these files are coming from react. we wont touch them, so we wont lint them
	ignorePatterns: ["serviceWorker.ts", "setupTests.ts", "react-app-env.d.ts"],
	rules: {
		"import/extensions": "off",
		"import/no-unresolved": "warn",
		"lines-between-class-members": "off",
		"class-methods-use-this": "off",
		"semi": "off",
		"react/no-multi-comp": "error",
		"react/prefer-es6-class": ["error", "always"],
		"react/prefer-stateless-function": "warn",
		"react/jsx-boolean-value": ["error", "never"],
		"react/jsx-filename-extension": "off",
		"react/jsx-no-bind": "error",
		"react/jsx-pascal-case": "error",
		"react/no-array-index-key": "warn",
		"react/no-string-refs": "warn",
		"react/self-closing-comp": [
			"error",
			{
				component: true
			}
		],
		"react/require-render-return": "error",
		"react/sort-comp": "off",
		"react/no-is-mounted": "error",
		"react/prop-types": ["off"],
		"react/destructuring-assignment": "off",
		//		a11y down here - do we want to enable those?
		//		"jsx-a11y/alt-text": "warn",
		//		"jsx-a11y/img-redundant-alt": "warn",
		//		"jsx-a11y/aria-role": "warn",
		//		"jsx-a11y/no-access-key": "warn"
		"@typescript-eslint/no-unused-vars": [
			"error"
		],
		"prettier/prettier": ["error", { "singleQuote": true, "trailingComma": "none", "print-width": 120 }]
	},
	overrides: [
		{
			files: ["*.stories.{mdx,tsx,ts,jsx,js}"],
			rules: {
				"react/no-multi-comp": "off"
			}
		}, {
			files: ["**/*.spec.{tsx,ts,jsx,js}"],
			env: {
				"jest": true
			}
		}
	]
};
