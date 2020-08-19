import { CALCULATOR_CHANGE } from './_constants';

const { COMMISSION, VAT, SCCP, TRANSACTION_FEE, SALES_TAX } = CALCULATOR_CHANGE;

let netProfit = 0;
let percentGain = 0;

export const toCurrencyWithCommas = (value) => {
    return value = new Intl.NumberFormat('en-US', { style: 'decimal' }).format(value);
};

export const calculateBuy = (shares, price) => {

    const buyDetails = {
        buyGross: 0,
        buyCommission: 0,
        buyVAT: 0,
        buySCCP: 0,
        buyFee: 0,
        buyTotalCharges: 0,
        buyNet: 0
    }

    buyDetails.buyGross = shares * price;
    buyDetails.buyCommission = buyDetails.buyGross * COMMISSION;

    if (buyDetails.buyCommission < 20 && shares > 0 && price > 0) {
        buyDetails.buyCommission = 20
    }

    buyDetails.buyVAT = buyDetails.buyCommission * VAT;
    buyDetails.buySCCP = buyDetails.buyGross * SCCP;
    buyDetails.buyFee = buyDetails.buyGross * TRANSACTION_FEE;
    buyDetails.buyTotalCharges =
        buyDetails.buyCommission +
        buyDetails.buyVAT +
        buyDetails.buySCCP +
        buyDetails.buyFee;
    buyDetails.buyNet = buyDetails.buyGross + buyDetails.buyTotalCharges;

    return buyDetails;
}

export const calculateSell = (shares, price) => {
    let sellDetails = {
        sellGross: 0,
        sellCommission: 0,
        sellVAT: 0,
        sellSCCP: 0,
        sellFee: 0,
        sellSalesTax: 0,
        sellTotalCharges: 0,
        sellNet: 0,
    }

    sellDetails.sellGross = shares * price;
    sellDetails.sellCommission = sellDetails.sellGross * COMMISSION;

    if (sellDetails.sellCommission < 20 && shares > 0 && price > 0) {
        sellDetails.sellCommission = 20
    }

    sellDetails.sellVAT = sellDetails.sellCommission * VAT;
    sellDetails.sellSCCP = sellDetails.sellGross * SCCP;
    sellDetails.sellFee = sellDetails.sellGross * TRANSACTION_FEE;
    sellDetails.sellSalesTax = sellDetails.sellGross * SALES_TAX;
    sellDetails.sellTotalCharges =
        sellDetails.sellCommission +
        sellDetails.sellVAT +
        sellDetails.sellSCCP +
        sellDetails.sellFee +
        sellDetails.sellSalesTax;
    sellDetails.sellNet = sellDetails.sellGross - sellDetails.sellTotalCharges;

    return sellDetails;
}

export const calculateDetails = (shares, buyPrice, sellPrice) => {

    const processBuy = calculateBuy(shares, buyPrice);
    const processSell = calculateSell(shares, sellPrice);

    const { buyNet } = processBuy;
    const { sellNet } = processSell;

    if (buyNet !== 0 && sellNet !== 0) {
        netProfit = sellNet - buyNet;
        percentGain = (netProfit / buyNet) * 100
    } else {
        netProfit = 0;
        percentGain = 0;
    }

    return { netProfit, percentGain }
}