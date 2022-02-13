import { Header } from 'components/Shared';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import type { ComponentMeta } from '@storybook/react';

const history = createMemoryHistory();

export default {
  title: 'Header',
  component: Header,
} as ComponentMeta<typeof Header>;

export const Default = () => {
  return (
    <Router location={history.location} navigator={history}>
      <Header />
    </Router>
  );
};
