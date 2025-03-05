const seats = document.getElementsByClassName("seats-btn");
const seatQuantityElement = document.getElementById("seat-quantity");
const seatQuantity = seatQuantityElement.innerText;
let seatSelected = 0;
const seatClass = "Economy";
const seatPrice = 550;
let total = 0;
for(const seat of seats){
    seat.addEventListener('click', function(){
        // console.log(seat.innerText);
        seatSelected+=1;
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
        const totalPrice = parseInt(document.getElementById("total-price").innerText);

        document.getElementById("apply-coupon").addEventListener('click',function(){
        const insertCouponElement = document.getElementById('insert-coupon');
        const insertCoupon = insertCouponElement.value.toUpperCase();
         
        if(insertCoupon === 'NEW15'){
            const discountedTotal = totalPrice - (totalPrice*(15/100));
            const finalDiscountedTotal = Math.floor(discountedTotal);
            document.getElementById("grand-total").innerText = finalDiscountedTotal;
            
        }
        else if(insertCoupon === 'COUPLE20'){
            const discountedTotal = totalPrice - (totalPrice*(20/100));
            const finalDiscountedTotal = Math.floor(discountedTotal);
            document.getElementById("grand-total").innerText = finalDiscountedTotal;
        }
        else {
            document.getElementById("grand-total").innerText = totalPrice;
            alert("Please enter a valid coupon!");
            return
        }
        })
    })

}




    

