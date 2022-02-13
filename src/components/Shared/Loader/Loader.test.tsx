import { screen } from '@testing-library/react';
import { renderWithRouter } from 'helpers';
import { Loader } from 'components/Shared';

describe('Loader component', () => {
  it('Show loader', () => {
    renderWithRouter(<Loader isLoading={true} />);

    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });
  it('Hide loader', () => {
    renderWithRouter(<Loader isLoading={false} />);

    expect(screen.queryByTestId('loader')).not.toBeInTheDocument();
  });
});
