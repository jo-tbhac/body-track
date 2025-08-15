import { Picker as NativePicker } from "@react-native-picker/picker"
import { useState } from "react"
import { LayoutChangeEvent, TextStyle, View, ViewStyle } from "react-native"
import Animated, { useSharedValue, withTiming } from "react-native-reanimated"

import { createStyleSheet } from "@/styles/theme"

interface Props<T> {
  items: { label: string; value: T }[]
  expanded: boolean
  selectedValue: T
  handleChangeValue: (newValue: T) => void
}

export const Picker = <T extends string>({
  items,
  expanded,
  selectedValue,
  handleChangeValue,
}: Props<T>) => {
  const styles = useStyles()

  const [height, setHeight] = useState(0)
  const animatedHeight = useSharedValue(0)

  const onLayout = (event: LayoutChangeEvent) => {
    const onLayoutHeight = event.nativeEvent.layout.height

    if (onLayoutHeight > 0 && height !== onLayoutHeight) {
      setHeight(onLayoutHeight)
    }
  }

  animatedHeight.value = expanded ? withTiming(height) : withTiming(0)

  return (
    <Animated.View
      style={[{ height: animatedHeight }, styles.animatedContainer]}
    >
      <View style={styles.container} onLayout={onLayout}>
        <NativePicker
          selectedValue={selectedValue}
          onValueChange={(value) => handleChangeValue(value)}
          itemStyle={styles.pickerItem}
        >
          {items.map((item) => (
            <NativePicker.Item
              key={item.value}
              label={item.label}
              value={item.value}
            />
          ))}
        </NativePicker>
      </View>
    </Animated.View>
  )
}

const useStyles = createStyleSheet((theme) => ({
  animatedContainer: {
    overflow: "hidden",
  } satisfies ViewStyle,
  container: {
    height: 180,
  } satisfies ViewStyle,
  pickerItem: {
    color: theme.colors.text.primary,
    fontSize: theme.fontSize.sm,
  } satisfies TextStyle,
}))
