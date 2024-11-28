let food, food_qty, fries, fries_qty, cold_drinks, cd_qty, cd_type;     //global scope variable

function handleSubmit() {
    event.preventDefault();

    food = parseInt(document.getElementById("food").value);
    food_qty = parseInt(document.getElementById("food_qty").value);

    fries = parseInt(document.getElementById("fries").value);
    fries_qty = parseInt(document.getElementById("fries_qty").value);

    cold_drinks = document.getElementById("cold_drinks").value;
    cd_qty = parseInt(document.getElementById("cd_qty").value);
    cd_type = parseInt(document.getElementById("cd_type").value);

    console.log(food, food_qty, fries, fries_qty, cold_drinks, cd_qty, cd_type);

    let print = `
        <table border="1">
            <tr>
                <th>Items</th>
                <th>Type</th>
                <th>Quantity</th>
                <th>Total Price</th>
            </tr>
    `;

    if (food != 0 && food_qty != 0) {
        let foodName = '';
        if (food == 100) {
            foodName = 'Burger';
        } else if (food == 300) {
            foodName = 'Pizza';
        } else {
            foodName = 'Combo';
        }

        print = print + `
            <tr>
                <td>Food Item</td>
                <td>${foodName}</td>
                <td>${food_qty}</td>
                <td>${food * food_qty}</td>
            </tr>
        `;
        
    } else {
        console.log("n");
        
    }

    print = print + '</table>'


    document.getElementById("disp").innerHTML = print;

    document.getElementById("coupon_form").style.display = 'block';
    
}

function handleCoupon() {
    event.preventDefault();

    const coupon = document.getElementById("coupon").value;

    console.log(coupon);

    let per = 0;

    if (coupon == 'ABC123') {
        per = 10;
    } else if (coupon == 'DIWALI24') {
        per = 20;
    } else if (coupon == 'XYZ87') {
        per = 25;
    } 

    console.log(food);
    
    let total = food*food_qty;
    let dis = ((total) * per)/100;
    
    let print = `
        <p>Discount: ${dis}</p>
        <h3>Final Bill: ${total - dis}</h3>
    `;

    document.getElementById("bill").style.display = 'block';
    document.getElementById("bill").innerHTML =  print;
}