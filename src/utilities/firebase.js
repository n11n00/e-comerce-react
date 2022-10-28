
import { initializeApp } from "firebase/app";
import {collection, doc, addDoc, getFirestore, getDocs, getDoc, updateDoc, deleteDoc} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB-eS_szTBAx2YY84Ssg-30jnU0yWZaH3g",
  authDomain: "react-34755-2022-b9d9f.firebaseapp.com",
  projectId: "react-34755-2022-b9d9f",
  storageBucket: "react-34755-2022-b9d9f.appspot.com",
  messagingSenderId: "900348487904",
  appId: "1:900348487904:web:ea6e460a09172c7f804885"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db =getFirestore()

 const cargarBaseDeDatos = async () => {
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
    productos.forEach( async(productos) =>{
        await addDoc(collection(db,"productos"), {
            categoria: productos.idCategoria,
            nombre: productos.nombre,
            marca: productos.marca,
            talle: productos.talle,
            precio: productos.precio,
            stock: productos.stock,
            img: productos.img,
        })
    })
 }

 const getProducto = async (id) => {
    const producto = await getDoc(doc(db, "productos", id))
    const prod = [producto.id, producto.data()]
    return prod
  }
  
  const getProductos = async () => {
    const productos = await getDocs(collection(db, "productos"))
    const items = productos.docs.map(producto => [producto.id, producto.data()])
    return items
  }
  
  const updateProducto = async (id, info) => {
    const estado = await updateDoc(doc(db, "productos", id), info)
    return estado
  }
  
  const deleteProducto = async(id) => {
    const estado = await deleteDoc(doc(db, "productos", id))
    return estado
  }
  
  const createProducto = async (objProd) => {
    const estado = await addDoc(collection(db, "productos"), {
      nombre: objProd.nombre,
      marca: objProd.marca,
      modelo: objProd.modelo,
      categoria: objProd.idCategoria,
      stock: objProd.stock,
      precio: objProd.precio,
      img: objProd.img
    })
  
    return estado
  }
  
  const createOrdenCompra = async (preTotal, nombre, apellido, email, dni, direccion) => {
    const ordenCompra = await addDoc(collection(db, "ordenCompra"), {
      nombre: nombre,
      apellido: apellido,
      email: email,
      dni: dni,
      direccion: direccion,
      precioTotal: preTotal
    })
  
    return ordenCompra
  }
  
  const getOrdenCompra = async (id) => {
    const ordenCompra = await getDoc(doc(db, "ordenCompra", id))
    return ordenCompra
  }



  export {cargarBaseDeDatos, getProductos, getProducto, updateProducto, deleteProducto, createProducto, createOrdenCompra, getOrdenCompra}