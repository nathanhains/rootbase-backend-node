import { DataSourceOptions, DataSource } from "typeorm";
import { Organization, Employee, Garden, Task, Comment } from "../models";

const config: DataSourceOptions = {
  type: "postgres",
  host: process.env.POSTGRES_HOST || "localhost",
  port: Number(process.env.POSTGRES_PORT) || 5432,
  username: process.env.POSTGRES_USER || "nathanhains",
  password: process.env.POSTGRES_PASSWORD || "Alfred29!!",
  database: process.env.POSTGRES_DB || "postgres",
  entities: [Organization, Employee, Garden, Task, Comment],
  synchronize: true,
};

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.POSTGRES_HOST || "localhost",
  port: Number(process.env.POSTGRES_PORT) || 5432,
  username: process.env.POSTGRES_USER || "nathanhains",
  password: process.env.POSTGRES_PASSWORD || "Alfred29!!",
  database: process.env.POSTGRES_DB || "rootbase_backend_node",
  entities: [Organization, Employee, Garden, Task, Comment],
  synchronize: true,
});
export default AppDataSource;
