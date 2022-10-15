import firebase from "../config/firebase"
export async function getAllProductos(){
    const querySnaphot = await firebase.db.collection("productos")
        .get()
    return querySnaphot.docs
}
export async function getByIdProductos(id){
    return await firebase.db.doc("productos/"+id)
        .get()
}
export async function getAllCategories(id){
    return await firebase.db.collection("categorias")
        .get()
}
export async function crearProducto(data){
    return await firebase.db.collection("productos")
        .add(data)
}