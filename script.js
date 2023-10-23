import { getData, Itemshop } from "./utils.js";

const render = async () => {
  const data = await getData();

  const contenedor = document.querySelector("#contenedor");

  for (const product of data) {
    const item = new Itemshop(
      product.id,
      product.title,
      product.price,
      product.description,
      product.category,
      product.image,
      product.rating
    );
	
	const productDiv = item.render();

	contenedor.appendChild(productDiv);
  }
};

window.onload = async () => {
  await render();
};
