import mysql from "mysql2/promise";

import dotenv from "dotenv";

dotenv.config();

const connectToDatabase = async () => {
  try {
    const connection = await mysql.createConnection({
      host: `${process.env.DB_HOST}`,
      user: `${process.env.DB_USER}`,
      password: `${process.env.DB_PASSWORD}`,
      database: `${process.env.DB_NAME}`,
    });

    console.log("Successfully connected to the database.");

    // You can now use the connection for queries...
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};

export default connectToDatabase;
