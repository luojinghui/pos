function Pos() {}

Pos.print = function(cart) {
    var result =
        '***<没钱赚商店>购物清单***\n' +
        '打印时间：' + FormatDate() + '\n' +
        '----------------------\n' ;
        result += Pos.printItem(cart);
        result += '----------------------\n' +'挥泪赠送商品：\n' ;
        result += Pos.printPromotion(cart);
        result += '----------------------\n' ;
        result += '总计：'+cart.total_price().toFixed(2)+'(元)\n' +
                 '节省：'+cart.save_price().toFixed(2)+'(元)\n' ;
        result +='**********************';

    return result;
}

Pos.printItem = function(cart) {
    var result = "";

    cart.cart_items.forEach(function(val,i) {
        result += '名称：' + val.all_item().name +
        '，数量：' + val.count + val.all_item().unit +
        '，单价：' + val.all_item().price.toFixed(2) + '(元)' +
        '，小计：' + val.subtotal().toFixed(2) + '(元)\n';
        })
    return result;
}

Pos.printPromotion = function(cart) {
    var result = "";

    cart.cart_items.forEach(function(val,i) {
        if (val.promotion() > 0) {
            result += '名称：' + val.all_item().name +
            '，数量：' + val.promotion() + val.all_item().unit + '\n';
        }
    })
    return result;
}
