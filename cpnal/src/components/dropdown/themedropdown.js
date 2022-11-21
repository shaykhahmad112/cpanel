import React, { useState } from 'react';
import Select from 'react-select';
import '../dropdown/dropdown.css';
const Dropdown =()=>
{
  const List = [
    { value: "jupiter", label: "Jupiter" },
    { value: "paper_lantern", label: "Paper_lantern" },
    { value: "spider", label: "Spider" },
  ];
  const [dropdown,setDropDown]=useState(List);
  const handleSelect=(select)=>{
    setDropDown(select);
  }
return(         
    <div className=" ">
      <Select
        options={List}
        placeholder="Select theme"
        value={dropdown}
        onChange={handleSelect}
        className={"theme-dropdown"}
      />
    </div>
);
}
export default Dropdown;

