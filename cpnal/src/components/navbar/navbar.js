import React,{useState,useEffect} from 'react';
import axios from 'axios'
import '../Admin-panel/css/styles.css'
import '../navbar/navbar.css';
import { Link } from 'react-router-dom';
import { logout } from '../../services/AuthHeader';

const Navbar =()=>
{
   
    const initialState=[    
        {
            heading:"databases",
            title:"phpMyAdmin",
            description:"This section contains Records"
        }    
        ]
        const [data, setData] = useState(initialState)
        const [searchInput, setSearchInput] = useState('');
        const [tool, setTool] = useState([]);
        const [isOpen, setIsOPen] = useState(true);

        const loadTools= async()=>{
              await axios.get(`http://localhost:3003/tools`)
                .then((response) => {
                    setData(response.data);
                })
        }
        const handleChangeColor = () => {
            setIsOPen(true);
        };
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
   

return(         
    <div>

    <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark shadow p-3">
            {/* <!-- Navbar Brand--> */}
            <a class="navbar-brand ps-3" href="index.html"><h2>cPanel</h2></a>
            {/* <!-- Sidebar Toggle--> */}
            <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i class="fas fa-bars"></i></button>
            {/* <!-- Navbar Search--> */}
            <form class="d-none d-md-inline-block ms-auto me-0 me-md-3 my-2 my-md-0">
                
                <div class="input-group">
                    {/* <SearchTool/> */}
                    <input class="form-control mt-3" 
                        type="search" placeholder="Search for..." 
                        aria-label="Search for..." 
                        aria-describedby="NavbarSearch"
                        onChange={(e) => searchItems(e.target.value)}
                        onClick={()=>setIsOPen(!isOpen)}
                     />
    {/* {isOpen ? } : */}
    {  searchInput.length > 1 ? (
        <div class="card navbar-search" id="NavbarSearch">
        <div class="card-body card-content">  
                
               <h4 className='mt-2 ml-2'>Tools</h4><hr/>
    {
                tool.map((item,index)=>(
            
                    <ul className='general-info-ul'>
                        <li><strong>{item.title}</strong></li>
                        <li>{item.description}</li>
                    </ul>                
            
                    ))
    }
               </div>
          </div>
                    
                ) : (
                    // data.map((item,index)=>(
     
                    //     <ul className='general-info-ul'>
                    //         <li>{item.title}</li>
                    //         <li>{item.description}</li>
                    //     </ul>                
              
                    //     )
                    //     )
                    null
                )  }

 
                    <a class="nav-link text-decoration-none ml-4 mt-3 "  href="#" role="button" ><h4><i class="far fa-bell"></i></h4></a>
                </div>
            </form>
            {/* <!-- Navbar--> */}
            <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li class="nav-item dropdown">
              
                    <a 
                        class="nav-link dropdown-toggle mr-4" 
                        id="navbarDropdown" href="#" 
                        role="button" data-bs-toggle="dropdown" 
                        aria-expanded="false"
                        onClick={handleChangeColor}
                        >
                        <i class="fas fa-user fa-fw"></i>   
                    </a>
                    <ul
                        class="dropdown-menu dropdown-menu-end" 
                        aria-labelledby="navbarDropdown">
                    
                        <li><Link class="dropdown-item" to={'accountpref'}>
                            <i class="fas fa-gear mr-2"></i>
                            Account Preferences</Link></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><Link class="dropdown-item" to={'passandsec'}>
                            <i class="fas fa-lock mr-2"></i>
                            Password & Security</Link></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><Link class="dropdown-item" to={'changelang'}>
                            <i class='fas fa-language mr-2'></i>
                            Change Langauge</Link></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><Link class="dropdown-item" to={'contactinfo'}>
                            <i class="fas fa-envelope mr-2"></i>
                            Contact Information</Link></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><Link class="dropdown-item" to={'resetpage'}>
                            <i class="fas fa-refresh mr-2"></i>
                            Reset Page Settings</Link></li>    
                        <li><hr class="dropdown-divider" /></li>
                        <li><Link class="dropdown-item"  onClick={logout} to={'login'}>
                            <i class='fas fa-sign-out-alt mr-2'></i>
                            Logout</Link>
                    
                            </li>
                    </ul>
                </li>
            </ul>
        </nav>

    </div>
);
}
export default Navbar;