// Experimental function to calculated total cost of services.
function calculateTotal() {
    const checkboxes = document.querySelectorAll('input[name="service"]:checked');
    let total = 0;
    checkboxes.forEach((checkbox) => {
        total += parseFloat(checkbox.value);
    });
    document.getElementById('total-cost').textContent = `Total Cost: $${total}`;
}

// Enables the Anfang button if scrolled down a bit.
window.onscroll = function() {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

// Scroll to Top when using this function.
function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}
