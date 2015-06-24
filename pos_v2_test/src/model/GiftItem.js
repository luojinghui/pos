function gift_item(barcode_count) {
    this.loadAllItem = loadAllItems();
    this.promotion = loadPromotions();
    this.barcode_count = barcode_count;
}
gift_item.prototype.get_all_gift_item = function () {
    var gift_item = [];

    for(var key in this.barcode_count) {
        for (var i = 0; i < this.loadAllItem.length; i++) {
            if(key === this.loadAllItem[i].barcode) {
                gift_item.push({
                    barcode : this.loadAllItem[i].barcode,
                    name : this.loadAllItem[i].name,
                    unit : this.loadAllItem[i].unit,
                    count : this.barcode_count[key],
                    promotion : 0
                });
            }
        }
    }

    for (var i = 0; i < gift_item.length; i++) {
        for (var j = 0; j < this.promotion[0].barcodes.length; j++) {
            if(gift_item[i].barcode === this.promotion[0].barcodes[j]) {
                gift_item[i].promotion = parseInt(gift_item[i].count / 3);
            }
        }
    }

    return gift_item;
}
