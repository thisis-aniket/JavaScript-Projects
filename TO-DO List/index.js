function getAndUpdate() {
    console.log("updating list")
    tit = document.getElementById('title').value;
    desc = document.getElementById('description').value;
    if (localStorage.getItem('itemsJson') == null) {
        itemsjsonArray = [];
        itemsjsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemsjsonArray));
    } else {
        itemsjsonArrayStr = localStorage.getItem('itemsJson');
        itemsjsonArray = JSON.parse(itemsjsonArrayStr);
        itemsjsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemsjsonArray));
    }
    update();
}

function update() {

    if (localStorage.getItem('itemsJson') == null) {
        itemsjsonArray = [];
        localStorage.setItem('itemsJson', JSON.stringify(itemsjsonArray));
    } else {
        itemsjsonArrayStr = localStorage.getItem('itemsJson');
        itemsjsonArray = JSON.parse(itemsjsonArrayStr);
    }

    //populating Table
    let tableBody = document.getElementById('tableBody');
    let str = "";
    itemsjsonArray.forEach((element, index) => {
        str +=
            `<tr>
    <th scope="row">${index + 1}</th>
    <td>${element[0]}</td>
    <td>${element[1]}</td>
    <td><button class="btn btn-primary" onclick="deleted(${index})">Delete</button></td>
</tr>`;
    });
    tableBody.innerHTML = str;
}

add = document.getElementById("add");
add.addEventListener("click", getAndUpdate);
update();

function deleted(itemIndex) {
    console.log("delete", itemIndex);
    itemsjsonArrayStr = localStorage.getItem('itemsJson');
    itemsjsonArray = JSON.parse(itemsjsonArrayStr);
    itemsjsonArray.splice(itemIndex, 1);
    localStorage.setItem('itemsJson', JSON.stringify(itemsjsonArray));
    update();
}

function clearStorage() {
    if (confirm("Do you really want to clear list?")) {
        console.log("cleared storage...")
        localStorage.clear();
        update();
    }
}
