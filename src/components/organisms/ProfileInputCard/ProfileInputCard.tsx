import { useForm } from "@tanstack/react-form"
import { useRouter } from "expo-router"
import { FC } from "react"
import { TextStyle, View, ViewStyle } from "react-native"

import { Button } from "@/components/atoms/Button"
import { Card } from "@/components/atoms/Card"
import { Typography } from "@/components/atoms/Typography"
import { BirthdayInputItem } from "@/components/molecules/BirthdayInputItem"
import { RecordInputItem } from "@/components/molecules/RecordInputItem"
import { SexInputItem } from "@/components/molecules/SexInputItem"
import { useSaveProfile } from "@/hooks/profile/useSaveProfile"
import { createStyleSheet } from "@/styles/theme"

import { formSchema, FormSchema } from "./schema"

interface Props {
  profileId: number | undefined
  defaultValues: FormSchema
}

export const ProfileInputCard: FC<Props> = ({ profileId, defaultValues }) => {
  const styles = useStyles()

  const router = useRouter()

  const [saveProfile] = useSaveProfile()

  const form = useForm({
    defaultValues,
    onSubmit: async ({ value }) => {
      if (value.sex === "") {
        return
      }
      await saveProfile({
        id: profileId,
        height: Number(value.height),
        sex: value.sex,
        birthday: value.birthday,
      })
      router.back()
    },
    validators: {
      onSubmit: formSchema,
    },
  })

  const handlePressSaveButton = () => {
    form.handleSubmit()
  }

  return (
    <Card>
      <View style={styles.cardTop}>
        <Typography bold style={styles.cardTitle}>
          プロフィールを入力
        </Typography>
      </View>
      <View style={styles.cardBottom}>
        <form.Field name="height">
          {({ state, handleChange }) => (
            <RecordInputItem
              label="身長（cm）"
              value={state.value}
              handleChangeValue={(newValue) => handleChange(newValue)}
              errorMessage={state.meta.errors[0]?.message}
            />
          )}
        </form.Field>
        <form.Field name="sex">
          {({ state, handleChange }) => (
            <SexInputItem
              value={state.value}
              handleChangeValue={(newValue) => handleChange(newValue)}
              errorMessage={state.meta.errors[0]?.message}
            />
          )}
        </form.Field>
        <form.Field name="birthday">
          {({ state, handleChange }) => (
            <BirthdayInputItem
              value={state.value}
              handleChangeValue={(newValue) => handleChange(newValue)}
              errorMessage={state.meta.errors[0]?.message}
            />
          )}
        </form.Field>
        <View style={styles.buttonContainer}>
          <Button label="保存" onPress={handlePressSaveButton} />
        </View>
      </View>
    </Card>
  )
}

const useStyles = createStyleSheet((theme) => ({
  cardTop: {
    marginBottom: theme.spacing[3],
  } satisfies ViewStyle,
  cardTitle: {
    fontSize: theme.fontSize.lg,
  } satisfies TextStyle,
  cardBottom: {
    gap: theme.spacing[2],
  } satisfies ViewStyle,
  buttonContainer: {
    marginTop: theme.spacing[3],
  } satisfies ViewStyle,
}))
