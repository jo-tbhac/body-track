CREATE TABLE `weight_records` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`weight` real,
	`body_fat_rate` real,
	`measured_at` text DEFAULT (CURRENT_TIMESTAMP)
);
