import { sql } from "drizzle-orm"
import { int, real, sqliteTable, text, unique } from "drizzle-orm/sqlite-core"

import { TIME_OF_DAY } from "@/constants"

export const weightRecordsTable = sqliteTable(
  "weight_records",
  {
    id: int().primaryKey({ autoIncrement: true }),
    weight: real(),
    bodyFatRate: real("body_fat_rate"),
    measuredDate: text("measured_date")
      .default(sql`(CURRENT_DATE)`)
      .notNull(),
    timeOfDay: text("time_of_day", {
      enum: [TIME_OF_DAY.evening, TIME_OF_DAY.morning],
    }).notNull(),
  },
  (t) => [unique().on(t.measuredDate, t.timeOfDay)],
)
