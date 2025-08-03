const API_URL="http://127.0.0.1:5001";

function fetchProducts(){
    fetch(`${API_URL}/get_products`).then(response=>response.json()).then(data=>{
        let tableBody=document.getElementById("product-table");
        tableBody.innerHTML="";
        data.products.forEach(product=>{
            const row=document.createElement("tr");
            row.innerHTML=`
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.stock}</td>`;
            tableBody.appendChild(row);
        });
    })
    .catch(error=>console.error("Error fetching products:",error));
}

function updateStock(){
    const name=document.getElementById("productName").value;
    const stock=document.getElementById("newStock").value;
    fetch(`${API_URL}/update_stock`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({name,stock})
    })
    .then(response=>response.json()).then(()=>{alert(data.message);}).catch(error=>console.error("Error updating stock:",error));
}

function addProduct(){
    let name=document.getElementById("productName").value;
    let price=document.getElementById("productPrice").value;
    let stock=document.getElementById("productStock").value;

    fetch(`${API_URL}/add_product`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({name,price,stock})
    })
    .then(response=>response.json()).then(()=>{
        alert("Product Added!");
        fetchProducts();
    })
    .catch(error=>console.error("Error adding product:",error));
}

function sellProduct(){
    let name=document.getElementById("sellProductName").value;
    let quantity=document.getElementById("sellQuantity").value;

    fetch(`${API_URL}/sell_product`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({name,quantity})
    })
    .then(response=>response.json()).then(data=>{
        alert(data.message);
        fetchProducts();
    })
    .catch(error=>console.error("Error selling product:",error));
}

function predictSales(){
    fetch(`${API_URL}/predict_sales`).then(response=>response.json()).then(data=>{
        document.getElementById("predictionResult").innerText=`Predicted Sales for Next Day:${data.predicted_sales} units`;
    })
    .catch(error=>console.error("Error predicting sales:",error));
}