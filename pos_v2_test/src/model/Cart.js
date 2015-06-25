function Cart() {
    this.cart_items = [];
}

Cart.prototype.admix_item = function(tag_info) {
    var exist = false;
    this.cart_items.forEach(function(val) {
        if (val.barcode === tag_info.barcode) {
            val.count += tag_info.count;
            exist = true;
            return ;
        }
    })
    if (!exist) {
        this.cart_items.push(new CartItem(tag_info.barcode, tag_info.count));
    }
}

Cart.prototype.total_price = function() {
    var total_price = 0;

    this.cart_items.forEach(function(val, i) {
        total_price += Number(val.subtotal());
    })
    return total_price;
}

Cart.prototype.save_price = function() {
    var save_price = 0;

    this.cart_items.forEach(function(val, i) {
        save_price += Number(val.save_price());
    })
    return save_price;
}
