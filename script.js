

async function fetchData() {

    const response = await fetch('https://kaiodeodato.github.io/API_AI_STORE/data/myDataShoes.json');
    const productsData = await response.json();
    // console.log(productsData)


    //teste API produtos
    const products = productsData.results
    console.log(products)
    const ArrayImagens = products.map(item => {
        return (`
            <img class="imgTeste" src="${item.image}">
        `)
    })
    const ElementosImages = document.getElementById('teste')
    ElementosImages.innerHTML = ArrayImagens.join("")


    return products;
    }
fetchData()



//copy event
function copyEvent(id)
{
    var str = document.getElementById(id);
    window.getSelection().selectAllChildren(str);
    document.execCommand("Copy")
    alert('copiei')
}