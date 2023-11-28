const products = [
    {
        id: '1',
        name: 'remera clara',
        price: 5600,
        category:'indumentaria',
        img:'',
        stock:'10',
        description:'descripcion clara',
    },
    {
        id: '2',
        name: 'remera oscura',
        price: 5600,
        category:'indumentaria',
        img:'',
        stock:'15',
        description:'descripcion oscura',
    },
    {
        id: '1',
        name: 'botella',
        price: 5600,
        category:'accesorios',
        img:'',
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