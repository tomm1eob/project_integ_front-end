//===== CATEGORIA =====//

import { categoriaActiva } from "../../main";
import { handleGetProductLocalStorage } from "../persistence/localStorage";
import { handleRenderList } from "../views/store";

// Filtra productos según la categoría seleccionada
const handleFilterProductsByCategory = (categoryIn) => {
    const products = handleGetProductLocalStorage();

    switch (categoryIn) {
        case categoriaActiva:
            // Renderiza todos los productos si la categoría activa está seleccionada
            handleRenderList(products);
            break;
        case "Todo":
            // Muestra todos los productos si se selecciona la opción "Todo"
            handleRenderList(products);
            break;
        // Filtra según la categoría seleccionada: Hamburguesas, Papas, Gaseosas
        case "Hamburguesas":
        case "Papas":
        case "Gaseosas":
            const result = products.filter((el) => el.categories == categoryIn);
            handleRenderList(result);
            break;

        // Ordena productos por precio de mayor a menor
        case "mayorPrecio":
            const resultPrecioMayor = products.sort((a, b) => b.precio - a.precio); 
            handleRenderList(resultPrecioMayor);
            break;

        // Ordena productos por precio de menor a mayor
        case "menorPrecio":
            const resultPrecioMenor = products.sort((a, b) => a.precio - b.precio); 
            handleRenderList(resultPrecioMenor);
            break;

        default:
            break;
    }
}

// Renderiza la lista de categorías
export const rederCategories = () => {
    const ulList = document.getElementById("listFilter");
    
    // Insertamos las categorías disponibles en el HTML
    ulList.innerHTML = `
    <li id="Todo"> Todos los productos</li>
    <li id="Hamburguesas">Hamburguesas</li>
    <li id="Papas">Papas</li>
    <li id="Gaseosas">Gaseosas</li>
    <li id="mayorPrecio">Mayor precio</li>
    <li id="menorPrecio">Menor precio</li>
    `;

    const liElements = ulList.querySelectorAll("li");
    
    // Asignamos un evento click a cada categoría
    liElements.forEach((liElement) => {
        liElement.addEventListener("click", () => {
            handleClick(liElement);
        });
    });

    // Manejamos la lógica de qué categoría está activa
    const handleClick = (elemento) => {
        handleFilterProductsByCategory(elemento.id);
        liElements.forEach((el) => {
            // Removemos la clase activa de las otras categorías
            if (el.classList.contains("liActive")) {
                el.classList.remove("liActive");
            }
            // Añadimos la clase activa a la categoría seleccionada
            if (elemento == el) {
                el.classList.add("liActive");
            }
        });
    }
}
