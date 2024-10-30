CREATE TABLE `account` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	CONSTRAINT `account_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `bucket` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	CONSTRAINT `bucket_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `category` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`bucketId` int,
	CONSTRAINT `category_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `note` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`date` date NOT NULL,
	`content` text NOT NULL,
	CONSTRAINT `note_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `transaction` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`date` date NOT NULL,
	`amount` float NOT NULL,
	`description` text NOT NULL,
	`accountId` text NOT NULL,
	`bucketId` int,
	`categoryId` int,
	CONSTRAINT `transaction_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `category` ADD CONSTRAINT `category_bucketId_bucket_id_fk` FOREIGN KEY (`bucketId`) REFERENCES `bucket`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `transaction` ADD CONSTRAINT `transaction_accountId_account_id_fk` FOREIGN KEY (`accountId`) REFERENCES `account`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `transaction` ADD CONSTRAINT `transaction_bucketId_bucket_id_fk` FOREIGN KEY (`bucketId`) REFERENCES `bucket`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `transaction` ADD CONSTRAINT `transaction_categoryId_category_id_fk` FOREIGN KEY (`categoryId`) REFERENCES `category`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE INDEX `index_on_account_id` ON `transaction` (`accountId`);--> statement-breakpoint
CREATE INDEX `index_on_bucket_id` ON `transaction` (`bucketId`);--> statement-breakpoint
CREATE INDEX `index_on_category_id` ON `transaction` (`categoryId`);