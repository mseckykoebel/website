"use client";

import { YStack } from "tamagui";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <YStack
      flex={1}
      height="100vh"
      flexDirection="column"
      justifyContent="start"
      alignItems="center"
      padding="$12"
      background="$background"
    >
      <YStack
        $sm={{ width: "100%" }}
        $md={{ width: "80%" }}
        $lg={{ width: "60%" }}
        $xl={{ width: "50%" }}
        $gtXl={{ width: "40%" }}
        justifyContent="center"
        alignItems="start"
      >
        {children}
      </YStack>
    </YStack>
  );
}
