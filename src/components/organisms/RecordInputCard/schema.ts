import * as z from "zod"

import { ALLOWED_CHAR_PATTERN_FOR_WEIGHT_INPUT } from "@/constants"

export const formSchema = z
  .object({
    weight: z
      .string()
      .refine(
        (val) => val === "" || ALLOWED_CHAR_PATTERN_FOR_WEIGHT_INPUT.test(val),
        {
          error: "体重は数値で入力してください。",
        },
      ),
    bodyFatRate: z
      .string()
      .refine(
        (val) => val === "" || ALLOWED_CHAR_PATTERN_FOR_WEIGHT_INPUT.test(val),
        {
          error: "体脂肪率は数値で入力してください。",
        },
      ),
  })
  .refine((data) => data.weight !== "" || data.bodyFatRate !== "", {
    message: "体重または体脂肪率を入力してください。",
    path: ["weight"],
  })

export type FormSchema = z.infer<typeof formSchema>
