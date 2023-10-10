import db from "../lib/database";
import Sequelize from "sequelize";

export const Cliente = db.define(
  "clientes",
  {
    id_cliente: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: Sequelize.STRING,
    },
    morada: {
      type: Sequelize.STRING,
    },
    codigo_postal: {
      type: Sequelize.STRING,
    },
    distrito: {
      type: Sequelize.INTEGER,
    },
    concelho: {
      type: Sequelize.INTEGER,
    },
    nif: {
      type: Sequelize.STRING,
    },
    telefone: {
      type: Sequelize.STRING,
    },
    telemovel: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    tipo_cliente: {
      type: Sequelize.INTEGER,
    },
    contato_empresa: {
      type: Sequelize.STRING,
    },
    setorCliente: {
      type: Sequelize.INTEGER,
    },
    localidade: {
      type: Sequelize.STRING,
    },
    estado: {
      type: Sequelize.INTEGER,
    },
  },
  { timestamps: false }
);

export default Cliente;
