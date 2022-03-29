/* IMPORTS */

// React import
import { useState, useImperativeHandle, forwardRef } from 'react';

/* COMPONENTS*/

// Togglable component

const Togglable = forwardRef((props, ref) => {
    const [visible, setVisible] = useState(false)

    const hideWhenVisible = { display: visible ? 'none' : '' }
    const showWhenVisible = { display: visible ? '' : 'none'}

    const toggleVisibility = () => {
        setVisible(!visible)
    }

    useImperativeHandle(ref, () => {
    return {
        toggleVisibility
    }
    })

    return (
        <div>
            <div style={hideWhenVisible}>
                <div onClick={toggleVisibility}> {props.buttonLabelShow} </div>
            </div>
            <div style={showWhenVisible}>
                <button className='BtnConfirm' style={{backgroundColor: '#db4025'}} onClick={toggleVisibility}> {props.buttonLabelHide ? props.buttonLabelHide : 'CANCEL'} </button>
                {props.children}
            </div>
        </div>
    )
})

export default Togglable;