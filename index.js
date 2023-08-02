const modal = document.getElementById('modal')
//console.log(modal);
const  closeBtn = document.getElementById('modal-close-btn')
//console.log(closeBtn);
const consentForm = document.getElementById('consent-form')
//console.log(form)
const modalText= document.getElementById('modal-text')
//console.log(modalText);





setTimeout(function(){
    modal.style.display= 'inline'
}, 1500)

closeBtn.addEventListener('click', function(){
modal.style.display='none';

})

consentForm.addEventListener('submit', function(e){
   e.preventDefault()
  
   const consentFormData = new FormData(consentForm)
   const fullName= consentFormData.get('fullName')
   const email= consentFormData.get('email')
   console.log(fullName,email)
   
  


  modalText.innerHTML=`<div class="modal-inner-loading">
                       <img src="images/loading.svg" class="loading">
                       <p id="upload-text">
                       Uploading your data to the dark web...
                       </p>
                       </div>`
setTimeout(function(){
  const uploadText=document.getElementById('upload-text')
  uploadText.innerText=`Making the sale...`}
,1500 )

setTimeout(function(){
  document.getElementById('modal-inner').innerHTML= 
                      `<h2>Thanks <span class="modal-display-name"> ${fullName}</span>, you sucker!</h2>
                       <p>We just sold the rights to your eternal soul.</p>
                       <div class="idiot-gif">
                       <img src="images/pirate.gif">
                       </div>`
  closeBtn.disabled=false;
                     
},3000)



})



    