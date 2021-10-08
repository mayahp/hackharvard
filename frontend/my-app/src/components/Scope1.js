import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import 'bootstrap/dist/css/bootstrap.min.css';

class Scope1 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Scope 1 Emissions Estimate</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formNumVehicles">
                        <Form.Label>Number of Company Vehicles</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter number of company vehicles">
                        </Form.Control>
                    </Form.Group>

                    <div key={'radioFuelType'} className="mb-3">
                        <Form.Check
                            type={'radio'}
                            id={'coal-option'}
                            label={'Coal'}
                        />
                        <Form.Check
                            type={'radio'}
                            id={'diesel-option'}
                            label={'Diesel'}
                        />
                        <Form.Check
                            type={'radio'}
                            id={'gasoline-option'}
                            label={'Gasoline'}
                        />
                        <Form.Check
                            type={'radio'}
                            id={'propane-option'}
                            label={'Propane'}
                        />
                        <Form.Check
                            type={'radio'}
                            id={'natural-gas-option'}
                            label={'Natural Gas'}
                        />
                    </div>

                    <Form.Group className="mb-3" controlId="formFuelAmount">
                        <Form.Label>Total Fuel Used (millions of Btu)</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Millions of Btu of fuel">
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button type="submit">Submit</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

export default Scope1;
