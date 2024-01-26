export function buyNow (blockInfBtn) {
    let numberPurchases = document.querySelector('.header__function_Number-of-purchases');
    if (blockInfBtn.textContent == 'buy now') {
        if (numberPurchases.textContent == "") {
        numberPurchases.textContent = 1;
        numberPurchases.style.display = 'flex';
        } else {
            numberPurchases.textContent = Number(numberPurchases.textContent) +1;
        }
        blockInfBtn.textContent = "in the cart";
        blockInfBtn.classList.add('block-inf__btn2');
    } else {
        if (numberPurchases.textContent == "1") {
            numberPurchases.textContent = "";
            numberPurchases.style.display = 'none';
        } else {
            numberPurchases.textContent = Number(numberPurchases.textContent) -1;
        }
        blockInfBtn.textContent = "buy now";
        blockInfBtn.classList.remove('block-inf__btn2');
    }
}