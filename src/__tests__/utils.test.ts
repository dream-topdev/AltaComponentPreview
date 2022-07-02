/**
 * @jest-environment jsdom
 */

 import React from 'react';
 import { render, screen } from '@testing-library/react';
 import { generateHTMLStyle, parseHTMLColor } from '../utils';
import { Color } from '../componentTypes';
import loginScreen from '../samples/loginScreen';
 
 describe('Utils', () => {
   test('should parse html color from json object', () => {
    const red: Color = {r: 1, g: 0, b: 0, a: 1};
     expect(       
      parseHTMLColor(red)
     ).toEqual('rgba(255, 0, 0, 1)');
   });

   test('should generate style from component', () => {
    expect(
      generateHTMLStyle(loginScreen, false, {x: 0, y:0, width: 0, height: 0})
    ).toMatchObject({
      position: 'absolute',
      left: 0,
      top: 0,
      width: 240,
      height: 357,
      backgroundColor: 'rgba(255, 255, 255, 1)',
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: 'rgba(0, 0, 0, 1)',
      borderRadius: 0
    })
   });
 });