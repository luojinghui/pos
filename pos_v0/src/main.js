//TODO: Please write code in this file.
function printInventory(inputs) {
    var shop_list = '***<没钱赚商店>购物清单***';
    var sum = 0;
    var subtotal = 0;
    for(var i=0 ; i<inputs.length ; i++){
        subtotal = inputs[i].price * inputs[i].count;
        var unit = inputs[i].count + inputs[i].unit;
        sum = sum + (inputs[i].price * inputs[i].count);
        shop_list = shop_list + '\n' +
                    '名称：' + inputs[i].name +
                    '，数量：' + unit +
                    '，单价：' + inputs[i].price.toFixed(2) + '(元)，小计：' +
                    subtotal.toFixed(2) + '(元)';
            }
    shop_list = shop_list +
                    '\n----------------------\n'+
                    '总计：' + sum.toFixed(2) + '(元)' + '\n' +
                    '**********************';
    console.log(shop_list);
}
