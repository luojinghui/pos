function cart_item(barcode_count) {
    this.loadAllItem = loadAllItems();
    this.promotion = loadPromotions();
    this.barcode_count = barcode_count;
}
cart_item.prototype.get_all_item = function () {
    var cart_item = [];

    for(var key in this.barcode_count) {
        for (var i = 0; i < this.loadAllItem.length; i++) {
            if(key === this.loadAllItem[i].barcode) {
                cart_item.push({
                    barcode : this.loadAllItem[i].barcode,
                    name : this.loadAllItem[i].name,
                    unit : this.loadAllItem[i].unit,
                    price : this.loadAllItem[i].price.toFixed(2),
                    count : this.barcode_count[key]
                });
            }
        }
    }

    var subtotal = 0;
    for (var i = 0; i < cart_item.length; i++) {
        for (var j = 0; j < this.promotion[0].barcodes.length; j++) {
            if(cart_item[i].barcode === this.promotion[0].barcodes[j]) {
                cart_item[i].save_count = parseInt(cart_item[i].count / 3);
                subtotal = ((cart_item[i].count - cart_item[i].save_count) * cart_item[i].price).toFixed(2);
                cart_item[i].subtotal = subtotal;
            } else if(cart_item[i].barcode != this.promotion[0].barcodes[j] && cart_item[i].count < 3) {
                cart_item[i].subtotal = (cart_item[i].count * cart_item[i].price).toFixed(2);
            }
        }
    }

    return cart_item;
}


// function cart_item(barcode_count) {
//     this.loadAllItem loadAllItem();
//     this.barcode_count = barcode_count;
// }
//
// cart_item.prototype.get_all_item = function() {
//     var array = [];
//
//     for(var key in this.barcode_count) {
//         for (var i = 0; i < this.loadAllItem.length; i++) {
//             if(key === this.loadAllItem[i].barcode) {
//                 array.push({
//                     barcode : this.loadAllItem[i].barcode,
//                     name : this.loadAllItem[i].name,
//                     unit : this.loadAllItem[i].unit,
//                     price : this.loadAllItem[i].price.toFixed(2),
//                     count : this.barcode_count[key],
//                     save_count : 0,
//                     subtotal : 0,
//                 })
//             }
//         }
//     }
//     return array;
// }
