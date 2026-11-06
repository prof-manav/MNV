(function () {
  "use strict";

  var root = document.documentElement;
  var pages = Array.prototype.slice.call(document.querySelectorAll(".page"));
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".site-nav a"));
  var homePage = document.querySelector('.page[data-page="home"]');
  var firstRoute = true;

  // ---------- Hash routing ----------
  // "#research" shows a page; "#fanformer" shows the page that contains
  // that element and scrolls to it, so old deep links keep working.
  function resolve(hash) {
    var id = hash || "home";
    var page = null;
    var anchor = null;

    pages.forEach(function (p) {
      if (p.dataset.page === id) page = p;
    });

    if (!page) {
      anchor = document.getElementById(id);
      page = anchor ? anchor.closest(".page") : null;
      if (!page) anchor = null;
    }

    return { page: page || homePage, anchor: anchor };
  }

  function route() {
    var hash = "";
    try { hash = decodeURIComponent(location.hash.slice(1)); } catch (e) {}
    var target = resolve(hash);
    var name = target.page.dataset.page;

    pages.forEach(function (p) {
      p.classList.toggle("active", p === target.page);
    });

    navLinks.forEach(function (link) {
      var isActive = link.getAttribute("href") === "#" + name;
      link.classList.toggle("active", isActive);
      if (isActive) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });

    var title = target.page.querySelector(".page-title");
    document.title = name === "home" || !title
      ? "Muktinath Vishwakarma"
      : title.textContent + " — Muktinath Vishwakarma";

    if (target.anchor) {
      requestAnimationFrame(function () {
        target.anchor.scrollIntoView({ block: "start" });
      });
    } else {
      window.scrollTo(0, 0);
      // Move focus to the new page's heading for keyboard and screen-reader users.
      if (!firstRoute && title) title.focus({ preventScroll: true });
    }

    firstRoute = false;
  }

  window.addEventListener("hashchange", route);
  route();

  // ---------- Paper / Code / Data buttons ----------
  // Filled links open in a new tab; empty ones become non-focusable "soon" placeholders.
  document.querySelectorAll(".pub-link").forEach(function (link) {
    var href = (link.getAttribute("href") || "").trim();
    if (!href || href === "#") {
      link.removeAttribute("href");
      link.classList.add("is-empty");
      link.setAttribute("aria-disabled", "true");
      link.title = link.textContent.trim() + " link coming soon";
    } else {
      link.target = "_blank";
      link.rel = "noopener";
    }
  });

  // ---------- Scroll cues ----------
  document.querySelectorAll(".scroll-cue").forEach(function (cue) {
    cue.addEventListener("click", function () {
      var el = document.getElementById(cue.dataset.target);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    });
  });

  // ---------- Theme toggle ----------
  var themeToggle = document.querySelector(".theme-toggle");

  function applyTheme(theme) {
    root.dataset.theme = theme;
    var toLight = theme !== "light";
    themeToggle.textContent = toLight ? "☀︎ Light mode" : "☾ Dark mode";
    themeToggle.setAttribute("aria-label", toLight ? "Switch to light mode" : "Switch to dark mode");
  }

  if (themeToggle) {
    themeToggle.hidden = false;
    applyTheme(root.dataset.theme === "light" ? "light" : "dark");
    themeToggle.addEventListener("click", function () {
      var next = root.dataset.theme === "light" ? "dark" : "light";
      applyTheme(next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  // ---------- Footer year ----------
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
