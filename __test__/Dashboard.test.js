import { render, screen, waitFor } from '@testing-library/react';
import Dashboard from '../src/app/dashboard/page';
import { SessionProvider } from 'next-auth/react';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ totalPokemons: 1000, typeCounts: { Electric: 150, Water: 200 } }),
  })
);

describe('Dashboard Component', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it('Muestra el número total de Pokémon', async () => {
    render(
      <SessionProvider>
        <Dashboard />
      </SessionProvider>
    );
    expect(fetch).toHaveBeenCalledWith('/api/dashboard');

    await waitFor(() => {
      expect(screen.getByText('Total number of Pokémon: 1000')).toBeInTheDocument();
    });
  });
});