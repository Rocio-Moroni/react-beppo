/* IMPORTS */

// CSS import
import './Spinner.css';
// Icons import
import PropagateLoader from "react-spinners/PropagateLoader"

/* COMPONENTS */

// Spinner component
const Spinner = () => {

    return (
        <div className='Spinner'>
            <PropagateLoader size="2em" color='#a0a598' />
        </div>
    )
};

export default Spinner;