// ==== PRODUCTO ==== //

import Swal from "sweetalert2";
import { productoActivo } from "../../main";
import { handleGetProductLocalStorage, setInLocalStorage } from "../persistence/localStorage";
import { closeModal } from "../views/modal";
import { handleGetProductsToStore, handleRenderList } from "../views/store";

// Asignar evento de guardar al botón "Aceptar"
const acceptButton = document.getElementById("acceptButton");
acceptButton.addEventListener("click", () => {
  handleSaveOrModifyElements(); // Ejecuta la función de guardar o modificar producto
});

// Función para guardar o modificar productos
const handleSaveOrModifyElements = () => {
  // Obtener los valores del formulario
  const nombre = document.getElementById("nombre").value,
    imagen = document.getElementById("img").value,
    precio = document.getElementById("precio").value,
    categories = document.getElementById("categoria").value;

  let object = null;
  
  // Si se está modificando un producto existente
  if (productoActivo) {
    object = {
      ...productoActivo, // Mantener el resto de propiedades del producto activo
      nombre,
      imagen,
      precio,
      categories
    }
  } else {
    // Si es un producto nuevo
    object = {
      id: new Date().toISOString(), // Asignar un ID único basado en la fecha actual
      nombre,
      imagen,
      precio,
      categories
    };
  }

  // Mostrar alerta de éxito con SweetAlert2
  Swal.fire({
    title: "Correcto!",
    text: "Producto guardado correctamente!",
    icon: "success"
  });

  // Guardar o actualizar el producto en LocalStorage
  setInLocalStorage(object);

  // Actualizar la lista de productos y cerrar el modal
  handleGetProductsToStore();
  closeModal();
};

// Función para eliminar un producto
export const handleDeleteProduct = () => {

  // Mostrar alerta de confirmación con SweetAlert2
  Swal.fire({
    title: "¿Desea eliminar este elemento?",
    text: "La eliminación será permanente!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, eliminar!"
  }).then((result) => {
    if (result.isConfirmed) {
      // Si el usuario confirma la eliminación, filtrar el producto del array
      const products = handleGetProductLocalStorage();
      const result = products.filter((el) => el.id !== productoActivo.id);

      // Actualizar LocalStorage con la nueva lista sin el producto eliminado
      localStorage.setItem("products", JSON.stringify(result));

      // Renderizar la lista actualizada y cerrar el modal
      const newProducts = handleGetProductLocalStorage();
      handleRenderList(newProducts);
      closeModal();
    } else {
      // Si se cancela, cerrar el modal
      closeModal();
    }
  });
}
