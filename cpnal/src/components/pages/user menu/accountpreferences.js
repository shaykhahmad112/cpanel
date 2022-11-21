import React from 'react';
import '../user menu/menu.css';

const AccountPreferences =()=>
{
return(         
        <div className='container main-container'>
        
        <div className='row'>
            <div className='col-lg-12 col-md-12'>
             <h1 >Account Preferences</h1>
             <p className='mt-4'>This feature lets you change your account settings.</p>
            </div>
        </div>
        <div className='row'>
            <div className='col-lg-12 col-md-12'>
             <h4 >SYSTEM NOTIFICATIONS</h4>
             <p className='mt-1'>System notifications show you errors, warnings, and success messages. Click the button to set the location where you want to see system notifications.</p>
           
                <div class="btn-group" role="group" >
                <button type="button" class="btn btn-secondary">Top Left</button>
                <button type="button" class="btn btn-secondary">Top Center</button>
                <button type="button" class="btn btn-secondary">Top Right</button>
                <button type="button" class="btn btn-secondary">Bottom Left</button>
                <button type="button" class="btn btn-secondary">Bottom Center</button>
                <button type="button" class="btn btn-secondary">Bottom Right</button>
                <button type="button" class="btn btn-secondary">Centered</button>
            </div> </div>
        </div>
        </div>

);
}
export default AccountPreferences;
