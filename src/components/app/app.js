import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployeesAddForm from '../employers-add-form/employers-add-form';

import './app.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'Jonh Smith', salary: 8000, increase: false, id: 1 },
                { name: 'Max Smip', salary: 15000, increase: false, id: 2 },
                { name: 'Alex Li', salary: 7600, increase: false, id: 3 },
            ]
        }
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter(item => item.id !== id),
            }
        })
    }

    render() {
        return (
            <div className="app" >
                <AppInfo />

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <EmployersList data={this.state.data}
                    onDelete={this.deleteItem} />
                <EmployeesAddForm />
            </div>
        )
    }
}

export default App;