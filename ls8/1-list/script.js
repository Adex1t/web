const playListCourseItemHTML = document.getElementById("playlist-course-item")
const descriptionItemHTML = document.getElementById("discription-item")

const playListCourseStateIndex = 0
const descriptionStateIndex = 1

playListCourseItemHTML.addEventListener('click', () =>  {
    let currentStateIndex = playListCourseStateIndex

    playListCourseItemHTML.classList.add('list__switch--active-item')
    console.log(currentStateIndex)
})

descriptionItemHTML.addEventListener('click', () =>  {
    currentStateIndex = descriptionStateIndex
    console.log(currentStateIndex)
})