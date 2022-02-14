-- CreateTable
CREATE TABLE `course` (
    `courseId` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NULL,
    `description` VARCHAR(255) NULL,
    `userId` INTEGER NOT NULL,
    `createdAt` DATETIME(0) NOT NULL,

    INDEX `fk_course_user1_idx`(`userId`),
    PRIMARY KEY (`courseId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `kyc` (
    `kycId` INTEGER NOT NULL AUTO_INCREMENT,
    `card` VARCHAR(255) NOT NULL,
    `selfieWithCard` VARCHAR(255) NOT NULL,
    `userId` INTEGER NOT NULL,

    INDEX `fk_kyc_user1_idx`(`userId`),
    PRIMARY KEY (`kycId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `message` (
    `messageId` INTEGER NOT NULL AUTO_INCREMENT,
    `senderId` INTEGER NOT NULL,
    `receiverId` INTEGER NOT NULL,
    `message` VARCHAR(255) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL,

    INDEX `fk_message_user1_idx`(`senderId`),
    INDEX `fk_message_user2_idx`(`receiverId`),
    PRIMARY KEY (`messageId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `objective` (
    `objectiveId` INTEGER NOT NULL AUTO_INCREMENT,
    `text` VARCHAR(255) NULL,
    `courseId` INTEGER NOT NULL,

    INDEX `fk_objective_course1_idx`(`courseId`),
    PRIMARY KEY (`objectiveId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `post` (
    `postId` INTEGER NOT NULL AUTO_INCREMENT,
    `content` TEXT NULL,
    `threadId` INTEGER NULL,
    `courseId` INTEGER NULL,
    `userId` INTEGER NOT NULL,
    `createdAt` DATETIME(0) NOT NULL,

    INDEX `fk_post_course1_idx`(`courseId`),
    INDEX `fk_post_thread1_idx`(`threadId`),
    INDEX `fk_post_user1_idx`(`userId`),
    PRIMARY KEY (`postId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `postimage` (
    `postImageId` INTEGER NOT NULL AUTO_INCREMENT,
    `postId` INTEGER NOT NULL,
    `path` VARCHAR(255) NOT NULL,

    INDEX `fk_postImage_post1_idx`(`postId`),
    PRIMARY KEY (`postImageId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `role` (
    `name` VARCHAR(45) NOT NULL,

    UNIQUE INDEX `name_UNIQUE`(`name`),
    PRIMARY KEY (`name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tag` (
    `tagId` INTEGER NOT NULL AUTO_INCREMENT,
    `threadId` INTEGER NOT NULL,
    `name` VARCHAR(45) NULL,

    INDEX `fk_tag_thread1_idx`(`threadId`),
    PRIMARY KEY (`tagId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `thread` (
    `threadId` INTEGER NOT NULL,
    `title` VARCHAR(255) NULL,
    `createdAt` DATETIME(0) NOT NULL,
    `userId` INTEGER NOT NULL,

    INDEX `fk_thread_user1_idx`(`userId`),
    PRIMARY KEY (`threadId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `university` (
    `universityId` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NULL,
    `acronym` VARCHAR(10) NULL,
    `province` VARCHAR(255) NULL,
    `country` VARCHAR(255) NULL,

    PRIMARY KEY (`universityId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `userId` INTEGER NOT NULL AUTO_INCREMENT,
    `displayName` VARCHAR(45) NULL,
    `firstName` VARCHAR(45) NULL,
    `lastName` VARCHAR(45) NULL,
    `age` INTEGER NULL,
    `universityId` INTEGER NULL,
    `createdAt` DATETIME(0) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `verify` VARCHAR(5) NOT NULL,
    `kycVerify` VARCHAR(5) NOT NULL,
    `roleName` VARCHAR(45) NOT NULL,

    UNIQUE INDEX `email_UNIQUE`(`email`),
    INDEX `fk_user_role1_idx`(`roleName`),
    INDEX `fk_user_university_idx`(`universityId`),
    PRIMARY KEY (`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `verification` (
    `verificationId` INTEGER NOT NULL AUTO_INCREMENT,
    `token` VARCHAR(255) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL,
    `userId` INTEGER NOT NULL,

    INDEX `fk_verification_user1_idx`(`userId`),
    PRIMARY KEY (`verificationId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `course` ADD CONSTRAINT `fk_course_user1` FOREIGN KEY (`userId`) REFERENCES `user`(`userId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `kyc` ADD CONSTRAINT `fk_kyc_user1` FOREIGN KEY (`userId`) REFERENCES `user`(`userId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `message` ADD CONSTRAINT `fk_message_user2` FOREIGN KEY (`receiverId`) REFERENCES `user`(`userId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `message` ADD CONSTRAINT `fk_message_user1` FOREIGN KEY (`senderId`) REFERENCES `user`(`userId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `objective` ADD CONSTRAINT `fk_objective_course1` FOREIGN KEY (`courseId`) REFERENCES `course`(`courseId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `post` ADD CONSTRAINT `fk_post_course1` FOREIGN KEY (`courseId`) REFERENCES `course`(`courseId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `post` ADD CONSTRAINT `fk_post_thread1` FOREIGN KEY (`threadId`) REFERENCES `thread`(`threadId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `post` ADD CONSTRAINT `fk_post_user1` FOREIGN KEY (`userId`) REFERENCES `user`(`userId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `postimage` ADD CONSTRAINT `fk_postImage_post1` FOREIGN KEY (`postId`) REFERENCES `post`(`postId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tag` ADD CONSTRAINT `fk_tag_thread1` FOREIGN KEY (`threadId`) REFERENCES `thread`(`threadId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `thread` ADD CONSTRAINT `fk_thread_user1` FOREIGN KEY (`userId`) REFERENCES `user`(`userId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `fk_user_role1` FOREIGN KEY (`roleName`) REFERENCES `role`(`name`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `fk_user_university` FOREIGN KEY (`universityId`) REFERENCES `university`(`universityId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `verification` ADD CONSTRAINT `fk_verification_user1` FOREIGN KEY (`userId`) REFERENCES `user`(`userId`) ON DELETE NO ACTION ON UPDATE NO ACTION;
