// LocalStorage

export const handleGetProductLocalStorage = () => {
    const products = JSON.parse(localStorage.getItem("products"));

    if (products) {
        return products;
    }else {
        return[]
    }
}

// Guardar LocalStorage
export const setInLocalStorage = (productIn) => {
    // Traemos elementos
    let productInLocal = handleGetProductLocalStorage();

    const existingIndex = productInLocal.findIndex((productsLocal) => 
        productsLocal.id === productIn.id);  // Usar igualdad estricta
    
    // Verificamos si es elemento
    if (existingIndex !== -1){  // Usar comparación correcta
        // Si existe debe remplazarse
        productInLocal[existingIndex] = productIn;
    } else {
        productInLocal.push(productIn);
    }
    
    localStorage.setItem("products", JSON.stringify(productInLocal));  // Corregir 'stringfy' a 'stringify'
}

