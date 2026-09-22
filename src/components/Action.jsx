import { useState } from "react";

function Actions(){
const [likes, setLikes] = useState(15);
const [reposts, setReposts] = useState(4);
    
    return(
        <div className="actions">
            <button onClick={() => setLikes(likes + 1)}>
                &#10084; {likes}
            </button>
            

            <button onClick={() => setReposts(reposts + 1)}>
                &#128017; {reposts}
            </button>
        </div>
    )
}

export default Actions;

