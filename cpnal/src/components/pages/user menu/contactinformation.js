import Axios from 'axios';
import React,{useState} from 'react';
import InputField from '../../textfields/inputfield';
import CheckBox from '../../../buttons/checkbox';


const ContactInformation=()=>
{
  const initialState={
    email1: '',
    email2:'',
    password:'',
    pushNotification: ''
  }
    const [errors, setErrors] = useState({});
    const [values, setValues] = useState(initialState);
    // const history=useHistory();

    const onInputChange = e => {
      setValues({ ...values, [e.target.name]: e.target.value });
    };
    console.log(values);

    function validate() {
      let errors = {};
      if (values.oldpassword='') {
        errors.oldpassword = 'Password is required';
      } else if (values.oldpassword.length < 8) {
        errors.oldpassword = 'Password must be 8 or more characters';
      }
      if (values.newpassword='') {
        errors.newpassword = 'Password is required';
      } else if (values.oldpassword.length < 8) {
        errors.oldpassword = 'Password must be 8 or more characters';
      }
      if (values.matchpassword='') {
        errors.matchpassword = 'Password is required';
      } else if (values.matchpassword.length < 8) {
        errors.matchpassword = 'Password must be 8 or more characters';
      } else if (values.matchpassword !== values.newpassword) {
        errors.matchpassword = 'Password must match';
      }

      setErrors(errors);
      return !Object.keys(errors)?.length;
    };
    
        const OnSubmit=(e)=>{
          e.preventDefault()
          const isValidated = validate();
          if (isValidated) {
            Axios.post(``)
          alert('Data submitted');
          setValues('');
          // history.push('/');
          } 
   }

return(         
  <div className='container main-container'>
        
  <div className='row'>
      <div className='col-lg-12 col-md-12'>
       <h1>Contact Information</h1>
       <p className='mt-4'>Use this interface to set your account’s contact information and preferences. Want to learn more? Read our documentation.</p>
       <p><strong>Note:</strong> IYou may use an email address on a domain that this server hosts. However, we do not recommend this, because you may fail to receive messages when the server encounters problems. For example, if your mailbox exceeds its quota, you will not receive any new email, including notices.</p>
      </div>
  </div>

  <form >
          <div className="form-group" onSubmit={e=>{OnSubmit(e)}}>
                <InputField
                    label={'Enter an email address to receive account notifications and password reset confirmations.'}
                    type={"text"}
                    className = {"form-control form-control-md col-lg-6"}
                    name={"email1"}
                    value={values?.email1}
                    onChange={e => onInputChange(e)}
                    error={errors.email1}  
                />
          </div>
          <div className="form-group">
                <InputField
                    label={'Enter a second email address to receive account notifications and password reset confirmations.'}
                    type={"text"}
                    className = {"form-control form-control-md col-lg-6"}
                    name={"email2"}
                    value={values?.email2}
                    onChange={e => onInputChange(e)}
                    error={errors.email2}    
                />
          </div>

          <div className="form-group">
                <InputField
                    label={'This is only required if you change your contact email addresses.'}
                    type={"text"}
                    className = {"form-control form-control-md col-lg-6"}
                    name={"password"}
                    value={values?.password}
                    onChange={e => onInputChange(e)}
                    error={errors.password}
                    disabled={'disabled'}      
                />
          </div>

          <div className="form-group">
                <InputField
                    label={'An access token for Pushbullet.'}
                    type={"text"}
                    className = {"form-control form-control-md col-lg-6"}
                    name={"pushNotification"}
                    value={values?.pushNotification}
                    onChange={e => onInputChange(e)}
                    error={errors.pushNotification}  
            />
          </div>
          <div className='row mt-4'>
                <div className='col-lg-12 col-md-12'>
                    <h2 >Contact Preferences:</h2>
                    <p>Notify me when:</p>               
                </div>
          </div>
                               {/* CheckBoxes */}
                               <div>
                  <CheckBox
                      type={'checkbox'}
                      name={'email'}
                      label={' My contact email address changes.'}
                />
   
          <p className='ml-4'> 
                    The system will notify you at your current and previous contact email addresses.<br></br>
                  <CheckBox
                      type={'checkbox'}
                      name={'pref'}
                      label={'My preference for contact email address change notifications is disabled.'}
                    />
          </p>
                  <CheckBox
                        type={'checkbox'}
                        name={'account'}
                        label={'My account approaches its disk quota.'}
                      />
                  <CheckBox
                        type={'checkbox'}
                        name={'SSL'}
                        label={'SSL certificate expiry.'}
                      />

            <p className='ml-4'> 
                   The system will notify you if a non-AutoSSL certificate will expire soon.<br></br>
            </p>
                  <CheckBox
                        type={'checkbox'}
                        name={'accountpass'}
                        label={'My account’s password changes.'}
                      />
          
            <p className='ml-4'> 
                   The system will notify you when the password changes because of a user request.<br></br>
                   <CheckBox
                        type={'checkbox'}
                        name={'accountpass'}
                        label={'My preference for account password change no.tifications is disabled.'}
                      />
            </p>
                    <CheckBox
                        type={'checkbox'}
                        name={'accountpass'}
                        label={'Someone logs in to my account.'}
                      />
  
          <p className='ml-4'>
                    <CheckBox
                          type={'checkbox'}
                          name={'accountpass'}
                          label={'Send login notifications, even when the user logs in from an IP address range or netblock that contains an IP address from which a user successfully logged in previously.'}
                          />
                    <CheckBox
                          type={'checkbox'}
                          name={'accountpass'}
                          label={'My preference for successful login notifications is disabled.'}
                          />
          </p>
                    <CheckBox
                          type={'checkbox'}
                          name={'accountpass'}
                          label={'An external account links to my account for authentication..'}
                          />

          <p className='ml-4'> 
                     <CheckBox
                          type={'checkbox'}
                          name={'accountpass'}
                          label={'My preference for external account link notifications is disabled.'}
                          />
           </p>
           </div>
                            {/* Radio button */}
      <h2>AutoSSL Notifications</h2>
      <div className='row ml-3'>
      <div className='col-lg-12 col-md-12'>
     
                      <CheckBox
                          type={'radio'}
                          name={'accountpass'}
                          label={'AutoSSL failures and deferrals only. (default).'}
                          />
                      <CheckBox
                          type={'radio'}
                          name={'accountpass'}
                          label={' AutoSSL failures only.'}
                          />
                       <CheckBox
                          type={'radio'}
                          name={'accountpass'}
                          label={'Disable AutoSSL event notifications.'}
                          />
 </div>

        </div>

          <button type='submit' className="btn btn-primary">save</button>
        </form>

  </div>
);
}
export default ContactInformation;
