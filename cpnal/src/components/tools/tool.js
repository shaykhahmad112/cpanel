import React, { useState } from 'react';
import './tool.css';
const Tool =({headerTitle, headerIcon, data})=>
{
const [isOpen,setisOpen]=useState(true);   
return(         
<>
       <div id="main"> 
                <div class="accordion" id="faq1">
                <div class="card">
                        <div class="card-header tool-card-header">
                            <div href="#" class="" 
                            onClick={()=>setisOpen(!isOpen)}
                            >
                            <i class={headerIcon}></i>
                            {headerTitle}
                            <i class="fas fa-angle-down toggleicon"></i>
                            </div>
                       </div>

                <div className='parent'>
                {isOpen ?
                    data.map((ele,index)=>(
                     <div  class="collapse show" id="faq" aria-labelledby="faqhead1" data-parent="#faq">
                     <div class="card-body"> 
                     <a href='#' className='catagory-link'>
                     <i class={ele.icon}></i>
                     <span>{ele.title}</span>
                     </a>    
                    </div></div>
                   ))
                    :null
                    }
                </div>  
                        </div>
                        </div></div>               
        </>
);
}
export default Tool;

