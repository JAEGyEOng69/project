const id = document.getElementById('id')
const password = document.getElementById('password')
const login = document.getElementById('login')
let errStack = 0;

login.addEventListener('click', () => {
    if (id.value == 'aa') {
        if (password.value == '1234') {
            alert('로그인 되었습니다!')
            location.replace("홈페이지.html");
        }
        else {
            alert('아이디와 비밀번호를 다시 한 번 확인해주세요!')
            errStack ++;
        }
    }
    else {
        alert('존재하지 않는 계정입니다.')
    }

    if (errStack >= 3) {
        alert('비밀번호를 3회 이상 틀리셨습니다. 비밀번호 찾기를 권장드립니다.')
    }
})