import { handleGetProductLocalStorage } from "../persistence/localStorage";
import { handleRenderList } from "./store";

// Función para buscar productos por nombre
export const handleSearchProductByName = () => {
    const inputHeader = document.getElementById("inputHeader"); // Obtener el valor del input de búsqueda
    const products = handleGetProductLocalStorage(); // Obtener la lista de productos almacenados en localStorage

    // Filtrar productos cuyo nombre incluya el valor del input (no sensible a mayúsculas)
    const result = products.filter((el) => 
        el.nombre.toLowerCase().includes(inputHeader.value.toLowerCase())
    );
    
    // Renderizar la lista filtrada de productos en la vista
    handleRenderList(result);
}
