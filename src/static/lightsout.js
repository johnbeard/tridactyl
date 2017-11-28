/*jshint esversion: 6 */

(function () {
  'use strict';

  const DARKMODE_LOCALSTORAGE_KEY = 'tridactyl_theme_name';
  const DARKMODE_CSS_CLASS = "darktheme";

  function setDarkMode(dark) {
    document.body.classList.toggle(DARKMODE_CSS_CLASS, dark);
  }

  function isDarkMode() {
    return document.body.classList.contains(DARKMODE_CSS_CLASS);
  }

  function toggleLightSwitch() {
    let newDark = !isDarkMode();
    setDarkMode(newDark);
    saveStoredDarkMode(newDark);
  }

  function getPreviousDarkMode() {
    return (localStorage.getItem(DARKMODE_LOCALSTORAGE_KEY) === "dark") ? true : false;
  }

  function saveStoredDarkMode(dark) {
    localStorage.setItem(DARKMODE_LOCALSTORAGE_KEY, dark ? "dark" : "light");
  }

  document.getElementById("lightswitch")
    .addEventListener("click", toggleLightSwitch);

  // load from storage
  setDarkMode(getPreviousDarkMode());

}());
