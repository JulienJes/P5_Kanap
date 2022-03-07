// Récupération des données de l'API
fetch("http://localhost:3000/api/products")
    .then(function(res) {
        if (res.ok) {
            return res.json();
        }
    })
    .then(function(showAPI) {
        const articles = showAPI;
        console.table(articles);

        // boucle 1 article par index
        for (let article in articles) {

            // liens dynamiques
            let productLink = document.createElement("a");
            document.querySelector(".items").appendChild(productLink);
            productLink.href = 'product.html?id=${showAPI[article]._id}';

            // articles dynamiques
            let productArticle = document.createElement("article");
            productLink.appendChild(productArticle);

            // imgs dynamiques
            let productImg = document.createElement("img");
            productArticle.appendChild(productImg);
            productImg.src= showAPI[article].imageUrl;
            productImg.alt= showAPI[article].altTxt;

            // nom de l'article
            let productName = document.createElement("h3");
            productArticle.appendChild(productName);
            productName.classList = "productName";
            productName.innerHTML = showAPI[article].name;

            // description de l'article
            let productDescription = document.createElement("p");
            productArticle.appendChild(productDescription);
            productDescription.classList = "productDescription";
            productDescription.innerHTML = showAPI[article].description;
        }
    })
    .catch(function(error) {
        console.log(error)
    });





