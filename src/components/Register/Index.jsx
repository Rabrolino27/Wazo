import { Card } from '@mui/material'
import {Link} from 'react-router-dom'
import React from 'react'
import IconButton from "@mui/material/IconButton";
import Visibility from '@mui/icons-material/Visibility';
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Input from "@mui/material/Input";
import './index.css'

const Index = () => {
    const [values, setValues] = React.useState({
        password: "",
        showPassword: false,
      });
      
      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
      
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
      
      const handlePasswordChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
  return (
    <div>
        <Card sx={{width : '700px', height: '450px', margin:'auto', marginTop:'45px', padding: '20px'}}> 
            <h4> Create an Account</h4>
            <p className="text-gray"> Already have an account ? <Link to ="/login" className="link">Log in </Link> </p>

      <div className="register-form">
      <form>


          <div className="register-flex-mini"> 
<div className="col-name mg-3">
<label>First Name</label> 
<input type="text" name="first_name"  className="form-control" placeholder="Type Here" />
</div>

<div className="col-name mg-3">
<label>Last Name</label> 
<input type="text" name="last_name" className="form-control" placeholder="Type Here" />
</div>


        </div>
        <div className="col-name mg-3">
<label>Email Address</label> 
<Input type="text" name="Email" className="form-control" placeholder="Type your email address here" />
</div>

<div className="col-name mg-3">
<label>Password</label> 
<Input  className="form-control" placeholder="Type your password here"   type={values.showPassword ? "text" : "password"}
        onChange={handlePasswordChange("password")}
        value={values.password}
         endAdornment={
          <InputAdornment position="end">
            <IconButton
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {values.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }/></div>


<Link className="btn btn-secondary col-md-11 mg-3" to="/dashboard"> Submit</Link> 

</form>
        </div>
        </Card> 
    </div>
  )
}

export default Index