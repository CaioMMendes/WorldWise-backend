import { FastifyInstance } from "fastify";

export async function test(app: FastifyInstance) {
  app.get("/test", async (request, reply) => {
    return reply.status(201).send({ test: "working" });
  });
}
