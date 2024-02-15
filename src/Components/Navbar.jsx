import { Link } from 'react-router-dom';
import React, { useState} from 'react';

const NavBar = (props) => {
    const searchPuppy = props.puppyData 
    const setPuppyData = props.setPuppyData
    const [inputText,setInputText] = useState("")
    let inputHandler = (e) => {
        e.preventDefault()
        setInputText(e.target.value)

    let filteredData = searchPuppy.map((el) => {
        if (props.input === ''){
            return el
        } else {
            return el.name.match(e.target.value)
        }
    })
    console.log(filteredData)
    return filteredData
    }
    return (
        <div className="Navbar" id= "Navbar">
            <h2> Puppy Bowl || 2024</h2>
            {/* Trying to Add search puppy functionality . Work in progress */}
            {/* <form>
                <label>
                    <h2>Name:</h2>
                    <input type="text" placeholder="Search Puppies" onChange={inputHandler} value={inputText} />
                </label>
            </form> */}
            <nav className="navLink">
                <ul><Link className={"link-styles"} to= "/">Home</Link></ul>
                <ul><Link className={"link-styles"} to= "/CreatePuppyForm">Registration</Link></ul>
            </nav>
        </div>
    )
}

export default NavBar;