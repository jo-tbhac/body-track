import { FC } from "react"
import { View, ViewStyle } from "react-native"

import { DataList } from "@/components/organisms/DataList"
import { createStyleSheet } from "@/styles/theme"

export const DataListScreenTemplate: FC = () => {
  const styles = useStyles()

  return (
    <View style={styles.container}>
      <DataList />
    </View>
  )
}

const useStyles = createStyleSheet((theme) => ({
  container: {
    backgroundColor: theme.colors.background.primary,
    flex: 1,
  } satisfies ViewStyle,
}))
