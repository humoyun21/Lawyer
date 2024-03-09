"use strict";

const togle_menu = $("#togle_menu");
const menu_btn = $("#menu_btn");
const close_btn = $("#close_btn");

menu_btn.addEventListener("click", () => {
  togle_menu.classList.toggle("togle");
});

close_btn.addEventListener("click", () => {
  togle_menu.classList.toggle("togle");
});
