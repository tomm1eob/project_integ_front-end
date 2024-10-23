import { setInLocalStorage } from "./src/persistence/localStorage";
import { rederCategories } from "./src/services/categories";
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
export const openModal = () => {
  const modal = document.getElementById("modalPopUP");
  modal.style.display = "flex";

  if (productoActivo){
    const nombre = document.getElementById("nombre"),
    imagen = document.getElementById("img"),
    precio = document.getElementById("precio"),
    categories = document.getElementById("categoria");

    nombre.value = productoActivo.nombre;
    imagen.value = productoActivo.imagen;
    precio.value = productoActivo.precio;
    categories.value = productoActivo.categories;
  }

};

 export const closeModal = () => {
  const modal = document.getElementById("modalPopUP");
  modal.style.display = "none";
  setproductoActivo(null)
  resetModal();
};

const resetModal = () => {
    const nombre = document.getElementById("nombre"),
    imagen = document.getElementById("img"),
    precio = document.getElementById("precio"),
    categories = document.getElementById("categoria");

    nombre.value = "";
    imagen.value = "";
    precio.value = 0;
    categories.value = "Seleccione una categoria";
}

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
  
  let object = null
  
   if(productoActivo){
    object = {
      ...productoActivo,
      nombre,
      imagen,
      precio,
      categories
    }
  }else{
    object = {
      id: new Date().toISOString(),
      nombre,
      imagen,
      precio,
      categories
     };
  }

   setInLocalStorage(object)
   handleGetProductsToStore();
   closeModal();
};