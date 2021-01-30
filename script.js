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
//work on buy now button
 function buyNow() {
     const FirstClassTicket = getInputValue('first-class-ticket');
     const economyTicket = getInputValue('economy-ticket');

     let total = FirstClassTicket * 150 + economyTicket * 100;

     if(total > 0) {
         const showValue = document.getElementById('show-value');
         showValue.style.display = 'block';

        const booking = document.getElementById('booking-area');
        booking.style.display= 'none';
        document.getElementById('first-class-count').innerText = FirstClassTicket;
        let firstClassPrice = FirstClassTicket * 150;
        document.getElementById('first-class-price').innerText = '$'+firstClassPrice;

        document.getElementById('economy-count').innerText = economyTicket;
        let economyPrice = economyTicket * 100;
        document.getElementById('economy-price').innerText = '$'+economyPrice;

        document.getElementById('subtotal-price').innerText = '$'+total;

        let vatMoney = Math.round(total * 0.1);
        document.getElementById('vat-price').innerText = '$'+vatMoney;

        let GrandTotal = total + vatMoney;
        document.getElementById('total-price').innerText = '$'+GrandTotal;

     }
     else{
         alert("you dont buy any Ticket")
     }
 }