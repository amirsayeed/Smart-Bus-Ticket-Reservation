function buyTickets() {
            const bookTicket = document.getElementById('book-ticket');
            bookTicket.scrollIntoView({
                behavior: 'smooth', 
                block: 'start'      
            });
        }

document.getElementById("redirect").addEventListener('click',function(){
    window.location.assign("./index.html")
})
