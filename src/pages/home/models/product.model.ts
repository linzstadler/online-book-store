export interface ProductModel {
    
    id: string;
    volumeInfo: {
        title: string;
    };
    imageLinks: {
        smallThumbnail: string;
        thumbnail: string;
    };
    saleInfo: {
        saleability: string;
    };
    retailPrice: {
        amount: string;
        currencyCode: string;
    }

}
