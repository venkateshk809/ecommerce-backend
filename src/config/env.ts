import dotenv from "dotenv";

const environment = process.env.NODE_ENV || "development";

dotenv.config({
  path: `.env.${environment}`,
});
console.log(`Loaded environment: ${environment}`);

export default environment;
