import knex from "knex";
import knexFile from "../../knexfile.js";
import config from "../config/index.js";

const environment = config.env || "development";

const db = knex(knexFile[environment]);

export default db;