/*
  Warnings:

  - Added the required column `universityId` to the `course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `course` ADD COLUMN `universityId` INTEGER NOT NULL;

-- CreateIndex
CREATE INDEX `fk_course_university1_idx` ON `course`(`universityId`);

-- AddForeignKey
ALTER TABLE `course` ADD CONSTRAINT `fk_course_university1` FOREIGN KEY (`universityId`) REFERENCES `university`(`universityId`) ON DELETE NO ACTION ON UPDATE NO ACTION;
