// Dark / Light Mode Toggle
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){
        themeBtn.textContent = "☀";
    }
    else{
        themeBtn.textContent = "☾";
    }
});


// Contact Form Validation
const form = document.getElementById("form");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const inputs = form.querySelectorAll("input, textarea");

    let empty = false;

    inputs.forEach(input => {
        if(input.value.trim() === ""){
            empty = true;
        }
    });


    if(empty){
        alert("Please complete all fields.");
    }
    else{
        alert("Thank you! Your message has been submitted successfully.");
        form.reset();
    }

});
