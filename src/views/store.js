/* ==== STORE ==== */

import { openModal, setproductoActivo } from "../../main";
import { handleGetProductLocalStorage } from "../persistence/localStorage";

// Traemos los elementos y llamamos al render
export const handleGetProductsToStore = () => {
    const products = handleGetProductLocalStorage();
    handleRenderList(products); 
};

// Filtra y renderiza la seccion con tsus respectivos elementos
export const handleRenderList = (productosIn) => {

    // Filtrado de array por categorias
    const burgers = productosIn.filter((el) => el.categories == "Hamburguesas");
    const papas = productosIn.filter((el) => el.categories == "Papas");
    const gaseosas = productosIn.filter((el) =>  el.categories == "Gaseosas");

    // Renderiza los elementos de la seccion
    const renderProductGroup = (productos , title) => {
        if (productos.length > 0){
        const productosHTML = productos.map((producto, index) => {
            return `
            <div class= "containerTargetItem "id="product-${producto.categories}-${index}">
                <div>
                    <img src="${producto.imagen}"/>
                    <div>
                        <h2>${producto.nombre}</h2>
                    </div>
                    <div class="targetProps">
                        <p><b>Precio:</b> $ ${producto.precio}</p>
                    </div>
                </div>
            </div>
            `;
        });
        
        // Retorna la seccion con todos los elementos
        return `
        <section class="seccionStore">
            <div class="containerTitleSection"><h3>${title}</h3></div>
            <div class="constainerProductStore">
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

    // Añadimos los eventos
    const addEvents = (productsIn) => {
        if (productsIn){
            productsIn.forEach((element, index) => {
                const productContainer = document.getElementById(
                    `product-${element.categories}-${index}`
                );
                productContainer.addEventListener("click", () => {
                    setproductoActivo(element)
                    openModal();
                });
            });
        };
    };
    addEvents(burgers);
    addEvents(papas);
    addEvents(gaseosas);
};