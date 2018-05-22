import React, { Component } from 'react';

import { Container, Row } from 'reactstrap';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Button } from 'office-ui-fabric-react/lib/Button';

import ReactJson  from 'react-json-view';
import axios from 'axios';

export class UrlAssess extends Component {

    constructor() {
        super();

        this.state = {
            url: "",
            assessment: []
        };

        this.updateInputValue = this.updateInputValue.bind(this);
        this.assessCurrentUrl = this.assessCurrentUrl.bind(this);
    }

    render() {
        return (
            <Container>
                <Row>
                    <TextField
                        placeholder='Explore and assess for migration, eg: bing.com'
                        ariaLabel='Explore and assess for migration, eg: bing.com'
                        label="Enter Url to Assess"
                        required={ true }
                        value = { this.state.url }
                        onChanged ={this.updateInputValue}
                    />
                    <br />
                </Row>
                <Row>
                    <Button onClick={ this.assessCurrentUrl }>
                        Assess
                    </Button>
                </Row>
                <br />
                <Row>
                    <ReactJson
                        name={"assessment"}
                        displayObjectSize={false}
                        displayDataTypes={false}
                        src={this.state.assessment} />
                </Row>
            </Container>
        );
    }

    updateInputValue(value) {
        this.setState({
            url: value
        });
    }

    assessCurrentUrl() {
        axios.get(
            'https://jsonplaceholder.typicode.com/posts'
            /*'https://api.builtwith.com/v12/api.json?KEY=575d36e0-433c-40ea-bd43-7aba7c74915a&LOOKUP=' + this.state.url,
            {
                method: 'GET',
                mode: 'no-cors',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
                credentials: 'same-origin',
            }*/
         ).then(response => {
            this.setState({
                assessment: response.data
            })
        });
    }
}

export default UrlAssess;