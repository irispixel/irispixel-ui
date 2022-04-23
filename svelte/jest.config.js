// Copyright  (C)  2021-2022 LumePixel. All Rights Reserved.

const config = {
    testEnvironment: "jsdom",
    setupFiles: [
    "jest-canvas-mock"
    ],
    transform: {
    "^.+\\.svelte$": [
        "svelte-jester",
        {
        "preprocess": "./../../svelte.config.js"
        }
      ],
    "^.+\\.ts$": "ts-jest",
    "^.+\\.js$": "babel-jest"
    },
    moduleFileExtensions: [
    "js",
    "ts",
    "svelte"
    ]
};

module.exports = config;
