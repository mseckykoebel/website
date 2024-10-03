const { withTamagui } = require("@tamagui/next-plugin");

module.exports = function (_name, { defaultConfig }) {
  let config = {
    ...defaultConfig,
    // more configuration
    reactStrictMode: false,
  };

  const tamaguiPlugin = withTamagui({
    config: "./tamagui.config.ts",
    components: ["tamagui"],
    appDir: true,
    outputCSS:
      process.env.NODE_ENV === "production" ? "./public/tamagui.css" : null,
    disableExtraction: process.env.NODE_ENV === "development", // better performance in dev mode
  });

  return {
    ...config,
    ...tamaguiPlugin(config),
  };
};
