import React from "react";
import ItemBox from "../components/boxes/ItemBox";

function Info({infoList}) {
    return (
        <div className="container">
            <h2>My Info</h2>
            {infoList.map((item, index) => (
                <div key={index} className="card card-small">
                    <ItemBox name={item.name} data={item.data} copy={true}></ItemBox>
                </div>
            ))}
        </div>
    );
}

export default Info;
