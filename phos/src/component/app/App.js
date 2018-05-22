import React, { Component } from 'react';

import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { Container, Row, Col } from 'reactstrap';

import { UrlAssess } from "../urlassess/urlassess";
import { NavMenu } from '../navMenu/navMenu'

import './App.css';

class App extends Component {
  render() {
    return (
        <Fabric>
            <Container>
                <Row>
                    <span class="ms-font-su ms-fontColor-themePrimary">Azure App Service Assessment Tool</span>
                    <hr />
                </Row>
                <Row>
                    <Col xs="3" lg="3"><NavMenu/></Col>
                    <Col xs="9" lg="9">
                        <UrlAssess />
                    </Col>
                </Row>
            </Container>
        </Fabric>
    );
  }
}

export default App;
