// var $grid = $('.Isotope_items').isotope({
//     filter: '.saas'
// });

// $('.filter-button-group').on( 'click', 'button', function() {
//   var filterValue = $(this).attr('data-filter');
//   $grid.isotope({
//     filter: filterValue 
//   });
// });



// ----- ****** ------

// Butons Group
let IsotopeBtn = document.querySelectorAll('.Isotope_buttons');
// Items
let youtube = document.querySelectorAll('.youtube');
let short = document.querySelectorAll('.short');
let saas = document.querySelectorAll('.saas');
let creative = document.querySelectorAll('.creative');
// Hide Function
function hideYoutube(){
  youtube.forEach((event)=>{
    event.classList.add('d-none')
  })
};
function hideShort(){
  short.forEach((event)=>{
    event.classList.add('d-none')
  })
};
function hideSaas(){
  saas.forEach((event)=>{
    event.classList.add('d-none')
  })
};
function hideCreative(){
  creative.forEach((event)=>{
    event.classList.add('d-none')
  })
};
// Show Function
function showYoutube(){
  youtube.forEach((event)=>{
    event.classList.remove('d-none')
  })
};
function showShort(){
  short.forEach((event)=>{
    event.classList.remove('d-none')
  })
};
function showSaas(){
  saas.forEach((event)=>{
    event.classList.remove('d-none')
  })
};
function showCreative(){
  creative.forEach((event)=>{
    event.classList.remove('d-none')
  })
};
hideYoutube();
hideShort();
hideCreative();
IsotopeBtn.forEach((event)=>{
  event.addEventListener('click',()=>{ 
    if(event.value == "youtube"){
      showYoutube();
      hideShort();
      hideSaas();
      hideCreative();
      
    }
    else if(event.value == "short"){
      showShort();

      hideYoutube();
      hideSaas();
      hideCreative();
      
    }
    else if(event.value == "saas"){
      showSaas();

      hideYoutube();
      hideShort();
      hideCreative();
      
    }
    else if(event.value == "creative"){
      showCreative();

      hideYoutube();
      hideShort();
      hideSaas();
    }
    else{
      showSaas();

      hideYoutube();
      hideShort();
      hideCreative();
    }
  })
})