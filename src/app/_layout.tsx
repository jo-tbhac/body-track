import { useFonts } from "@expo-google-fonts/noto-sans-jp"
import { Slot } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { useEffect } from "react"

import { DbProvider } from "@/db/DbProvider"
import { PortalProvider } from "@/lib/portal"
import { ThemeProvider } from "@/styles/ThemeProvider"
import { fontMap } from "@/styles/font"

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
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
    <DbProvider>
      <ThemeProvider>
        <PortalProvider>
          <Slot />
        </PortalProvider>
      </ThemeProvider>
    </DbProvider>
  )
}
