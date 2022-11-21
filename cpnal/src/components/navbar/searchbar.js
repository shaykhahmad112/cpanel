import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Input } from 'semantic-ui-react';
import '../tools/tool.css';

const SearchTool=() =>
{
    const initialState=[    
    {
        heading:"databases",
        title:"phpMyAdmin",
        description:"This section contains Records"
    }    
    ]
    const [data, setData] = useState(initialState)
    const [tool, setTool] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const loadTools= async()=>{
          await axios.get(`http://localhost:3003/tools`)
            .then((response) => {
                setData(response.data);
            })
    }
    useEffect(() => {
        loadTools();
    }, [])

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = data.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setTool(filteredData)
        }
        else{
            setTool(data)
        }
    }
    return (
        <div className=''>
            {/* <Input icon='search'
                placeholder='Search ...'
                onChange={(e) => searchItems(e.target.value)}
                className='bg-white'
            /> */}
            <input 
                class="form-control mt-3"
                type="search" 
                placeholder="Search for..."
                aria-label="Search for..." 
                onChange={(e) => searchItems(e.target.value)}
            
             />
      
    { searchInput.length > 1 ? (
        <div class="card mt-2">
        <div class="card-body card-content">  
                
               <p className='mt-2'>Tools</p><hr/>
    {
                tool.map((item,index)=>(
            
                    <ul className='general-info-ul'>
                        <li>{item.title}</li>
                        <li>{item.description}</li>
                    </ul>                
            
                    ))
    }
               </div>
          </div>
                    
                ) : (
                    data.map((item,index)=>(
     
                        <ul className='general-info-ul'>
                            <li>{item.title}</li>
                            <li>{item.description}</li>
                        </ul>                
              
                        ))
                )  }
           
        </div>
    )
}
export default SearchTool;


