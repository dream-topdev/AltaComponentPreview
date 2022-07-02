/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import TextPreview from '../preview/TextPreview';
import loginScreen from '../samples/loginScreen';
import ContainerPreview from '../preview/ContainerPreview';

const rootFrame = {x: 0, y: 0, width: 0, height: 0};

describe('<RectanglePreview />', () => {
  test('should display a rectangle', async () => {
    render(<ContainerPreview component={loginScreen} isRoot={true} parentFrame={rootFrame}/>);     
    const heroShape = screen.getByTestId('Hero Shape')
    expect(
      heroShape
    ).toBeVisible();
  });

  test('should implement a correct style', async () => {
    render(<ContainerPreview component={loginScreen} isRoot={true} parentFrame={rootFrame}/>);     
    const heroShape = screen.getByTestId('Hero Shape')
    expect(heroShape).toHaveStyle({
      position: 'absolute',
      left: '16px',
      top: '16px',
      width: '208px',
      height: '64px',
      'background-color': 'rgba(217.0000022649765, 217.0000022649765, 217.0000022649765, 1)',
      'border-width': '1px',
      'border-color': 'rgba(0, 0, 0, 1)',
      'border-style': 'solid',
      'border-radius': '8px'
    })
  });
});