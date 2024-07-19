import { useState } from "react";
import { Button, useIsomorphicLayoutEffect } from "tamagui";
import { Moon, Sun, Settings } from "@tamagui/lucide-icons";
import { useThemeSetting, useRootTheme } from "@tamagui/next-theme";

function getIcon(clientTheme: string | undefined) {
  if (!clientTheme) {
    return <Sun />;
  }

  switch (clientTheme) {
    case "light": {
      return <Sun />;
    }
    case "dark": {
      return <Moon />;
    }
    case "system": {
      return <Settings />;
    }
    default: {
      throw new Error("Invalid theme");
    }
  }
}

export function SwitchThemeButton() {
  const themeSetting = useThemeSetting();
  const [theme] = useRootTheme();

  const [icon, setIcon] = useState(<Sun />);

  // depends on the environment - useEffect for SSR, useLayoutEffect for client
  useIsomorphicLayoutEffect(() => {
    setIcon(getIcon(themeSetting.forcedTheme || themeSetting.current || theme));
  }, [themeSetting.current, themeSetting.resolvedTheme]);

  return (
    <Button
      icon={icon}
      size="$2"
      onPress={themeSetting.toggle}
      aria-label="Switch theme"
    />
  );
}
