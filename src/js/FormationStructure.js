export function buildingStructure(arrayBooks) {
    let readyMadeStructure = [];
    arrayData.forEach(element => {
        let booksItem = document.createElement('div');
        let booksItemImg = document.createElement('img');
        let booksItemBlock = document.createElement('div');
        let blockInfWriter = document.createElement('p');
        let blockInfName = document.createElement('h3');
        let blockInfWhereof = document.createElement('p');
        let blockInfPrice = document.createElement('p');
        let blockInfBnt = document.createElement('button');

        booksItem.classList = 'books__item';
        booksItemImg.classList = 'books__item_img';
        booksItemBlock.classList = 'books__item_block-inf';
        blockInfWriter.classList = 'block-inf__writer';
        blockInfName.classList = 'block-inf__name';
    })  
}
