const menuList = document.getElementById("menu-list")

const tagData = ["JavaScript", "TypeScript", "Java", "C++", "Golang", "Python"]

// concatanation
// "java" + "script" = "javascript"

let htmlChildElements = ""
for(let i = 0; i < tagData.length; i++) {
    const newTag = tagData[i]

    htmlChildElements += `
        <li class="menu__item">
            <div class="tag">${newTag}</div>
        </li>
    `
}

menuList.innerHTML = htmlChildElements

console.log(htmlChildElements);
// console.log("here we have such elements", result, "that is very cool");
// console.log(`here we have such elements ${result} that is very cool`);