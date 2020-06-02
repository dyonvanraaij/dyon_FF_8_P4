text1 = "";
a = 1;

while (a < 8) {
  text1 += "#";
  a++;
  console.log(text1);
}


text2 = "";
b = 1;
do {
  text2 += "#";
  b++;
  console.log(text2);
} while (b < 8);


text3 = "";
for (var c = 1; c < 8; c++) {
  text3 += "#";
  console.log(text3);
}
