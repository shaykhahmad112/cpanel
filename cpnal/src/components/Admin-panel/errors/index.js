   import React from 'react';
   import Navbar from '../navbar/navbar';
   import Sidebar from '../navbar/sidebar';
   import Content from '../dashboard/content';
   import Footer from '../footer/footer';
   const Index =()=>
   {
   
   return(         
        <div class="sb-nav-fixed">
            <Navbar/>
        <div id="layoutSidenav">
            <Sidebar/>
            <Content/>
        </div>
            {/* <Footer/> */}
        </div>
   );
   }
   export default Index;
   
   
    

   









