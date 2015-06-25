function CartItem(barcode,count) {
    this.barcode = barcode;
    this.count = count;
}

CartItem.prototype.all_item = function() {
    var loadItem =  loadAllItems()
    var index_load_item;
    var barcode = this.barcode;

    loadItem.forEach(function(val,i) {
        if (val.barcode === barcode) {
            index_load_item = loadItem[i];
        }
    })
    return index_load_item;
}

CartItem.prototype.promotion = function() {
    var loadPromotion = loadPromotions();
    var promotion_count = 0;
    var num = this.count;
    var barcode = this.barcode;

    if(loadPromotion[0].type === 'BUY_TWO_GET_ONE_FREE'){
        loadPromotion[0].barcodes.forEach(function(val,i) {
            if(val === barcode) {
                promotion_count = parseInt(num / 3);
            }
        })
    }
    return promotion_count;
}

CartItem.prototype.subtotal = function() {
    var subtotal = 0;

    subtotal = (this.count - this.promotion()) * this.all_item().price;
    return subtotal;
}

CartItem.prototype.save_price = function() {
    var save_price = 0;

    save_price = this.promotion() * this.all_item().price;
    return save_price;
}
