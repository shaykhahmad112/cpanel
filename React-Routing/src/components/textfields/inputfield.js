import React from  "react";

const InputField =({type,className,placeholder,name, value, onChange})=>{
      return(
        <div>
            <input 
             type ={type}
             className ={className}
             placeholder={placeholder}
             name ={name}
             value ={value}
             onChange={onChange}      
            />
    </div>
)
}
export default InputField;