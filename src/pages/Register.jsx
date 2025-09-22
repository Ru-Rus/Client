import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import Logo from '../assets/components/logo';
import { FormRow } from '../assets/components';

const Register = () => {
  return (
    <Wrapper>
      <form className='form'>
        <Logo />
        <h4>
          Register
        </h4>
          <FormRow type='text' name='name' defaultValue='Kaizer' />
          <FormRow type='text' name='lastName' labelText='last name' defaultValue='hell' />
          <FormRow type='text' name='location' defaultValue='Makati' />
          <FormRow type='email' name='email' defaultValue='email@gmail.com'/>
          <FormRow type='password' name='password' defaultValue='P@$$w0rd'/>

        <button type='submit' className='btn btn-block'>Submit</button>
        <p> Already a member ?
          <Link to='/login' className='member-btn'> Login</Link>
        </p>
      </form>
    </Wrapper>
  )
}

export default Register
