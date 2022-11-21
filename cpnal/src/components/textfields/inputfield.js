import React from  "react";

const InputField =({label, type, className, placeholder, name, value, onChange, error,  disabled,icon})=>{
  console.log(error);
      return(
        <div >
   
        <label htmlFor={name}>{label}</label><br/>
        {/* <i class={icon}></i> */}
            <input 
                type ={type}
                className ={className}
                placeholder={placeholder}
                name ={name}
                onChange={onChange} 
                value ={value}
                disabled={disabled}
            />
              {/* <p className="text-red-600">error:{error}</p> */}
              {error && <p className="text-red-600">{error}</p>}
            {/* <span>{error}</span> */}
    </div>
)
}
export default InputField;