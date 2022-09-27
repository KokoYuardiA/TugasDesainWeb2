let submitButt = document.getElementById("button-button");
if (submitButt) {
    submitButt.addEventListener('click', validateFormPend, false);
}

function validateFormPend() {
    let inputNama = document.getElementById("nama");
    let inputTanggal = document.getElementById("tanggallahir");
    let inputKelas = document.getElementById("kelas");
    let inputAlamat = document.getElementById("alamat");
    let inputNoTele = document.getElementById("tele");
    let inputEkskul = document.getElementById("ekskul");

    if (inputNama.value == null || inputNama.value == "") {
        inputNama.classList.add("invalid")
        alert("Pastikan semua kolom sudah terisi")
        return false
    }

    if (inputTanggal.value == null || inputTanggal.value == "") {
        inputTanggal.classList.add("invalid")
        alert("Pastikan semua kolom sudah terisi")
        return false
    }

    if (inputKelas.value == null || inputKelas.value == "") {
        inputKelas.classList.add("invalid")
        alert("Pastikan semua kolom sudah terisi")
        return false
    }

    if (inputAlamat.value == null || inputAlamat.value == "") {
        inputAlamat.classList.add("invalid")
        alert("Pastikan semua kolom sudah terisi")
        return false
    }

    if (inputNoTele.value == null || inputNoTele.value == "") {
        inputNoTele.classList.add("invalid")
        alert("Pastikan semua kolom sudah terisi")
        return false
    }

    if (inputEkskul.value == null || inputEkskul.value == "") {
        inputEkskul.classList.add("invalid")
        alert("Pastikan semua kolom sudah terisi")
        return false
    }
}