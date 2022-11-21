import React,{useState} from 'react';
import '../user menu/menu.css';
import Select from 'react-select';
import { Link } from 'react-router-dom';
const ChangeLanguage =()=>
{
  const List = [
    { value: "german", label: "German" },
    { value: "english", label: "English" },
    { value: "spanish", label: "Spanish" },
    { value: "russian", label: "Russian" }
  ];
  const [dropdown,setDropDown]=useState(List);
  const handleSelect=(select)=>{
    setDropDown(select);
  }
  console.log(dropdown);
return(         
  <div className='container main-container'>
        
  <div className='row'>
      <div className='col-lg-12 col-md-12'>
       <h1>Change Language</h1>
       <p className='mt-4'>This function allows you to change the language displayed in your cPanel interface. If you need a new language, contact your cPanel provider so they can install it.</p>
      </div>
  </div>  
  <h2>Change Language</h2>
  <div className='row language-change-div'>

      <div className='col-lg-12 col-md-12 '>
       <p className='mt-2'>Your account’s language is set to. {dropdown.label}</p>
      </div>
  </div>
<div className='row'>
<Select
            options={List}
            placeholder="Select language"
            value={dropdown}
            onChange={handleSelect}
            className={"mt-4 col-lg-6"}
         />
</div>
          <p className='mt-4'>Don’t see your language of choice? Take our Language Support Feedback Survey to let us know your preferences.</p>
          <button type='submit' className="btn btn-primary ">change</button>
          <div className='text-center mt-4'><a  href='/'>go back</a></div> 
  </div>
);
}
export default ChangeLanguage;
