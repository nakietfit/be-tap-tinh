function clickAdd() {
    document.getElementById("add-btn").style.border = "hidden rgb(0, 109, 240) 1.5px";
    document.getElementById("minus-btn").style.border = "solid rgb(0, 109, 240) 1.5px";
    document.getElementById("mul-btn").style.border = "solid rgb(0, 109, 240) 1.5px";
    document.getElementById("div-btn").style.border = "solid rgb(0, 109, 240) 1.5px";
}

function clickMinus() {
    document.getElementById("add-btn").style.border = "solid rgb(0, 109, 240) 1.5px";
    document.getElementById("minus-btn").style.border = "hidden rgb(0, 109, 240) 1.5px";
    document.getElementById("mul-btn").style.border = "solid rgb(0, 109, 240) 1.5px";
    document.getElementById("div-btn").style.border = "solid rgb(0, 109, 240) 1.5px";
}

function clickMul() {
    document.getElementById("add-btn").style.border = "solid rgb(0, 109, 240) 1.5px";
    document.getElementById("minus-btn").style.border = "solid rgb(0, 109, 240) 1.5px";
    document.getElementById("mul-btn").style.border = "hidden rgb(0, 109, 240) 1.5px";
    document.getElementById("div-btn").style.border = "solid rgb(0, 109, 240) 1.5px";
}

function clickDiv() {
    document.getElementById("add-btn").style.border = "solid rgb(0, 109, 240) 1.5px";
    document.getElementById("minus-btn").style.border = "solid rgb(0, 109, 240) 1.5px";
    document.getElementById("mul-btn").style.border = "solid rgb(0, 109, 240) 1.5px";
    document.getElementById("div-btn").style.border = "hidden rgb(0, 109, 240) 1.5px";
}

function clickEquals(x) {
    var add_border_style = document.getElementById("add-btn").style.border;
    var minus_border_style = document.getElementById("minus-btn").style.border;
    var mul_border_style = document.getElementById("mul-btn").style.border;
    var div_border_style = document.getElementById("div-btn").style.border;

    var first_num = document.getElementById("first-num").value;
    var second_num = document.getElementById("second-num").value;
    var result_num;

    var message_box = document.getElementById("message-box");

    if (isRealNum(first_num) === 0) {
        message_box.style.animation = "animatop 0.5s cubic-bezier(0.445, 0.05, 0.55, 0.95)";

        if (x.matches) {
            message_box.style.top = "335px";
        }
        else {
            message_box.style.top = "275px";
        }
        
        message_box.style.background = "aquamarine";
        document.getElementById("message").innerHTML = "Giá trị nhập ở ô 'Số thứ nhất' không phải là số thực";
        return;
    }
    else {
        message_box.style.animation = "initial";
        message_box.style.top = "0px";
        message_box.style.background = "rgb(230, 230, 250)";
        document.getElementById("message").innerHTML = "";
    }

    if (isRealNum(second_num) === 0) {
        message_box.style.animation = "animatop 0.5s cubic-bezier(0.445, 0.05, 0.55, 0.95)";
        
        if (x.matches) {
            message_box.style.top = "335px";
        }
        else {
            message_box.style.top = "275px";
        }

        message_box.style.background = "aquamarine";
        document.getElementById("message").innerHTML = "Giá trị nhập ở ô 'Số thứ hai' không phải là số thực";
        return;
    }
    else {
        message_box.style.animation = "initial";
        message_box.style.top = "0px";
        message_box.style.background = "rgb(230, 230, 250)";
        document.getElementById("message").innerHTML = "";
    }

    if (first_num.indexOf("/") !== -1) {
        let res = first_num.split("/");
        let temp = parseFloat(res[0]) / parseFloat(res[1]);
        first_num = temp.toString();
    }

    if (second_num.indexOf("/") !== -1) {
        let res = second_num.split("/");
        let temp = parseFloat(res[0]) / parseFloat(res[1]);
        second_num = temp.toString();
    }

    if (first_num === "") {
        message_box.style.animation = "animatop 0.5s cubic-bezier(0.445, 0.05, 0.55, 0.95)";
        
        if (x.matches) {
            message_box.style.top = "335px";
        }
        else {
            message_box.style.top = "275px";
        }

        message_box.style.background = "aquamarine";
        document.getElementById("message").innerHTML = "Ô 'Số thứ nhất' rỗng";
        return;
    }

    if (second_num === "") {
        message_box.style.animation = "animatop 0.5s cubic-bezier(0.445, 0.05, 0.55, 0.95)";
        
        if (x.matches) {
            message_box.style.top = "335px";
        }
        else {
            message_box.style.top = "275px";
        }

        message_box.style.background = "aquamarine";
        document.getElementById("message").innerHTML = "Ô 'Số thứ hai' rỗng";
        return;
    }

    if (add_border_style.indexOf("hidden") === -1 &&
        minus_border_style.indexOf("hidden") === -1 &&
        mul_border_style.indexOf("hidden") === -1 &&
        div_border_style.indexOf("hidden") === -1) {

            message_box.style.animation = "animatop 0.5s cubic-bezier(0.445, 0.05, 0.55, 0.95)";
            
            if (x.matches) {
                message_box.style.top = "335px";
            }
            else {
                message_box.style.top = "275px";
            }

            message_box.style.background = "aquamarine";
            document.getElementById("message").innerHTML = "Phép tính chưa được chọn";
            return;
        }


    if (add_border_style.indexOf("hidden") !== -1) {
        result_num = parseFloat(first_num) + parseFloat(second_num);
    }

    if (minus_border_style.indexOf("hidden") !== -1) {
        result_num = parseFloat(first_num) - parseFloat(second_num);
    }

    if (mul_border_style.indexOf("hidden") !== -1) {
        result_num = parseFloat(first_num) * parseFloat(second_num);
    }

    if (div_border_style.indexOf("hidden") !== -1) {
        if (second_num === "0") {
            message_box.style.animation = "animatop 0.5s cubic-bezier(0.445, 0.05, 0.55, 0.95)";
            
            if (x.matches) {
                message_box.style.top = "335px";
            }
            else {
                message_box.style.top = "275px";
            }

            message_box.style.background = "aquamarine";
            document.getElementById("message").innerHTML = "Mẫu số không được bằng 0";
            return;
        }

        result_num = parseFloat(first_num) / parseFloat(second_num);
    }

    document.getElementById("result-num").value = result_num;
}

function leaveTextField_1(x) {
    var value = document.getElementById("first-num").value;
    var message = document.getElementById("message");
    var message_box = document.getElementById("message-box");
    
    if (isRealNum(value) === 0) {
        message_box.style.animation = "animatop 0.5s cubic-bezier(0.445, 0.05, 0.55, 0.95)";
        
        if (x.matches) {
            message_box.style.top = "335px";
        }
        else {
            message_box.style.top = "275px";
        }

        message_box.style.background = "aquamarine";
        document.getElementById("message").innerHTML = "Giá trị nhập ở ô 'Số thứ nhất' không phải là số thực";
        return;
    }

    document.getElementById("message").innerHTML = "";
}

function leaveTextField_2(x) {
    var value = document.getElementById("second-num").value;
    var message = document.getElementById("message");
    var message_box = document.getElementById("message-box");

    if (isRealNum(value) === 0) {
        message_box.style.animation = "animatop 0.5s cubic-bezier(0.445, 0.05, 0.55, 0.95)";
        
        if (x.matches) {
            message_box.style.top = "335px";
        }
        else {
            message_box.style.top = "275px";
        }

        message_box.style.background = "aquamarine";
        message.innerHTML = "Giá trị nhập ở ô 'Số thứ hai' không phải là số thực";
        return;
    }

    message.innerHTML = "";
}

function isRealNum(value) {
    var countDotCha = 0;
    var countDivCha = 0;
    var checkRealNum = 1;

    for (let i = 0; i < value.length; i++) {
        if (value[i] < "0" || value[i] > "9") {
            if (value[i] === "." && i !== value.length - 1 && countDotCha === 0 && countDivCha === 0) {
                countDotCha++;
                continue;
            }

            if (value[i] === "/" && i !== value.length - 1 && countDivCha === 0 && countDotCha === 0) {
                countDivCha++;
                continue;
            }

            checkRealNum = 0;
            break;
        }
    }

    return checkRealNum;
}

function enterTextField() {
    var message_box = document.getElementById("message-box");
    message_box.style.animation = "initial";
    message_box.style.top = "0px";
    message_box.style.background = "rgb(230, 230, 250)";
    document.getElementById("result-num").value = "";
}

function clickToReverse(x) {
    var message_box = document.getElementById("message-box");
    message_box.style.animation = "initial";
    message_box.style.top = "0px";
    message_box.style.background = "rgb(230, 230, 250)";
    message.innerHTML = "";

    document.getElementById("content").classList.remove("appear");
    document.getElementById("content").classList.add("disappear");
    document.getElementById("side-front").classList.remove("none-flipped");
    document.getElementById("side-front").classList.add("flipped");
    document.getElementById("side-back-content").classList.remove("bounceDown-ani");
    document.getElementById("side-back-content").classList.add("bounceUp-ani");

    if (x.matches) {
        document.getElementById("side-back-content").style.top = "-335px";
    }
    else {
        document.getElementById("side-back-content").style.top = "-275px";
    }
    
    document.getElementById("side-back-content").classList.add("spin-ani");
    document.getElementById("side-back-content").style.transform = "rotateX(0deg)";
    document.getElementById("side-back-content").style.visibility = "visible";
    document.getElementById("btn-wrap-close").style.visibility = "visible";
}

function clickToComeback() {
    document.getElementById("content").classList.remove("disappear");
    document.getElementById("content").classList.add("appear");
    document.getElementById("side-front").classList.remove("flipped");
    document.getElementById("side-front").classList.add("none-flipped");
    document.getElementById("side-back-content").classList.add("bounceDown-ani");
    document.getElementById("side-back-content").style.top = "0px";
    document.getElementById("side-back-content").style.transform = "rotateX(-180deg)";
    document.getElementById("side-back-content").style.visibility = "hidden";
    document.getElementById("side-back-content").classList.remove("bounceUp-ani");
    document.getElementById("side-back-content").classList.remove("spin-ani");
    document.getElementById("btn-wrap-close").style.visibility = "hidden";
}

var x = window.matchMedia("(max-width: 709px)")
clickToReverse(x) // Call listener function at run time
clickEquals(x)
leaveTextField_1(x)
leaveTextField_2(x)
x.addListener(clickToReverse) // Attach listener function on state changes
x.addListener(clickEquals)
x.addListener(leaveTextField_1)
x.addListener(leaveTextField_2)
