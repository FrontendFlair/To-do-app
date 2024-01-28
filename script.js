let inputBox = document.querySelector(".itemInput")
let addBtn = document.querySelector(".add-btn")
let listContainer = document.querySelector(".list-container")

addBtn.addEventListener("click", () => {
    if (inputBox.value === "") {
        alert("Add SomeThing Here!")
    }
    else {
        // create list

        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)

        // trash icon

        let span = document.createElement("span")
        span.innerHTML = "<i class='bx bx-trash'></i>"
        li.appendChild(span)

        // remove list item

        span.addEventListener("click", () => {
            li.remove();
        })

        // Edit button

        let editBtn = document.createElement("span");
        editBtn.innerHTML = "<i class='bx bx-edit'></i>";
        li.appendChild(editBtn)

        editBtn.addEventListener("click", () => {
            let newValue = prompt("Edit Your Task : ", li.textContent)
            li.innerHTML = newValue;
            li.appendChild(editBtn);
            li.appendChild(checkBox);
            li.appendChild(editBtn);
            li.appendChild(span);
        })

        // checkbox

        let checkBox = document.createElement("p")
        checkBox.innerHTML = `<input type="checkbox" name="" id="">`
        li.appendChild(checkBox)


        // check completed item

        checkBox.addEventListener("click", () => {
            li.classList.toggle("checked", checkBox.checked)
        })

        inputBox.value = "";
    }
})
