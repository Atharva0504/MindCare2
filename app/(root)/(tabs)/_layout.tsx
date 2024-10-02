import { Stack } from "expo-router";

const LayoutTabs = () => {
  return (
    <Stack>
      <Stack.Screen name="home" options={{ headerShown: false }} />
      <Stack.Screen name="profile" options={{ headerShown: false }} />
      <Stack.Screen name="survey" options={{ headerShown: false }} />
    </Stack>
  );
};

export default LayoutTabs;