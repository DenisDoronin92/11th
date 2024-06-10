let b = new Set();
let c = document.querySelector(".btn");
let d = document.querySelector(".inputin");
let e = document.querySelector(".btn2");
let f = document.querySelector(".inputin2");
let g = document.querySelector(".result");
let l = document.querySelector(".btn3");

b.add("e");
b.add("r");
b.add("i");
b.add("k");
b.add("t");
b.add("h");
b.add("e");
b.add("b");
b.add("e");
b.add("s");
b.add("t");
c.onclick = function () {
  b.add(d.value);
  return;
};

console.log(b);

e.onclick = function () {
  g.innerHTML = b.has(f.value);
};

let h = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

l.onclick = function () {
  for (let i of h) {
    if (i >= 5) {
      console.log(i);
    }
  }
};
