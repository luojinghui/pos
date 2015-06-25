
function printInventory(inputs) {
    var cart = new Cart();

    inputs.forEach(function(val) {
        cart.admix_item(ScanTag.scanTag(val));
        //console.log(ScanTag.scanTag(val));
    })
    //console.log(cart.cart_items);

    console.log(Pos.print(cart));
    //console.log(cart);

}
