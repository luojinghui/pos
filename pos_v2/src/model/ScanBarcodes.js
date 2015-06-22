function Tags(inputs) {
    this.inputs = inputs;
}

Tags.prototype.scanbarcodes = function(){
    var barcode_count = _(this.inputs).group(function (n,i) {
        return n.split("-")[0];
    }).mapValue(function(val,key) {
        return (mapValue(val,function(n,i) {
            return parseInt(n.split('-')[1] || 1);
        }).reduce(function (a,b) {
            return a + b;
        }))
    }).value();

    return barcode_count;
}
