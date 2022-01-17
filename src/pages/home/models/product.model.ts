export interface ProductModel {

    id: string;
    volumeInfo: {
        title: string;
        categories: [];
        authors: [];
        imageLinks: {
            smallThumbnail: string;
            thumbnail: string;
        };
    };

    saleInfo: {
        saleability: string;
        retailPrice: {
            amount: string;
            currencyCode: string;
        }
    };


}
