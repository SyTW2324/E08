import { connect } from "mongoose";

if (!process.env.MONGODB_URL) {
  console.error("Need to define mongo url to even start .env");
  process.exit(1);
}

try {
  await connect(process.env.MONGODB_URL2!);
  console.log("Conectado al servidor MongoDB");
} catch (error) {
  console.log(error);
  console.log("No se pudo conectar al servidor MongoDB");
}
