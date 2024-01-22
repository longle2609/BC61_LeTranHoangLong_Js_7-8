var arr = new Array();
var arrText = "👉 "
document.getElementById("btnArr").onclick = function () {
    var n = document.getElementById("txtN").value;
    if (n == "") {
        n = 0;
    }
    arr.push(Number(n));
    if (arr.length == 1) {
        arrText += n;
    } else {
        arrText += ", " + n;
    }
    document.getElementById("arr").innerHTML = arrText;
}

//1 
document.getElementById("btnBaiTap1").onclick = function () {
    if (arr.length == 0) {
        document.getElementById("result1").innerHTML = "👉 chưa có giá trị trong mảng";
        return;
    }
    var tongDuong = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            tongDuong += arr[i];
        }
    }
    document.getElementById("result1").innerHTML = "👉 " + tongDuong;
}

//2
document.getElementById("btnBaiTap2").onclick = function () {
    if (arr.length == 0) {
        document.getElementById("result2").innerHTML = "👉 chưa có giá trị trong mảng";
        return;
    }
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            ++count;
        }
    }
    document.getElementById("result2").innerHTML = "👉 " + count;
}

//3
document.getElementById("btnBaiTap3").onclick = function () {
    if (arr.length == 0) {
        document.getElementById("result3").innerHTML = "👉 chưa có giá trị trong mảng";
        return;
    }
    var min = arr[0];
    for (var i = 1; i < arr.length; i++) {
        min = min < arr[i] ? min : arr[i];
    }
    document.getElementById("result3").innerHTML = "👉 " + min;
}

//4
document.getElementById("btnBaiTap4").onclick = function () {
    if (arr.length == 0) {
        document.getElementById("result4").innerHTML = "👉 chưa có giá trị trong mảng";
        return;
    }
    var positive = arr.filter(function (n) {
        return n > 0;
    })
    var min = positive[0];
    for (var i = 1; i < positive.length; i++) {
        min = min < positive[i] ? min : positive[i];
    }
    document.getElementById("result4").innerHTML = "👉 " + min;
}

//5 
document.getElementById("btnBaiTap5").onclick = function () {
    if (arr.length == 0) {
        document.getElementById("result5").innerHTML = "👉 chưa có giá trị trong mảng";
        return;
    }
    var evenNum = -1;
    for (var i = arr.length - 1; i >= 0; i--) {
        if (arr[i] % 2 == 0) {
            evenNum = arr[i];
            break;
        }
    }
    document.getElementById("result5").innerHTML = "👉 " + evenNum;
}

//6 
document.getElementById("btnBaiTap6").onclick = function () {
    if (arr.length == 0) {
        document.getElementById("result6").innerHTML = "👉 chưa có giá trị trong mảng";
        return;
    }
    var viTri1 = document.getElementById("txtViTri1").value;
    if (viTri1 > arr.length - 1 || viTri1 < 0 || viTri1 == "") {
        alert("vị trí 1 không hợp lệ");
        return;
    }
    var viTri2 = document.getElementById("txtViTri2").value;
    if (viTri2 > arr.length - 1 || viTri2 < 0 || viTri2 == "") {
        alert("vị trí 2 không hợp lệ");
        return;
    }

    var buffer = arr[viTri1];
    arr[viTri1] = arr[viTri2];
    arr[viTri2] = buffer;
    arrText = "👉 " + arr.join(", ");
    document.getElementById("arr").innerHTML = arrText;
    document.getElementById("result6").innerHTML = "👉 Đã đổi chỗ"
}

//7
document.getElementById("btnBaiTap7").onclick = function () {
    if (arr.length == 0) {
        document.getElementById("result7").innerHTML = "👉 chưa có giá trị trong mảng";
        return;
    }
    arr.sort(function (a, b) {
        return a - b;
    })
    arrText = "👉 " + arr.join(", ");
    document.getElementById("arr").innerHTML = arrText;
    document.getElementById("result7").innerHTML = arrText;
}

//8
document.getElementById("btnBaiTap8").onclick = function () {
    if (arr.length == 0) {
        document.getElementById("result8").innerHTML = "👉 chưa có giá trị trong mảng";
        return;
    }
    var result = -1;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 2) {
            continue;
        } else if (arr[i] == 2) {
            result = arr[i];
            break;
        }
        var check = 1;
        for (var j = 2; j <= Math.sqrt(arr[i]); j++) {
            if (arr[i] % j == 0) {
                check = 0;
                break;
            }
        }
        if (check == 1) {
            result = arr[i];
            break;
        }
    }
    document.getElementById("result8").innerHTML = "👉 " + result;
}

//9
var floatArr = new Array();
var floatArrText = "👉 ";
document.getElementById("btnArr9").onclick = function () {
    var n = document.getElementById("txtN9").value;
    if (n == "") {
        n = 0;
    }
    floatArr.push(Number(n));
    if (floatArr.length == 1) {
        floatArrText += n;
    } else {
        floatArrText += ", " + n;
    }
    document.getElementById("arr9").innerHTML = floatArrText;
}

document.getElementById("btnBaiTap9").onclick = function () {
    if (floatArr.length == 0) {
        document.getElementById("result9").innerHTML = "👉 chưa có giá trị trong mảng";
        return;
    }
    var count = 0;
    for (var i = 0; i < floatArr.length; i++) {
        if (Number.isInteger(floatArr[i])) {
            ++count;
        }
    }
    document.getElementById("result9").innerHTML = "👉 " + count;
}

//10
document.getElementById("btnBaiTap10").onclick = function () {
    if (arr.length == 0) {
        document.getElementById("result10").innerHTML = "👉 chưa có giá trị trong mảng";
        return;
    }
    var countPositive = 0;
    var countNegative = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            ++countPositive;
        } else if (arr[i] < 0) {
            ++countNegative;
        }
    }
    if(countPositive > countNegative) {
        document.getElementById("result10").innerHTML = "👉 số dương nhiều hơn số âm";
    } else if(countPositive < countNegative) {
        document.getElementById("result10").innerHTML = "👉 số âm nhiều hơn số dương";
    } else {
        document.getElementById("result10").innerHTML = "👉 số âm bằng số dương";
    }
}