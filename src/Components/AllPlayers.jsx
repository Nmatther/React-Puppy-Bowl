import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllPlayers } from "../API";



function AllPlayers(){

    const navigate = useNavigate();

    const [players, setPlayers] = useState([]);

        useEffect(() => {
            async function getAllPlayers(){
                const players = await fetchAllPlayers();
                setPlayers(players);
            }
            getAllPlayers();
        }, []);

        


return (
<div className="pageTitle">
    <h4>Meet The Puppies!</h4>
    <div className="Dog-Container">
        {players.map((player) => {
            return (
                <div key={player.id} className= "card">
                    <h3>{player.name}</h3>
            
                    <img className="image" id="pic" src={player.imageUrl}/>
                    <div className="Button">
                        <button className="moreDetails" onClick={()=>{ navigate(`/players/${player.id}`);}}>
                         See Details
                        </button>
                    </div>
                </div>
            );
        })}
    </div>
</div>
);
}

export default AllPlayers