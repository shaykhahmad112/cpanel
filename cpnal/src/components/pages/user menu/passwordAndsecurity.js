import Axios from 'axios';
import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';
import InputField from '../../textfields/inputfield';



const PasswordAndSecurity =()=>
{
  const initialState={
    oldpassword: '',
    newpassword:'',
    matchpassword: '',
    address:''
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
       <h1>Password & Security</h1>
       <h2 className='mt-4'>Change Password</h2>
       <p className='mt-4'>Change your account password below. Password strength is important in web hosting; we strongly recommend using the Password Generator to create your password. Follow the tips below to keep your password safe.</p>
       <p><strong>Note:</strong> If you change your password, you will end your current session.</p>
      </div>
  </div>

  <form >
          <div className="form-group" onSubmit={e=>{OnSubmit(e)}}>
                <InputField
                    label={'Old Password'}
                    type={"text"}
                    className = {"form-control form-control-md col-lg-6"}
                    placeholder= {"Enter Your old password"}
                    name={"oldpassword"}
                    value={values?.oldpassword}
                    onChange={e => onInputChange(e)}
                    error={errors.oldpassword}  
                />
          </div>
          <div className="form-group">
                <InputField
                    label={'New Password'}
                    type={"text"}
                    className = {"form-control form-control-md col-lg-6"}
                    placeholder= {"Enter Your new password"}
                    name={"newpassword"}
                    value={values?.newpassword}
                    onChange={e => onInputChange(e)}
                    error={errors.newpassword}    
                />
          </div>

          <div className="form-group">
                <InputField
                    label={'New Password'}
                    type={"text"}
                    className = {"form-control form-control-md col-lg-6"}
                    placeholder= {"Enter password again"}
                    name={"matchpassword"}
                    value={values?.matchpassword}
                    onChange={e => onInputChange(e)}
                    error={errors.matchpassword}    
            />
          </div>
  
          <button type='submit' className="btn btn-primary btn-block change-pass">change your password now!</button>
        </form>


  <div className='row mt-4'>
      <div className='col-lg-12 col-md-12'>
       <h2 >Protect your password:</h2>
       <p className='mt-1'>Don’t write down your password, memorize it. In particular, don’t write it down and leave it anywhere, and don’t place it in an unencrypted file! Use unrelated passwords for systems controlled by different organizations. Don’t give or share your password, in particular to someone claiming to be from computer support or a vendor unless you are sure they are who they say they are. Don’t let anyone watch you enter your password. Don’t enter your password on a computer you don’t trust. Use the password for a limited time and change it periodically.</p>
 </div>
        </div>

      <div className='row'>
      <div className='col-lg-12 col-md-12'>
       <h2>Choose a hard-to-guess password:</h2>
      <ul className='ml-3'>
          <li>The system attempts to prevent particularly insecure passwords, but it is not foolproof.</li>
          <li>Do not use words that are in a dictionary, names, or any personal information (for example, your birthday or phone number).</li>
          <li>Avoid simple patterns. Instead, use UPPER and lower case letters, numbers, and symbols. Make certain that your password is at least eight characters long.</li>
          <li>When you choose a new password, make certain that it is not related to your previous passwords.</li>
      </ul>
 </div>
        </div>

  </div>
);
}
export default PasswordAndSecurity;
