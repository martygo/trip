import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.extends("next/core-web-vitals", "next/typescript"),
	{
		rules: {
			"no-console": "warn", // Example: Warn when console statements are used
			"no-unused-vars": "off", // Example: Warn when there are unused variables
			"@typescript-eslint/no-unused-vars": "off", // Example: Warn when there are unused variables
			"@typescript-eslint/no-explicit-any": "off", // Example: Allow the use of 'any' type
		},
	},
];

export default eslintConfig;
