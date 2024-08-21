const scriptURL =                       
"https://script.google.com/macros/s/AKfycbwkUJLRaiedLlSaizPmb18Ufok92vhTVF8B7M6FQA4daIxJXH0GYcsVQawpw9sI-amN/exec";

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