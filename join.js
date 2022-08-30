function open_Postcode(){  //다음 카카오 주소찾기 
    new daum.Postcode({ 
      oncomplete: function(data) { 
   
         // 우편번호와 주소 정보를 해당 필드에 넣는다. 
         document.getElementById('postcode').value = data.zonecode; 
         document.getElementById("road_address").value = data.roadAddress; 
         document.getElementById("address").value = data.jibunAddress; 
   
    } 
  }).open(); 
  } 
   
  function check_pw(){  //비밀번호 확인 
      var p = document.getElementById('pw').value; 
      var p_cf = document.getElementById('pw_cf').value; 
   
      if (p!=p_cf) { 
        document.getElementById('pw_check_msg').innerHTML = "비밀번호가 다릅니다. 다시 확인해 주세요."; 
      } 
      else { 
          document.getElementById('pw_check_msg').innerHTML = ""; 
      } 
      if (p_cf=="") { 
        document.getElementById('pw_check_msg').innerHTML = ""; 
      } 
   } 
   
  function my_address_check(){    //주민번호 검사 
  var addr1 = document.getElementById('my_address1').value; 
  var addr2 = document.getElementById('my_address2').value; 
  var num = 0; 
  if (addr1.length == 6 && addr2.length == 7) {    //주민번호가 다 입력되면 공식적용 
      for (var i = 0; i < addr1.length; i++) { 
        num += parseInt(addr1[i])*(i+2); 
      } 
      for (var i = 0; i < addr2.length-1; i++) { 
        num += parseInt(addr2[i])*(((i+6)%8)+2); 
      } 
   
      num = num %11; 
      if(num ==1||num==0){ 
        num=11; 
      } 
      if(parseInt(addr2[6]) == (11-num)){ 
        if(addr2[0]=='1'||addr2[0]=='2'){ 
          document.getElementById('my_year').value="19"+addr1.substring(0,2);  //주민번호가 맞으면 생일에 적용 
        } 
        else if(addr2[0]=='3'||addr2[0]=='4'){ 
          document.getElementById('my_year').value="20"+addr1.substring(0,2);  //주민번호가 맞으면 생일에 적용 
        } 
        document.getElementById('my_month').value=addr1.substring(2,4); 
        document.getElementById('my_day').value=addr1.substring(4,6); 
      } 
      else{ 
        document.getElementById('my_address2').value="";    //틀리면 alert 
        alert("주민번호가 잘못되었습니다."); 
        document.getElementById('my_year').value=""; 
        document.getElementById('my_month').value=""; 
        document.getElementById('my_day').value=""; 
      } 
  } 
  else { 
    document.getElementById('my_year').value="";      //주민번호 고칠시 생일도 초기화 
    document.getElementById('my_month').value=""; 
    document.getElementById('my_day').value=""; 
  } 
  } 
   
  function checked(){  //form 유효성 검사 
  var p = document.getElementById('pw'); 
  var p_cf = document.getElementById('pw_cf'); 
   
  var count = 0; 
  var check = document.getElementsByName('my_hobby'); 
  for (var i = 0; i < check.length; i++) {    // 관심분야 검사 
    if (check[i].checked) { 
      count = 1; 
      break; 
    } 
  } 
  if (p.value != p_cf.value) {  //비밀번호 확인 
    alert("비밀번호가 일치하지 않습니다. 확인해 주세요"); 
    p_cf.focus(); 
    return false; 
  } 
  if (document.getElementById('postcode').value=="") { //주소 확인 
    alert("주소를 입력해주세요"); 
    document.getElementById('postcode_button').focus(); 
    return false; 
  } 
  if (count == 0) {  //관심분야 확인 
    alert("관심분야를 체크해 주세요"); 
    return false; 
   
  } 
   
  else { 
    return true; 
  } 
   
  }