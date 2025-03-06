const seats = document.getElementsByClassName("seats-btn");
const seatQuantityElement = document.getElementById("seat-quantity");
const seatQuantity = seatQuantityElement.innerText;
const seatsInitial = parseInt(document.getElementById("seats-remaining").innerText);
const seatClass = "Economy";
const seatPrice = 550;
let seatSelected = 0;
let total = 0;

document.getElementById("apply-coupon").addEventListener('click',function(){
        const insertCouponElement = document.getElementById('insert-coupon');
        const insertCoupon = insertCouponElement.value.toUpperCase();
        const totalPrice = parseInt(getElementTextById("total-price"));
         
        if(insertCoupon === 'NEW15'){
            const discountedTotal = totalPrice - (totalPrice*(15/100));
            const finalDiscountedTotal = Math.floor(discountedTotal);
            setElementTextByIdAndValue("grand-total", finalDiscountedTotal);
            
        }
        else if(insertCoupon === 'COUPLE20'){
            const discountedTotal = totalPrice - (totalPrice*(20/100));
            const finalDiscountedTotal = Math.floor(discountedTotal);
            setElementTextByIdAndValue("grand-total", finalDiscountedTotal);
        }
        else {
            alert("Please enter a valid coupon!");
            return
        }
        })

for(const seat of seats){
    seat.addEventListener('click', function(){
        seatSelected+=1;
        seatsAvailable(seatSelected);

        seatQuantityElement.innerText = seatSelected;
        const seatNo = seat.innerText;
        const divP = document.getElementById("selected-seat-info");
        const divC = document.createElement("div");
        divC.classList.add("flex" ,"justify-between", "items-center", "my-1")
        divC.innerHTML = `
        <p>${seatNo}</p>
        <p>${seatClass}</p>
        <p>${seatPrice}</p>
        `
        divP.appendChild(divC);
        setBackgroundColor(seat);
        total+=seatPrice;
        
        document.getElementById("total-price").innerText = total;
        document.getElementById("grand-total").innerText = total;

        document.getElementById("confirm-btn").addEventListener('click',formValidate);
    })

}

function seatsAvailable(seat){
    const seatsAvailable = seatsInitial - seat;
    setElementTextByIdAndValue("seats-remaining", seatsAvailable)
}

function formValidate(){
    const pName = document.getElementById("passenger-name").value;
    const pNum = document.getElementById("phone-number").value;
    if(typeof(pName)==='string' && pNum.length===11){
        alert("Entered successfully");
        window.location.href ='./booking.html';
    }else{
        alert("Please fill all fields");
        return
    }
}

