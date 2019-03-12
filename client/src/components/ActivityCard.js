import React from "react";
import { Link } from 'react-router-dom';

function ActivityCard(props) {
    return (
        <div>
            <Link to={"/flash/" + props.parameter}>
                <img className="zoom" src="http://www.stickpng.com/assets/images/5847f5bdcef1014c0b5e489c.png" alt = ""></img>
            </Link>
        </div>
    )
}

export default ActivityCard;