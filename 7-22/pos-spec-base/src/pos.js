'use strict';

let tags = [
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000003-2.5',
    'ITEM000005',
    'ITEM000005-2',
    ];

function printReceipt() {
    let allItems = loadAllItems();
    let promotions = loadPromotions();
    let barcodes = formatTags(tags);
    let mergedItems = mergeBarcodes(barcodes);
    let cartItems = getCartItems(mergedItems, allItems);
    let subTotalItems = getSubTotalItems(cartItems);
    let total = getTotal(subTotalItems);
    let discountItems = getDiscountItems(subTotalItems, promotions);
    let discountTotal = getDiscountTotal(discountItems);
    let save = getSaveMoney(total, discountTotal);
    print(subTotalItems, discountTotal, save);
}

function formatTags(tags){
    return tags.map((tag) => {
        let splitTag = tag.split("-");
        return {barcode: splitTag[0], amount: parseFloat(splitTag[1] || 1)};
    })
}

function mergeBarcodes(barcodes){
    let mergedItems= [];
    for(let barcode of barcodes){
        let exsitItem = mergedItems.find((item) => {
            return item.barcode === barcode.barcode;
        });
        if(exsitItem){
            exsitItem.amount += barcode.amount;
        }else{
            mergedItems.push({barcode: barcode.barcode, amount: barcode.amount});
        }
    }
    return mergedItems;
}

function getCartItems(mergedItems, allItems){
    let cartItems = [];
    for(let mergedItem of mergedItems){
        let exsitItem = allItems.find((item) => {
            return item.barcode === mergedItem.barcode;
        });
        cartItems.push(Object.assign({}, exsitItem, {amount: mergedItem.amount}));
    }
    return cartItems;
}

function getSubTotalItems(cartItems){
    let subTotalItems = [];
    for(let item of cartItems){
        let subTotal = item.amount * item.price;
        subTotalItems.push(Object.assign({}, item, {subTotal: subTotal}));
    }
    return subTotalItems;
}

function getTotal(subTotalItems){
    let total = 0;
    for(let item of subTotalItems){
        total += item.subTotal;
    }
    return total;
}

function getDiscountItems(subTotalItems, promotions){
    for(let item of subTotalItems){
         let exsitItem = promotions.find((element) => {
             return element.barcodes.find((barcode) => {
                return barcode === item.barcode;
            });
        });
        if(exsitItem && exsitItem.type === 'BUY_TWO_GET_ONE_FREE'){
            item.discountSubTotal = item.subTotal - parseInt(item.amount / 3) * item.price;    //此处改变优惠商品的小计，为打折后的价格，返还原来的数组
        }else{
            item.discountSubTotal = item.subTotal;
        }

    }
    return subTotalItems;
}

function getDiscountTotal(discountItems){
    let discountTotal = 0;
    for(let item of discountItems){
        discountTotal += item.discountSubTotal;
    }
    return discountTotal;
}

function getSaveMoney(total, discountTotal){
    let save = total - discountTotal;
    return save;
}


function print(subTotalItems, discountTotal, save){
    let receipt = "******<没钱赚商店>收据******\n";
    for(let item of subTotalItems){
        receipt += "名称:" + item.name + ", 数量:" + item.amount + ", 单价:" + item.price + "(元)" + ", 小计:" + item.discountSubTotal
        + "(元)\n"
    }

    receipt +=  ("----------------------------\n" + "总计:" + discountTotal + "(元)\n"
    + "节省:" + save + "(元)\n" + "*************");
    return receipt;
}













