import React from "react";
//Importación de estilo
import "./Input.css";

const Input = ({attribute, param, errorText ,handleChange})=>{
    return(
        <div className="input-container">
            <input
            id={attribute.id}
            name={attribute.name}
            placeholder={attribute.placeholder}
            type={attribute.type}
            accept={attribute.accept}
            defaultValue={attribute.defaultValue}
            list={attribute.list}
            className={param ?"input-error":"regular-style"}
            onChange={e=>handleChange(e.target.value,e.target.name)}
            
            />
            {param&&(
                    <label className="label-error">{errorText}</label>
                  )}
        </div>

    )
};

export default Input;