///Fonctions gestion panier
// envoi des produits dans le localStorage

function savePanier(panier) {
  localStorage.setItem("panier", JSON.stringify(panier))
}

// récuperation des produits du localStorage 

function getPanier() {
  let panier = localStorage.getItem("panier")
  if (panier == null) {
      return []
  } else {
      return JSON.parse(panier)
  }
}

// ajout du produit ciblé dans le localStorage et verification des doublons 

function addPanier(product) {
  let panier = getPanier()
  let foundProduct = panier.find(p => p.id == product.id) && panier.find(p => p.color == product.color)
  if (foundProduct != undefined) {
      foundProduct.quantity += product.quantity
  } else {

      panier.push(product)
  }

  savePanier(panier)
}

// suppression du produit ciblé du localStorage 

function removeFromPanier(product) {
  console.log(product);
  //debugger;
  let panier = getPanier()
  // a tester 
  // panier.filter(p => p.id !== product.id && p => p.color !== product.color)
  panier = panier.filter(p => p.id != product.id || p.color !== product.color)
  savePanier(panier)
}


// gestion de l'ajout de quantité 

function addQuantity(product) {
  let panier = getPanier()
  //console.log(panier)
  let foundProduct = panier.find(p => p.id == product.id  ) && panier.find(p => p.color == product.color )
  

  if (foundProduct != undefined) {
      foundProduct.quantity = product.quantity
  }

  savePanier(panier)
}



