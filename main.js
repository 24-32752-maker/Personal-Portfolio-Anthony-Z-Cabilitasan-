(function () {
  const OWNER_EMAIL = "anthony.cabilitasan@example.com";

  const activePage = document.body.dataset.page;
  if (activePage) {
    document.querySelectorAll(".nav-chip[data-nav]").forEach((link) => {
      if (link.dataset.nav === activePage) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!form.reportValidity()) return;

      const email = /** @type {HTMLInputElement} */ (form.elements.namedItem("email")).value.trim();
      const phone = /** @type {HTMLInputElement} */ (form.elements.namedItem("phone")).value.trim();
      const message = /** @type {HTMLTextAreaElement} */ (
        form.elements.namedItem("message")
      ).value.trim();

      const subject = encodeURIComponent("Portfolio contact");
      const body = encodeURIComponent(
        [`From (visitor email): ${email}`, `Phone: ${phone || "—"}`, "", message].join("\n"),
      );
      window.location.href = `mailto:${encodeURIComponent(OWNER_EMAIL)}?subject=${subject}&body=${body}`;
    });
  }
})();
