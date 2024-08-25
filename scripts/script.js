// Function to calculate total cost of selected services
function calculateTotal() {
    const checkboxes = document.querySelectorAll('input[name="service"]:checked');
    let total = 0;
    checkboxes.forEach((checkbox) => {
        total += parseFloat(checkbox.value);
    });
    document.getElementById('total-cost').textContent = `Total Cost: $${total}`;
}

// Scroll to Top functionality
window.onscroll = function() {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

// Scroll to Top functionality
function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

const testFun = () => {
    alert("test function")
}