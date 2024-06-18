import {
  acodeDes,
  gitDes,
  termuxDes,
  spckDes
} from "./des.js"

const acode = document.getElementById("acode");
acode.textContent = acodeDes

const github = document.getElementById("github");
github.textContent = gitDes

const termux = document.getElementById("termux");
termux.textContent = termuxDes

const spck = document.getElementById("spck");
spck.textContent = spckDes