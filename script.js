// 1-ci sual
// const let - block scope elementler ve yaxud da statementler
// const let arasinda oxshar cehet:
// her ikisini yeniden teyin etmek olmur
//const ve let-in ferqli ceheti
// obyekt 2 hisseden ibaretdir 1-ci key , 2-ci value
//melumatlar bazasinda acar soz deyisilmir

const siyahi = ["paper.png","scissors.png","rock.png"]
//consol.log(typeof siyahi) //object
siyahi[0]
 

const k = document.getElementById('paper')
const qayci = document.getElementById('scissors')
const das = document.getElementById('rock')
 const komputerinSecimi = document.getElementById('komputer-secim')
 const neticeDivi = document.querySelector('#netice')


k.addEventListener('click', seciminiEt)
qayci.addEventListener('click', seciminiEt)
das.addEventListener('click', seciminiEt)
function seciminiEt() {
const komputerinQerari = randomSeciminiEt
const menimQerarim = this.dataset.id
let netice = ''
netice = "Try again"
if (menimQerarim==komputerinQerari) {}
else if (menimQerarim == 0 && komputerinQerari==1) {
    netice = "You lose Scissors cut paper"
}
else {

}

}
function randomSeciminiEt(){
    const number = Math.raund(Math.random()*2)
    komputerinSecimi.src = `./images/${siyahi[number]}`
    return number 
    //siyahi[0]

}