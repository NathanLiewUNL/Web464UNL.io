function contactFormProcess()
{

    var contactFormObj = document.getElementById("classForm");
    if(contactValidate(contactFormObj)){
        alert("An email was sent");
    };
}

function ratingFormProcess(){
    var rateFormObj = document.getElementById("rateForm");
    if(rateValidate(rateFormObj)){
        alert("Thank you for your feedback!");
    };
}

// function showAlert() {
//     alert("Thank you for your feedback");
//   }