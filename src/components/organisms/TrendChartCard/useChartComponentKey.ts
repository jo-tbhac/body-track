import { useLocalSearchParams } from "expo-router"
import { useEffect, useState } from "react"

import { TimeOfDay } from "@/types"

export const useChartComponentKey = () => {
  const [componentKey, setComponentKey] = useState<string | undefined>()

  const { target, updatedAt } = useLocalSearchParams<{
    target?: TimeOfDay
    updatedAt?: string
  }>()

  useEffect(() => {
    setComponentKey((currentState) => {
      if (target == null || updatedAt == null) {
        return currentState
      }
      return `${target}-${updatedAt}`
    })
  }, [target, updatedAt])

  return componentKey
}
