//TODO: Please write code in this file.
//将
function printInventory(inputs) {
    var cart_list = [];
    var allItems = loadAllItems();
    for(var i = 0;i < inputs.length; i++){
        var temp = {};
        for(var j = 0; j < allItems.length; j++){
            if(inputs[i]===allItems[j].barcode){
                temp.name = allItems[j].name;
                temp.unit = allItems[j].unit;
                temp.price = allItems[j].price;
                cart_list.push(temp);
            }
        }
    }
    //通过cart_list打印清单
    var array = [];
    for(var a = 0; a < cart_list.length; a++){
        var exist = false;
        var name = cart_list[a].name;
        var count = 1;
        var price = cart_list[a].price;
        var unit = cart_list[a].unit;
        for(var b = 0; b < array.length; b++){
            if(array[b].name===name){
                array[b].count = array[b].count + 1;
                array[b].price = cart_list[a].price;
                array[b].unit = cart_list[a].unit;
                exist = true;
            }
        }
        if(!exist){
            var temp_1 = {};
            temp_1.name = name;
            temp_1.count = count;
            temp_1.price = price;
            temp_1.unit = unit;
            array.push(temp_1);
        }
    }
    var total_note = "***<没钱赚商店>购物清单***"+ '\n';
    var sum =0;
        for(var x = 0;x < array.length; x++){
            total_note = total_note  +'名称：'+array[x].name+'，数量：'+array[x].count+
            array[x].unit+'，单价：'+array[x].price+'.00(元)，小计：'+array[x].price*array[x].count+
            '.00(元)'+'\n';
            sum = sum+array[x].price*array[x].count;
    }
            total_note = total_note + '----------------------'+'\n'+
            '总计：'+sum+'.00(元)'+'\n'+'**********************';
    console.log(total_note);
}
