/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('<App />', () => {
  test('should display a title', async () => {
    render(<App/>); 
    expect(
      screen.getByText(/Component Preview Demo/)
    ).toBeInTheDocument();
  });

  test('should display a Profile Header', () => {
    render(<App/>); 
    expect(
        screen.getByTestId('Profile Header')
    ).toBeInTheDocument();
  });

  test('should display a Event Card', () => {
    render(<App/>); 
    expect(
        screen.getByTestId('Event Card')
    ).toBeInTheDocument();
  });

  test('should display a Login Screen', () => {
    render(<App/>); 
    expect(
        screen.getByTestId('Login Screen')
    ).toBeInTheDocument();
  });

  test('should display a List Screen', () => {
    render(<App/>); 
    expect(
        screen.getByTestId('List Screen')
    ).toBeInTheDocument();
  });
});