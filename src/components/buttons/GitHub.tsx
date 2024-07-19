import { Button } from "tamagui";
import { Github } from "@tamagui/lucide-icons";

export function GitHub() {
  const openLink = () => {
    return window.open("https://www.github.com/mseckykoebel", "_blank");
  };

  return (
    <Button
      icon={Github}
      size="$2"
      mr="$2"
      onPress={openLink}
      aria-label="Go to GitHub"
    />
  );
}
