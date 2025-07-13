const reference = {
    hamburgerRef: {
        hamburgerBtn: document.querySelector(".global-hamburger-btn")
    },
    mobileNavModalRef : {
        mobileNavContainer : document.querySelector('#navigation-modal-container')
    }
};

reference.hamburgerRef.hamburgerBtn.addEventListener("click", () => {
    reference.hamburgerRef.hamburgerBtn.classList.toggle("expand");
});



reference.mobileNavModalRef.mobileNavContainer.addEventListener('toggle', () => {
    if(!reference.mobileNavModalRef.mobileNavContainer.matches(':popover-open') && reference.hamburgerRef.hamburgerBtn.classList.contains("expand")) {
        console.log("triggered")
        reference.hamburgerRef.hamburgerBtn.classList.toggle("expand");
    }
});