import { type ViewProps, Spinner as TGSpinner, YStack } from "tamagui";

type Props = ViewProps;

export function Spinner({ props }: Props) {
  return (
    <YStack padding="$3" alignItems="center">
      <TGSpinner {...props} />
    </YStack>
  );
}
