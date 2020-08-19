import React, { Fragment } from 'react'
import {
    Col, Card, Form
} from 'react-bootstrap';

import { toCurrencyWithCommas } from '../actions/ProcessDetails';

const Total = ({ data: { netProfit, percentGain } }) => {
    return (
        <Fragment>
            <Col xs={12} lg={4} className="section">
                <Card>
                    <Card.Body>
                        <div className="section-title-total">
                            <p>Total</p>
                            <hr />
                        </div>
                        <Form className="section-body">
                            <Form.Group>
                                <p><strong>Net Profit: </strong></p>
                                {
                                    netProfit > 0 ?
                                        (
                                            <div className="green">
                                                {toCurrencyWithCommas(netProfit.toFixed(2))}
                                            </div>
                                        ) :
                                        netProfit < 0 ?
                                            (
                                                <div className="red">
                                                    {toCurrencyWithCommas(netProfit.toFixed(2))}
                                                </div>
                                            )
                                            :
                                            (
                                                <div>
                                                    {toCurrencyWithCommas(netProfit.toFixed(2))}
                                                </div>
                                            )
                                }
                            </Form.Group>
                            <Form.Group>
                                <p><strong>Percent Gain: </strong></p>
                                {
                                    percentGain > 0 ?
                                        (
                                            <div className="green">
                                                {toCurrencyWithCommas(percentGain.toFixed(2))} %
                                            </div>
                                        ) :
                                        percentGain < 0 ?
                                            (
                                                <div className="red">
                                                    {toCurrencyWithCommas(percentGain.toFixed(2))} %
                                                </div>
                                            )
                                            :
                                            (
                                                <div>
                                                    {toCurrencyWithCommas(percentGain.toFixed(2))}
                                                </div>
                                            )
                                }
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Fragment>
    )
}

export default Total;