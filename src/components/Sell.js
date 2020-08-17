import React, { Fragment } from 'react';
import {
    Col, Card, Form
} from 'react-bootstrap';

import { toCurrencyWithCommas } from '../actions/ProcessDetails'

const Sell = (
    {
        data: {
            sellShares,
            sellPrice,
        },
        details: {
            sellGross,
            sellCommission,
            sellVAT,
            sellSCCP,
            sellFee,
            sellSalesTax,
            sellTotalCharges,
            sellNet
        },
        onChange }
) => {
    return (
        <Fragment>
            <Col xs={12} lg={4} className="section">
                <Card>
                    <Card.Body>
                        <div className="section-title-sell">
                            <p>Sell</p>
                            <hr />
                        </div>
                        <Form className="section-body">
                            <Form.Group>
                                <Form.Control type="number" placeholder="No. of shares" name="sellShares" value={sellShares} onChange={onChange} disabled/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Control type="number" placeholder="Price" name="sellPrice" value={sellPrice} onChange={onChange} />
                            </Form.Group>
                            <Form.Group>
                                <p><strong>Sell Gross: </strong></p>
                                {toCurrencyWithCommas(sellGross.toFixed(2))}
                            </Form.Group>
                            <Form.Group>
                                <p><strong>Sell Commission: </strong></p>
                                {toCurrencyWithCommas(sellCommission.toFixed(2))}
                            </Form.Group>
                            <Form.Group>
                                <p><strong>VAT: </strong></p>
                                {toCurrencyWithCommas(sellVAT.toFixed(2))}
                            </Form.Group>
                            <Form.Group>
                                <p><strong>SCCP: </strong></p>
                                {toCurrencyWithCommas(sellSCCP.toFixed(2))}
                            </Form.Group>
                            <Form.Group>
                                <p><strong>Transaction Fee: </strong></p>
                                {toCurrencyWithCommas(sellFee.toFixed(2))}
                            </Form.Group>
                            <Form.Group>
                                <p><strong>Sales Tax: </strong></p>
                                {toCurrencyWithCommas(sellSalesTax.toFixed(2))}
                            </Form.Group>
                            <Form.Group>
                                <p><strong>Total Charges: </strong></p>
                                {toCurrencyWithCommas(sellTotalCharges.toFixed(2))}
                            </Form.Group>
                            <Form.Group>
                                <p><strong>Net: </strong></p>
                                {toCurrencyWithCommas(sellNet.toFixed(2))}
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Fragment>
    )
}

export default Sell;