import { rederCategories } from "./src/services/categories";
import { openModal } from "./src/views/modal";
import { handleSearchProductByName } from "./src/views/searchBar";
import { handleGetProductsToStore } from "./src/views/store";
import './style.css'

// Aplicacion
export let categoriaActiva = null;

export const setCategoriaActiva = (categoriaIn) => {
  categoriaActiva = categoriaIn;
}

export let productoActivo = null;

export const setproductoActivo = (productoIn) => {
  productoActivo = productoIn;
}


handleGetProductsToStore();
rederCategories();


// HEADER

const buttonAdd = document.getElementById("buttonAddElement");
buttonAdd.addEventListener("click", () => {
  openModal();
});

const buttonSearch = document.getElementById("buttonSearch");
buttonSearch.addEventListener("click", () => {
  handleSearchProductByName();
})

