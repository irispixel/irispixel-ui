// Copyright (c) 2022 IrisPixel
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT


const config = {
    transform: {
    "^.+\\.ts$": "ts-jest",
    "^.+\\.js$": "babel-jest"
    },
    moduleFileExtensions: [
    "js",
    "ts"
    ]
};

module.exports = config;
