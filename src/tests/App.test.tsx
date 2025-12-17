import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Crypto Dashboard Integrity', () => {
  it('renders the dashboard title', () => {
    render(<App />);
    expect(screen.getByText(/PureStack Crypto Dashboard/i)).toBeDefined();
  });

  it('renders the crypto list after fetching', async () => {
    render(<App />);
    
    // ❌ THIS WILL FAIL
    // The candidate must implement the API fetch to display "Bitcoin"
    const bitcoinElement = await screen.findByText(/Bitcoin/i, {}, { timeout: 2000 });
    expect(bitcoinElement).toBeDefined();
  });
});
