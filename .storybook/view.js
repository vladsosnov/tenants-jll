import React from 'react';
import { addDecorator } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import { initializeWorker, mswDecorator } from 'msw-storybook-addon';
import { muiTheme } from 'storybook-addon-material-ui';

export const decorators = [muiTheme()];

addDecorator((story) => (
  <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
));
addDecorator(mswDecorator);
initializeWorker();

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
