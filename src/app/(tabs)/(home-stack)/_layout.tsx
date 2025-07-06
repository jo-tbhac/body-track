import { Stack } from "expo-router"

export default function StackLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home/index" />
      <Stack.Screen
        name="record-input/index"
        options={{ presentation: "modal" }}
      />
    </Stack>
  )
}
