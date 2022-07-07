let jsTriggers = document.querySelectorAll('.item_tab');
const buttonPopup = document.querySelectorAll('.read_more')
const popup = document.querySelector('.popup_overlay')
const closePopup = document.querySelector('.close_popup')
const mobileButton = document.querySelector('.phone_menu')
const navigation = document.querySelector('.mobile_navigation')
const closeMobile = document.querySelector('.closeMobile')

jsTriggers.forEach(function(trigger) {
   trigger.addEventListener('click', function() {

      let id = this.getAttribute('data-tab'),
          content = document.querySelector('.accordion_item[data-tab="'+id+'"]'),
          activeTrigger = document.querySelector('.item_tab.active_tab'),
          activeContent = document.querySelector('.accordion_item.active_tab');
      
      activeTrigger.classList.remove('active_tab');
      trigger.classList.add('active_tab');
              
      activeContent.classList.remove('active_tab');
      content.classList.add('active_tab');

   });
});


function getPopup(){
   for(const button of buttonPopup){
      button.addEventListener('click', function(){
         popup.classList.add('open');
         
      })
   }
   closePopup.addEventListener('click', function(){
      popup.classList.remove('open');
   })


}
getPopup()

function mobileMenu(){
   mobileButton.addEventListener('click', function(){
      navigation.classList.add('active')
   })
   closeMobile.addEventListener('click', function(){
      navigation.classList.remove('active')
   })
}
mobileMenu()