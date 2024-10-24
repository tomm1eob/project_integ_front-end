//====PopUp====//

import { productoActivo, setproductoActivo } from "../../main";
import { handleDeleteProduct } from "../services/products";

// Evento para el botón de cancelar
const cancelButton = document.getElementById("cancelButton");

cancelButton.addEventListener("click", () => {
    handleCancelButton(); // Ejecuta la función que cierra el modal
});

// Función para cerrar el modal
const handleCancelButton = () => {
    closeModal(); // Cierra el modal llamando a la función `closeModal`
}

// Función para abrir el modal
export const openModal = () => {
    const modal = document.getElementById("modalPopUP");
    modal.style.display = "flex"; // Mostrar el modal

    // Mostrar o esconder el botón de eliminar según si hay un producto activo
    const buttonDelete = document.getElementById("deleteButton");
    if (productoActivo) {
        buttonDelete.style.display = "block"; // Mostrar si hay un producto activo
    } else {
        buttonDelete.style.display = "none"; // Esconder si no hay un producto activo
    }

    // Si existe un producto activo, cargar sus datos en los campos del modal
    if (productoActivo) {
        const nombre = document.getElementById("nombre"),
          imagen = document.getElementById("img"),
          precio = document.getElementById("precio"),
          categories = document.getElementById("categoria");
  
        // Asignar los valores del producto activo a los campos del formulario
        nombre.value = productoActivo.nombre;
        imagen.value = productoActivo.imagen;
        precio.value = productoActivo.precio;
        categories.value = productoActivo.categories;
    }
};

// Función para cerrar el modal
export const closeModal = () => {
    const modal = document.getElementById("modalPopUP");
    modal.style.display = "none"; // Ocultar el modal

    setproductoActivo(null); // Restablecer el producto activo a `null`
    resetModal(); // Restablecer los campos del modal
};

// Función para restablecer los campos del formulario dentro del modal
const resetModal = () => {
    const nombre = document.getElementById("nombre"),
      imagen = document.getElementById("img"),
      precio = document.getElementById("precio"),
      categories = document.getElementById("categoria");

    // Vaciar los campos del formulario
    nombre.value = "";
    imagen.value = "";
    precio.value = 0; // Restablecer precio a 0
    categories.value = "Seleccione una categoria"; // Restablecer categoría
};

// Evento para el botón de eliminar
const deleteButton = document.getElementById("deleteButton");
deleteButton.addEventListener("click", () => {
    handleButtonDelete(); // Ejecuta la función de eliminar
});

// Función para eliminar el producto
const handleButtonDelete = () => {
    handleDeleteProduct(); // Llama a la función que maneja la eliminación del producto
}
