---
name: 'component'
root: './src/components'
output: '*'
ignore: []
questions:
  name: 'Please enter a component name.'
---

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.tsx`

```typescript
import { FC } from "react"
import { View } from "react-native"

import { createStyleSheet } from "@/styles/theme"

interface Props {}

export const {{ inputs.name | pascal }}: FC<Props> = () => {
  const styles = useStyles()

  return <View style={styles.container}></View>
}

const useStyles = createStyleSheet((theme) => ({
  container: {
    backgroundColor: theme.colors.background.primary,
  },
}))

```

# `{{ inputs.name | pascal }}/index.ts`

```typescript
export * from "./{{ inputs.name | pascal }}"

```
