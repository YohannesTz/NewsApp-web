import React from 'react';
import {Col, Row} from "antd";
import LeftComponent from "./LeftComponent";
import MainStyle from "./Main.css";
import RightComponent from "./RightComponent";
import { Route, Switch } from "react-router-dom";
import MainComponent from "./MainComponenet";

function Main() {
    return (
        <Row style={{ height:"100%" }}>
            <Col xs={0} sm={0} md={8} lg={5} style={{ border:"1px solid #eeeeee", borderTop:"none",height: "100vh"}}>
                <LeftComponent/>
            </Col>
            <Col className={MainStyle.newsFeed} xs={24} sm={24} md={16} lg={14} style={{ border:"1px solid #eeeeee", borderTop:"none", height: "100vh", overflowY:"scroll"}}>
                <Switch>
                    <Route path="/" component={MainComponent} />
                    <Route path="/add" component={LeftComponent} />
                </Switch>
            </Col>
            <Col xs={0} sm={0} md={0} lg={5} style={{ border:"1px solid #eeeeee", borderTop:"none", height: "100vh"}}>
                <RightComponent />
            </Col>
        </Row>
    );
}

export default Main;