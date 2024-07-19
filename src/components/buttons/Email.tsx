import { Button } from "tamagui";
import { Mail } from "@tamagui/lucide-icons";

export function Email() {
  const openLink = () => {
    return window.open("mailto:mseckykoebel@gmail.com");
  };

  return (
    <Button
      icon={Mail}
      size="$2"
      mr="$2"
      onPress={openLink}
      aria-label="Send Email"
    />
  );
}
