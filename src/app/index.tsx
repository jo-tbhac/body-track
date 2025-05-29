import {
  NotoSansJP_100Thin,
  NotoSansJP_200ExtraLight,
  NotoSansJP_300Light,
  NotoSansJP_400Regular,
  NotoSansJP_500Medium,
  NotoSansJP_600SemiBold,
  NotoSansJP_700Bold,
  NotoSansJP_800ExtraBold,
  NotoSansJP_900Black,
  useFonts,
} from "@expo-google-fonts/noto-sans-jp"
import * as SplashScreen from "expo-splash-screen"
import { useEffect } from "react"
import { Text, View } from "react-native"

SplashScreen.preventAutoHideAsync()

export default function Index() {
  const [loaded, error] = useFonts({
    NotoSansJP_100: NotoSansJP_100Thin,
    NotoSansJP_200: NotoSansJP_200ExtraLight,
    NotoSansJP_300: NotoSansJP_300Light,
    NotoSansJP_400: NotoSansJP_400Regular,
    NotoSansJP_500: NotoSansJP_500Medium,
    NotoSansJP_600: NotoSansJP_600SemiBold,
    NotoSansJP_700: NotoSansJP_700Bold,
    NotoSansJP_800: NotoSansJP_800ExtraBold,
    NotoSansJP_900: NotoSansJP_900Black,
  })

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
