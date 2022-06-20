// Copyright (c) 2022 IrisPixel
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const createUniqueId = () => {
  let num = 0;
  return function (prefix: string) {
    prefix = prefix || '';
    num += 1;
    return `${prefix}${num}`;
  };
};

const uniqueId = createUniqueId();

export default uniqueId;
