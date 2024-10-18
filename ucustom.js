document.querySelectorAll('.faq_question').forEach((accSection) => {
    const accHeader = accSection.querySelector('.faq_head');
    const accBody = accSection.querySelector('.faq_text');
    const accContent = accSection.querySelector('.faq_text > *');
    
    accHeader.addEventListener('click', () => {
        accSection.classList.toggle("opened");
        
        if ( accSection.classList.contains("opened") ) {
            accBody.style.maxHeight = `${accContent.clientHeight}px`;
        } else {
            accBody.style.maxHeight = "0px";
        }
    })
});


const bannerItems = document.querySelectorAll('.custom_1_img');
let currentBannerIndex = 0;

function showBanner(index) {
for (let i = 0; i < bannerItems.length; i++) {
bannerItems[i].style.opacity = 0;
}
bannerItems[index].style.opacity = 1;
}

function nextBanner() {
currentBannerIndex = (currentBannerIndex + 1) % bannerItems.length;
showBanner(currentBannerIndex);
}

function prevBanner() {
currentBannerIndex = (currentBannerIndex - 1 + bannerItems.length) % bannerItems.length;
showBanner(currentBannerIndex);
}

document.addEventListener('DOMContentLoaded', function() {
showBanner(currentBannerIndex);
setInterval(nextBanner, 5000);
});