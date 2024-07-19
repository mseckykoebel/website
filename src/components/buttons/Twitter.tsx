import { Button } from "tamagui";
import { Twitter as T } from "@tamagui/lucide-icons";

export function Twitter() {
  const openLink = () => {
    return window.open("https://www.twitter.com/mseckykoebel", "_blank");
  };

  return (
    <Button
      icon={T}
      size="$2"
      mr="$2"
      onPress={openLink}
      aria-label="Go to Twitter"
    />
  );
}
