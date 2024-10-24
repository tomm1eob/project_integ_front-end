// Obtener productos desde LocalStorage
export const handleGetProductLocalStorage = () => {
    // Recuperamos el array de productos desde localStorage y lo parseamos
    const products = JSON.parse(localStorage.getItem("products"));

    // Si existen productos en localStorage, los devolvemos
    if (products) {
        return products;
    } else {
        // Si no hay productos, devolvemos un array vacío
        return [];
    }
}

// Guardar o actualizar productos en LocalStorage
export const setInLocalStorage = (productIn) => {
    // Verificamos que el producto no sea nulo o undefined
    if (productIn) {
        // Obtenemos la lista de productos actual desde localStorage
        let productInLocal = handleGetProductLocalStorage();

        // Buscamos si el producto ya existe en localStorage por su ID
        const existingIndex = productInLocal.findIndex((productsLocal) => 
            productsLocal.id === productIn.id
        );

        // Verificamos si el producto ya está en el array
        if (existingIndex !== -1) {
            // Si existe, lo reemplazamos en su posición actual
            productInLocal[existingIndex] = productIn;
        } else {
            // Si no existe, lo añadimos al array
            productInLocal.push(productIn);
        }
        
        // Guardamos el array actualizado en localStorage
        localStorage.setItem("products", JSON.stringify(productInLocal));  
    }
}
