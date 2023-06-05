import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import App from '../src/App.jsx';
import Destination from '../src/components/Destination.jsx'

describe('App test', () => {
  it('renders correctly', () => {
    render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
  });
});

describe('Destination test', () => {
  const temp = [
    {
      name: 'Pluto',
      images: {
        png: 'image1.png',
      },
      description: 'description 1',
      distance: '1000 km',
      travel: '2 hours',
    },
    {
      name: 'Jupiter',
      images: {
        png: 'image2.png',
      },
      description: 'description 2',
      distance: '2000 km',
      travel: '4 hours',
    },
  ];


  it('should switch to the second destination on button click', () => {
    const { getByText, getByAltText } = 
    render(<Destination data={temp} />);
    const jupiterBtn = getByText('Jupiter');

    fireEvent.click(jupiterBtn);
    
    expect(getByAltText('a Jupiter in the sky').src).
    toContain('image2.png');

  });
});
