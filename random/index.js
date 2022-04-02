function random_fun() {
    return Math.random()
}

function canteen_fun() {
    var canteen_list = ["一食堂", "二食堂"];
    var text = canteen_list[Math.floor((random_fun() * canteen_list.length))];
    document.getElementById("canteen").innerHTML = text;
    return text;
}


function floor_fun() {
    var canteen_list = ["一楼", "二楼"];
    var text = canteen_list[Math.floor((random_fun() * canteen_list.length))];
    document.getElementById("floor").innerHTML = text;
    return text;
}


function meal_fun(canteen, floor) {
    var list;
    if (canteen == "一食堂" && floor == "一楼") {
        list = ["铁板烧饭", "馄饨"];
    } else if (canteen == "一食堂" && floor == "二楼") {
        list = ["麻辣烫", ];
    } else if (canteen == "二食堂" && floor == "一楼") {
        list = ["盖饭", "拉面"];
    } else if (canteen == "二食堂" && floor == "二楼") {
        list = ["盖饭", "叨叨面"];
    };
    var text = list[Math.floor((random_fun() * list.length))];
    document.getElementById("meal").innerHTML = text;
}



function main() {
    var canteen = canteen_fun();
    var floor = floor_fun();
    meal_fun(canteen, floor);
}