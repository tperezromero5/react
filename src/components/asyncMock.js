import remeraBlanca from "../assets/images/remeraBlanca.jpg"
import remeraNegra from "../assets/images/remeraNegra.jpg"
import botellaAgua from "../assets/images/botellaAgua.jpg"
const products = [
    {
        id: '1',
        name: 'remera clara',
        price: 5600,
        category:'indumentaria',
        img: remeraBlanca,
        stock:'10',
        description:'descripcion clara',
    },
    {
        id: '2',
        name: 'remera oscura',
        price: 5600,
        category:'indumentaria',
        img:remeraNegra,
        stock:'15',
        description:'descripcion oscura',
    },
    {
        id: '3',
        name: 'botella',
        price: 5600,
        category:'accesorios',
        img:botellaAgua,
        stock:'5',
        description:'descripcion botella',
    }
]
export const getProducts =() =>{
    return new Promise ((resolve) =>{
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}
export const getProductById=(productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {resolve(products.find(prod => prod.id ===productId))
        }, 500)
    })
}
export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(products.filter(prod => prod.category === productCategory))
        })
    })
}