const menuFeature=document.querySelector('.menuFeature');
const menuActivatorF=document.querySelector('.menuActivatorF');

const menuCompany=document.querySelector('.menuCompany');
const menuActivatorC=document.querySelector('.menuActivatorC');

const changeArrow=document.querySelector('.changeArrow');
const changeArrow2=document.querySelector('.changeArrow2');

const mobileFeaturer=document.querySelector('.mobileFeature');
const changeArrow3=document.querySelector('.changeArrow3');
const childMenu1=document.querySelector('.childMenu1');
const mobileCompany=document.querySelector('.mobileCompany');
const changeArrow4=document.querySelector('.changeArrow4');
const childMenu2=document.querySelector('.childMenu2');

const hamburgerMenu=document.querySelector('.hamburgerMenu');
const menuMobile=document.querySelector('.menuMobile');
const closeMenuButton=document.querySelector('.closeMenuButton');

hamburgerMenu.addEventListener('click', mobileHamburgerMenu);
closeMenuButton.addEventListener('click', closemenu);


menuActivatorF.addEventListener('click', toggleMenuFeature);
menuActivatorC.addEventListener('click', toggleMenuCompany);


mobileFeaturer.addEventListener('click' ,mobileMenuFeature);
mobileCompany.addEventListener('click', mobileMenuCompany);

function toggleMenuFeature(){
    menuFeature.classList.toggle('inactive');
    
    
    if(menuFeature.classList.contains('inactive')){
        changeArrow.src="./images/icon-arrow-down.svg";
        console.log('si se activa');
        
    }
    else{
        console.log('si se activa2');
        changeArrow.src="./images/icon-arrow-up.svg";
    }
    
    
}

function toggleMenuCompany(){
    menuCompany.classList.toggle('inactive');
    if(menuCompany.classList.contains('inactive')){
        changeArrow2.src="./images/icon-arrow-down.svg";
        console.log('si se activa');
        
    }
    else{
        console.log('si se activa2');
        changeArrow2.src="./images/icon-arrow-up.svg";
    }
}


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
function mobileHamburgerMenu(){
    hamburgerMenu.style.display="none";

    if(hamburgerMenu.style.display="none"){
        menuMobile.style.display="block";
    }
}

function closemenu(){
    menuMobile.style.display="none";
    if(menuMobile.style.display="none"){
        hamburgerMenu.style.display="block";
    }
}