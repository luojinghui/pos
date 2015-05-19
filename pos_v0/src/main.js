//TODO: Please write code in this file.
function printInventory(inputs) {
    var shop_list = '***<没钱赚商店>购物清单***';
    var sum = 0;
    for(var i = 0 ;i < inputs.length;i ++){
        shop_list = shop_list +'\n'+'名称：'+inputs[i].name+'，数量：'+inputs[i].count+
        inputs[i].unit+'，单价：'+inputs[i].price+'.00(元)，小计：'+
        inputs[i].price*inputs[i].count+'.00(元)';
        sum = sum+(inputs[i].price*inputs[i].count);
    }
    shop_list = shop_list +'\n----------------------\n'+
    '总计：'+sum+'.00(元)'+'\n'+'**********************';
    console.log(shop_list);
}
