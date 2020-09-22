import React from "react";
import Card from "antd/lib/card";

const NewsCard = (props) => {
    return(
        <Card>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </Card>
    );
}

export default NewsCard;