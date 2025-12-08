import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mock API and other dependencies
jest.mock('./api', () => ({
  fetchProductData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  test('renders component with default state', async () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    await waitFor(() => expect(screen.queryByText(/loading/i)).not.toBeInTheDocument());
    expect(screen.getByRole('button', { name: /add to cart/i })).toBeInTheDocument();
  });

  test('handles product data fetching and rendering', async () => {
    const mockProductData = { id: '123', name: 'Test Product' };
    (fetchProductData as jest.Mock).mockResolvedValue(mockProductData);
    
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/test product/i)).toBeInTheDocument());
  });

  test('handles error when fetching product data fails', async () => {
    const errorMessage = 'Failed to fetch data';
    (fetchProductData as jest.Mock).mockRejectedValue(new Error(errorMessage));

    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/error: failed to fetch data/i)).toBeInTheDocument());
  });

  test('displays loading state during product data fetching', async () => {
    (fetchProductData as jest.Mock).mockImplementation(async () => {
      return new Promise((resolve) => setTimeout(() => resolve({ id: '123' }), 500));
    });
    
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    await waitFor(() => expect(screen.queryByText(/loading/i)).not.toBeInTheDocument());
  });

  test('allows user to add product to cart', async () => {
    const mockProductData = { id: '123', name: 'Test Product' };
    (fetchProductData as jest.Mock).mockResolvedValue(mockProductData);

    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByRole('button', { name: /add to cart/i })).toBeInTheDocument());

    fireEvent.click(screen.getByRole('button', { name: /add to cart/i }));
    await waitFor(() => expect(screen.getByText(/added to cart/i)).toBeInTheDocument());
  });

  test('disables add to cart button when product is already in cart', async () => {
    const mockProductData = { id: '123', name: 'Test Product' };
    (fetchProductData as jest.Mock).mockResolvedValue(mockProductData);

    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByRole('button', { name: /add to cart/i })).toBeInTheDocument());

    fireEvent.click(screen.getByRole('button', { name: /add to cart/i }));
    await waitFor(() => expect(screen.getByText(/added to cart/i)).toBeInTheDocument());
    
    fireEvent.click(screen.getByRole('button', { name: /add to cart/i })); // Attempting to add again
    expect(screen.getByRole('button', { name: /already in cart/i })).toBeDisabled();
  });

  test('component is accessible', async () => {
    const mockProductData = { id: '123', name: 'Test Product' };
    (fetchProductData as jest.Mock).mockResolvedValue(mockProductData);

    render(<CoreFunctionalityComponent />);
    
    // Check for proper ARIA roles and labels
    expect(screen.getByRole('button', { name: /add to cart/i })).toHaveAttribute('aria-label');
    expect(screen.getByText(/test product/i)).toHaveAttribute('aria-labelledby'); // Example, might need adjustment based on actual implementation

    // Ensure focus is managed correctly
    fireEvent.focus(screen.getByRole('button', { name: /add to cart/i }));
    expect(document.activeElement).toBe(screen.getByRole('button', { name: /add to cart/i }));

    // Check for keyboard navigation if applicable
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mock API and other dependencies
jest.mock('./api', () => ({
  fetchProductData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  test('renders component with default state', async () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    await waitFor(() => expect(screen.queryByText(/loading/i)).not.toBeInTheDocument());
    expect(screen.getByRole('button', { name: /add to cart/i })).toBeInTheDocument();
  });

  test('handles product data fetching and rendering', async () => {
    const mockProductData = { id: '123', name: 'Test Product' };
    (fetchProductData as jest.Mock).mockResolvedValue(mockProductData);
    
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/test product/i)).toBeInTheDocument());
  });

  test('handles error when fetching product data fails', async () => {
    const errorMessage = 'Failed to fetch data';
    (fetchProductData as jest.Mock).mockRejectedValue(new Error(errorMessage));

    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/error: failed to fetch data/i)).toBeInTheDocument());
  });

  test('displays loading state during product data fetching', async () => {
    (fetchProductData as jest.Mock).mockImplementation(async () => {
      return new Promise((resolve) => setTimeout(() => resolve({ id: '123' }), 500));
    });
    
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    await waitFor(() => expect(screen.queryByText(/loading/i)).not.toBeInTheDocument());
  });

  test('allows user to add product to cart', async () => {
    const mockProductData = { id: '123', name: 'Test Product' };
    (fetchProductData as jest.Mock).mockResolvedValue(mockProductData);

    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByRole('button', { name: /add to cart/i })).toBeInTheDocument());

    fireEvent.click(screen.getByRole('button', { name: /add to cart/i }));
    await waitFor(() => expect(screen.getByText(/added to cart/i)).toBeInTheDocument());
  });

  test('disables add to cart button when product is already in cart', async () => {
    const mockProductData = { id: '123', name: 'Test Product' };
    (fetchProductData as jest.Mock).mockResolvedValue(mockProductData);

    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByRole('button', { name: /add to cart/i })).toBeInTheDocument());

    fireEvent.click(screen.getByRole('button', { name: /add to cart/i }));
    await waitFor(() => expect(screen.getByText(/added to cart/i)).toBeInTheDocument());
    
    fireEvent.click(screen.getByRole('button', { name: /add to cart/i })); // Attempting to add again
    expect(screen.getByRole('button', { name: /already in cart/i })).toBeDisabled();
  });

  test('component is accessible', async () => {
    const mockProductData = { id: '123', name: 'Test Product' };
    (fetchProductData as jest.Mock).mockResolvedValue(mockProductData);

    render(<CoreFunctionalityComponent />);
    
    // Check for proper ARIA roles and labels
    expect(screen.getByRole('button', { name: /add to cart/i })).toHaveAttribute('aria-label');
    expect(screen.getByText(/test product/i)).toHaveAttribute('aria-labelledby'); // Example, might need adjustment based on actual implementation

    // Ensure focus is managed correctly
    fireEvent.focus(screen.getByRole('button', { name: /add to cart/i }));
    expect(document.activeElement).toBe(screen.getByRole('button', { name: /add to cart/i }));

    // Check for keyboard navigation if applicable
  });
});