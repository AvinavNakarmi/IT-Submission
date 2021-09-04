var images = new Array();
images = ["../Images/salmon2.jpg", "../Images/pancakes.jpg", "../Images/pie1.jpg"];
var recipie = new Array();
recipie = ["Maple Glazed Salmon Fillet", "Pancakes", "Grape Pie"];

var directed = new Array();
directed = ["recipe.html", "recipe2.html", "recipe3.html"];
var step = 0;
var discription = new Array();
discription = [
  "Here the salmon is cooked on a griddle or frying pan but works just as well when cooked on the grill, as long as the coal or flame is not too high. If the flame is too high, you will run the risk of burning the sweet glaze of the fish. You can serve it with rice and fresh veggies or mix it in with some salad.",
  "This recipe makes perfect pancakes with just a few simple ingredients. They are sure to be a family favorite, and kids will love helping make their breakfast. Flavorful and light, these pancakes are cheaper to make than buying a pre-made mix and don't have any hidden preservatives and stabilizers—plus.",
  "Grape pie is a deliciously juicy, sweet, and tart pie. It has a beautiful, rich purple color and the texture is similar to blueberry pie. It’s the perfect pie to enjoy when grapes are freshly picked in season, which is usually late summer to early fall. But you can enjoy this pie anytime of year.",
];
var pics=new Array();
pics=["../Images/salmon.jpg","../Images/fish.jpg","../Images/pancake3.jpg","../Images/pancake2.jpg","../Images/pie1.jpg","../Images/pie2.jpg"];
var wid=new Array();
wid=["900","425","400","900","900","400"];
var marg=new Array();
marg=["75 200 200 300","75 200 200 550","75 200 200 550","75 200 200 300","75 200 200 300","75 200 200 550"];
function left() {
  if (step < 1) {
    step = 2;
  } else {
    step--;
  }
  document.getElementById("banner").style.backgroundImage =
    "url(" + images[step] + ")";
  document.getElementById("banner").style.backgroundSize = "1550px";

  document.getElementById("p1").innerHTML = discription[step];
  document.getElementById("h1").innerHTML = recipie[step];
  document.getElementById("a").href = directed[step];
}
function right() {
    console.log('a');

  if (step > 1) {
    step = 0;
  } else {
    step++;
  }
  document.getElementById("banner").style.backgroundImage ="url(" + images[step] + ")";
  document.getElementById("banner").style.backgroundSize = "1550px";

  document.getElementById("p1").innerHTML = discription[step];
  document.getElementById("h1").innerHTML = recipie[step];
  document.getElementById("a").href = directed[step];
}

function appa(a) {
    console.log('a');
    document.getElementById("pop").style.visibility="visible";
    document.getElementById("image").src=pics[a];
    document.getElementById("image").width=wid[a];
    document.getElementById("image").style.margin=marg[a];
}
function abbba()
{
    document.getElementById("pop").style.visibility="hidden";

}
function slideit() {
  document.getElementById("banner").style.backgroundImage =
    "url(" + images[step] + ")";
  document.getElementById("banner").style.backgroundSize = "1550px";


  document.getElementById("p1").innerHTML = discription[step];
  document.getElementById("h1").innerHTML = recipie[step];
  document.getElementById("a").href = directed[step];
  if (step < 2) {
    step++;
  } else {
    step = 0;
  }
  setTimeout("slideit()", 5000);
}
slideit();
