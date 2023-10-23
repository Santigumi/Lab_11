export const getData = async () => {
	const response = await fetch("https://fakestoreapi.com/products");
	const data = await response.json();
	return data;
}

export class Itemshop {
	constructor(id, title, price, description, category, image, rating) {
		this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
        this.category = category;
        this.image = image;
        this.rating = rating;
	}

	render() {
        const fondo = document.createElement("div");
        fondo.id = "fondo";
    
        const img = document.createElement("img");
        img.id = "img";
        img.src = this.image;

        const texto = document.createElement("div");
        texto.id = "texto";

        const title = document.createElement("div");
        title.id = "nombre";
        title.innerHTML = `Title: ${this.title}`

        const precio = document.createElement("div");
        precio.id = "precio";
        precio.innerHTML = "$" + this.price;

        const comprar = document.createElement("a");
        comprar.id = "comprar";
        comprar.innerHTML = "Comprar";
        comprar.setAttribute("href", "product.html?product=1");

        fondo.appendChild(img);
        fondo.appendChild(texto);

        texto.appendChild(title);
        texto.appendChild(precio);
        texto.appendChild(comprar);
        return fondo;
	}
}