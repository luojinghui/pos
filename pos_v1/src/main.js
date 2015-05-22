
function printInventory(inputs) {
    var cart_list = [];
    var allItems = loadAllItems();
    var promotions = loadPromotions();
    var NUM_1 = 10;
    var NUM_2 = 11;

    for(var i=0; i<inputs.length; i++) {
        var temp = {};
        var cartcode = inputs[i].substring(0,NUM_1);
        var count = inputs[i].length > NUM_1 ? parseInt(inputs[i].substring(NUM_2)) : 1;

        for(var j=0; j<allItems.length; j++) {
            if(cartcode === allItems[j].barcode){
                temp.name = allItems[j].name;
                temp.unit = allItems[j].unit;
                temp.price = allItems[j].price;
                temp.count = count ;
                temp.cartcode = cartcode;
                cart_list.push(temp);
            }
        }
    }

    var array = [];

    for(var a=0; a<cart_list.length; a++) {
        var exist = false;
        var name = cart_list[a].name;
        var sum_count = cart_list[a].count;
        var price = cart_list[a].price;
        var unit = cart_list[a].unit;
        var cartcode_1 = cart_list[a].cartcode;

        for(var b=0; b<array.length; b++) {
            if(array[b].name === name) {
                array[b].count = array[b].count + sum_count;
                array[b].price = cart_list[a].price;
                array[b].unit = cart_list[a].unit;
                array[b].cartcode = cart_list[a].cartcode;
                array[b].sale_count = array[b].sale_count + sum_count;
		        array[b].save_count = 0;
                exist = true;
            }
        }
        if(!exist) {
            var temp_1 = {
            name : name,
            count : sum_count,
            price : price,
            unit : unit,
            cartcode : cartcode_1,
            sale_count : sum_count,
	        save_count : 0
            };
            array.push(temp_1);
        }
    }

    var al = array.length;
    var pb = promotions[0].barcodes.length;
    var NUM = 3;

    for(var e=0; e<al; e++) {
        for(var f=0; f<pb; f++) {
            if(array[e].cartcode === promotions[0].barcodes[f] && array[e].count >= NUM ) {
		        array[e].save_count = parseInt(array[e].sale_count / NUM);
		    }
		}
    }

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
            console.log(array[c].sale_count);
            if(array[c].cartcode === promotions[0].barcodes[d]) {
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
			        '节省：' + save_money.toFixed(2) +'(元)';
    console.log(total_note);
}
