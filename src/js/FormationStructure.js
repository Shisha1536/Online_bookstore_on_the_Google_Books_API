//import { requestingData } from "./Request";
export function buildingStructure(arrayData) {
    let books = document.querySelector('.books');
    arrayData.forEach(element => {
        let img = element.volumeInfo.imageLinks.smallThumbnail;
        let writer = element.volumeInfo.publisher;
        let name = element.volumeInfo.title;
        let whereof = element.volumeInfo.description;
        let price;
        if (element.saleInfo.isEbook == true) {
            price = `${element.saleInfo.listPrice.amount} ${element.saleInfo.listPrice.currencyCode}`;
        } else {
            price = "";
        }
        const btn = 'buy now';

        let booksItem = document.createElement('div');
        let booksItemImg = document.createElement('img');
        let booksItemBlockInf = document.createElement('div');
        let blockInfWriter = document.createElement('p');
        let blockInfName = document.createElement('h3');
        let blockInfWhereof = document.createElement('p');
        let blockInfPrice = document.createElement('p');
        let blockInfBtn = document.createElement('button');

        booksItem.classList = 'books__item';
        booksItemImg.classList = 'books__item_img';
        booksItemBlockInf.classList = 'books__item_block-inf';
        blockInfWriter.classList = 'block-inf__writer';
        blockInfName.classList = 'block-inf__name';
        blockInfWhereof.classList = 'block-inf__whereof';
        blockInfPrice.classList = 'block-inf__price';
        blockInfBtn.classList = 'block-inf__btn';

        booksItemImg.src = img;
        blockInfWriter.textContent = writer;
        blockInfName.textContent = name;
        blockInfWhereof.textContent = whereof;
        blockInfPrice.textContent = price;
        blockInfBtn.textContent = btn;

        booksItemBlockInf.append(blockInfWriter);
        booksItemBlockInf.append(blockInfName);
        booksItemBlockInf.append(blockInfWhereof);
        booksItemBlockInf.append(blockInfPrice);
        booksItemBlockInf.append(blockInfBtn);
        booksItem.append(booksItemImg);
        booksItem.append(booksItemBlockInf);
        console.log(typeof(booksItem));
        books.append(booksItem);
    })
}