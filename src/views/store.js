/* ==== STORE ==== */

import { setproductoActivo } from "../../main";
import { handleGetProductLocalStorage } from "../persistence/localStorage";
import { openModal } from "./modal";

// Obtener los productos y renderizar la lista en la tienda
export const handleGetProductsToStore = () => {
    const products = handleGetProductLocalStorage(); // Obtener productos del localStorage
    handleRenderList(products); // Renderizar la lista de productos
};

// Función que filtra los productos y renderiza cada categoría
export const handleRenderList = (productosIn) => {

    // Filtrado de productos por categorías
    const burgers = productosIn.filter((el) => el.categories == "Hamburguesas");
    const papas = productosIn.filter((el) => el.categories == "Papas");
    const gaseosas = productosIn.filter((el) =>  el.categories == "Gaseosas");

    // Función interna para renderizar productos de una categoría específica
    const renderProductGroup = (productos, title) => {
        if (productos.length > 0) {
            // Crear el HTML para cada producto de la categoría
            const productosHTML = productos.map((producto, index) => {
                return `
                <div class="containerTargetItem" id="product-${producto.categories}-${index}">
                    <div>
                        <img src="${producto.imagen}" />
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

            // Retornar el HTML de la sección con el título y productos
            return `
            <section class="seccionStore">
                <div class="containerTitleSection"><h3>${title}</h3></div>
                <div class="constainerProductStore">
                    ${productosHTML.join("")} <!-- Unir los productos en el HTML -->
                </div>
            </section>
            `;
        } else {
            return ""; // No mostrar nada si no hay productos
        }
    };

    // Renderizado de productos en el contenedor de la tienda
    const appContainer = document.getElementById("storeContainer");
    appContainer.innerHTML = `
        ${renderProductGroup(burgers, "Hamburguesas")}
        ${renderProductGroup(papas, "Papas")}
        ${renderProductGroup(gaseosas, "Gaseosas")}
    `;

    // Añadir eventos a cada grupo de productos para manejar clics
    const addEvents = (productsIn) => {
        if (productsIn) {
            productsIn.forEach((element, index) => {
                const productContainer = document.getElementById(
                    `product-${element.categories}-${index}`
                );
                productContainer.addEventListener("click", () => {
                    setproductoActivo(element); // Establecer el producto activo
                    openModal(); // Abrir el modal con el producto seleccionado
                });
            });
        }
    };

    // Añadir eventos a cada grupo de productos (hamburguesas, papas, gaseosas)
    addEvents(burgers);
    addEvents(papas);
    addEvents(gaseosas);
};
