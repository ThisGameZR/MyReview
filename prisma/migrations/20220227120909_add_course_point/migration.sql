-- CreateTable
CREATE TABLE `coursepoint` (
    `courseId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,
    `point` INTEGER NOT NULL DEFAULT 0,

    INDEX `fk_coursepoint_course1_idx`(`courseId`),
    INDEX `fk_coursepoint_user1_idx`(`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `coursepoint` ADD CONSTRAINT `fk_coursepoint_course1` FOREIGN KEY (`courseId`) REFERENCES `course`(`courseId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `coursepoint` ADD CONSTRAINT `fk_coursepoint_user1` FOREIGN KEY (`userId`) REFERENCES `user`(`userId`) ON DELETE NO ACTION ON UPDATE NO ACTION;
