import { createTamagui } from "tamagui";
import { config } from "@tamagui/config/v3";

const tamaguiConfig = createTamagui(config);

export type AppConfig = typeof tamaguiConfig;

declare module "tamagui" {
  // overrides TamaguiCustomConfig so custom types
  // work everywhere we import `tamagui`
  interface TamaguiCustomConfig extends AppConfig {}
}

export default tamaguiConfig;
