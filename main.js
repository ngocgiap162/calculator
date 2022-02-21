// Nhập biểu thức
var Btns = document.querySelectorAll('.btn1')
var bieuThuc = []
for (let i = 0; i < Btns.length; i++) {
    const Btn = Btns[i];
    Btn.onclick = addBieuThuc;
    function addBieuThuc() {
        var x = Btn.getAttribute('value')
        var listSign = ['.', '+', '-', '*', '/'];
        if (listSign.includes(x) && listSign.includes(bieuThuc[bieuThuc.length - 1])) {
            return;
        }
        // Giới hạn ký tự nhập vào
        if (bieuThuc.length == 29) {
            return;
        }
        bieuThuc.push(x)

        // chuyển array thành string, ngăn cách element của array là chuỗi rỗng và in ra màn hình
        let y = bieuThuc.join('');
        document.querySelector('.screen_input').innerHTML = y;

        // xóa
        document.querySelector('.del_btn').onclick = function () {
            if (bieuThuc.length > 1) {
                bieuThuc.pop();
                let y = bieuThuc.join('');
                document.querySelector('.screen_input').innerHTML = y;
            } else if (bieuThuc.length == 1) {
                bieuThuc.pop();
                $('.screen_input').html(0);
            } else {
                return;
            }
        }
    }
}

// Thực hiện biểu thức khi nhấn dấu "="
document.querySelector('.equal').onclick = function () {
    // nếu chưa nhập biểu thức thì dừng
    if (bieuThuc.length == 0) {
        return;
    }
    // chuyển array thành string, ngăn cách element của array là chuỗi rỗng
    var a = bieuThuc.join('');
    // Thực hiện phép tính và in ra màn hình
    document.querySelector('.screen_result').innerHTML = eval(a);
    // nhập biểu thức + thêm dấu "="
    document.querySelector('.screen_input').innerHTML = a + ' =';
    bieuThuc = [];
}
// AC
document.querySelector('.ac_btn').onclick = function () {
    $('.screen_input').html(0);
    $('.screen_result').html(0);
    bieuThuc = [];
}

// sqrt
$('.sqrt_btn').click(function () {
        let x = Math.sqrt($('.screen_input').text())
        if (isNaN(x)) {
            alert('Vui lòng nhập giá trị đúng')
            return;
        }
        $('.screen_result').html(x);
        bieuThuc = [];
    })

// sqr
$('.sqr_btn').click(function () {
    let x = $('.screen_input').text() * $('.screen_input').text();
    if (isNaN(x)) {
        alert('Vui lòng nhập giá trị đúng')
        return;
    }
    $('.screen_result').html(x);
    bieuThuc = [];
})