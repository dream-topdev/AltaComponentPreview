/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import ContainerPreview from '../preview/ContainerPreview';
import profileHeader from '../samples/profileHeader';

const rootFrame = {x: 0, y: 0, width: 0, height: 0};
describe('<EllipsePreview />', () => {
  test('should display a ellipse', async () => {
    render(<ContainerPreview component={profileHeader} isRoot={true} parentFrame={rootFrame}/>);     
    const avatarShape = screen.getByTestId('Avatar Shape')
    expect(
      avatarShape
    ).toBeVisible();
  });

  test('should implement a correct style', async () => {
    render(<ContainerPreview component={profileHeader} isRoot={true} parentFrame={rootFrame}/>);     
    const avatarShape = screen.getByTestId('Avatar Shape')
    expect(avatarShape).toHaveStyle({
      position: 'absolute',
      left: '90px',
      top: '16px',
      width: '120px',
      height: '120px',
      'background-color': 'rgba(217.0000022649765, 217.0000022649765, 217.0000022649765, 1)',
      'border-width': '1px',
      'border-color': 'rgba(0, 0, 0, 1)',
      'border-style': 'solid',
      'border-radius': '60px'
    })
  });
});