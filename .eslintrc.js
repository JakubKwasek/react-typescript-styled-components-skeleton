module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: [
		"@typescript-eslint",
		"react"
	],
	env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended"
	],
	rules: {
		"no-unused-vars": "off",
		"@typescript-eslint/no-unused-vars": "off",
		"@typescript-eslint/no-var-requires": "off",
		"@typescript-eslint/semi": ["error"],
		"quotes": ["error", "double"],
		"comma-dangle": ["error",
			{
			"arrays": "never",
			"objects": "always",
			}
		],
		"jsx-quotes": ["error", "prefer-double"],
		"indent": ["error", "tab"],
		"eqeqeq": "error",
		"no-multi-str": "error",
		"arrow-spacing": ["error", { "before": true, "after": true }]
	},
	"settings": {
    "react": {
      "version": "detect",
    },
  }
};
