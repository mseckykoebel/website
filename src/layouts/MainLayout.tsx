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
      $sm={{ padding: "20px" }}
      $md={{ padding: "40px" }}
      $lg={{ padding: "60px" }}
      $xl={{ padding: "80px" }}
      $gtXl={{ padding: "100px" }}
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
