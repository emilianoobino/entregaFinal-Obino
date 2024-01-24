import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import Loader from './Loader';

const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(true)
    const [producto, setProducto] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        setLoading(true)
        const db = getFirestore();

        const oneItem = doc(db, "videojuegos", `${id}`);
        getDoc(oneItem).then((snapshot) => {
            if (snapshot.exists()) {
                setProducto(snapshot.data())
                setLoading(false)
            }
        })
    }, [id])

    if(loading) {
        return <Loader/>
    }

    return (
        <div>
            {producto && <ItemDetail producto={producto} />}
            {!producto && "no funciona"}
        </div>
    )
}

export default ItemDetailContainer;