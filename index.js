let img=["c1.jpg","c2.jpg","c3.jpg","c4.jpg","c5.jpg","c6.jpg"]
let imgr=document.querySelector(".cours img")
let dotr=document.querySelectorAll(".dotcon i")
let i=0
function fwd()
{
  dotr[i].className="fa-regular fa-circle"
  i=(i+1)%6
  dotr[i].className="fa-solid fa-circle"
  imgr.src=img[i]
}
function bkw(){
  dotr[i].className="fa-regular fa-circle"
  i--
  if(i==-1)
  {
    i=5
  }
  imgr.src=img[i]
  dotr[i].className="fa-solid fa-circle"
}
function seti(ind)
{
  dotr[i].className="fa-regular fa-circle"
  i=ind
  dotr[i].className="fa-solid fa-circle"
  imgr.src=img[i]
}
setInterval(fwd,5000)

const quick_enquiry_btn = document.querySelector(".quick_enquiry_btn");
const wrapper = document.querySelector('.wrapper');
const closeBtn = document.querySelector('.btn-close');
quick_enquiry_btn.addEventListener('click',(e)=>{
    e.preventDefault();
    wrapper.classList.add('change');})
closeBtn.addEventListener('click',()=>
{
    wrapper.classList.remove('change');
})

