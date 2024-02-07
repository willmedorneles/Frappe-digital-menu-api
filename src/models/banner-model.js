import connectToDatabase from "./../utils/db-connection.js";

async function getActiveBanner() {
  const connection = await connectToDatabase();
  const [rows] = await connection.query(
    "SELECT * FROM promotional_banners WHERE active = true"
  );
  return rows[0]; // Assuming there's only one active banner at a time
}

export { getActiveBanner };
