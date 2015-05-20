//TODO: Please write code in this file.
function printInventory(inputs) {
    //获取购物车中的商品信息及数量集和
    var cart_list = [];
    var allItems = loadAllItems();
    var promotions = loadPromotions();
    for(var i = 0;i < inputs.length; i++){
        var temp = {};
        var cartcode = inputs[i].substring(0,10);
        var count = inputs[i].length>10 ? parseInt(inputs[i].substring(11)) : 1;
        for(var j = 0; j < allItems.length; j++){
            if(cartcode===allItems[j].barcode){
                temp.name = allItems[j].name;
                temp.unit = allItems[j].unit;
                temp.price = allItems[j].price;
                temp.count = count ;
                temp.cartcode = cartcode;
                cart_list.push(temp);
            }
        }
    }
    //结束，集和放置于cart_list列表中；
    //统计购物清单放置与array列表中
    var array = [];
    for(var a = 0; a < cart_list.length; a++){
        var exist = false;
        var name = cart_list[a].name;
        var sum_count = cart_list[a].count;
        var price = cart_list[a].price;
        var unit = cart_list[a].unit;
        var cartcode_1 = cart_list[a].cartcode;
        for(var b = 0; b < array.length; b++){
            if(array[b].name===name){
                array[b].count = array[b].count + sum_count;
                array[b].price = cart_list[a].price;
                array[b].unit = cart_list[a].unit;
                array[b].cartcode = cart_list[a].cartcode;
                exist = true;
            }
        }
        if(!exist){
            var temp_1 = {};
            temp_1.name = name;
            temp_1.count = sum_count;
            temp_1.price = price;
            temp_1.unit = unit;
            temp_1.cartcode = cartcode_1;
            array.push(temp_1);
        }
    }
    //结束统计，计数完成；
    var total_note = "***<没钱赚商店>购物清单***"+ '\n';
    var sum =0;
    var true_sum = 0;
    for(var x = 0;x < array.length; x++){
        true_price = array[x].count>=3 ? array[x].price*(array[x].count-1) : array[x].price*array[x].count;
        total_note = total_note  +'名称：'+array[x].name+'，数量：'+array[x].count+
        array[x].unit+'，单价：'+array[x].price.toFixed(2)+'(元)，小计：'+true_price+
        '.00(元)'+'\n';
        sum = sum+true_price;
        true_sum = true_sum + array[x].count*array[x].price;
    }
        total_note = total_note + '----------------------'+'\n'+
        '挥泪赠送商品：';
        for(var y = 0;y < array.length; y++){
            if(array[y].count>=3){
                total_note = total_note  +'\n'+'名称：'+array[y].name+'，数量：1'+array[y].unit;
            }
        }
        total_note = total_note +'\n----------------------\n'+
        '总计：'+sum+'.00(元)'+'\n节省：'+(true_sum-sum).toFixed(2)+'(元)\n'+'**********************';
        console.log(total_note);
}
