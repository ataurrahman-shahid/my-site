

export function  section_end_observer(element, styleId, templateIndex){ 

    let observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

    if (entry.isIntersecting){

    if (!document.body.contains(document.getElementById(styleId))){
        
    let section_after = 
    document.getElementsByTagName("template")[templateIndex].content.cloneNode(true)

    document.body.appendChild(section_after)

    }}

 })

 })

    observer.observe(element)

}



export function single_observer (element, animationName){
    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {

            if (entry.isIntersecting)
            entry.target.style.animation = animationName
        })
    })

    observer.observe(element)

}

export function multiple_observers(elements, animationName){

    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting){
                entry.target.style.animation = animationName
            }
        })
    })

    elements.forEach(element => observer.observe(element))
}


export let observe_scroll = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting)
        document.getElementsByClassName("up-btn")[0].style.display  = "none"
        else
        document.getElementsByClassName("up-btn")[0].style.display  = "flex"
    })
})


