const toggleTheme = document.getElementById("darkModeIcon");
const git=document.querySelector('.git');
const front=document.querySelector('.front');
const linked=document.querySelector('.linked');
const email=document.querySelector('.email');
const git2=document.querySelector('.git2');
const front2=document.querySelector('.front2');
const linked2=document.querySelector('.linked2');
const email2=document.querySelector('.email2');
const profile=document.querySelector('#profilePic')
const github=document.querySelector('#github')
const wordpres=document.querySelector('#wordpress')


    toggleTheme.addEventListener("click", () => {
        document.body.classList.toggle("lightMode")
        if (document.body.classList.contains("lightMode")){
            toggleTheme.src='./assets/dark_mode.svg' 
            toggleTheme.classList.remove('filter')
            git.classList.remove('filter')
            front.classList.remove('filter')
            linked.classList.remove('filter')
            email.classList.remove('filter')
            git2.classList.remove('filter')
            front2.classList.remove('filter')
            linked2.classList.remove('filter')
            email2.classList.remove('filter')
            profile.classList.remove('filterImg')
            github.style.filter= 'none'
            wordpres.style.filter='none'

        } else  {
            toggleTheme.src='./assets/light_mode.svg' 
            toggleTheme.classList.add('filter')
            git.classList.add('filter')
            front.classList.add('filter')
            linked.classList.add('filter')
            email.classList.add('filter')
            git2.classList.add('filter')
            front2.classList.add('filter')
            linked2.classList.add('filter')
            email2.classList.add('filter')
            profile.classList.add('filterImg')
            github.style.filter='invert(1)'
            wordpres.style.filter='invert(1)'
           
        }
        
    })