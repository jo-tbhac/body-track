import { Tabs } from "expo-router/tabs"

import { HomeIcon, LineGraphIcon } from "@/lib/icons"
import { useTheme } from "@/styles/theme"

export default function TabLayout() {
  const { colors } = useTheme()

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary[500],
      }}
    >
      <Tabs.Screen
        name="(home-stack)"
        options={{
          tabBarLabel: "ホーム",
          tabBarIcon: ({ color }) => <HomeIcon size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="chart/index"
        options={{
          tabBarLabel: "グラフ",
          tabBarIcon: ({ color }) => <LineGraphIcon size={24} color={color} />,
        }}
      />
    </Tabs>
  )
}
