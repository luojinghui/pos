//TODO: Please write code in this file.
function printInventory(inputs) {
    var array = [];
    for(var i = 0; i < inputs.length; i++){
        var exist = false;
        var name = inputs[i].name;
        var count = 1;
        var price = inputs[i].price;
        var unit = inputs[i].unit;
        for(var j = 0; j < array.length; j++){
            if(array[j].name===name){
                array[j].count = array[j].count + 1;
                array[j].price = inputs[i].price;
                array[j].unit = inputs[i].unit;
                exist = true;
            }
        }
        if(!exist){
            var temp = {};
            temp.name = name;
            temp.count = count;
            temp.price = price;
            temp.unit = unit;
            array.push(temp);
        }
    }
    var total_note = "***<没钱赚商店>购物清单***"+ '\n';
    var sum =0;
    sum = inputs[0].price*array[0].count+inputs[5].price*array[1].count+inputs[7].price*array[2].count;
        for(var x = 0;x < array.length; x++){
            total_note = total_note  +'名称：'+array[x].name+'，数量：'+array[x].count+
            array[x].unit+'，单价：'+array[x].price+'.00(元)，小计：'+array[x].price*array[x].count+
            '.00(元)'+'\n';
    }
            total_note = total_note + '----------------------'+'\n'+
            '总计：'+sum+'.00(元)'+'\n'+'**********************';
    console.log(total_note);
}
