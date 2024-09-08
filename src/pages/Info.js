import React from "react";
import ItemBox from "../components/boxes/ItemBox";
import { useQuery } from "react-query";
import { fetchJsonData } from "../api/fetch";

function Info() {
    const { myData, error, isLoading } = useQuery('fileData', fetchJsonData);

    if (isLoading) return 'Loading...';
    if (error) return `Error: ${error.message}`;

    return (
        <div className="container">
            <h2>My Info</h2>
            {myData.infoList.map((item, index) => (
                <div key={index} className="card card-small">
                    <ItemBox name={item.name} data={item.data} copy={true}></ItemBox>
                </div>
            ))}
        </div>
    );
}

export default Info;
