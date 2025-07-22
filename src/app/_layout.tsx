import { Slot } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { useEffect } from "react"

import { DbContext, useInitializeDb } from "@/db"
import { PortalProvider } from "@/lib/portal"
import { ThemeProvider } from "@/styles/ThemeProvider"
import { useFonts } from "@/styles/font"

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const fontsLoaded = useFonts()

  const [db, dbReady] = useInitializeDb()

  useEffect(() => {
    if (fontsLoaded && dbReady) {
      SplashScreen.hideAsync()
    }
  }, [dbReady, fontsLoaded])

  if (!fontsLoaded || !dbReady) {
    return null
  }

  return (
    <DbContext.Provider value={db}>
      <ThemeProvider>
        <PortalProvider>
          <Slot />
        </PortalProvider>
      </ThemeProvider>
    </DbContext.Provider>
  )
}
