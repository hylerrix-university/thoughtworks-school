'use strict';

function formatTags(tags) {
    let barcodes = [];
    for(let tag of tags) {
        let splitTag = tag.split("-");
        barcodes.push(
            {
                barcode: splitTag[0],
                amount: Number(splitTag[1]) || 1
            }
        )
    }
    return barcodes;
}