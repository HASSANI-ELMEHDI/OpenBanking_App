export const portfolio = {
    balance :'32761.65',
    changes :'+20%',
    type:'I'
}


export const coins = [
{
    id:1,
    currency:'Bitcoin',
    symbol:'BTC',
    image: require("../../../assets/splash.png"),
    amount :'61,470',
    changes :'+3.42%',
    type :'I', //I = increase , D = Decrease
    wallet:{
        value:'4273.10',
        crypto:'0.023'
    }
},

]

const bnb_price = '450'
const dummyData = { portfolio,coins,bnb_price}

export default dummyData