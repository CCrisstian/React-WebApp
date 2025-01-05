import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { ProductTable } from './components/ProductTable';
import { ProductForm } from './components/ProductForm';

const initProducts = [{
    id: 1,
    name: 'Monitor Asus 37 pulgadas',
    description: 'El monitor es perfecto para Juegos!',
    price: 1000
},
{
    id: 2,
    name: 'Iphone 16 pro',
    description: 'El telefono es excelente e incluye Apple Intelligence!',
    price: 1600
}];

export const ProductsApp = ({ title = 'Title default!' }) => {

    const [products, setProducts] = useState([]);

    const [productSelected, setProductSelected] = useState({
        id: 0,
        name: '',
        description: '',
        price: ''
    });

    useEffect(() => {
        setProducts(initProducts);
        console.log('cargando la pagina ...')
    }, []);

    const handlerAddProduct = (product) => {
        if (product.id > 0) {
            setProducts(
                products.map(prod => {
                    if (prod.id == product.id) {
                        return { ...product };
                    }
                    return prod;
                })
            );
        } else {
            setProducts([...products, { ...product, id: Date.now() }]);
        }
    }

    const handlerProductSelected = (product) => {
        setProductSelected({ ...product })
    }
    
    const handlerRemoveProduct = (id) => {
        setProducts(
            products.filter(product => product.id != id)
        );
    }

    return <div className='container my-4'>
        <h2>{title}</h2>
        <div className='row'>
            <div className='col'>
                <ProductForm handlerAdd={handlerAddProduct} productSelected={productSelected} />
            </div>
            <div className='col'>
                {
                    (products.length > 0) ?
                        <ProductTable products={products}
                            handlerProductSelected={handlerProductSelected}
                            handlerRemoveProduct={handlerRemoveProduct} /> :
                        <div className="alert alert-warning">
                            No hay productos en el sistema!
                        </div>
                }
            </div>
        </div>
    </div>
}

ProductsApp.propTypes = {
    title: PropTypes.string.isRequired
}
