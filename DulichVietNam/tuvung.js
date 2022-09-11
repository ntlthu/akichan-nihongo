var vietnamese = document.getElementById("vietnamese");
var nihongo = document.getElementById("nihongo");
let isCollapsed = true;
function suriJP() {
  var textSuri = (document.getElementById("suri").innerHTML = "スリ");
}

function suriVN() {
  var mocTui = "";
  mocTui += "<p> Móc túi( pickpocketing) </p>";
  mocTui += "<p>スリに注意 : Coi chừng móc túi!</p>";
  var textSuri = (document.getElementById("suri").innerHTML = mocTui);
}

function group2JP() {
  var kotoba2 = (document.getElementById("kotoba2").innerHTML =
    "電話を取られる");
}
function group2VN() {
  var giatDienThoai = "";
  giatDienThoai += "<p> でんわをとられる </p>";
  giatDienThoai += "<p> Bị giật điện thoại </p>";
  var kotoba2 = (document.getElementById("kotoba2").innerHTML = giatDienThoai);
}
function kotoba3JP() {
  var kotoba3 = (document.getElementById("kotoba3").innerHTML = "盗む");
}
function kotoba3VN() {
  var tromCap = "";
  tromCap += "<p>ぬすむ : trộm cắp</p>";
  tromCap += "<p>何を盗まれましたか。: Bạn đã bị trộm mất cái gì?</p>";
  tromCap += "<p>現金を盗まれた。:Tôi bị trộm mất tiền mặt.</p>";
  var kotoba3 = (document.getElementById("kotoba3").innerHTML = tromCap);
}

function kotoba4JP() {
  var kotoba4 = (document.getElementById("kotoba4").innerHTML = "ほげほげ");
}
function kotoba4VN() {
  var hogehoge = "";
  hogehoge +=
    "<p>＝何か = gì đó gì đó。<br> プログラム内では hogehoge。<br> 英語圏ではfoo bar。<br> 英語のサンプルプログラム内の変数によく使われています <br> 適当な変数ですね <br> hogeとかは日本のサンプルプログラムの適当な変数名として現れます</p>";
  var kotoba4 = (document.getElementById("kotoba4").innerHTML = hogehoge);
}
