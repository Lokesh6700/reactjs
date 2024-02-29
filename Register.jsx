import React  from 'react'
import { Container, Row, Col,  FormGroup, Button } from 'reactstrap'
import '../styles/login.css'
import { Link, useNavigate } from 'react-router-dom'
import registerImg from '../assets/images/login.png'
import userIcon from '../assets/images/user.png'


const Register = () => {
 


 

   const next=useNavigate()
   const handleClick =()=>{
      next("/login")
   }

     
   
   return (
      <section>
         <Container>
            <Row>
               <Col lg='8' className='m-auto'>
                  <div className="login__container d-flex justify-content-between">
                     <div className="login__img">
                        <img src={registerImg} alt="" />
                     </div>

                     <div className="login__form">
                        <div className="user">
                           <img src={userIcon} alt="" />
                        </div>
                        <h2>Register</h2>

                   
                           <FormGroup>
                              <input type="text" placeholder='Username' id='username'  required />
                           </FormGroup>
                           <FormGroup>
                              <input type="email" placeholder='Email' id='email'  required />
                           </FormGroup>
                           <FormGroup>
                              <input type="password" placeholder='Password' id='password' required />
                           </FormGroup>
                           <Button onClick={handleClick} >Create Account</Button>
                 
                        <p>Already have an account? <Link to='/login'>Login</Link></p>
                     </div>
                  </div>
               </Col>
            </Row>
         </Container>
      </section>
   )
}

export default Register