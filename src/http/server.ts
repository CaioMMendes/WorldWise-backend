import cookie from "@fastify/cookie";
import { fastifyCors } from "@fastify/cors";
import dotenv from "dotenv";
import fastify from "fastify";
import { test } from "./routes/test";
import { citiesRoute } from "./routes/citites-route";

dotenv.config();

const app = fastify();
app.register(cookie, {
  secret: process.env.COOKIE_SECRET, // for cookies signature
  hook: "onRequest", // set to false to disable cookie autoparsing or set autoparsing on any of the following hooks: 'onRequest', 'preParsing', 'preHandler', 'preValidation'. default: 'onRequest'
});

app.register(fastifyCors, {
  origin: [
    process.env.URL_ACCESS1!,
    process.env.URL_ACCESS2!,
    process.env.URL_ACCESS3!,
    process.env.URL_ACCESS4!,
  ],
});

app.register(test);
app.register(citiesRoute);

app.listen(
  { host: "0.0.0.0", port: Number(process.env.PORT) },
  (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening at ${address}`);
  }
);
