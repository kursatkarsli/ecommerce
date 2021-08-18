import React,{useEffect} from "react";
import { Navbar, Container, Nav } from "react-bootstrap"
import { Link,useLocation } from "react-router-dom"
import '../assets/Css/button.css';
import shopping from '../assets/circle.png'

function StyledNavbar() {
    const checkPath = (pathname) => {

        if (pathname === '/details') {
            return (<div>
               <Link to='/' style={{marginRight:'10px'}}><button className='navbar-link'>Home</button></Link>
               <Link to='/favorites' style={{marginRight:'10px'}}><button className='navbar-link'>Favorites</button></Link>
                <Link to='/contact'><button className='navbar-link'>Contact</button></Link>

            </div>)
       }
        else if (pathname === '/favorites') {
            return( <div>
            <Link to='/' style={{marginRight:'10px'}}><button className='navbar-link'>Home</button></Link>
             <Link to='/contact'><button className='navbar-link'>Contact</button></Link>
         </div>)

       }
        else if (pathname === '/') {
            return (<div >
                <Link className='Link' to='/favorites' style={{marginRight:'10px'}}><button className='navbar-link'>Favorites</button></Link>
                 <Link to='/contact'><button className='navbar-link'>Contact</button></Link>
 
             </div>)
       }
        else if (pathname === '/contact') {
           return (<div >
               <Link to='/' style={{marginRight:'10px'}}><button className='navbar-link'>Home</button></Link>
                <Link to='/favorites' style={{marginRight:'10px'}}><button className='navbar-link'>Favorites</button></Link>
            </div>)
        }
        else if (pathname === '/checkout') {
            return (<div>
                <Link  to='/' style={{marginRight:'10px'}}><button className='navbar-link'>Home</button></Link>
                <Link to='/favorites' style={{ marginRight: '10px' }}><button className='navbar-link'>Favorites</button></Link>
                <Link  to='/contact'><button className='navbar-link'>Contact</button></Link>

            </div>)}
   }
    

    return (
        <Navbar className="fixed-top shadow-lg" style={{marginBottom:'50px'}} bg="light" expand="lg" >
            <Container>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <Navbar.Brand style={{ fontWeight: "600", fontSize: "25px" }}>
                        <img src={shopping} width="35px" height="auto" background='none' alt="icon" />
                    </Navbar.Brand>
                </Link>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                    {checkPath(window.location.pathname)}
                    </Nav>
                </Navbar.Collapse>
                <Link to="/checkout" style={{ textDecoration: "none", marginLeft:"10px" }}>
                    <div style={{position:"relative"}}>
                        <img src="https://image.flaticon.com/icons/png/512/2438/2438133.png" alt="cart icon" width="40px" height="auto" style={{ color: "black" }}/>
                    </div>
                </Link>
            </Container>
        </Navbar>
    )
}
export default StyledNavbar;
