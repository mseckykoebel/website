"use client";

import { type ViewProps, YStack } from "tamagui";

type Props = ViewProps & { children: React.ReactNode };

export function FadeInYStack({ children, ...props }: Props) {
  return (
    <YStack
      gap="$1"
      enterStyle={{
        scale: 1,
        y: -0.1,
        opacity: 0,
      }}
      animation="bouncy"
      {...props}
    >
      {children}
    </YStack>
  );
}
