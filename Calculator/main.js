const screenSpan=document.querySelector('#screenSpan');
const  deleter=document.getElementById('delete');
const  valor=document.getElementById('valor');
const  percentage=document.getElementById('percentage');
const  divider=document.getElementById('divider');
const  seven=document.getElementById('seven');
const  eight=document.getElementById('eight');
const  nine=document.getElementById('nine');
const  multiplier=document.getElementById('multiplier');
const  four=document.getElementById('four');
const  five=document.getElementById('five');
const  six=document.getElementById('six');
const  negative=document.getElementById('negative');
const  one=document.getElementById('one');
const  two=document.getElementById('two');
const  three=document.getElementById('three');
const  plus=document.getElementById('plus');
const  zero=document.getElementById('zero');
const  comma=document.getElementById('comma');
const  equal=document.getElementById('equal');
var digits=[];
var digit2=[];
var digit3=[];
var symbols=[];
var resultado=0;
var val=0; 
var numb=0;
var numb2=0;



deleter.addEventListener('click',borrador);
valor.addEventListener('click',operation);
percentage.addEventListener('click',operation);
seven.addEventListener('click',catcher);
eight.addEventListener('click',catcher);
nine.addEventListener('click',catcher);
four.addEventListener('click',catcher);
five.addEventListener('click',catcher);
six.addEventListener('click',catcher);
one.addEventListener('click',catcher);
two.addEventListener('click',catcher);
three.addEventListener('click',catcher);
zero.addEventListener('click',catcher);
comma.addEventListener('click',catcher); 
equal.addEventListener('click',operation); 

divider.addEventListener('click',function(){
    this.classList.add('active');
    if(this.classList.contains('active')){
        multiplier.classList.remove('active');
        negative.classList.remove('active');
        plus.classList.remove('active');
        symbols.push(1);
    }
    if(val==0){
        val=1;
    }
    else {
        val=2;
        console.log(val)
    }

});
multiplier.addEventListener('click',function(){
    
    this.classList.add('active');
    if(this.classList.contains('active')){
        divider.classList.remove('active');
        negative.classList.remove('active');
        plus.classList.remove('active');
        symbols.push(2);
    }
    if(val==0){
        val=1;
    }
    else {
        val=2;
        console.log(val);
    }
    
});
negative.addEventListener('click',function(){
    this.classList.add('active');
    if(this.classList.contains('active')){
        multiplier.classList.remove('active');
        divider.classList.remove('active');
        plus.classList.remove('active');
        symbols.push(3);
    }
    if(val==0){
        val=1;
    }
    else {
        val=2;
    }
});
plus.addEventListener('click',function(){
    this.classList.add('active');
    if(this.classList.contains('active')){
        multiplier.classList.remove('active');
        negative.classList.remove('active');
        divider.classList.remove('active');
        symbols.push(4);
    }
    if(val==0){
        val=1;
    }
    else {
        val=2;
    }
});

function catcher(){
    if (val==0){   
    var cal1='';
    
    digits.push(this.value);
    if(digits.length>=1){
        deleter.innerText='C'; 
    }
    if(digits.length>9){
        digits.pop();
    }
    
    for(let i=0; i<digits.length; i++) {
        cal1=cal1+digits[i];
        
        cal1*=1;
        
        numb=cal1;
        print1=new Intl.NumberFormat('de-DE', { maximumSignificantDigits: 6 }).format(numb)
        
      }
      screenSpan.innerText=print1;
      
    }
    else if(val==1){
        var cal2='';
        digit2.push(this.value);
        if(digit2.length>=1){
            deleter.innerText='C'; 
        }
        if(digit2.length>9){
            digit2.pop();
        }
        for(let i=0; i<digit2.length; i++) {
            cal2=cal2+digit2[i];
            cal2*=1;
            numb2=cal2;  
            print2=new Intl.NumberFormat('de-DE', { maximumSignificantDigits: 6 }).format(numb2)    
           
          }
          screenSpan.innerText=print2;
         
    }
    else if(val==2){
        
        numb=resultado;
        var cal3='';
        digit3.push(this.value);
        if(digit3.length>=1){
            deleter.innerText='C'; 
        }
        if(digit3.length>9){
            digit3.pop();
        }
        
        for(let i=0; i<digit3.length; i++) {
            cal3=cal3+digit3[i];
            cal3*=1;
            numb2=cal3;
                  
            print3=new Intl.NumberFormat('de-DE', { maximumSignificantDigits: 6 }).format(numb2)
          }
          screenSpan.innerText=print3;
          
          
    }
    
}

function operation(){
    
    if(this.value==='csymbol'){
        numb=numb*-1
        printe=new Intl.NumberFormat('de-DE', { maximumSignificantDigits: 4 }).format(numb)
        screenSpan.innerText=printe;
        
    }
    else if(this.value==='%'){
        numb=numb/100;
        printe=new Intl.NumberFormat('de-DE', { maximumSignificantDigits: 4 }).format(numb)
        screenSpan.innerText=printe;
       
    }
    else if(symbols.includes(1)===true){
       
        resultado=numb/numb2; 
        resultado=resultado.toPrecision(6);
        printe=new Intl.NumberFormat('de-DE', { maximumSignificantDigits: 4 }).format(resultado)
        screenSpan.innerText=printe
        
        digits=[]
        digit2=[];
        digit3=[];
        symbols=[];
        val=2;
    }
    else if(symbols.includes(2)===true){
        resultado=numb*numb2;
        resultado=resultado.toPrecision(6);
        printe=new Intl.NumberFormat('de-DE', { maximumSignificantDigits: 4 }).format(resultado)
        screenSpan.innerText=printe
        digits=[];
        digit2=[];
        digit3=[];
        symbols=[];
        val=2;
    }
    else if(symbols.includes(3)===true){
        resultado=numb-numb2;
        printe=new Intl.NumberFormat('de-DE', { maximumSignificantDigits: 4 }).format(resultado)
        screenSpan.innerText=printe

        digits=[];
        digit2=[];
        digit3=[];
        symbols=[];
        val=2;
    }
    else if(symbols.includes(4)===true){
        resultado=numb+numb2;
        printe=new Intl.NumberFormat('de-DE', { maximumSignificantDigits: 4 }).format(resultado)
        screenSpan.innerText=printe;

        digits=[]
        digit2=[];
        digit3=[];
        symbols=[];
        val=2;
    }
}

function borrador(){
    deleter.innerText='C';
    digits=[];
    digit2=[];
    digit3=[];
    symbols=[];
    val=0;
    screenSpan.innerText='0';
        plus.classList.remove('active');
        multiplier.classList.remove('active');
        negative.classList.remove('active');
        divider.classList.remove('active');
    if((screenSpan.innerText='0') && (deleter.innerText='C')){
        
        deleter.innerText='AC'
    }
    
}


const conteo=(a) => {
    if (a<0) return
    console.log(a);
    return conteo(a-1)
}