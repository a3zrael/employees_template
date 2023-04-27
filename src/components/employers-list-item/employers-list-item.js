import { Component } from 'react';
import React from 'react'
import './employers-list-item.css'


class EmployersListItem extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            like: false,
        }
    }

    onIncrease = () => {
        this.setState(({ increase }) => ({
            increase: !increase
        }))
    }

    funcLike = () => {
        this.setState(({ like }) => ({
            like: !like
        }))
    }

    render() {
        const { name, salary, onDelete } = this.props
        const { increase } = this.state
        const { like } = this.state

        let classNames = "list-group-item d-flex justify-content-between"

        if (increase) {
            classNames = classNames + " increase";
        }

        if (like) {
            classNames = classNames + " like";
        }

        return (
            <li className={classNames} >
                <span onClick={this.funcLike} className="list-group-item-label">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        onClick={this.onIncrease}
                        className="btn-cookie btn-sm ">
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}

export default EmployersListItem;