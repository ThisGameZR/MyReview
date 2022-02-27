/*
  Warnings:

  - Added the required column `categoryId` to the `course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `course` ADD COLUMN `categoryId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `category` (
    `categoryId` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NULL,
    `createdAt` DATETIME(0) NOT NULL,

    PRIMARY KEY (`categoryId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `fk_course_category1_idx` ON `course`(`courseId`);

-- AddForeignKey
ALTER TABLE `course` ADD CONSTRAINT `fk_course_category1` FOREIGN KEY (`categoryId`) REFERENCES `category`(`categoryId`) ON DELETE NO ACTION ON UPDATE NO ACTION;
