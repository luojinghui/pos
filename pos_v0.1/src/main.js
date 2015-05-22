
function printInventory(inputs) {
    var array = [];

    for(var i=0; i<inputs.length; i++) {
        var exist = false;
        var name = inputs[i].name;
        var count = 1;
        var price = inputs[i].price;
        var unit = inputs[i].unit;

        for(var j=0; j<array.length; j++) {
            if(array[j].name === name){
                array[j].count = array[j].count + 1;
                array[j].price = inputs[i].price;
                array[j].unit = inputs[i].unit;
                exist = true;
            }
        }
        if(!exist) {
            var temp = {
            name  : name,
            count : count,
            price : price,
            unit  : unit
            };
            array.push(temp);
        }
    }

    var total_note = "***<没钱赚商店>购物清单***" + '\n';
    var sum = 0;
    var subtotal = 0;

        for(var x=0; x<array.length; x++) {
            sum += array[x].price * array[x].count ;
            subtotal = array[x].price * array[x].count;
            total_note = total_note  +
                '名称：' + array[x].name +
                '，数量：' + array[x].count + array[x].unit +
                '，单价：' + array[x].price.toFixed(2) + '(元)，小计：' +
                subtotal.toFixed(2)+'(元)' + '\n';
            }
    total_note = total_note +
                '----------------------' +'\n' +
                '总计：'+ sum.toFixed(2) +'(元)' +'\n' +
                '**********************';
    console.log(total_note);
}
