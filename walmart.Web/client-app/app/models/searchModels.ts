export class SearchDetails {
    name: string;
    moddelNumber: string;
    salePrice: number;
    brandName: string;
    mediumImage: string;
    description: string;
    itemId: number;
    constructor(name: string,
        moddelNumber: string,
        salePrice: number,
        brandName: string,
        mediumImage: string,
        description: string,
        itemId: number) {
        this.name = name;
        this.moddelNumber = moddelNumber;
        this.salePrice = salePrice;
        this.brandName = brandName;
        this.mediumImage = mediumImage;
        this.description = description;
        this.itemId = itemId;
    }
}