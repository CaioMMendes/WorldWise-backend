import { FastifyReply, FastifyRequest } from "fastify";
import { getAllCitiesService } from "../services/get-all-cities-service";

export const getAllCitiesController = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { data, status } = await getAllCitiesService();

  if (status === "success") {
    return reply
      .status(201)
      .send({ message: "Cidades encontradas com sucesso!", data: data });
  } else {
    return reply
      .status(400)
      .send({ message: "Ocorreu um erro ao tentar encontrar as cidades." });
  }
};
