import React from 'react'
import './employers-list.css'

import EmployersListItem from "../employers-list-item/employers-list-item";


const EmployersList = ({ data, onDelete, onToggleProp, }) => {

    const elem = data.map(item => {
        const { id, ...itemProps } = item;
        return (
            <EmployersListItem
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}

            />
        )
    })

    return (
        <ul className="app-list list-group">
            {elem}
        </ul>
    )
}

export default EmployersList;