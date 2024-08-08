module.exports = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.tsx?$": "ts-jest",
        "^.+\\.jsx?$": "babel-jest",
        "^.+\\.mjs$": "babel-jest",
    },
    transformIgnorePatterns: ["node_modules/(?!(axios)/)"],
    moduleNameMapper: {
        "\\.(css|less)$": "identity-obj-proxy",
    },
};
