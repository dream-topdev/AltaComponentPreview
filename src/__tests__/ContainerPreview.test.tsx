/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import ContainerPreview from '../preview/ContainerPreview';
import profileHeader from '../samples/profileHeader';

const rootFrame = {x: 0, y: 0, width: 0, height: 0};

describe('<ContainerPreview />', () => {
  test('should display a container', async () => {
    render(<ContainerPreview component={profileHeader} isRoot={true} parentFrame={rootFrame}/>);     
    const pHeader = screen.getByTestId('Profile Header')
    expect(
      pHeader
    ).toBeVisible();
  });

  test('should implement a correct style', async () => {
    render(<ContainerPreview component={profileHeader} isRoot={true} parentFrame={rootFrame}/>);     
    const pHeader = screen.getByTestId('Profile Header')
    expect(pHeader).toHaveStyle({
      position: 'relative',
      left: '0px',
      top: '0px',
      width: '300px',
      height: '196px',
      'background-color': 'rgba(255, 255, 255, 1)',
      'border-width': '1px',
      'border-color': 'rgba(0, 0, 0, 1)',
      'border-style': 'solid',
      'border-radius': '0',
    })
  });
});