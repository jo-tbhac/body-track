import { sql } from "drizzle-orm"
import { int, real, sqliteTable, text } from "drizzle-orm/sqlite-core"

export const weightRecordsTable = sqliteTable("weight_records", {
  id: int().primaryKey({ autoIncrement: true }),
  weight: real(),
  body_fat_rate: real(),
  measured_at: text().default(sql`(CURRENT_TIMESTAMP)`),
})
