document.addEventListener('DOMContentLoaded', function() {
    const inputMaxLengthOnLoad = document.getElementById("InputNama").maxLength;
    document.getElementById("SisaKarakter").innerText = inputMaxLengthOnLoad;
    document.getElementById("AllertSisaKarkter").style.visibility = "hidden";
});


document.getElementById("InputNama").addEventListener("input", function() { // event jumlah karakter
    const jumKar = document.getElementById("InputNama").value.length;
    const maxKar = document.getElementById("InputNama").maxLength;
    console.log(jumKar, maxKar);
    const sisa = maxKar - jumKar;
    document.getElementById("SisaKarakter").innerText = sisa;

    if (sisa == 0) {
        document.getElementById("SisaKarakter").innerText = "batas maksimum tercapai"; //  jika sisa == 0 
    } else if (sisa <= 5) {
        document.getElementById("AllertSisaKarkter").style.color = " red";
    } else {
        document.getElementById("AllertSisaKarkter").style.color = "black";
    }

});


document.getElementById("InputNama").addEventListener("focus", function() { // menambahkan even focus
    document.getElementById("AllertSisaKarkter").style.visibility = null;
});


document.getElementById("InputCopy").addEventListener("copy", function() { // event copy

    alert('Teks Telah Di Copy');
});

document.getElementById("InputPaste").addEventListener("paste", function() {
    alert('Teks Telah Di Paste'); // event paste
});

document.getElementById("inputCaptcha").addEventListener("change", function() { // event input captcha
    const inputCaptcha = document.getElementById("inputCaptcha").value;
    const submitButtonStatus = document.getElementById("submitButton");

    if (inputCaptcha == "1738") {
        submitButtonStatus.removeAttribute("disabled");
    }

});

document.getElementById("FormDataDiri").addEventListener("submit", function() { // event input captcha
    const inputCap = document.getElementById("inputCaptcha").value;

    if (inputCap == "1738") {
        event.preventDefault();
        alert('Data Berhasil Di Input !!');

    } else {
        alert('Captcha Salah !!');
        submitButtonStatus.addAttribute("disabled", true);
    }

});