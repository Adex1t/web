let a = document.getElementById('roztasyvanya-course-item')

let b = document.getElementById('pribyt-course-item')

let c = document.getElementById('viezd-course-item')

let d = document.getElementById('gosti-course-item')

console.log(a)

let btn = document.getElementById('btn')

btn.addEventListener('click', (e) =>  {
    e.preventDefault()
    const aValue = a.value
    const bValue = b.value
    const cValue = c.value
    const dValue = d.value
    console.log(aValue, bValue, cValue, dValue)
})
