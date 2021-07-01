$(document).ready(function(){
    $("button#btn").click(function(event){
        event.preventDefault();
        
        var inputcrust = $("input[name='crusttype']:checked").val();
        var toppings = $("input[name='tops']:checked").val();
        var pizzsize = $("input[name='size']:checked").val();
        
       // console.log(inputcrust,toppings,pizzsize)
        $("#yourorder").append(inputcrust+"</br>"+toppings+"</br>" + pizzsize)

       if(inputcrust=="Crispy"){
        if(pizzsize=="large"&&toppings=="mushroom"){
            console.log(1000+50+100)
            $("#totalprize").append("ksh:"+(1000+50+100))
        }
        else if(pizzsize=="large"&& toppings=="bacon"){
$("#totalprize").append("ksh:"+(1000+60+100))
        }
        else if(pizzsize=="large"&& toppings=="sausage"){
            $("#totalprize").append("ksh:"+(1000+70+100))
                    }
        
       }


       if(inputcrust=="Stuffed"){
        if(pizzsize=="large"&&toppings=="mushroom"){
            console.log(1000+50+150)
            $("#totalprize").append("ksh:"+(1000+50+150))
        }
        else if(pizzsize=="large"&& toppings=="bacon"){
$("#totalprize").append("ksh:"+(1000+60+150))
        }
        else if(pizzsize=="large"&& toppings=="sausage"){
            $("#totalprize").append("ksh:"+(1000+70+150))
                    }
        
       }

       if(inputcrust=="Gluten-free"){
        if(pizzsize=="large"&&toppings=="mushroom"){
            console.log(1000+50+150)
            $("#totalprize").append("ksh:"+(1000+50+200))
        }
        else if(pizzsize=="large"&& toppings=="bacon"){
$("#totalprize").append("ksh:"+(1000+60+200))
        }
        else if(pizzsize=="large"&& toppings=="sausage"){
            $("#totalprize").append("ksh:"+(1000+70+200))
                    }
        
       }
    })
    $("#md-btn").click(function(){
        $("form.hide-div").show();
    })
})