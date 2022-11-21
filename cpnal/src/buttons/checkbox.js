import React from 'react';

const CheckBox =({name, type, label})=>
{

return(         
    <div>
          <input 
            type={type}  
            name={name}
            checked
            />
          <label htmlFor={name}>{label}</label>
    </div>
);
}
export default CheckBox;
