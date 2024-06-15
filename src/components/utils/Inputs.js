import React from 'react';

export function MyInput({ inputTitle,inputType, inputId, inputClass, inputName, inputTime, onChange }) {
    return (
        <div className="input-group">
            <input 
                type={inputType} 
                id={inputId} 
                className={inputClass} 
                name={inputName} 
                value={inputTime} 
                onChange={onChange}
            />
            <label htmlFor={inputId} className="input-label">{inputTitle}</label>
        </div>
    );
}
