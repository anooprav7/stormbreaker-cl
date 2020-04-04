module.exports = {
  stories: ["../stories/**/*.stories.(js|mdx)"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-docs/preset",
    "@storybook/addon-docs/register",
    "@storybook/addon-a11y/register",
  ],
}
