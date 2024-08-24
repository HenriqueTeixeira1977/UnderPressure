const scriptURL =                       
"https://script.google.com/macros/s/AKfycbyFBPro3f4ifW461zV1uS34HLsgaGTLNp7jKWDsZ4sFFaCFI98bkFQi8X5Wg5BuR2Csgg/exec";

const form = document.forms["submit-to-google-sheet"];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  var formData = new FormData(form);
  var terms = document.getElementById("terms").checked;
  var age = document.getElementById("age").checked;

  if (age) {
    formData.append("age", "Yes");
  } else {
    formData.append("age", "No");
  }
  if (terms) {
    formData.append("terms", "Yes");
  } else {
    formData.append("terms", "No");
  }

  fetch(scriptURL, { method: "POST", body: formData })
    .then((response) => {
      swal("Done", "Submitted Successfully.", "success");
    })
    .catch((error) => {
      swal("Error", "Something went wrong. please try again!", "error");
    });
});