# Trabajo Integrador - JS/CSS/HTML 

## Datos:

- **Nombre y Apellido**: Tomás Obredor
- **Comisión**: 3k10
- **Legajo**: 50113

## Características de Ejecución

En este repositorio se encuentra el proyecto completo con lo requerido en el informe. Se hace entrega del proyecto sin los `node_module` para mayor compatibilidad, por lo que se deberá seguir estos pasos para su ejecución:

**Atención**:
1. Abrir proyecto en Visual Studio Code o el editor de preferencias.
2. En la terminal dentro del proyecto se debe ejecutar el siguiente comando:
```
fnm env --use-on-cd | Out-String | Invoke-Expression
npm run dev
```
3. *Listo*, lo siguiente es abrir el link de nuestro proyecto que aparece en la terminal.
### Aspectos a saber:
Aunque el proyecto ya debería funcionar como se requiere con lo anterior mencionado, se debe de saber que en el proyecto se hizo uso de `sweetalert2`. Con lo cual si hay algún error respecto a las advertencias se deberá instalar la dependencia de la siguiente manera.
```
fnm env --use-on-cd | Out-String | Invoke-Expression
npm install sweetalert2
```