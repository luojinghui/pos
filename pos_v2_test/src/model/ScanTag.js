function ScanTag() {}

ScanTag.scanTag = function(tag){
    var tag_info = {};

    tag_info.barcode = tag.split('-')[0];
    tag_info.count = parseInt(tag.split('-')[1] || 1);
    return tag_info;
}
