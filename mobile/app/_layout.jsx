import { ClerkProvider } from "@clerk/clerk-expo";
import SafeScreen from "../components/SafeScreen.jsx";
import { Slot } from "expo-router";
import { tokenCache } from "@clerk/clerk-expo/token-cache";

export default function RootLayoutNav() {
  return (
    <ClerkProvider tokenCache={tokenCache}>
      <SafeScreen>
        <Slot />
      </SafeScreen>
    </ClerkProvider>
  );
}
