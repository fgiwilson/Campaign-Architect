-- CreateTable
CREATE TABLE "World" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "numCampaigns" INTEGER NOT NULL DEFAULT 0,
    "worldImage" TEXT,
    "mainDesc" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "settings" JSONB,

    CONSTRAINT "World_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Campaign" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "campaignDesc" TEXT,
    "worldId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'active',
    "metadata" JSONB,

    CONSTRAINT "Campaign_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "World_name_idx" ON "World"("name");

-- CreateIndex
CREATE INDEX "Campaign_worldId_idx" ON "Campaign"("worldId");

-- CreateIndex
CREATE INDEX "Campaign_name_idx" ON "Campaign"("name");

-- AddForeignKey
ALTER TABLE "Campaign" ADD CONSTRAINT "Campaign_worldId_fkey" FOREIGN KEY ("worldId") REFERENCES "World"("id") ON DELETE CASCADE ON UPDATE CASCADE;
