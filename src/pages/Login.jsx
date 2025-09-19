import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormRow, Logo } from '../assets/components';

const Login = () => {
  return (
    <Wrapper>
      <form className='form'>
        <Logo />
        <h4>Login</h4>
        <FormRow type='email' name='email' defaultValue='sample@gmail.com'/>
        <FormRow type='password' name='password' defaultValue='P@$$w0rd'/>
        <button type ='submit' className='btn btn-block'>Submit</button>
        <button type ='button' className='btn btn-block'>Explore the App</button>
        <a> 
          Not a member yet? 
          <Link to='/register'>Register</Link>
        </a>

      </form>
    </Wrapper>
  )
}

export default Login
