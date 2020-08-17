import React, { Fragment } from 'react';
import {
    Col, Card, Form
} from 'react-bootstrap';

import { toCurrencyWithCommas } from '../actions/ProcessDetails'

const Buy = (
    {
        data: {
            buyShares,
            buyPrice,
        },
        details: {
            buyGross,
            buyCommission,
            buyVAT,
            buySCCP,
            buyFee,
            buyTotalCharges,
            buyNet
        },
        onChange }
) => {
    return (
        <Fragment>
            <Col xs={12} lg={4} className="section">
                <Card>
                    <Card.Body>
                        <div className="section-title-buy">
                            <p>Buy</p>
                            <hr />
                        </div>
                        <Form className="section-body">
                            <Form.Group>
                                <Form.Control type="number" placeholder="No. of shares" name="buyShares" value={buyShares} onChange={onChange} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control type="number" placeholder="Price" name="buyPrice" value={buyPrice} onChange={onChange} />
                            </Form.Group>
                            <Form.Group>
                                <p><strong>Buy Gross: </strong></p>
                                {toCurrencyWithCommas(buyGross.toFixed(2))}
                            </Form.Group>
                            <Form.Group>
                                <p><strong>Buy Commission: </strong></p>
                                {toCurrencyWithCommas(buyCommission.toFixed(2))}
                            </Form.Group>
                            <Form.Group>
                                <p><strong>VAT: </strong></p>
                                {toCurrencyWithCommas(buyVAT.toFixed(2))}
                            </Form.Group>
                            <Form.Group>
                                <p><strong>SCCP: </strong></p>
                                {toCurrencyWithCommas(buySCCP.toFixed(2))}
                            </Form.Group>
                            <Form.Group>
                                <p><strong>Transaction Fee: </strong></p>
                                {toCurrencyWithCommas(buyFee.toFixed(2))}
                            </Form.Group>
                            <Form.Group>
                                <p><strong>Total Charges: </strong></p>
                                {toCurrencyWithCommas(buyTotalCharges.toFixed(2))}
                            </Form.Group>
                            <Form.Group>
                                <p><strong>Net: </strong></p>
                                {toCurrencyWithCommas(buyNet.toFixed(2))}
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Fragment>
    )
}

export default Buy;