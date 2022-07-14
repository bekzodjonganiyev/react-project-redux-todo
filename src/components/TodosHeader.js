import React from 'react'
import "flag-icons/css/flag-icons.min.css"
import { GlobeIcon } from '../assets/icons/Icons'
import i18next from 'i18next'

const TodosHeader = ({ length }) => {

    const language = [
        {
            code: "eng",
            name: "English",
            conuntry_code: "gb"
        },
        {
            code: "uz",
            name: "Uzbek",
            conuntry_code: "uz"
        },
        {
            code: "ru",
            name: "Russian",
            conuntry_code: "ru"
        }
    ]

    return (
        <div className="card-header d-flex justify-content-between">
            <h1>Todos: {length}</h1>
            <div class="dropdown">
                <button
                    class="btn "
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                        <GlobeIcon width="20" height="20"/> 
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    {language.map(item => (
                        <li key={item.conuntry_code}>
                            <button 
                            className='dropdown-item'
                            onClick={() => i18next.changeLanguage(item.code)}
                            >
                                <span className={`fi fi-${item.conuntry_code}`}></span>&nbsp;
                                {item.name}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TodosHeader