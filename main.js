import { rederCategories } from "./src/services/categories"; 
import { openModal } from "./src/views/modal"; 
import { handleSearchProductByName } from "./src/views/searchBar"; 
import { handleGetProductsToStore } from "./src/views/store"; 
import './style.css' 

// Variables globales
export let categoriaActiva = null; // Almacena la categoría seleccionada
export const setCategoriaActiva = (categoriaIn) => {
  categoriaActiva = categoriaIn; // Función para establecer la categoría activa
};

export let productoActivo = null; // Almacena el producto seleccionado
export const setproductoActivo = (productoIn) => {
  productoActivo = productoIn; // Función para establecer el producto activo
};

// Llamadas iniciales para cargar la tienda y las categorías
handleGetProductsToStore(); // Obtener y mostrar los productos al cargar la página
rederCategories(); // Renderizar las categorías disponibles

// HEADER

// Añadir evento al botón de "Agregar producto" para abrir el modal
const buttonAdd = document.getElementById("buttonAddElement");
buttonAdd.addEventListener("click", () => {
  openModal(); // Llamar a la función que abre el modal
});

// Añadir evento al botón de búsqueda para filtrar productos por nombre
const buttonSearch = document.getElementById("buttonSearch");
buttonSearch.addEventListener("click", () => {
  handleSearchProductByName(); // Llamar a la función que busca productos
});
