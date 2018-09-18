
export class ScrapedData {
    public image: Array<Image>;
    public wordCount: Array<Words>;
}



export class Image {
    public src: any;
    public id: number;
}

export class Words {
    public word: string;
    public count: number;
}