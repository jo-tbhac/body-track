import { FC } from "react"
import { View, ViewStyle } from "react-native"

import { ProfileInputCard } from "@/components/organisms/ProfileInputCard"
import { FormSchema } from "@/components/organisms/ProfileInputCard/schema"
import { useFindProfile } from "@/hooks/profile/useFindProfile"
import { createStyleSheet } from "@/styles/theme"

export const ProfileScreenTemplate: FC = () => {
  const styles = useStyles()

  const [profile, loading] = useFindProfile()

  if (loading) {
    return null
  }

  const defaultFormValues: FormSchema = {
    height: profile?.height ? String(profile.height) : "",
    sex: profile?.sex ?? "",
    birthday: profile?.birthday ?? "",
  }

  return (
    <View style={styles.container}>
      <ProfileInputCard
        profileId={profile?.id}
        defaultValues={defaultFormValues}
      />
    </View>
  )
}

const useStyles = createStyleSheet((theme) => ({
  container: {
    backgroundColor: theme.colors.background.primary,
    paddingHorizontal: theme.spacing[3],
    paddingVertical: theme.spacing[5],
  } satisfies ViewStyle,
}))
