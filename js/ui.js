
import {section_end_observer} from './intersections.js'
import {single_observer} from './intersections.js'
import {multiple_observers} from './intersections.js'
import {observe_scroll} from './intersections.js'



onload =  () => { 
    if (navigator.userAgent.match(/Windows Phone|iOS|Android/i))
        document.getElementById("front-page").style.backgroundAttachment = "scroll"

    document.querySelector(".front-text h1").style.animation = 
    "scale-text 1s forwards ease-in-out"

    document.querySelector(".front-text p").style.animation = 
    "scale-text 1s .5s forwards ease-in-out"

    document.querySelector(".front-text button").style.animation = 
    "scale-text 1s 1s forwards ease-in-out"
}



document.querySelector(".up-btn button").onclick = () => { window.scroll({
    top: 0,
    behavior: 'smooth'
  })
}  

document.getElementsByClassName("about-btn")[0].onclick = () =>  { 
    window.scroll({top : document.getElementById("front-page").offsetHeight , 
    behavior: "smooth"})
}

let h2_one = document.getElementsByTagName("h2")[0]
single_observer(h2_one, "scale-h2 2s .2s forwards ease-in-out")
section_end_observer(h2_one, "h2_one_after" , 0)

let articles_ps  = Array.from(document.querySelector(".my-article").children)
multiple_observers(articles_ps , "scale-text 1s .5s forwards ease-in-out")

let skills_ps = Array.from(document.getElementsByClassName("my-article")[1].children)
multiple_observers(skills_ps , "scale-text 1s forwards ease-in-out")

let article_end = document.getElementsByClassName("article-end")[0]
section_end_observer(article_end, "underline-section" , 1)


let skills_h3 = document.querySelector(".skills-section h3")
single_observer(skills_h3, "scale-h2 1s forwards ease-in-out")
section_end_observer(skills_h3, "do-after" , 2)



let skills_list = Array.from(document.getElementById("skills-list").children)


let skills_end = document.getElementsByClassName("skills-end")[0]
section_end_observer(skills_end , "skills-section-end" , 3)


multiple_observers(skills_list , "scale-lists 1.5s forwards ease-in-out")

let contact_h3 = document.querySelector(".contact-section h3")
single_observer(contact_h3, "scale-h2 1s 1s forwards ease-in-out")

let footer_children = document.querySelectorAll(".contact-section > *")
multiple_observers(footer_children, "scale-lists 1s .5s forwards ease-in-out")

let h3_footer = document.querySelector(".contact-section h3")
section_end_observer(h3_footer, "do-after-footer" , 4)

observe_scroll.observe(document.getElementsByTagName("h1")[0])


Array.from(document.getElementsByTagName("a")).forEach(link => link.target = "_blank")

