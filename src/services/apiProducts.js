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
  console.log(id);
  let data = befdata.products.filter((d) => d.id == id);
  console.log(data);

  return data;
}

export async function getCategories() {
  let res = await fetch(`http://localhost:8000/products/`);
  let data = await res.json();
  let categories = [];
  data.map((p) =>
    categories.includes(p.category) ? p : categories.push(p.category)
  );
  return categories;
}
export async function getBrands() {
  let res = await fetch(`http://localhost:8000/products/`);
  let data = await res.json();
  let brands = [];
  data.map((p) => (brands.includes(p.brand) ? p : brands.push(p.brand)));
  return brands;
}
