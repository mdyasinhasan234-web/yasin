const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const contactForm = document.getElementById("contactForm");

// মোবাইল মেনু চালু ও বন্ধ
menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");

  menuBtn.textContent =
    navMenu.classList.contains("open") ? "✕" : "☰";
});

// মেনু থেকে লিংকে ক্লিক করলে মেনু বন্ধ হবে
document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuBtn.textContent = "☰";
  });
});

// ফুটারে বর্তমান বছর
document.getElementById("year").textContent =
  new Date().getFullYear();

// যোগাযোগ ফর্ম
contactForm.addEventListener("submit", event => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // নিজের সঠিক ইমেইল এখানে বসাবে
  const recipient = "your-email@example.com";

  const subject = encodeURIComponent(
    "ওয়েবসাইট থেকে মেসেজ: " + name
  );

  const body = encodeURIComponent(
    "নাম: " + name +
    "\nইমেইল: " + email +
    "\n\nমেসেজ:\n" + message
  );

  window.location.href =
    mailto:${recipient}?subject=${subject}&body=${body};
});