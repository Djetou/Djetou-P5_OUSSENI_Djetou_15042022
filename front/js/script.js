// recupération du tableau de produit


fetch("http://localhost:3000/api/products/")
    .then(data => data.json())

    // création de chaque éléments avec interpolation de variable
    .then(jsonListProduct => {
        console.log(jsonListProduct)
        let contenuHtml = "";
        for (let jsonProduct of jsonListProduct) {
            contenuHtml += ` <a href="./product.html?id=${jsonProduct._id}">
                                                            <article>
                                                            <img src="${jsonProduct.imageUrl}" alt="${jsonProduct.altTxt}">
                                                            <h3 class="productName">${jsonProduct.name}</h3>
                                                            <p class="productDescription">${jsonProduct.description}</p>
                                                            </article>
                                                        </a> `
        }


        document.querySelector("#items").innerHTML = contenuHtml;
    });

    const passengers = [
        "Will Alexander",
        "Sarah Kate",
        "Audrey Simon",
        "Tao Perkington"
    ]
    
    for (let passenger of passengers) {
       console.log("Embarquement du passager " + passenger);
    }