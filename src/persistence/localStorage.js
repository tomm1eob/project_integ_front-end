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

    if(productIn){
            // Traemos elementos
        let productInLocal = handleGetProductLocalStorage();

        const existingIndex = productInLocal.findIndex((productsLocal) => 
        productsLocal.id === productIn.id);  
    
    // Verificamos si es elemento
        if (existingIndex !== -1){  
        // Si existe debe remplazarse
        productInLocal[existingIndex] = productIn;
        }else {
            // Si no lo agregase
        productInLocal.push(productIn);
        }
        
        // Seteamos el nuevo array
        localStorage.setItem("products", JSON.stringify(productInLocal));  
    }

}
