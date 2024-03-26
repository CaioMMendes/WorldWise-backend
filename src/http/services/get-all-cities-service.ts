import { prisma } from "../lib/prisma";

export const getAllCitiesService = async () => {
  try {
    const cities = await prisma.city.findMany({});
    return { status: "success", data: cities };
  } catch (error) {
    console.log(error);
    return {
      status: "error",
    };
  }
};
