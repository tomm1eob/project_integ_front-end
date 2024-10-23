import { setInLocalStorage } from "./src/persistence/localStorage";
import { rederCategories } from "./src/services/categories";
import { handleGetProductsToStore } from "./src/views/store";
import './style.css'

// Aplicacion
handleGetProductsToStore();
rederCategories();

// Products //

const cancelButton = document.getElementById("cancelButton");
cancelButton.addEventListener("click", () => {
  closeModal();
});


// PopUp //

const buttonAdd = document.getElementById("buttonAddElement");
buttonAdd.addEventListener("click", () => {
  openModal();
});

// Funciones Abrir y Cerrar modal
const openModal = () => {
  const modal = document.getElementById("modalPopUP");
  modal.style.display = "flex";

};

const closeModal = () => {
  const modal = document.getElementById("modalPopUP");
  modal.style.display = "none";

};

// Funciones modificar o eliminar elementos
const acceptButton = document.getElementById("acceptButton");
acceptButton.addEventListener("click", () => {
  handleSaveOrModifyElements();
});

const handleSaveOrModifyElements = () => {
  const nombre = document.getElementById("nombre").value,
   imagen = document.getElementById("img").value,
   precio = document.getElementById("precio").value,
   categories = document.getElementById("categoria").value;

   let object = {
    id: new Date().toISOString(),
    nombre,
    imagen,
    precio,
    categories
   };
   setInLocalStorage(object)
   handleGetProductsToStore();
   closeModal();
};