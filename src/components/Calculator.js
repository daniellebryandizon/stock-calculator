import React, { Fragment, useState, useEffect } from 'react';
import Buy from '../components/Buy';
import Sell from '../components/Sell';
import Total from '../components/Total';

import { calculateBuy, calculateSell, calculateDetails } from '../actions/ProcessDetails';

import './Main.css'
import {
    Row
} from 'react-bootstrap';

const Calculator = () => {
    const [formData, setFormData] = useState({
        buyShares: '',
        buyPrice: '',
        sellShares: '',
        sellPrice: '',
        netProfit: 0,
        percentGain: 0
    });

    const [buyDetails, setBuyDetails] = useState({
        buyGross: 0,
        buyCommission: 0,
        buyVAT: 0,
        buySCCP: 0,
        buyFee: 0,
        buyTotalCharges: 0,
        buyNet: 0
    });

    const [sellDetails, setSellDetails] = useState({
        sellGross: 0,
        sellCommission: 0,
        sellVAT: 0,
        sellSCCP: 0,
        sellFee: 0,
        sellSalesTax: 0,
        sellTotalCharges: 0,
        sellNet: 0
    })

    const { buyShares, buyPrice, sellShares, sellPrice } = formData;

    useEffect(() => {
        const processBuy = calculateBuy(buyShares, buyPrice);

        setBuyDetails(processBuy);

        const processTotal = calculateDetails(buyShares, buyPrice, sellPrice)
        setFormData({
            ...formData,
            sellShares: buyShares,
            netProfit: processTotal.netProfit,
            percentGain: processTotal.percentGain
        });

    }, [buyShares, buyPrice])

    useEffect(() => {
        const processSell = calculateSell(sellShares, sellPrice);
        setSellDetails(processSell);

        console.log("Buy Shares: " + buyShares);
        console.log("Buy Price: " + buyPrice);
        console.log("Sell Price: " + sellPrice);

        const processTotal = calculateDetails(buyShares, buyPrice, sellPrice)
        setFormData({
            ...formData,
            sellShares: buyShares,
            netProfit: processTotal.netProfit,
            percentGain: processTotal.percentGain
        });

    }, [sellShares, sellPrice])

    return (
        < Fragment >
            <div className="title">
                Stock Calculator
            </div>
            <div className="calculator">
                <Row>
                    <Buy
                        data={formData}
                        details={buyDetails}
                        onChange={(event) => {
                            const { name, value } = event.target;
                            setFormData({
                                ...formData,
                                [name]: value
                            });
                        }} />

                    <Sell
                        data={formData}
                        details={sellDetails}
                        onChange={(event) => {
                            const { name, value } = event.target;
                            setFormData({
                                ...formData,
                                [name]: value
                            });
                        }} />
                    <Total data={formData} />
                </Row>
            </div>
        </Fragment >
    )
}



export default Calculator;