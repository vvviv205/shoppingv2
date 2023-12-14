const api =
  "https://raw.githubusercontent.com/vvviv205/shoppingv2/main/Data/products.json";

export async function getProducts(category) {
  let res = await fetch(api);
  let befdata = await res.json();
  let data1 = befdata.products;
  if (category !== "all" && category !== "bookmarks") {
    data1 = data1.filter((item) => item.category === category);
  }
  return data1;
}
export async function getProduct(id) {
  let res = await fetch(api);
  let befdata = await res.json();
  let data = befdata.products.filter((d) => d.id == id);
  return data;
}

export async function getCategories() {
  let res = await fetch(api);
  let data = await res.json();
  let categories = [];
  data.products.map((p) =>
    categories.includes(p.category) ? p : categories.push(p.category)
  );
  return categories;
}
