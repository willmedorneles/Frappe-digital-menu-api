function formatProductData(rawData) {
  return rawData.reduce((acc, item) => {
    let categoryGroup = acc.find((g) => g.categoryName === item.category_name);
    if (!categoryGroup) {
      categoryGroup = { categoryName: item.category_name, products: [] };
      acc.push(categoryGroup);
    }
    categoryGroup.products.push({
      name: item.name,
      shortDescription: item.short_description,
      description: item.long_description,
      price: item.price,
      image: item.image_url,
      tags: item.tags ? item.tags.split(",") : [],
    });
    return acc;
  }, []);
}

export { formatProductData };
