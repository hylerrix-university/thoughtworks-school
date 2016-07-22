'use strict';

describe("let`s rock!", function() {
    it("Something", function() {
        let tags = [
            'ITEM0',
            'ITEM3-2',
            'ITEM3-2.5',
            'ITEM0',
            'ITEM1'
        ];
        let formattedTags = formatTags(tags);
        let formattedTemp = [
            {
                "barcode": "ITEM0",
                "amount": 1
            },
            {
                "barcode": "ITEM3",
                "amount": 2
            },
            {
                "barcode": "ITEM3",
                "amount": 2.5
            },
            {
                "barcode": "ITEM0",
                "amount": 1
            },
            {
                "barcode": "ITEM1",
                "amount": 1
            }
        ];
        expect(formattedTags).toEqual(formattedTemp);
    });
});