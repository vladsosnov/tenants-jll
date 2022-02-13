module.exports = {
  stories: ['../src/**/*.stories.tsx', '../stories/**/*.stories.(js|mdx)'],
  addons: [
    'storybook-addon-material-ui',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
};
