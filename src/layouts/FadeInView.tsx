"use client";

import { type ViewProps, View } from "tamagui";

type Props = ViewProps & { children: React.ReactNode };

export function FadeInView({ children, ...props }: Props) {
  return (
    <View
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
    </View>
  );
}
