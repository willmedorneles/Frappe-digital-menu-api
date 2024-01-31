import connectToDatabase from "./../utils/db-connection.js";

async function getRawProductData() {
  const connection = await connectToDatabase();
  const query = `
        SELECT 
            c.category_name,
            p.name,
            p.short_description,
            p.long_description,
            p.price,
            i.image_url,
            GROUP_CONCAT(t.tag_name) as tags
        FROM products p
        JOIN category_products cp ON p.product_id = cp.product_id
        JOIN categories c ON cp.category_id = c.category_id
        LEFT JOIN product_tags pt ON p.product_id = pt.product_id
        LEFT JOIN tags t ON pt.tag_id = t.tag_id
        LEFT JOIN images i ON p.image_id = i.image_id
        GROUP BY p.product_id
        ORDER BY c.category_name, p.name;
    `;
  const [rows] = await connection.query(query);
  return rows;
}

export { getRawProductData };
