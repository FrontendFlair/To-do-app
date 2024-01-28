let inputBox = document.querySelector(".itemInput")
let addBtn = document.querySelector(".add-btn")
let listContainer = document.querySelector(".list-container")

addBtn.addEventListener("click", () => {
    if (inputBox.value === "") {
        alert("Add SomeThing Here!")
    }
    else {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)

        // trash icon

        let span = document.createElement("span")
        span.innerHTML = "<i class='bx bx-trash'></i>"
        li.appendChild(span)

        // checkbox
        
        let checkBox = document.createElement("p")
        checkBox.innerHTML = `<input type="checkbox" name="" id="">`
        li.appendChild(checkBox)

        // remove list item

        span.addEventListener("click", () => {
            li.remove();
        })

        // check completed item

        checkBox.addEventListener("click", () => {
            li.classList.toggle("checked", checkBox.checked)
        })

        inputBox.value = "";
    }
})