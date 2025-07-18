import { sql } from "drizzle-orm"
import { int, real, sqliteTable, text } from "drizzle-orm/sqlite-core"

export const weightRecordsTable = sqliteTable("weight_records", {
  id: int().primaryKey({ autoIncrement: true }),
  weight: real(),
  bodyFatRate: real("body_fat_rate"),
  measuredAt: text("measured_at").default(sql`(CURRENT_TIMESTAMP)`),
})
