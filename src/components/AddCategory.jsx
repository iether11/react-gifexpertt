import React, { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {
    const [imputValue, setimputValue] = useState('One Punch')
    const onInputvalue = (e) => {
        setimputValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(imputValue);
        if (imputValue.trim().length <= 1) return;

        onNewCategory(imputValue.trim())
        setimputValue('');


    }
    return (
        <form onSubmit={onSubmit}>
            <h3>
                <input type="text"
                    placeholder='Buscar Gifs'
                    value={imputValue}
                    onChange={(e) => onInputvalue(e)}
                />
            </h3>
        </form>
    )
}
