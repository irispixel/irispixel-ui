// Copyright  (C)  2021-2022 LumePixel. All Rights Reserved.

const config = {
    testEnvironment: "jsdom",
    setupFiles: [
    "jest-canvas-mock"
    ],
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
