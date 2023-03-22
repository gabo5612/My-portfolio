const mobileFeaturer=document.querySelector('.mobileFeature');
const changeArrow3=document.querySelector('.changeArrow3');
const childMenu1=document.querySelector('.childMenu1');
const mobileCompany=document.querySelector('.mobileCompany');
const changeArrow4=document.querySelector('.changeArrow4');
const childMenu2=document.querySelector('.childMenu2');


mobileFeaturer.addEventListener('click' ,mobileMenuFeature);
mobileCompany.addEventListener('click', mobileMenuCompany);

function mobileMenuFeature(){
    console.log('funcionando');
    mobileFeaturer.classList.toggle('mobileFeaturePush');
    
    
    
    if(mobileFeaturer.classList.contains('mobileFeaturePush')){
        changeArrow3.src="./images/icon-arrow-up.svg";
        childMenu1.style.display="block";
        console.log('si se activa');
       ambosmenus();
        
    }
    else{
        console.log('si se activa2');
        childMenu1.style.display="none";
        changeArrow3.src="./images/icon-arrow-down.svg";
        childMenu2.classList.remove('espcialpush');
        childMenu2.classList.add('mobileCompanyPush');
    }
}

function mobileMenuCompany(){
    mobileCompany.classList.toggle('mobileCompanyPush');
    console.log('funcionando2');
    if(mobileCompany.classList.contains('mobileCompanyPush')){
        changeArrow4.src="./images/icon-arrow-up.svg";
        childMenu2.style.display="block";
        console.log('si se activa');
        ambosmenus();
    }
    else{
        console.log('si se activa2');
        childMenu2.style.display="none";
        changeArrow4.src="./images/icon-arrow-down.svg";
        
    }
}

function ambosmenus(){
    
    if(mobileFeaturer.classList.contains('mobileFeaturePush') && mobileCompany.classList.contains('mobileCompanyPush')){
        childMenu2.classList.remove('mobileCompanyPush');
        childMenu2.classList.add('espcialpush');
        console.log('si activa  la condicional');
    }
    else{
        mobileCompany();
        mobileMenuFeature();
    }
}