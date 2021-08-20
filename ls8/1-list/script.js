const playListCourseItemHTML = document.getElementById("playlist-course-item")
const descriptionItemHTML = document.getElementById("discription-item")

const playListCourseStateIndex = 0
const descriptionStateIndex = 1

playListCourseItemHTML.addEventListener('click', () =>  {
     currentStateIndex = playListCourseStateIndex
    playListCourseItemHTML.classList.add('list__switch--active-item')
    descriptionItemHTML.classList.remove('list__switch--active-item')
})

descriptionItemHTML.addEventListener('click', () =>  {
    currentStateIndex = descriptionStateIndex
    descriptionItemHTML.classList.add('list__switch--active-item')
    playListCourseItemHTML.classList.remove('list__switch--active-item')
})

