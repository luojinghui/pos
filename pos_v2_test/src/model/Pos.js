function Pos(cart_items,gift_items) {
    this.cart_items = cart_items;
    this.gift_items = gift_items;
}

Pos.prototype.pos = function() {
    var result =
        '***<没钱赚商店>购物清单***\n' +
        '打印时间：' + FormatDate() + '\n' +
        '----------------------\n' ;
        for (var i = 0; i < this.cart_items.length; i++) {
            result += '名称：' + this.cart_items[i].name +
            '，数量：' + this.cart_items[i].count + this.cart_items[i].unit +
            '，单价：' + this.cart_items[i].price + '(元)' +
            '，小计：' + this.cart_items[i].subtotal + '(元)\n';
        }
        result += '----------------------\n' +
        '挥泪赠送商品：\n' ;
        for (var i = 0; i < this.gift_items.length; i++) {
            if (this.gift_items[i].promotion > 0) {
                result += '名称：' + this.gift_items[i].name +
                '，数量：' + this.gift_items[i].promotion + this.gift_items[i].unit + '\n';
            }
        }

        result += '----------------------\n' ;
        var total_price = 0;
        var save_price = 0;

        for (var i = 0; i < this.cart_items.length; i++) {
            total_price += Number(this.cart_items[i].subtotal);
            if(this.cart_items[i].save_count >=1) {
                save_price += this.cart_items[i].save_count * this.cart_items[i].price;
            }
        }
        result += '总计：'+total_price.toFixed(2)+'(元)\n' +
        '节省：'+save_price.toFixed(2)+'(元)\n' ;

        result +='**********************';

    return result;
}
