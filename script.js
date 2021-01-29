function ticketValueHandler(ticket, isincrease) {
    const ticketInput = document.getElementById(ticket+'-count');
    const ticketNumber = parseInt(ticketInput.value);
    let Counter = ticketNumber;

    if(isincrease == true) {
        Counter++;
    }
    if(isincrease == false & Counter> 0) {
        Counter--;
    }
    ticketInput.value = Counter;
    let ticketTotal = 0;
    if(ticket == 'first-class-ticket') {
        ticketTotal = Counter * 150;
    }
    if(ticket == 'economy-ticket') {
        ticketTotal = Counter * 100;
    }
    document.getElementById(ticket+'-total').innerText = ticketTotal;
    calculateTotal();

}
function calculateTotal() {
    const FirstClassTicketCount = getInputValue('first-class-ticket');
    const economyTicketCount = getInputValue('economy-ticket');
    const totalPrice = FirstClassTicketCount * 150 + economyTicketCount * 100;
    document.getElementById('subtotal').innerText = '$' + totalPrice;
 
    const vat = Math.round(totalPrice * 0.1);
    document.getElementById('vat').innerText = '$' + vat;
 
    const totalAmount = totalPrice + vat;
    document.getElementById('total-amout').innerText = '$' + totalAmount;
 
 }

function getInputValue(product) {
    const tickettInput = document.getElementById(product + '-count');
    const ticketCount = parseInt(tickettInput.value);
    return ticketCount;
 }