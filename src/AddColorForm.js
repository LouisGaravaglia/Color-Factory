import React, { useState  } from 'react';
import './App.css';

function AddColorForm({addColor}) {
    const INITIAL_STATE = {color:""};
    const [formData, setFormData] = useState(INITIAL_STATE)
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(data => ({...data, [name]:value}));
    };

    const resetForm = () => {
        setFormData(INITIAL_STATE);
    }

    const handleClick = (e) => {
        e.preventDefault()
        addColor(formData.color)
        resetForm()
    }

  return (
    <form onSubmit={handleClick}>
        <input 
            type="text"
            name="color"
            placeholder="color"
            onChange={handleChange}
        />
        <button>Submit</button>
    </form>
  );
}

export default AddColorForm;