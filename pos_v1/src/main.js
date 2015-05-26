function eliminate_same_ele(array,inputs) {
    for(var i=0; i<inputs.length; i++) {
        var exist = false;

            for(var j=0; j<array.length; j++) {
                if(inputs[i] === array[j].barcode) {
                    array[j].count ++;
                    exist = true;
                   }
               }
            if(!exist) {
                   var newTemp = {
                   barcode :inputs[i].split('-')[0],
                   count : parseInt(inputs[i].split('-')[1]) || 1,
                   save_count : 0
                   };
                   array.push(newTemp);
               }
    }
    return array;
}

function array_add_attribute(array) {
    var allItems = loadAllItems();

    for(var a=0; a<array.length; a++){
       for(var b=0; b<allItems.length; b++){
           if(array[a].barcode === allItems[b].barcode){
               array[a].name = allItems[b].name;
               array[a].unit = allItems[b].unit;
               array[a].price = allItems[b].price;
               array[a].sale_count = array[a].count;
           }
       }
   }
   return array;
}

function array_add_save_count(array,NUM,promotions) {
    var pb = promotions[0].barcodes.length;
    var al = array.length;

    for(var e=0; e<al; e++) {
        for(var f=0; f<pb; f++) {
            if(array[e].barcode === promotions[0].barcodes[f] && array[e].count >= NUM ) {
                array[e].save_count = parseInt(array[e].sale_count / NUM);
            }
        }
    }
    return array;
}

function printInventory(inputs) {
    var promotions = loadPromotions();
    var array = [];
    var NUM = 3;
    var pb = promotions[0].barcodes.length;

    eliminate_same_ele(array,inputs);
    array_add_attribute(array);
    array_add_save_count(array,NUM,promotions);

    var al = array.length;
    var total_note = "***<没钱赚商店>购物清单***" + '\n';
    var sum_price = 0;
    var save_money = 0;

    for(var g=0; g<al; g++) {
		var total_price = (array[g].count - array[g].save_count) * array[g].price;

        sum_price += total_price;
        save_money += array[g].save_count * array[g].price;
		total_note = total_note  +
                    '名称：' + array[g].name + '，' +
				    '数量：' + array[g].count + array[g].unit + '，' +
		            '单价：' + array[g].price.toFixed(2) + '(元)，' +
		            '小计：' + total_price.toFixed(2) + '(元)' + '\n';
        }

    total_note = total_note +
                    '----------------------' + '\n' +
                    '挥泪赠送商品：'+'\n';
    for(var c=0; c<al; c++) {
        for(var d=0; d<pb; d++) {
            if(array[c].barcode === promotions[0].barcodes[d]) {
                array[c].sale_count = array[c].sale_count - parseInt(array[c].sale_count / NUM);
                var send_count = (array[c].count - array[c].sale_count);

                total_note = total_note +
                    "名称：" + array[c].name + "，"+
                    "数量：" + send_count + array[c].unit + "\n";
                }
            }
        }

	total_note = total_note + '----------------------'+ '\n' +
			        '总计：' + sum_price.toFixed(2) +'(元)' +'\n' +
			        '节省：' + save_money.toFixed(2) +'(元)\n' +
                    '**********************';
    console.log(total_note);
}
