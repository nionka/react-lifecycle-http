import { useState } from "react";
import PropTypes from 'prop-types';
const shortid  = require('shortid');

function AddClock({ onAdd }) {
    const [form, setForm] = useState({ name: '', zone: '' });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (form.name.trim() === '' || form.zone.trim() === '') return null

        const clock = { id: shortid.generate(), ...form };
        onAdd(clock)

        setForm({ name: '', zone: '' });
    }

    const onAddClock = (e) => {
        const { name, value } = e.target;
        setForm(prevForm => ({...prevForm, [name]: value }));
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <label>
                <span>Название</span>
                <input name="name" value={form.name} onChange={onAddClock}></input>
            </label>
            <label>
                <span>Временная зона</span>
                <input name="zone" type="number" value={form.zone} onChange={onAddClock}></input>
            </label>
            <button type="submit">Добавить</button>
        </form>
    )
}

AddClock.propTypes = {
    onAdd: PropTypes.func
}

export default AddClock