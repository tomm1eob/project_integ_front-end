/* ==== STORE ==== */

import { handleGetProductLocalStorage } from "../persistence/localStorage";

export const handleGetProductsToStore = () => {
    const products = handleGetProductLocalStorage();
    handleRenderList(products); 
};

export const handleRenderList = (productosIn) => {
    const burgers = productosIn.filter((el) => 
        el.categories == "Hamburguesas");

    const papas = productosIn.filter((el) => 
        el.categories == "Papas");

    const gaseosas = productosIn.filter((el) => 
        el.categories == "Gaseosas");

    const renderProductGroup = (productos , title) => {
        if (productos.length > 0){
        const productosHTML = productos.map((producto, index) => {
            return`
            <div id="product-${producto.categories}-${index}">
                <div>
                    <img src=${producto.image}/>
                    <div>
                        <h2>${producto.nombre}</h2>
                    </div>
                    <div>
                        <p><b>Precio:</b> $ ${producto.precio}</p>
                        <p><b>Categoria:</b> $ ${producto.categoria}</p> 
                    </div>
                </div>
            </div>
            `;
        });

        return `
        <section>
            <h3>${title}</h3>
            <div>
                ${productosHTML.join("")}
            </div>
        </section>
        `;
    }else{
        return "";
    }
    };
    // Renderisamos cada uno de los productos dentro de su categoria

    const appContainer = document.getElementById("storeContainer");
    appContainer.innerHTML = `
    ${renderProductGroup(burgers, "Hamburguesas")}
    ${renderProductGroup(papas, "Papas")}
    ${renderProductGroup(gaseosas, "Gaseosas")}
    `;

    const addEvents = (productosIn) => {
        productosIn.array.forEach((element,index) => {

            const productContainer = document.getElementById(`product-${element.categories}-${index}`)
                productContainer.addEventListener("click", () => {
                    console.log("Producto activo:", element)
                });
        });
    };

    addEvents(burgers);
    addEvents(papas);
    addEvents(gaseosas);
};