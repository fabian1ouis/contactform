const form = document.querySelector("#contact-form");
const toast = document.createElement("div");
toast.classList.add("toast");
toast.textContent = "✅ Message Sent! Thanks for completing the form. We'll be in touch soon!";
document.body.appendChild(toast);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isValid = true;
  document.querySelectorAll(".error-message").forEach(msg => msg.textContent = "");

  const textFields = ["first-name", "last-name", "email", "message"];
  textFields.forEach(id => {
    const field = document.getElementById(id);
    const error = document.getElementById(`${id}-error`);
    if (field.value.trim() === "") {
      error.textContent = "This field is required";
      isValid = false;
    } else if (id === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
      error.textContent = "Please enter a valid email address";
      isValid = false;
    }
  });

  const queryRadios = document.querySelectorAll("input[name='query-type']");
  const queryError = document.getElementById("query-error");
  if (![...queryRadios].some(r => r.checked)) {
    queryError.textContent = "Please select a query type";
    isValid = false;
  }

  const consent = document.getElementById("consent");
  const consentError = document.getElementById("consent-error");
  if (!consent.checked) {
    consentError.textContent = "To submit this form, please consent to being contacted";
    isValid = false;
  }

  if (isValid) {
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 4000);
    form.reset();
  }
});
