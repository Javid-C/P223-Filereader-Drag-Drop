let upload = document.querySelector("#upload")

let images = document.querySelector(".images")

upload.addEventListener("change", (e) => {

    let files = Array.from(e.target.files)
    files.forEach(file => {
        showImage(file)
    })
})

function showImage(file) {
    // console.log(file.type);
    if (file.type !== "image/png" && file.type !== "image/jpeg" && file.type !== "image/jpg") {
        alert("Please choose image file")
        return;
    }
    const fileReader = new FileReader();
    // let result = fileReader.readAsDataURL(file); this method does not have a return type
    fileReader.readAsDataURL(file)
    fileReader.addEventListener("loadend", () => {
        let col2 = document.createElement("div")
        col2.className = "col-lg-2 border mt-3"
        let img = document.createElement("img")

        let btn = document.createElement("button")

        btn.className = "btn btn-outline-danger"
        btn.innerText = "Delete"

        img.src = fileReader.result
        img.style.width = "100%"

        btn.onclick = function() {
            let conf = confirm("Do you want delete this file?")

            if (conf) {
                col2.remove();
            }
        }


        col2.append(btn)
        col2.append(img)

        images.appendChild(col2);


    })
}

let dragUpload = document.querySelector("#dragUpload")

let button = document.querySelector(".chooseFile")

let dropArea = document.querySelector(".dropArea")

button.onclick = function() {
    dragUpload.click();
}

dropArea.addEventListener("dragover", (e) => {
    e.preventDefault();
})

dropArea.addEventListener("drop", (e) => {
    e.preventDefault();
    let files = Array.from(e.dataTransfer.files)

    files.forEach(file => {
        showImage(file)
    })
})