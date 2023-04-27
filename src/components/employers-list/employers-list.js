import React from 'react'
import './employers-list.css'

import EmployersListItem from "../employers-list-item/employers-list-item";


const EmployersList = ({ data, onDelete }) => {

    const elem = data.map(item => {
        const { id, ...itemProps } = item;
        return (
            <EmployersListItem key={id}
                {...itemProps}
                onDelete={() => onDelete(id)} />
        )
    })

    return (
        <ul className="app-list list-group">
            {elem}
        </ul>
    )
}

export default EmployersList;