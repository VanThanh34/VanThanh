let tuoi = document.getElementById("tuoi");
let btn = document.getElementById("btn");
btn.addEventListener("click", onClick)

    function onClick(){
        if(+tuoi.value > 15){
            document.getElementById("answer").innerHTML=("Bé đã đủ vào lớp 10 rồi!");
        } else
        {
            document.getElementById("answer").innerHTML=("Về ăn cho chóng lớn rồi vào lớp 10.");
        }
    }

