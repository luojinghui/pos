
function printInventory(inputs) {
    var tags = new Tags(inputs);
    var barcode_count = tags.scanbarcodes();
    var cartitem = new cart_item(barcode_count);
    var cart_items = cartitem.get_all_item();
    var giftitem = new gift_item(barcode_count);
    var gift_items = giftitem.get_all_gift_item();
    var pos = new Pos(cart_items,gift_items);

    console.log(pos.pos());
}
