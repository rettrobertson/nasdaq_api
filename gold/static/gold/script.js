function evaluate(input, select, money){
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let time = "AM";
    if(hours >= 12){time = "PM";}
    if(hours > 12){hours -= 12;};
    if(hours == 0){hours = 12;}
    if(hours < 10){hours = '0' + hours;};
    if(minutes < 10){minutes = '0' + minutes;};
    if(seconds < 10){seconds = '0' + seconds;};
    if(day < 10){day = '0' + day;};
    if (month < 10){month = '0' + month;};
    today = month + '/' + day + '/' + year + " " + hours + ":" + minutes + ":" + seconds + " " + time + "     ";


    let div = document.createElement("div");
    div.onclick = function(){remove(div)};
    document.body.insertBefore(div, document.body.children[1]);

    let h5 = document.createElement("h5");

    div.appendChild(h5);
    dictionary = {
    "T": "ton",
    "g": "gram",
    "t_oz": "troy ounce",
    "kg": "kilogram",
    "lb": "pound",
    "oz": "ounce",
    }

    if(isNaN(Number(input.value)) || money === 0){
        div.style.backgroundColor = "Red";

        h5.textContent = " Error! Missing some input!";
        input.value = null;
    }
    else{
        let convURL = 'http://' + location.host + '/unitconv/convert?from=' + select.value + '&to=t_oz&value=' + input.value
        let conversion = fetch(convURL
        ).then(r => r.json()).then(r => {
            let pluralize = "";
            if(input.value != 1){
                pluralize = "s";
            }
            let dollars = (money * r.value).toFixed(2);
            h5.textContent = "At " + today + " " + input.value + " " + dictionary[select.value] + pluralize + " of gold is worth $" + dollars;
            input.value = null;
        }).catch(error =>{
        div.style.backgroundColor = "Red";
        h5.textContent = "Couldn't connect to Server at " + today + ". Please try again later";

    });
    }
};

function remove(div){div.parentNode.removeChild(div);};

let price = document.querySelector("#price");

let date = new Date();
    let day1 = date.getDate();
    let month1 = date.getMonth() + 1;
    let year1 = date.getFullYear();
    if(day1 < 10){day1 = '0' + day1;};
    if (month1 < 10){month1 = '0' + month1;};
    today1 = month1 + '/' + day1 + '/' + year1;

let money = 0;

var gold = fetch('https://data.nasdaq.com/api/v3/datasets/LBMA/GOLD.json?api_key=gBNkJ6iS8rty7BmMdNzj').then(r => r.json()).then(r => {
    money = r.dataset.data[0][1]
    price.textContent = "The price of gold as of " + today1 + " is $" + money + " per Troy Oz."
    }).catch(error =>{
    price.textContent = "We couldn't connect to Nasdaq, try again later";
    });

//    price.textContent = "Couldn't receive info from Nasdaq, try again later";

let button = document.querySelector("#button");

let input = document.querySelector("#input");
let invalids = ["-", "+", "e",];
input.addEventListener("keydown", r => {
    if (invalids.includes(r.key)){
        r.preventDefault();
    }
});

let select = document.querySelector("#select");

button.onclick = function(){evaluate(input, select, money)};






