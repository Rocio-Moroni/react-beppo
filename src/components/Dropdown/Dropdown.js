/* IMPORTS */

// CSS import
import './Dropdown.css';
// React import
import { useState } from 'react';


/* COMPONENTS */

// Dropdown component
function Dropdown ({selected, setSelected}) {
    const [isActive, setIsActive] = useState(false);
    const options = ['Carne de Vaca', 'Cedro', 'Guatambu', 'Guayubira', 'Laurel', 'Loro Negro', 'Oveña', 'Perciguero', 'Zoita'];

    return (
        <div className='Dropdown'>
            <div className='DropdownBtn' onClick={(e) => setIsActive(!isActive)}>
                {selected}
            </div>

            {isActive && (
                <div className='DropdownOptions'>
                    {options.map((option) => (
                        <div
                            onClick={(e) => {
                                setSelected (option);
                                setIsActive(false);
                            }}
                            className='DropdownItem'
                            >
                            {option}
                        </div>))
                    }
                </div>
            )}
        </div>);
};

export default Dropdown;