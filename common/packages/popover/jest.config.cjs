// Copyright (c) 2022 IrisPixel
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const sharedConfig = require('../../jest.lib.config.cjs');
module.exports = {
  ...sharedConfig,
  testEnvironment: "jsdom"
};
