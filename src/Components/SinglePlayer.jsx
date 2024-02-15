import { useState, useEffect } from "react";
import { fetchPlayersById, deletePuppyById } from "../API";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function SinglePlayer() {
    const { id } = useParams();
    const navigate = useNavigate();

   const [player, setPlayer] = useState({});

   useEffect(() => {
      async function getSinglePlayer(){
        const player = await fetchPlayersById(id)
        setPlayer(player)
      } 
       getSinglePlayer();
      }, []);
    
   return (
   <div className="Single-Dog-Container">
      <div className="card">
         <h3>{player.name}</h3>
         <img className="image" src={player.imageUrl}/>
         <div className="Dog-info">
         <span className="info" id="Breed">{player.breed}</span>
            <span className="info">Team: {player.teamId} </span>
            <span className="info">Status: {player.status}</span>
            <span className="info">Created at: {player.createdAt}</span>
            <span className="info">Updated at: {player.updatedAt}</span>
         </div>
         <div className="Button">
            <Link to="/">
               <button className="moreDetails">Return</button>
            </Link>
            <button className= "moreDetails" onClick={async ()=>{
               await deletePuppyById(player.id)
               navigate(`/`);
            }}>
               Delete Puppy
            </button>
            
         </div>
     </div>
   </div>
    );
}

export default SinglePlayer