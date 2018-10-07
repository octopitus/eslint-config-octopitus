module.exports = {
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        printWidth: 80,
        semi: false,
        jsxBracketSameLine: true,
        singleQuote: true,
        bracketSpacing: true,
        trailingComma: "es5",
        parser: "flow"
      }
    ]
  }
};
