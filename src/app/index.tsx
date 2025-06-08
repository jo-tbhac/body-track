import { useFonts } from "@expo-google-fonts/noto-sans-jp"
import * as SplashScreen from "expo-splash-screen"
import { useEffect } from "react"
import { Text, View } from "react-native"

import { fontMap } from "@/styles/font"

SplashScreen.preventAutoHideAsync()

export default function Index() {
  const [loaded, error] = useFonts(fontMap)

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  useEffect(() => {
    if (error) {
      console.error("[Error] failed to load fonts: ", error)
    }
  }, [error])

  if (!loaded) {
    return null
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontFamily: "NotoSansJP_400",
        }}
      >
        Edit app/index.tsx to edit this screen1.
      </Text>
    </View>
  )
}
