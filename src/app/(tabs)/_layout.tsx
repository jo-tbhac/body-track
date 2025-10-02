import { Tabs } from "expo-router/tabs"

import { HomeIcon, SettingIcon, UnorderedList } from "@/lib/icons"
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
          tabBarIcon: ({ color }) => <HomeIcon size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="data-list/index"
        options={{
          tabBarLabel: "データ一覧",
          tabBarIcon: ({ color }) => <UnorderedList size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="(setting-stack)"
        options={{
          tabBarLabel: "設定",
          tabBarIcon: ({ color }) => <SettingIcon size={22} color={color} />,
        }}
      />
    </Tabs>
  )
}
