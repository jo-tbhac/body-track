import { Stack } from "expo-router"

export default function StackLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="setting/index" />
      <Stack.Screen name="profile/index" options={{ presentation: "modal" }} />
    </Stack>
  )
}
