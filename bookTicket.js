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

const seatSelection = seats.forEach(seat => {
    const seatNoElement = document.getElementById(seat);
    seatNoElement.addEventListener('click', function(){
    removeBackgroundColorById(seat);
    setBackgroundColorById(seat);
    console.log(seatNoElement.innerText+ ' ' + 'is clicked');
    const showSeatElement = document.getElementById('selected-seat-no');
    showSeatElement.innerText = seatNoElement.innerText;
    const seatClass = document.getElementById('seat-class');
    seatClass.innerText = 'Economy';
    const seatFare = document.getElementById('seat-fare');
    seatFare.innerText = 'BDT 550';
})
})

