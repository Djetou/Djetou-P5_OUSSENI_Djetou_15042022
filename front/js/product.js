// recupération du produit mentionné dans L'url 

let id = (new URL(window.location).searchParams.get("id"));

fetch("http://localhost:3000/api/products/" + id)
    .then(data => data.json())

    // affichage du produit et de ses opétions avec interpolation de variable

    .then(product => {
        document.querySelector(".item__img").insertAdjacentHTML("afterbegin", `<img src="${product.imageUrl}" alt="${product.altTxt}">`);
        document.querySelector("#title").insertAdjacentHTML("afterbegin", `${product.name}`);
        document.querySelector("#price").insertAdjacentHTML("afterbegin", `${product.price}`);
        document.querySelector("#description").insertAdjacentHTML("afterbegin", `${product.description}`);
        for (let productSelectColor of product.colors) {
            document.querySelector("#colors").innerHTML += `<option value="${productSelectColor}">${productSelectColor}</option>`
        };

        // création de l'objet à envoyer dans le localStorage au click

        document.querySelector("#addToCart").addEventListener("click", function () {

            const colors = document.getElementById('colors').value
            const quantity = document.getElementById('quantity').value
            const quantityNumber = parseInt(quantity)

            const productId = {
                id: id,
                
                name: product.name,
                color: colors,
                quantity: quantityNumber,
                //price: product.price,
                image: product.imageUrl,
                altTxt: product.altTxt,
            }

            // alert en cas d'anomalie 

            if (productId.color == "") {
                const warning = document.querySelector(".item__content__settings").insertAdjacentHTML("afterbegin", `<style>
                .item__content__settings{
                    background-color:red;
                }
                   `)
                alert('merci de choisir une couleur')

            } else if (productId.quantity <= 0) {
                const warning = document.querySelector(".item__content__settings").insertAdjacentHTML("afterbegin", `<style>
                .item__content__settings{
                    background-color:red;
                }
                   `)
                alert('merci de choisir une quantitée entre 1 et 100')
            } else if (productId.quantity > 100) {
                const warning = document.querySelector(".item__content__settings").insertAdjacentHTML("afterbegin", `<style>
                    .item__content__settings{
                        background-color:red;
                    }
                       `)
                alert('merci de choisir une quantitée entre 1 et 100')
            } else {

                // envoi dans le localStorage et redirection vers la page panier 

                addPanier(productId)
                window.location.assign("cart.html")
            }
        })
    });