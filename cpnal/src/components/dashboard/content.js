
import React from 'react';
import Tool from '../tools/tool';
import Footer from '../footer/footer';
// import Dropdown from '../../dropdown/themedropdown';
import Dropdown from '../dropdown/themedropdown';
import '../dashboard/content.css'; 
import { 
    email,
    databases,
    files,
    domains,
    metrics,
    security,
    software,
    preferences,
    advance,
    apllication,
    statistics } from '../tools/toolconst';

const Content =()=>
{

return(         
<div className="container">

<h4 class="tool-header">Tools</h4>
 <div className='maindiv'>  
            <main>
                <div class="main ">
                
                        <Tool
                        headerTitle={'Email'}
                        headerIcon={'fas fa-envelope header-icon'}
                        data={email}
                        />
                        <Tool
                        headerTitle={'Files'}
                        headerIcon={'far fa-folder header-icon'}
                        data={files}
                        />
                        <Tool
                        headerTitle={'Databases'}
                        headerIcon={'fa fa-database header-icon'}
                        data={databases}
                        />
                        <Tool
                        headerTitle={'Domains '}
                        headerIcon={'fas fa-globe header-icon'}
                        data={domains}
                        />           
                        <Tool
                        headerTitle={'Metrics'}
                        headerIcon={'fas fa-bar-chart header-icon'}
                        data={metrics}
                        />
                        <Tool
                        headerTitle={'Security'}
                        headerIcon={'fas fa-user-shield header-icon'}
                        data={security}
                        />
                        <Tool
                        headerTitle={'Software'}
                        headerIcon={'far fa-file-code header-icon'}
                        data={software}
                        />
                        <Tool
                        headerTitle={'Preferences'}
                        headerIcon={'fas fa-gear header-icon'}
                        data={preferences}
                        />
                        <Tool
                        headerTitle={'Application '}
                        headerIcon={'fas fa-database header-icon'}
                        data={apllication}
                        />
                </div>
         
</main>


<div id="sidebar">
                <div class="card card-main">
                    
                    <div class="card-body card-content">
                        <ul className='general-info-ul' >
                            <li className='mt-3'>
                            <p >General Infromation</p>
                            </li>
                            <li className='right-cards-color'>current user</li>
                            <li>democom</li><hr/>
                            <li className='right-cards-color'>Primary Domain</li>
                            <li>demo.cpanel.com</li><hr/>
                            <li className='right-cards-color'>Saraed IP Address</li>
                            <li>192.168.10.0</li><hr/>
                            <li className='right-cards-color'>Home Directory</li>
                            <li>/Home/democom</li><hr/>
                            <li className='right-cards-color'>Last Login IP</li>
                            <li>174.122.11.0</li><hr/>
                            <li className='right-cards-color'>Theme</li>
                            <li> <Dropdown/></li>
                                               </ul>     
                    </div>
                 <div class="card-footer bg-white ">
                        <a class="small stretched-link text-decoration-none"  href="#">Server information</a>
                        <div class="small  float-right mt-1"><i class="fas fa-angle-right "></i></div>
                    </div> 
                </div>
                
                <div class="card mt-3">
                <div class="card-body card-content">  
                        
                       <p className='ml-4 mt-3'>Statistics</p>
            {
                  statistics.map((ele,index)=>(
             
                      <ul className='general-info-ul'>
                          <li className='right-cards-color'>{ele.title}</li>
                          <li>{ele.value}</li><hr/>
                      </ul>                
            
                      ))
            }
                       </div>
                  </div>
          
    </div>

    <Footer/>
           
        </div>

        </div> 
);
}
export default Content;
