import { useLocalSearchParams } from "expo-router"
import { useEffect, useState } from "react"

import { TIME_OF_DAY } from "@/constants"
import { TimeOfDay } from "@/types"

export const useWeightEntryComponentKeys = () => {
  const [componentKeys, setComponentKeys] = useState<
    Record<TimeOfDay, string | undefined>
  >({
    [TIME_OF_DAY.morning]: undefined,
    [TIME_OF_DAY.evening]: undefined,
  })

  const { target, updatedAt } = useLocalSearchParams<{
    target?: TimeOfDay
    updatedAt?: string
  }>()

  useEffect(() => {
    setComponentKeys((currentState) => {
      if (target == null || updatedAt == null) {
        return currentState
      }
      return { ...currentState, [target]: `${target}-${updatedAt}` }
    })
  }, [target, updatedAt])

  return componentKeys
}
