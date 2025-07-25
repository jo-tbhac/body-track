CREATE TABLE `weight_records` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`weight` real,
	`body_fat_rate` real,
	`measured_date` text DEFAULT (CURRENT_DATE) NOT NULL,
	`time_of_day` text NOT NULL
);
