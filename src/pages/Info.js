import React from "react";
import myData from "../res/my-data.json";
import ItemBox from "../components/boxes/ItemBox";

function Info() {
    return (
        <div className="container">
            <h2>My Info</h2>
            {myData.infoList.map((item, index) => (
                <div key={index} className="card card-small visible">
                    <ItemBox name={item.name} data={item.data} copy={true}></ItemBox>
                </div>
            ))}
        </div>
    );
}

export default Info;
