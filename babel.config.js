module.exports = {
    presets: [
        ["@babel/env", {
            modules: false,
            targets: {
                browsers: [
                    ">1%",
                    "last 4 versions",
                    "Firefox ESR",
                    "not ie < 9"
                ]
            }
        }]
    ]
};
