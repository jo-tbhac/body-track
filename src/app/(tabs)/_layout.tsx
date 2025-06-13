import Entypo from "@expo/vector-icons/Entypo"
import { Tabs } from "expo-router/tabs"

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
        name="home/index"
        options={{
          tabBarLabel: "ホーム",
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="graph/index"
        options={{
          tabBarLabel: "グラフ",
          tabBarIcon: ({ color }) => (
            <Entypo name="line-graph" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}
