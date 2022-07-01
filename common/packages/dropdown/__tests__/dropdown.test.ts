/**
 * @jest-environment jsdom
 */
// Copyright (c) 2022 IrisPixel
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { validate } from '../src/dropdown';

type RandomType = {
  id: string;
};

type InvalidType = {
  name: string;
};

test('testing dropdown validate', () => {
  let arr = ['Hello', 'World'];
  expect(validate(arr)).toBe(true);
});

test('testing dropdown validate - invalid numbers', () => {
  let numbers = [1, 2];
  expect(() => {
    validate(numbers);
  }).toThrowError();
});

test('testing dropdown validate - valid type implementing DropdownItem', () => {
  let values = [
    {
      id: 'Hello'
    } as RandomType,
    {
      id: 'World'
    } as RandomType
  ];
  expect(validate(values)).toBe(true);
});

test('testing dropdown validate - InvalidType type not implementing DropdownItem', () => {
  let values = [
    {
      name: 'Hello'
    } as InvalidType,
    {
      name: 'World'
    } as InvalidType
  ];
  expect(() => {
    validate(values);
  }).toThrowError();
});
