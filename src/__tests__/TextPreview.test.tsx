/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import TextPreview from '../preview/TextPreview';
import loginScreen from '../samples/loginScreen';
import ContainerPreview from '../preview/ContainerPreview';

const rootFrame = {x: 0, y: 0, width: 0, height: 0};

describe('<TextPreview />', () => {
  test('should display a text content', async () => {
    render(<ContainerPreview component={loginScreen} isRoot={true} parentFrame={rootFrame}/>);     
    const loginText = screen.getByTestId('Login Text')
    expect(
      loginText
    ).toHaveTextContent('Login');
  });

  test('should implement a correct style', async () => {
    render(<ContainerPreview component={loginScreen} isRoot={true} parentFrame={rootFrame}/>);     
    const loginText = screen.getByTestId('Login Text')
    expect(loginText).toHaveStyle({
      fontSize: 12,
      fontWeight: 700,
      fontFamily: 'Helvetica',
      color: 'rgba(255, 255, 255, 1)',
      position: 'absolute',
      left: '88px',
      top: '7px',
      width: '33px',
      height: '14px'
    })
  });
});