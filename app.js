const writing = document.querySelectorAll("#main-text path");

for (let i = 0; i < writing.length; i++) {
  console.log(`Letter ${i} is ${writing[i].getTotalLength()}`);
}
