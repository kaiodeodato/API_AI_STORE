

async function fetchData() {

    // const response = await fetch('https://kaiodeodato.github.io/API_AI_STORE/data/myDataAccessories.json');
    const response = await fetch('https://kaiodeodato.github.io/API_AI_STORE/myData.json');
    const productsData = await response.json();
    // console.log(productsData)


    //teste API produtos
    const products = productsData.results
    console.log(products)
    const ArrayImagens = products.map(item => {
        return (`
        <div class="divBoxTeste">
            <a target="_blanck" href="${item.image}">
                <img class="imgTeste" src="${item.image}">
            </a>
        </div>
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

{/* <p>category:${item.category}</p>
<p>type:${item.type}</p>
<p>title${item.title}</p>
<p>model:${item.model}</p>
<p>color:${item.color}</p>
<p>materials:${item.materials}</p>
<p>description:${item.description}</p>
<p>price:${item.price}</p> */}