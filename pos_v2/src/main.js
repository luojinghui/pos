
function printInventory(inputs) {
    var tags = new Tags(inputs);
    var barcode_count = tags.scanbarcodes();


    var cartitem = new cart_item(barcode_count);
    var array = cartitem.get_all_item();
    console.log(array);
    // var loadAllItem = loadAllItems();
    // var array = [];
    //
    // for(var key in barcode_count) {
    //     for (var i = 0; i < loadAllItem.length; i++) {
    //         if(key === loadAllItem[i].barcode) {
    //             array.push({
    //                 barcode : loadAllItem[i].barcode,
    //                 name : loadAllItem[i].name,
    //                 unit : loadAllItem[i].unit,
    //                 price : loadAllItem[i].price.toFixed(2),
    //                 count : barcode_count[key],
    //                 save_count : 0,
    //                 subtotal : 0,
    //             })
    //         }
    //     }
    // }

    //var promotion = loadPromotions();
    // var subtotal = 0;
    // for (var i = 0; i < array.length; i++) {
    //     for (var j = 0; j < promotion[0].barcodes.length; j++) {
    //         if(array[i].barcode === promotion[0].barcodes[j]) {
    //             array[i].save_count = parseInt(array[i].count / 3);
    //             subtotal = ((array[i].count - array[i].save_count) * array[i].price).toFixed(2);
    //             array[i].subtotal = subtotal;
    //         } else if(array[i].barcode != promotion[0].barcodes[j] && array[i].count < 3) {
    //             array[i].subtotal = (array[i].count * array[i].price).toFixed(2);
    //         }
    //     }
    // }


    var result =
        '***<没钱赚商店>购物清单***\n' +
        '打印时间：' + FormatDate() + '\n' +
        '----------------------\n' ;
        for (var i = 0; i < array.length; i++) {
            result += '名称：' + array[i].name +
            '，数量：' + array[i].count + array[i].unit +
            '，单价：' + array[i].price + '(元)' +
            '，小计：' + array[i].subtotal + '(元)\n';
        }
        result += '----------------------\n' +
        '挥泪赠送商品：\n' ;
        for (var i = 0; i < array.length; i++) {
            if(array[i].save_count >=1) {
            result += '名称：' + array[i].name +
            '，数量：' + array[i].save_count + array[i].unit + '\n';
            }
        }

        result += '----------------------\n' ;
        var total_price = 0;
        var save_price = 0;

        for (var i = 0; i < array.length; i++) {
            total_price += Number(array[i].subtotal);
            if(array[i].save_count >=1) {
                save_price += array[i].save_count * array[i].price;
            }
        }
        result += '总计：'+total_price.toFixed(2)+'(元)\n' +
        '节省：'+save_price.toFixed(2)+'(元)\n' ;

        result +='**********************';

    //console.log(result);
}
