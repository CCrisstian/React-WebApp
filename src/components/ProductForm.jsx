import PropTypes from "prop-types";
import { useEffect, useState } from "react"

const initialDataForm = {
    id: 0,
    name: '',
    description: '',
    price: ''
}

export const ProductForm = ({handlerAdd, productSelected}) => {

    const [form, setForm] = useState(initialDataForm);

    const { id, name, description, price } = form;

    useEffect(() => {
        setForm(productSelected);
    }, [productSelected]);

    return <form onSubmit={event => {
        event.preventDefault();
        if (!name || !description || !price) {
            alert('Debe completar los dataos del formulario!');
            return;
        }
        console.log(form);
        handlerAdd(form);
        setForm(initialDataForm);
    }}>

        <div>
            <input placeholder="Name"
                className="form-control my-3 w-75"
                name="name"
                value={name}
            onChange={ (event) => setForm({...form, name: event.target.value})}/>
        </div>
        <div>
            <input placeholder="Description"
                className="form-control my-3 w-75"
                name="description"
                value={description}
                onChange={(event) => setForm({ ...form, description: event.target.value})}/>
        </div>
        <div>
            <input placeholder="Price"
                className="form-control my-3 w-75"
                name="price"
                value={price}
                onChange={(event) => setForm({ ...form, price: event.target.value})}/>
        </div>
        <div>
            <button className="btn btn-primary" type="submit">
                {id > 0? 'Update': 'Create'}
            </button>
        </div>
    </form>
}

ProductForm.propTypes = {
    handlerAdd: PropTypes.func.isRequired,
    productSelected: PropTypes.object.isRequired
}