// const { doc } = require("firebase/firestore");

let obj = {};
let subTotal = 0;
// const axios=require('axios');

function upadateCaseNumber(product, price, isIncreasing) {
    const caseInput = document.getElementById(product + '-number');
    let caseNumber = caseInput.value;
    if (isIncreasing) {
        caseNumber = parseInt(caseNumber) + 1;
    }

    else if (caseNumber > 0) {
        caseNumber = parseInt(caseNumber) - 1;
    }

    caseInput.value = caseNumber;
    // update case total 
    const caseTotal = document.getElementById(product + '-total');
    caseTotal.innerText = caseNumber * price;
    calculateTotal();
}

async function makeOrder() {
    let finalObj = {};
    let cname = document.getElementById('customerName').value;
    let tableNumber = document.getElementById('tableNumber').value;
    finalObj['order'] = obj;
    finalObj['name'] = cname;
    finalObj['table'] = tableNumber;
    finalObj['subTotal'] = subTotal;
    console.log(finalObj);
    // let obj1={
    //     userName:"hak",
    //     userEmail:"newnew"
    // }

    // console.log(obj);
    try {
        const response = await axios.post('http://localhost:3000/insert', finalObj);
        console.log(response.data);
        document.getElementById('customerName').value = "";
        document.getElementById('tableNumber').value = "";
        alert("order placed successfully.....");
    } catch (err) {
        // Handle error
        alert(err.response.data.error);
        console.error('Error submitting data:', err);

    }


    console.log("make order" + JSON.stringify(obj));
}

function getInputvalue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal() {


    const phoneTotal = getInputvalue('phone') * 300;
    if (phoneTotal != 0) {
        obj['phone'] = phoneTotal;

    }
    const caseTotal = getInputvalue('case') * 200;
    if (caseTotal != 0) {
        obj['case'] = caseTotal;
    }
    const moongTotal = getInputvalue('moong') * 300;
    if (moongTotal != 0) {
        obj['moong'] = moongTotal;
    }
    const upvasTotal = getInputvalue('upvas') * 300;
    if (upvasTotal != 0) {
        obj['upvas'] = upvasTotal;
    }
    const dalTotal = getInputvalue('dal') * 300;
    if (dalTotal != 0) {
        obj['dal'] = dalTotal;
    }
    const kheerTotal = getInputvalue('kheer') * 300;
    if (kheerTotal != 0) {
        obj['kheer'] = kheerTotal;
    }
    const rotiTotal = getInputvalue('roti') * 300;
    if (rotiTotal != 0) {
        obj['roti'] = rotiTotal;
    }
    const ravaTotal = getInputvalue('rava') * 100;
    if (ravaTotal != 0) {
        obj['rava'] = ravaTotal;
    }
    const dosaTotal = getInputvalue('dosa') * 100;
    if (dosaTotal != 0) {
        obj['dosa'] = dosaTotal;
    }
    const poheTotal = getInputvalue('pohe') * 100;
    if (poheTotal != 0) {
        obj['pohe'] = poheTotal;
    }
    const idliTotal = getInputvalue('idli') * 100;
    if (idliTotal != 0) {
        obj['idli'] = idliTotal;
    }


    subTotal = ravaTotal + dosaTotal + idliTotal + poheTotal + phoneTotal + moongTotal + caseTotal + upvasTotal + dalTotal + kheerTotal + rotiTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    const jsonString = JSON.stringify(obj);
    // alert(jsonString);
    console.log(jsonString);
    // update on the html 
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;

}

document.getElementById('dosa-plus').addEventListener('click', function () {
    upadateCaseNumber('dosa', 100, true);
});

document.getElementById('dosa-minus').addEventListener('click', function () {
    upadateCaseNumber('dosa', 100, false);
});

document.getElementById('idli-minus').addEventListener('click', function () {
    upadateCaseNumber('idli', 100, false);
});

document.getElementById('idli-plus').addEventListener('click', function () {
    upadateCaseNumber('idli', 100, true);
});

document.getElementById('rava-plus').addEventListener('click', function () {
    upadateCaseNumber('rava', 100, true);
});

document.getElementById('rava-minus').addEventListener('click', function () {
    upadateCaseNumber('rava', 100, false);
});

document.getElementById('pohe-plus').addEventListener('click', function () {
    upadateCaseNumber('pohe', 100, true);
});

document.getElementById('pohe-minus').addEventListener('click', function () {
    upadateCaseNumber('pohe', 100, false);
});

document.getElementById('upvas-plus').addEventListener('click', function () {
    upadateCaseNumber('upvas', 300, true);
});

document.getElementById('upvas-minus').addEventListener('click', function () {
    upadateCaseNumber('upvas', 300, false);
});

document.getElementById('moong-plus').addEventListener('click', function () {
    upadateCaseNumber('moong', 300, true);
});


document.getElementById('moong-minus').addEventListener('click', function () {
    upadateCaseNumber('moong', 300, false);
});

document.getElementById('kheer-plus').addEventListener('click', function () {
    upadateCaseNumber('kheer', 300, true);
});


document.getElementById('kheer-minus').addEventListener('click', function () {
    upadateCaseNumber('kheer', 300, false);
});

document.getElementById('dal-plus').addEventListener('click', function () {
    upadateCaseNumber('dal', 300, true);
});


document.getElementById('dal-minus').addEventListener('click', function () {
    upadateCaseNumber('dal', 300, false);
});

document.getElementById('roti-plus').addEventListener('click', function () {
    upadateCaseNumber('roti', 300, true);
});


document.getElementById('roti-minus').addEventListener('click', function () {
    upadateCaseNumber('roti', 300, false);
});

document.getElementById('case-plus').addEventListener('click', function () {
    // const caseInput = document.getElementById('case-number');
    // const caseNumber = caseInput.value;
    // caseInput.value = parseInt(caseNumber) + 1;
    upadateCaseNumber('case', 200, true);
});

document.getElementById('case-minus').addEventListener('click', function () {
    // const caseInput = document.getElementById('case-number');
    //     const caseNumber = caseInput.value;
    //    if(caseInput.value > 1){
    //         caseInput.value = parseInt(caseNumber) - 1;
    //    }
    upadateCaseNumber('case', 200, false);
});

// phone prcie update using add event linstner 
document.getElementById('phone-plus').addEventListener('click', function () {
    upadateCaseNumber('phone', 300, true);
});


document.getElementById('phone-minus').addEventListener('click', function () {
    upadateCaseNumber('phone', 300, false);
});