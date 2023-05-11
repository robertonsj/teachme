import knex from "knex";
import path from "path"; //para lidar com caminhas dentro do Node

const db = knex({
  client: "sqlite3",
  connection: {
    //Onde, dentro do projeto, ficará armaz. o banco
    filename: path.resolve(__dirname, "database.sqlite"),
  },
  useNullAsDefault: true,
});

export default db;
