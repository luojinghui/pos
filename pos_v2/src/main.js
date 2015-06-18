
function printInventory(inputs) {
    var barcode_count = _(inputs).group(function(n, i){
        return n.split("-")[0];
    }).mapValue(function(value, key){
        return _.mapValue(value, function(value, key){
            return Number(value.split('-')[1]) || 1;
        }).reduce(function(a, b){
            return a + b;
        });
    }).value();
    //console.log(barcode_count);
    var loadAllItem = loadAllItems();
    //console.log(loadAllItem);
    var array = [];

    for(var key in barcode_count) {
        for (var i = 0; i < loadAllItem.length; i++) {
            if(key === loadAllItem[i].barcode) {
                array.push({
                    barcode : loadAllItem[i].barcode,
                    name : loadAllItem[i].name,
                    unit : loadAllItem[i].unit,
                    price : loadAllItem[i].price.toFixed(2),
                    count : barcode_count[key],
                    save_count : 0,
                    subtotal : 0
                })
            }
        }
    }
    // console.log(array);
    var promotion = loadPromotions();
    //console.log(promotion);
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < promotion[0].barcodes.length; j++) {
            if(array[i].barcode === promotion[0].barcodes[j] && array[i].count >= 3) {
                var subtotal = 0;

                array[i].save_count = parseInt(array[i].count / 3);
                subtotal = (array[i].count - array[i].save_count) * array[i].price;
                array[i].subtotal = subtotal;
            } else {
                array[i].subtotal = array[i].count * array[i].price;
            }
        }
    }
    console.log(array);
    // _.each(array,function(val,i) {
    //     _.mapValue(val,function(element,) {
    //         return {count:barcode_count[ITEM000001]};
    //     })
    // });
    // console.log(array);
    // console.log(barcode_count);

    // for(var key in barcode_count) {
    //
    // }
    // for(var key in barcode_count) {
    //     for (var i = 0; i < loadAllItem.length; i++) {
    //         for(var j = 0; j < loadAllItem[i].length; j ++) {
    //             if(key === loadAllItem[i][j]) {
    //                 barcode_count[key].push(loadAllItem[i][j]);
    //
    //             }
    //         }
    //     }
    // }



    //console.log(expectText);
}

dateDigitToString = function (num) {
    return num < 10 ? '0' + num : num;
};

[
    {
    barcode: 'ITEM000001',
    name: '雪碧',
    unit: '瓶',
    price: '3.00',
    count: 5,
    save_count: 0,
    subtotal: 0
    },
    { barcode: 'ITEM000003',
    name: '荔枝',
    unit: '斤',
    price: '15.00',
    count: 2,
    save_count: 0,
    subtotal: 0
    },
    { barcode: 'ITEM000005',
    name: '方便面',
    unit: '袋',
    price: '4.50',
    count: 3,
    save_count: 0,
    subtotal: 0
    }
]
