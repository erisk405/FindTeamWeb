const triggerOpen = document.querySelectorAll('[trigger-button]');
const triggerClose = document.querySelectorAll('[close-button]');
const overlay = document.querySelector('[data-overlay]');

for(let i = 0; i<triggerOpen.length; i++){
    let currentId = triggerOpen[i].dataset.target,
    targetEl = document.querySelector(`#${currentId}`)

    const openData = function(){
        targetEl.classList.remove('active');
        overlay.classList.remove('active');
    };
    triggerOpen[i].addEventListener('click',function(){
        targetEl.classList.add('active');
        overlay.classList.add('active');
    });
    
    targetEl.querySelector('[close-button]').addEventListener('click',openData);
    overlay.addEventListener('click',openData);
}

// button incard
const buttons = document.querySelectorAll(".incard-up-down");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const infoDiv = event.target.closest(".card").querySelector(".container-information");
    infoDiv.classList.toggle("active");
  });
});





// SEARCH BAR JS
const toggleSearch = (search,button) =>{
    const searchBar = document.getElementById(search),
          searchButton = document.getElementById(button);
    searchButton.addEventListener('click', ()=>{
        searchBar.classList.toggle('show-search')
    })
}
toggleSearch('search-bar','search-button')





//mobile-menu submenu
const submenu = document.querySelectorAll('.child-trigger');
submenu.forEach((menu) => menu.addEventListener('click',function(e){
    e.preventDefault();
    submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('active'):null);
    if(this.closest('.has-child').classList != 'active'){
        this.closest('.has-child').classList.toggle('active');
    }

}))






// Animate
const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.intersectionRatio > 0){
            entry.target.classList.add('this')
        }
    })
})
const boxEllist = document.querySelectorAll('.animate');
boxEllist.forEach((el) => {
    io.observe(el)
})





// ScrollTop
window.addEventListener('scroll', e =>{
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px`;
})




// for dropdown

    function show(anything) {
        document.querySelector('.textBox').value = anything;
    }
    function showGender(anything) {
        document.querySelector('.textBox-gender').value = anything;
    }
    function showCountry(anything) {
        document.querySelector('.textBox-country').value = anything;
    }
    function showCountry2(anything) {
        document.querySelector('.textBox-country2').value = anything;
    }
    
      const dropdownGames = document.querySelector('.dropdown-game');
      const dropdownGender = document.querySelector('.dropdown-gender');
      const dropdownCountry = document.querySelector('.dropdown-country');
      const dropdownCountry2 = document.querySelector('.dropdown-country2');
      dropdownGames.onclick = function () {
        dropdownGames.classList.toggle('active');
        dropdownGender.classList.remove('active');
        dropdownCountry.classList.remove('active');
      };
      
      dropdownGender.onclick = function () {
        dropdownGender.classList.toggle('active');
        dropdownGames.classList.remove('active');
        dropdownCountry.classList.remove('active');
      };
      
      dropdownCountry.onclick = function () {
        dropdownCountry.classList.toggle('active');
        dropdownGames.classList.remove('active');
        dropdownGender.classList.remove('active');
      };
      dropdownCountry2.onclick = function () {
        dropdownCountry2.classList.toggle('active');
      };
      


      
//   Input image
const image = document.querySelector(".User-img"),
     input = document.querySelector(".user-input");

input.addEventListener("change", () => {
    image.src = URL.createObjectURL(input.files[0]);
});


// click in tile
function toggleCheckbox(tile) {
    const checkbox = tile.querySelector('input[type="checkbox"]');
    checkbox.checked = !checkbox.checked;
  }
  