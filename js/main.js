(function () {
  "use strict";

  /* ---------------------------------------------------------------------
   * Sticky header shadow on scroll
   * ------------------------------------------------------------------- */
  var header = document.getElementById("header");
  function onScrollHeader() {
    if (window.scrollY > 12) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  }
  onScrollHeader();
  window.addEventListener("scroll", onScrollHeader, { passive: true });

  /* ---------------------------------------------------------------------
   * Mobile navigation panel
   * ------------------------------------------------------------------- */
  var burgerBtn = document.getElementById("burgerBtn");
  var navMobile = document.getElementById("navMobile");
  var navMobileClose = document.getElementById("navMobileClose");
  var navMobileLinks = document.querySelectorAll(".nav-mobile-link");

  function openMobileNav() {
    navMobile.classList.add("is-open");
    burgerBtn.classList.add("is-active");
    burgerBtn.setAttribute("aria-expanded", "true");
    document.body.classList.add("nav-open");
  }

  function closeMobileNav() {
    navMobile.classList.remove("is-open");
    burgerBtn.classList.remove("is-active");
    burgerBtn.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
  }

  burgerBtn.addEventListener("click", function () {
    if (navMobile.classList.contains("is-open")) {
      closeMobileNav();
    } else {
      openMobileNav();
    }
  });

  navMobileClose.addEventListener("click", closeMobileNav);
  navMobileLinks.forEach(function (link) {
    link.addEventListener("click", closeMobileNav);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && navMobile.classList.contains("is-open")) {
      closeMobileNav();
    }
  });

  /* ---------------------------------------------------------------------
   * Scroll reveal animations
   * ------------------------------------------------------------------- */
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealEls = document.querySelectorAll(".reveal");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  } else {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) {
      revealObserver.observe(el);
    });
  }

  /* ---------------------------------------------------------------------
   * Footer dynamic year
   * ------------------------------------------------------------------- */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ---------------------------------------------------------------------
   * Opening hours — highlight current day
   * ------------------------------------------------------------------- */
  var hoursTable = document.getElementById("hoursTable");
  if (hoursTable) {
    var today = new Date().getDay(); // 0 = Sunday ... 6 = Saturday
    var row = hoursTable.querySelector('tr[data-day="' + today + '"]');
    if (row) {
      row.classList.add("is-today");
    }
  }

  /* ---------------------------------------------------------------------
   * Gallery slider — arrows + progress bar
   * ------------------------------------------------------------------- */
  var galleryTrack = document.getElementById("galleryGrid");
  var galleryPrev = document.getElementById("galleryPrev");
  var galleryNext = document.getElementById("galleryNext");
  var galleryProgressBar = document.getElementById("galleryProgressBar");

  if (galleryTrack && galleryPrev && galleryNext) {
    function scrollGalleryBy(direction) {
      var item = galleryTrack.querySelector(".gallery__item");
      if (!item) return;
      var gap = parseFloat(getComputedStyle(galleryTrack).gap) || 20;
      var distance = item.getBoundingClientRect().width + gap;
      galleryTrack.scrollBy({ left: direction * distance, behavior: "smooth" });
    }

    galleryPrev.addEventListener("click", function () {
      scrollGalleryBy(-1);
    });
    galleryNext.addEventListener("click", function () {
      scrollGalleryBy(1);
    });

    function updateGalleryProgress() {
      if (!galleryProgressBar) return;
      var maxScroll = galleryTrack.scrollWidth - galleryTrack.clientWidth;
      var ratio = maxScroll > 0 ? galleryTrack.scrollLeft / maxScroll : 0;
      var itemCount = galleryTrack.querySelectorAll(".gallery__item").length || 1;
      var barWidth = Math.max(100 / itemCount, 8);
      var left = ratio * (100 - barWidth);
      galleryProgressBar.style.width = barWidth + "%";
      galleryProgressBar.style.left = left + "%";
    }
    updateGalleryProgress();
    galleryTrack.addEventListener("scroll", updateGalleryProgress, { passive: true });
    window.addEventListener("resize", updateGalleryProgress);
  }

  /* ---------------------------------------------------------------------
   * Gallery lightbox
   * ------------------------------------------------------------------- */
  var galleryItems = Array.prototype.slice.call(document.querySelectorAll(".gallery__item"));
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightboxImg");
  var lightboxCaption = document.getElementById("lightboxCaption");
  var lightboxClose = document.getElementById("lightboxClose");
  var lightboxPrev = document.getElementById("lightboxPrev");
  var lightboxNext = document.getElementById("lightboxNext");
  var currentIndex = 0;
  var lastFocusedEl = null;

  function showImage(index) {
    if (index < 0) index = galleryItems.length - 1;
    if (index >= galleryItems.length) index = 0;
    currentIndex = index;
    var item = galleryItems[currentIndex];
    var full = item.getAttribute("data-full");
    var caption = item.getAttribute("data-caption") || "";
    var altText = item.querySelector("img").getAttribute("alt");
    lightboxImg.src = full;
    lightboxImg.alt = altText;
    lightboxCaption.textContent = caption;
  }

  function openLightbox(index) {
    lastFocusedEl = document.activeElement;
    showImage(index);
    lightbox.classList.add("is-open");
    document.body.classList.add("nav-open");
    lightboxClose.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    document.body.classList.remove("nav-open");
    if (lastFocusedEl) {
      lastFocusedEl.focus();
    }
  }

  galleryItems.forEach(function (item, index) {
    item.addEventListener("click", function () {
      openLightbox(index);
    });
    item.setAttribute("tabindex", "0");
    item.setAttribute("role", "button");
    item.setAttribute("aria-label", "Agrandir la photo");
    item.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openLightbox(index);
      }
    });
  });

  lightboxClose.addEventListener("click", closeLightbox);
  lightboxPrev.addEventListener("click", function () {
    showImage(currentIndex - 1);
  });
  lightboxNext.addEventListener("click", function () {
    showImage(currentIndex + 1);
  });

  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (!lightbox.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") showImage(currentIndex - 1);
    if (e.key === "ArrowRight") showImage(currentIndex + 1);
  });

  // Touch swipe support
  var touchStartX = 0;
  var touchEndX = 0;
  lightbox.addEventListener("touchstart", function (e) {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });
  lightbox.addEventListener("touchend", function (e) {
    touchEndX = e.changedTouches[0].screenX;
    var delta = touchEndX - touchStartX;
    if (Math.abs(delta) > 40) {
      if (delta < 0) {
        showImage(currentIndex + 1);
      } else {
        showImage(currentIndex - 1);
      }
    }
  }, { passive: true });

  /* ---------------------------------------------------------------------
   * File input — show selected file names
   * ------------------------------------------------------------------- */
  var filesInput = document.getElementById("files");
  var fileList = document.getElementById("fileList");
  if (filesInput) {
    filesInput.addEventListener("change", function () {
      if (filesInput.files.length === 0) {
        fileList.textContent = "";
        return;
      }
      var names = Array.prototype.map.call(filesInput.files, function (f) {
        return f.name;
      });
      fileList.textContent = names.length + " fichier(s) sélectionné(s) : " + names.join(", ");
    });
  }

  /* ---------------------------------------------------------------------
   * Quote form — client-side validation + mailto handoff
   * (No backend is configured: we never fake a "sent" confirmation.
   *  Instead we open the visitor's mail client with a pre-filled email.)
   * ------------------------------------------------------------------- */
  var form = document.getElementById("quoteForm");
  var feedback = document.getElementById("formFeedback");

  function setFieldError(input, hasError) {
    var group = input.closest(".form-group");
    if (!group) return;
    group.classList.toggle("has-error", hasError);
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function isValidPhone(value) {
    var digits = value.replace(/[\s().-]/g, "");
    return /^\+?[0-9]{9,13}$/.test(digits);
  }

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var fullName = document.getElementById("fullName");
      var phone = document.getElementById("phone");
      var email = document.getElementById("email");
      var location = document.getElementById("location");
      var message = document.getElementById("message");
      var projectType = document.getElementById("projectType");
      var company = document.getElementById("company");

      var valid = true;

      [fullName, phone, email, location, message].forEach(function (input) {
        setFieldError(input, false);
      });

      if (!fullName.value.trim()) {
        setFieldError(fullName, true);
        valid = false;
      }
      if (!phone.value.trim() || !isValidPhone(phone.value)) {
        setFieldError(phone, true);
        valid = false;
      }
      if (!email.value.trim() || !isValidEmail(email.value)) {
        setFieldError(email, true);
        valid = false;
      }
      if (!location.value.trim()) {
        setFieldError(location, true);
        valid = false;
      }
      if (!message.value.trim()) {
        setFieldError(message, true);
        valid = false;
      }

      feedback.classList.remove("is-visible", "is-success", "is-error");

      if (!valid) {
        feedback.textContent = "Merci de corriger les champs indiqués ci-dessus avant d'envoyer votre demande.";
        feedback.classList.add("is-visible", "is-error");
        return;
      }

      var lines = [
        "Nouvelle demande de devis — GUTA Chapes SA",
        "",
        "Nom et prénom : " + fullName.value.trim(),
        "Société : " + (company.value.trim() || "-"),
        "Téléphone : " + phone.value.trim(),
        "E-mail : " + email.value.trim(),
        "Localité du chantier : " + location.value.trim(),
        "Type de projet : " + (projectType.value || "-"),
        "",
        "Message :",
        message.value.trim()
      ];

      if (filesInput && filesInput.files.length > 0) {
        var names = Array.prototype.map.call(filesInput.files, function (f) {
          return f.name;
        });
        lines.push("", "Fichiers à joindre manuellement : " + names.join(", "));
      }

      var subject = encodeURIComponent("Demande de devis — " + fullName.value.trim());
      var body = encodeURIComponent(lines.join("\n"));
      var mailtoUrl = "mailto:info@gutachapes.ch?subject=" + subject + "&body=" + body;

      feedback.textContent = "Votre messagerie va s'ouvrir avec les informations pré-remplies. Merci de vérifier le message puis de l'envoyer" + (filesInput && filesInput.files.length > 0 ? " en joignant vos fichiers manuellement" : "") + ".";
      feedback.classList.add("is-visible", "is-success");

      window.location.href = mailtoUrl;
    });
  }
})();
