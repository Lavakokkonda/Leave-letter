function colorPick() {
  var headingcolor = document.getElementById("colorPicker").value;
  document.getElementById("heading1").style.color = headingcolor;
  sessionStorage.setItem("headingcolo", headingcolor);
}
function fontSize() {
  var size = document.getElementById("rangePicker").value;
  document.getElementById("heading1").style.fontSize = size + "px";
  sessionStorage.setItem("headingsize", size);
}

function retrivecolor() {
  var colordata = sessionStorage.getItem("headingcolo");
  document.getElementById("mainhead").style.color = colordata;
}
function retrivesize() {
  var sizedata = sessionStorage.getItem("headingsize");
  document.getElementById("mainhead").style.fontSize = sizedata + "px";
}
function backgroundColorr() {
  var backgroundColorr = document.getElementById("BackgroundColorPicker").value;
  document.getElementById("background-color-div").style.backgroundColor =
    backgroundColorr;
  sessionStorage.setItem("backgroundcolorrr", backgroundColorr);
}
function retiveBackgroundColor() {
  var backcolor = sessionStorage.getItem("backgroundcolorrr");
  document.getElementById("cont").style.backgroundColor = backcolor;
}
// Select all paragraph elements
const paras = document.getElementsByTagName("p");
// Select all buttons by their tag name
const buttons = document.querySelectorAll("button");
// Add event listeners to each button
for (const button of buttons) {
  button.addEventListener("click", function () {
    // Get the value of the button
    const value = button.value;
    // Loop through all paragraph elements and change their text-align property to the button value
    sessionStorage.setItem("textalignvalue", value);
    document.getElementById("textcolortext").style.textAlign = value;
  });
}
function retivetextalign() {
  const paras = document.getElementsByTagName("p");
  for (const para of paras) {
    var value = sessionStorage.getItem("textalignvalue");
    para.style.textAlign = value;
  }
}
function textcolorr() {
  var textcolor = document.getElementById("Text-color-picker").value;
  sessionStorage.setItem("textcolo", textcolor);
  document.getElementById("textcolortext").style.color = textcolor;
}
function retrivetextcolor() {
  var textcolorrr = sessionStorage.getItem("textcolo");
  const paragraphs = document.getElementsByTagName("p");
  for (const p of paragraphs) {
    p.style.color = textcolorrr;
  }
}
function alldetailsinput() {
  var fromname = document.getElementById("fromname").value;
  sessionStorage.setItem("fromnamee", fromname);
  var fromAddress = document.getElementById("fromAddress").value;
  sessionStorage.setItem("fromAddress", fromAddress);
  var toName = document.getElementById("toName").value;
  sessionStorage.setItem("toName", toName);
  var toAddress = document.getElementById("toAddress").value;
  sessionStorage.setItem("toAddress", toAddress);
  var sirmadem = document.getElementById("sir-madem").value;
  sessionStorage.setItem("sir-madem", sirmadem);
  var fromdate = document.getElementById("fromdate").value;
  sessionStorage.setItem("fromdate", fromdate);
  var todate = document.getElementById("todate").value;
  sessionStorage.setItem("todate", todate);
  var reason = document.getElementById("reason").value;
  sessionStorage.setItem("reason", reason);
  var subject = document.getElementById("subject").value;
  sessionStorage.setItem("subject", subject);
  var todaydate = document.getElementById("todaydate").value;
  sessionStorage.setItem("todaydate", todaydate);
  var colleaguename = document.getElementById("colleaguename").value;
  sessionStorage.setItem("colleaguename", colleaguename);
}
function alldetailsoutput() {
  var fromnameoutput = sessionStorage.getItem("fromnamee");
  document.getElementById("yourname").innerHTML = fromnameoutput;
  var fromAddressoutput = sessionStorage.getItem("fromAddress");
  document.getElementById("youraddress").innerHTML = fromAddressoutput;
  var toNameOutput = sessionStorage.getItem("toName");
  document.getElementById("toNamee").innerHTML = toNameOutput;
  var toAddresssOutput = sessionStorage.getItem("toAddress");
  document.getElementById("toAddresss").innerHTML = toAddresssOutput;
  var sarmademoutput = sessionStorage.getItem("sir-madem");
  document.getElementById("sirmademm").innerHTML = sarmademoutput;
  var fromdateoutput = sessionStorage.getItem("fromdate");
  document.getElementById("fromdatee").innerHTML = fromdateoutput;
  var todateoutput = sessionStorage.getItem("todate");
  document.getElementById("todatee").innerHTML = todateoutput;
  var reasonout = sessionStorage.getItem("reason");
  document.getElementById("reasonoutput").innerHTML = reasonout;
  var subjectoutputt = sessionStorage.getItem("subject");
  document.getElementById("subjectoutput").innerHTML = subjectoutputt;
  var todaydateout = sessionStorage.getItem("todaydate");
  document.getElementById("todaydateoutput").innerHTML = todaydateout;
  var colleaguenameout = sessionStorage.getItem("colleaguename");
  document.getElementById("colleaguenamee").innerHTML = colleaguenameout;
}

function handleKeyPress(e) {
  var key = e.keyCode || e.which;
  if (key === 13 || key === 32) {
    // 13 is the code for Enter key
    // randomm();
    document.querySelector("#submitbutton").click();
  }
}
document.addEventListener("keypress", handleKeyPress);