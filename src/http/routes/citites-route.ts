import { FastifyInstance } from "fastify";
import { getAllCitiesController } from "../controllers/get-all-cities-controller";

export async function citiesRoute(app: FastifyInstance) {
  app.get("/cities", async (request, reply) =>
    getAllCitiesController(request, reply)
  );
}
