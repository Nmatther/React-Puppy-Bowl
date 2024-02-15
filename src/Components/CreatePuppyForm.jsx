import { useState } from "react";
import { createPuppy } from "../API";
import { useNavigate } from "react-router-dom";

function createPuppyForm(){
    
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [dogImage, setDogImage] = useState("");
    const [dogStatus, setDogStatus] = useState("");
    const [teamId, setTeamId] = useState("");

    const navigate = useNavigate()


    return (
        <section className="addDog" id="addDog">
            <form onSubmit={async (e)=>{
                e.preventDefault()
                await createPuppy(name, breed, teamId, dogStatus, dogImage);
                navigate("/")
            }}>
                    <h2 className="heading">Dog Registration Form</h2>
                    <div className ="form-box">
                        <input onChange={(e) => { setName(e.target.value);}}
                            value={name} placeholder="Name"/>
                        <input onChange={(e) => { setBreed(e.target.value);}}
                            value={breed} placeholder="Breed" />
                    </div>
                    <div className="form-box">
                        <input onChange={(e) => { setTeamId(e.target.value);}}
                            type="number" value={teamId} placeholder="Team 1 or Team 2"/>
                        <select onChange={(e) => { setDogStatus(e.target.value);}}
                            value={dogStatus} placeholder="Field or Bench" >
                            <option value="field">Field</option>
                            <option value="bench">Bench</option>
                        </select>
                            
                    </div>
                    <div className="form-box">
                        <input onChange={(e) => { setDogImage(e.target.value);}}
                            value={dogImage} placeholder="Image URL" />
                        <input type="submit" value="Submit" className="btn" />
                    </div>
                
            </form>
        </section>
    
    );
}

export default createPuppyForm