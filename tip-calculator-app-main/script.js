const cinco=document.querySelector('.cinco');
const diez=document.querySelector('.diez');
const quince=document.querySelector('.quince');
const ticinco=document.querySelector('.ticinco');
const cincuenta=document.querySelector('.cincuenta');
const reset=document.querySelector('.button-reset');
const tipResult=document.querySelector('#tip-amount-result');
const totalAmount=document.querySelector('#total-amount-result')
const inputbill=document.querySelector('#bill');
const inputpeople=document.querySelector('#people');
const customTipValue=document.querySelector('#custom-tip');
let varAmout=0;
let peopleResult=0;
let billResult=0;
let csTip=0;
const botones=document.querySelectorAll('.amout');


cinco.addEventListener('click', function(){
        varAmout=0.05
        cinco.classList.add('activo')
        if(this.classList.contains('activo')){
            diez.classList.remove('activo');
            quince.classList.remove('activo');
            ticinco.classList.remove('activo');
            cincuenta.classList.remove('activo');
        }
        customTipValue.value='';
        resultadoTotal();
    })
diez.addEventListener('click', function(){
        varAmout=0.10
        this.classList.add('activo');
    if(this.classList.contains('activo')){
        cinco.classList.remove('activo');
        quince.classList.remove('activo');
        ticinco.classList.remove('activo');
        cincuenta.classList.remove('activo');
    }
        customTipValue.value='';
        resultadoTotal();
    })
quince.addEventListener('click', function(){
        varAmout=0.15
        this.classList.add('activo');
        if(this.classList.contains('activo')){
            cinco.classList.remove('activo');
            diez.classList.remove('activo');
            ticinco.classList.remove('activo');
            cincuenta.classList.remove('activo');
        }
        customTipValue.value='';
        resultadoTotal();
    })
ticinco.addEventListener('click', function(){
        varAmout=0.25
        this.classList.add('activo');
        if(this.classList.contains('activo')){
            cinco.classList.remove('activo');
            quince.classList.remove('activo');
            diez.classList.remove('activo');
            cincuenta.classList.remove('activo');
        }
        customTipValue.value='';
        resultadoTotal();
    })
cincuenta.addEventListener('click', function(){
        varAmout=0.50;
        this.classList.add('activo');
        if(this.classList.contains('activo')){
            cinco.classList.remove('activo');
            quince.classList.remove('activo');
            ticinco.classList.remove('activo');
            diez.classList.remove('activo');
        }
        customTipValue.value='';
        resultadoTotal();
    })


function tomaContenidoBill(value){
    
    billResult=value
    resultadoTotal();
    
}
function tomaContenidoPeople(value){
    peopleResult=value
    resultadoTotal();
    
}
function customTip(value){
    csTip=value;
    csTip=csTip/100;
    varAmout=0;
    tipcleaner();
    resultadoTotal();
}

function resultadoTotal(){
   
    
    if(billResult!=0 && varAmout!=0 && peopleResult!=0){
        var totalForPerson=0;
        var totalTipForPerson=0;
        totalTipForPerson=billResult*varAmout;
        totalTipForPerson=(totalTipForPerson/peopleResult).toFixed(2);
        totalForPerson=billResult*varAmout;
        totalForPerson=+billResult+totalForPerson;
        totalForPerson/=peopleResult;
        totalForPerson=totalForPerson.toFixed(2);

        tipResult.innerText='$'+totalTipForPerson;
        totalAmount.innerText='$ '+totalForPerson;
       
    }
    else if(csTip!=0 && billResult!=0 && peopleResult!=0){
        var totalForPerson=0;
        var totalTipForPerson=0;
        totalTipForPerson=billResult*csTip;
       
        totalTipForPerson=(totalTipForPerson/peopleResult).toFixed(2);
        totalForPerson=billResult*csTip;
        totalForPerson=+billResult+totalForPerson;
        totalForPerson/=peopleResult;
        totalForPerson=totalForPerson.toFixed(2);
        
        tipResult.innerText='$'+totalTipForPerson;
        totalAmount.innerText='$ '+totalForPerson;
      
    }
   
}

reset.addEventListener('click', function(){
    console.log('si se activa el reset');
    billResult=0;
    varAmout=0;
    peopleResult=0;
    tipResult.innerText='$'+0;
    totalAmount.innerText='$ '+0;
    inputbill.value='0';
    inputpeople.value='0';
    customTipValue.value='';
    tipcleaner();
})

function tipcleaner(){
    cinco.classList.remove('activo');
    quince.classList.remove('activo');
    ticinco.classList.remove('activo');
    diez.classList.remove('activo');
    cincuenta.classList.remove('activo');
}