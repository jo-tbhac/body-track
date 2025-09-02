import * as z from "zod"

import { ALLOWED_CHAR_PATTERN_FOR_HEIGHT_INPUT, SEX } from "@/constants"
import { isInvalidDate } from "@/lib/date"

export const formSchema = z.object({
  height: z
    .string()
    .min(1, "身長を入力してください。")
    .refine((val) => ALLOWED_CHAR_PATTERN_FOR_HEIGHT_INPUT.test(val), {
      error: "身長は数値で入力してください。",
    }),
  sex: z
    .literal([SEX.female, SEX.male, ""])
    .refine((val) => val !== "", { error: "先天的性別を選択してください。" }),
  birthday: z.string().refine((val) => !isInvalidDate(val), {
    error: "生年月日を正しく入力してください。",
  }),
})

export type FormSchema = z.infer<typeof formSchema>
