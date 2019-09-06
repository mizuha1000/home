function hello() {
	alert('こんにちは');
}

function calc1() {
	alert(2 + 3);
}

function calc2() {
	alert(10 / 3);
}

function calc3() {
	let num = 5;
	alert(num * num * num);
}

function calc4() {
	let num = 2;
	num += 1;
	alert(num);
}

function link() {
	alert("あいう" + "えお");
}

function display1() {
	let name = "mizuha"; // letは変数
	alert(name);
}

function display2() {
	const name = "mizuha"; //constは定数
	alert(name);
}

function display3() {
	let name = "mizuha";
	alert(name + "さん");
}

function display4() { //テンプレートリテラル
	const name = "mizuha";
	alert(`${name}さん`); //['']じゃなくて[``]
}

function display5() { //if文
	const num = 0;
	if (num >= 1) {
		alert("numは1以上です");
	} else {
		alert("numは1より小さいです");
	}
}

function display6() { //比較演算子
	const num = 1;
	if (num === 1) {
		alert("numは1です");
	} else {
		alert("numは1以外です");
	}
}

function display7() { //else if
	const num = 8;
	if (num >= 10) {
		alert("numは10以上です");
	} else if (num <= 5) {
		alert("numは5以下です");
	} else {
		alert("numは5より大きく10より小さいです");
	}
}

function display8() { //&&
	const age = 27;
	if (age >= 20 && age < 30) {
	  alert("私は20代です");
	}
}

function display9() { //switch
	const color = "青";
	switch(color){
		case "青":
		alert("すすめ！")
		break;
	}
}

function display10() { //while
	let num = 1;
	while(num <= 3){
		alert(num);
		num++;
	}
}

function display11() { //while
	for (let num = 5; num <= 7; num++) {
		alert(num);
	}
}



//jQuery
function navi_display() {
	//('.navi').show();
	//$('.navi').fadeIn();
	$('.navi').slideDown();

}

function navi_delete() {
	//$('.navi').hide();
	//$('.navi').fadeOut();
	$('.navi').slideUp();
}


function css_henkou1() {
	//CSSメソッド・メソッドチェーン
	$('#list1').css('margin','20px').css('color','blue');
}

function css_henkou2() {
	//変数
	let $list2 = $('#list2');
	$list2.css('margin','20px');
	$list2.css('color','red');

}

function gya() {
	//CSSメソッドとhtmlメソッド
	$('#gya').css('font-size','80px').css('color','red');//メソッドチェーン
	$('p,button,li,input').html('<span>ぎゃーぎゃーぎゃー</span>');
}




function null_color_henkou() {
	$('.rensyu2').css('color','blue');
}

function find_color_henkou() {
	//findメソッド
	$('.rensyu2').find('p').css('color','blue');
}

function children_color_henkou() {
	//childrenメソッド
	$('.rensyu2').children('p').css('color','blue');
}





$(
	function() {
  $('h1').hide();
  $('h2').fadeOut();
  $('h3').slideUp();
  $('#button1').click(function(){
    $('#on-off').fadeOut();
  });
  $('#button2').click(function(){
  	$(this).fadeOut(); //thisに''は不必要
  });
  	$('#mouth-over').hover(
		function(){ //マウスをのせたときの処理
			$('#mojiwokakusu').fadeIn();
		}, //コンマが必要
		function(){ //マウスを外したときの処理
			$('#mojiwokakusu').fadeOut();
		}
	);
}
);




