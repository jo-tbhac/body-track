import { FC } from "react"
import { FlatList, ViewStyle } from "react-native"

import { Divider } from "@/components/atoms/Divider"
import { DataListItem } from "@/components/molecules/DataListItem"
import { useFindAllWeightRecords } from "@/hooks/weightRecord/useFindAllWeightRecords"
import { createStyleSheet } from "@/styles/theme"

export const DataList: FC = () => {
  const styles = useStyles()

  const [weightRecords] = useFindAllWeightRecords()

  if (weightRecords == null) {
    return null
  }

  return (
    <FlatList
      data={weightRecords}
      renderItem={({ item }) => <DataListItem weightRecord={item} />}
      style={styles.container}
      ItemSeparatorComponent={Divider}
    />
  )
}

const useStyles = createStyleSheet((theme) => ({
  container: {
    backgroundColor: theme.colors.background.primary,
  } satisfies ViewStyle,
}))
