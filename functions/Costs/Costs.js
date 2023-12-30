myList = new Array();

function addCost(id) {

    let newCostName = ValidationCosts()

    if (newCostName != null) {
        const addLabel = document.createElement("label");
        addLabel.innerText = newCostName;

        const container = document.getElementById(id);
        let inputClass = container.className;
        console.log(inputClass)

        const addInput = document.createElement("input");
        addInput.setAttribute("type", "number");

        addInput.setAttribute("name", newCostName);
        addInput.setAttribute("required", true);

        addLabel.appendChild(addInput);


        container.insertAdjacentElement("afterbegin", addInput);


    }

}

function submitFormCosts() {

    let totalCosts, getUnitaryCostPrice, getUnitarySalesPrice;
    let cost = new Costs();

    let form = new FormData(form_costs)

    const jsonData = {};

    form.forEach((value, key) => {
        jsonData[key] = value;

        myList.push({ "type": cost.name = "tipo", "name": cost.name = key, "value": cost.value = value })
        debugger
        postCosts(cost.name,cost.type,cost.value);
        console.log(myList);
    });
    let units = parseInt(getRange());

    if (units != 0 || units != "0") {
        totalCosts = calculateCosts();
        getUnitaryCostPrice = unitaryCostPrice(totalCosts, units);
        getUnitarySalesPrice = unitarySalesPrice(totalCosts, units, 100);

        Swal.fire({
            title: "Costos",
            html: `
            <strong>Sus costos totales son :</strong>  ${totalCosts} 
            <br><strong>El costo unitario es : </strong> ${getUnitaryCostPrice}
            <br><strong>El precio de venta es : </strong>${getUnitarySalesPrice}
            `
        });

    } else {
        Swal.fire({
            title: "Selecciona Las unidades",
            text: "Selecciona Las unidades",
            icon: "error",
            showCancelButton: true,
        })
    }

    return jsonData;
}


function calculateCosts() {

    let SUM_COSTS = 0;

    for (var i = 0; i < myList.length; i++) {
        console.log(myList[i]);
        SUM_COSTS = SUM_COSTS + parseInt(myList[i].value);
    }
    return SUM_COSTS;
}

function unitaryCostPrice(totalCosts, units) {
    return totalCosts / units;
}


function unitarySalesPrice(totalCosts, units, profitMargin) {
    return ((totalCosts * (profitMargin / 100)) + totalCosts) / units;
}

/**
 * 
 * @param {*} fixedCosts 
 * @param {*} variableCosts 
 * @param {*} units 
 * @returns 
 */

function calculateBalanceMoney(fixedCosts, variableCosts, units) {

    let balance = fixedCosts / (variableCosts / units) - 1;

    return balance;
}