

async function fetchData() {

    const response = await fetch('https://kaiodeodato.github.io/API_AI_STORE/myData.json');
    const products = await response.json();
    console.log(products)
    return products;
    }
fetchData()




function copyEvent(id)
{
    var str = document.getElementById(id);
    window.getSelection().selectAllChildren(str);
    document.execCommand("Copy")
    alert('copiei')
}