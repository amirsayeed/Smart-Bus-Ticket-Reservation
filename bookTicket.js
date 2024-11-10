function buyTickets() {
            const bookTicket = document.getElementById('book-ticket');
            bookTicket.scrollIntoView({
                behavior: 'smooth', // Smooth scroll
                block: 'start'      // Align to the top of the section
            });
        }

const seats = ['A1', 'A2', 'A3', 'A4',
              'B1', 'B2', 'B3', 'B4',
              'C1', 'C2', 'C3', 'C4',
              'D1', 'D2', 'D3', 'D4',
              'E1', 'E2', 'E3', 'E4',
              'F1', 'F2', 'F3', 'F4',
              'G1', 'G2', 'G3', 'G4',
              'H1', 'H2', 'H3', 'H4',
              'I1', 'I2', 'I3', 'I4',
              'J1', 'J2', 'J3', 'J4'
            ]
let selectedSeats = [];
const showSeatElement = document.getElementById('selected-seat-no');
const seatClass = document.getElementById('seat-class');
const seatFare = document.getElementById('seat-fare');
const totalPrice = document.getElementById('total-price');
const grandTotal = document.getElementById('grand-total');

const seatSelection = seats.forEach(seat => {
    const seatNoElement = document.getElementById(seat);
    seatNoElement.addEventListener('click', function(){
    selectedSeats.push(seat);
    console.log(selectedSeats);
    removeBackgroundColorById(seat);
    setBackgroundColorById(seat);
    console.log(seatNoElement.innerText+ ' ' + 'is clicked');

    showSeatElement.innerText = seatNoElement.innerText;
    seatClass.innerText = 'Economy';
    seatFare.innerText = 550;
    totalPrice.innerText = seatFare.innerText;
    grandTotal.innerText = totalPrice.innerText;
})
})

const applyCoupon = () =>{
    const insertCouponElement = document.getElementById('insert-coupon');
    const insertCoupon = insertCouponElement.value.toUpperCase();
    console.log(insertCoupon);
    if(insertCoupon === 'NEW15'){
        const discountedTotal = grandTotal.innerText - (grandTotal.innerText*(15/100));
        console.log(discountedTotal);
        grandTotal.innerText = Math.floor(discountedTotal);
    }
    else if(insertCoupon === 'COUPLE20'){
        const discountedTotal = grandTotal.innerText - (grandTotal.innerText*(20/100));
        console.log(discountedTotal);
        grandTotal.innerText = Math.floor(discountedTotal);
    }
    else {return grandTotal.innerText;}
}