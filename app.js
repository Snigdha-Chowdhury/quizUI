function validate(item){
    if(item == 3){
        console.log(true);
        document.getElementById("next").disabled = false;
        document.getElementById(`${item}`).innerHTML ='<span>C.</span><span>Aragonite and conchiolin</span>  <i class="fa fa-check-circle" aria-hidden="true" style="color:green"></i>'
    }else{
        document.getElementById("next").disabled = false;
        document.getElementById(`${item}`).innerHTML = '<span>C.</span><span>Aragonite and conchiolin</span>  <i class="fa fa-times-circle-o" aria-hidden="true" style="color:red"></i>'
    }
}