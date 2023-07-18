-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `role` ENUM('USER', 'ADMIN') NOT NULL DEFAULT 'USER',

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Bet` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `teams` VARCHAR(191) NOT NULL,
    `gameType` VARCHAR(191) NOT NULL,
    `gameId` INTEGER NOT NULL,
    `betAmount` INTEGER NOT NULL,
    `creatorId` VARCHAR(191) NOT NULL,
    `acceptorId` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BetSelection` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `betId` INTEGER NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `selectedTeam` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Match` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `seriesName` VARCHAR(191) NOT NULL,
    `matchType` VARCHAR(191) NOT NULL,
    `matchDay` VARCHAR(191) NOT NULL,
    `team1` VARCHAR(191) NOT NULL,
    `team2` VARCHAR(191) NOT NULL,
    `battingTeam` VARCHAR(191) NOT NULL,
    `bowlingTeam` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `score1` INTEGER NOT NULL,
    `wickets1` INTEGER NOT NULL,
    `score2` INTEGER NOT NULL,
    `wickets2` INTEGER NOT NULL,
    `overs` INTEGER NOT NULL,
    `winningProbability` JSON NOT NULL,
    `date` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Bet` ADD CONSTRAINT `Bet_creatorId_fkey` FOREIGN KEY (`creatorId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Bet` ADD CONSTRAINT `Bet_acceptorId_fkey` FOREIGN KEY (`acceptorId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Bet` ADD CONSTRAINT `Bet_gameId_fkey` FOREIGN KEY (`gameId`) REFERENCES `Match`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BetSelection` ADD CONSTRAINT `BetSelection_betId_fkey` FOREIGN KEY (`betId`) REFERENCES `Bet`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BetSelection` ADD CONSTRAINT `BetSelection_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
