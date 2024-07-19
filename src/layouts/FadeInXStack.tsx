"use client";

import { type ViewProps, XStack } from "tamagui";

type Props = ViewProps & { children: React.ReactNode };

export function FadeInXStack({ children, ...props }: Props) {
  return (
    <XStack
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
    </XStack>
  );
}
