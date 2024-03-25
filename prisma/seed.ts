import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    const cities = [
      {
        "cityName": "Lisbon",
        "country": "Portugal",
        "emoji": "🇵🇹",
        "date": "2027-10-31T15:59:59.138Z",
        "notes": "My favorite city so far!",

        "lat": "38.727881642324164",
        "lng": "-9.140900099907554",
      },
      {
        "cityName": "Madrid",
        "country": "Spain",
        "emoji": "🇪🇸",
        "date": "2027-07-15T08:22:53.976Z",
        "notes": "",

        "lat": "40.46635901755316",
        "lng": "-3.7133789062500004",
      },
      {
        "cityName": "Berlin",
        "country": "Germany",
        "emoji": "🇩🇪",
        "date": "2027-02-12T09:24:11.863Z",
        "notes": "Amazing 😃",

        "lat": "52.53586782505711",
        "lng": "13.376933665713324",
      },
      {
        "cityName": "Nijar",
        "country": "Spain",
        "emoji": "🇪🇸",
        "date": "2023-04-03T07:47:59.202Z",
        "notes": "",

        "lat": "36.967508314568164",
        "lng": "-2.13128394200588",
      },
    ];

    await prisma.city.createMany({
      data: cities,
    });

    console.log("Seed completed successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
