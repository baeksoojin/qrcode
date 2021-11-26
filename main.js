var form = document.getElementById('form');
var username = document.getElementById('user_name');
var add  = document.getElementById('user_add');
var num = document.getElementById('user_num');
var code = document.querySelector('.code');
var view = document.querySelector('.code_result');
var toast = document.querySelector('#toast');

form.addEventListener("submit",generate);

function generate(e) {
    e.preventDefault();

    console.log(add.value);
    console.log(username.value);
    console.log(num.value);

    var data2 = 22//33을 google에 검색하는 것과 동일함. ->url이 생성됨. => 사용자의 정보가 담긴 (이름, 주소 등) html정보를 보여줄 때 
    // var data3 = `$,${add}, ${num}`;
   var data3= ` name : ${username.value} address: ${add.value} phonenum : ${num.value}`
   var test_data="123"
    //URL을 우리 홈페이지로 이어주고 사용자데이터를 홈페이지에서 제공하게 끔하면 됨. =>  var data3 = 홈페이지주소/DB에 저장된 사용자 ID값(pK값 아무거나)
    var url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${data3}`;
    code.src = url;
    var url_print = url;
    //console.log(url_print);
    
    url_save(url_print);
    toastDiv();
}

function url_save(url_print){
    //console.log(url_print);
    view.src = url_print;
}
function toastDiv() {
    toast.className = "show";
    setTimeout( function() {
        toast.className = toast.className.replace("show" , "");
    },2000);
}