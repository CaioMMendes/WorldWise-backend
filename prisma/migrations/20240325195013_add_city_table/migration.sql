-- CreateTable
CREATE TABLE "city" (
    "id" TEXT NOT NULL,
    "cityName" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "emoji" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "notes" TEXT NOT NULL,
    "lat" TEXT NOT NULL,
    "lng" TEXT NOT NULL,

    CONSTRAINT "city_pkey" PRIMARY KEY ("id")
);
