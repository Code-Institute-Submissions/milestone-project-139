function sendMail(contactForm) {
    emailjs.send("Katya Cano", "Project2 Template", {
        "from_name": contactForm.fName.value,
        "from_lastname": contactForm.lName.value,
        "from_about": contactForm.inputAbout.value,
        "from_email": contactForm.inputEmail.value,
        "from_type": contactForm.inputType.value,
        "from_beds": contactForm.inputBeds.value,
        "from_baths": contactForm.inputBaths.value,
        "from_telephone": contactForm.inputTel.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        });
        return false;
}
