import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container"; 
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import TextField from "@mui/material/TextField";
import './Header.css'
import { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Header = () => {

    const[inputText, setInputText] = useState('');
    const navigate = useNavigate();

    const inputHandler = (e) => {
        // var lowerCase = e.target.value.toLowerCase();
        // setInputText(lowerCase); 
        setInputText(e.target.value);
    }; 

    const handleSubmit = (e) => {
        e.preventDefault(); 
        navigate(`/Movie/${inputText}`);
    }

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid> 
            <Navbar.Brand href="/" style={{"color" : 'gold'}}>
                <FontAwesomeIcon icon={faVideoSlash}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll"/>
            <Navbar.Collapse id="navbarScroll">
                <Nav  
                    className="me-auto my-2 my-lg-0"
                    style={{maxHeight: '100px'}}
                    navbarScroll
                >
                    <NavLink className="nav-link" to="/">Home</NavLink>
                    <NavLink className="nav-link" to="/MovieList/All">Movie List</NavLink>
                </Nav>
                <form className="search" onSubmit={handleSubmit}>
                <TextField 
                className="searchbar"
                    id="outlined-search" 
                    label="Search Movies..."
                    type="search"
                    size="small"
                    margin="dense"
                    variant="filled"
                    onChange={inputHandler}
                />
                </form>
                <div className="drop-down"> 
                    <DropdownButton variant="info" id="dropdown-basic-button" title="Genre">
                    <Dropdown.Item as={Link} to='/MovieList/All'>All</Dropdown.Item>
                        <Dropdown.Item as={Link} to='/MovieList/Action'>Action</Dropdown.Item>
                        <Dropdown.Item as={Link} to='/MovieList/Fantasy'>Fantasy</Dropdown.Item>
                        <Dropdown.Item as={Link} to='/MovieList/Family'>Family</Dropdown.Item>
                        <Dropdown.Item as={Link} to='/MovieList/Comedy'>Comedy</Dropdown.Item>
                    </DropdownButton>
                </div>
                <Button variant="outline-info" className="me-2">Login</Button>
                <Button variant="outline-info">Register</Button>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
    }

export default Header

