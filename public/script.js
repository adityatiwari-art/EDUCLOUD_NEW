
// to prevent selection 
// document.addEventListener('selectstart', function (e) {
//     e.preventDefault();
// });


document.getElementById('burger').addEventListener('click',function(){
    document.querySelector("#nav1").setAttribute("style","display:flex")
    document.querySelector("#burger").classList.add("toggle");

})
document.getElementById('cross').addEventListener('click',function(){
    document.querySelector("#nav1").setAttribute("style","display:none")
    document.querySelector("#burger").classList.remove("toggle");

})

document.getElementById('courseoffered').addEventListener('click',function(){
    document.querySelector("#engineeringList").classList.toggle("toggle");
    // document.querySelector(".lottieAnimation").classList.toggle("toggle");
})

var hidenav=document.querySelectorAll(".hidenav");
for(var i=0;i<hidenav.length;i++){
    hidenav[i].addEventListener("click",function(){
        console.log("clicked");
        // document.querySelector("#nav1").classList.add("toggle");
        document.querySelector("#nav1").setAttribute("style","display:none")
        document.querySelector("#burger").classList.remove("toggle");
    })

}
document.querySelector("section").addEventListener("click",function(){
if(document.querySelector("#nav1").style.display!=="none")
{ 
    console.log("body clicked")
        document.querySelector("#nav1").setAttribute("style","display:none")
    document.querySelector("#burger").classList.remove("toggle");
}
})

function addItemsOnNav(code, classname) {
    var li = document.createElement('li'); 
    li.classList.add(classname);
    document.querySelector("#nav1 ul").appendChild(li);
    document.querySelector(`.${classname}`).innerHTML = code;
}

// addItemsOnNav('<i class="bi bi-controller bicon"></i>Programming Games', "pg");

var video = {
    "v1": ["https://www.youtube.com/embed/tVzUXW6siu0?si=PwVQwZdPSwgWFdEO", "Introduction to Full-Stack Web Development"],
    "v2": ["https://www.youtube.com/embed/CyRlWlaJnTY?si=k7dNZGF0LJQzLqJL", "HTML Fundamentals"],
    "v3": ["https://www.youtube.com/embed/XZwBNDGuWGU?si=wuBEkQ7AaOTdrN0w", "CSS Styling Techniques"],
    "v4": ["https://www.youtube.com/embed/cvsbHZcDx8w?si=8PDjH34z0_xT_EIh", "Responsive Web Design"],
    "v5": ["https://www.youtube.com/embed/1dkfuga2_Ps?si=oaSxF3HcqmLqSsCk", "JavaScript Basics"],
    "v6": ["https://www.youtube.com/embed/1cEG1T8beO4?si=9MPESSbdrT0S4_u8", "Document Object Model (DOM)"],
    "v7": ["https://www.youtube.com/embed/hRHV5cjEB1w?si=PiRzY5icETbJDlH3", "Advanced JavaScript Concepts"],
    "v8": ["https://www.youtube.com/embed/cOw6tgH6P20?si=Ehc-FuOpWYI_6kGU", "Front-End Frameworks - React.js"],
    "v9": ["https://www.youtube.com/embed/-WN74rN9OPI?si=Aa-QoV-kGVR5ntap", "Front-End Frameworks - Angular"],
    "v10": ["https://www.youtube.com/embed/DWk2mndNTHY?si=pDxRLU2LG-P98sH9", "Front-End Frameworks - Vue.js"],
    "v11": ["https://www.youtube.com/embed/7AgEjgUtho4?si=4txCd4zvvY3A6p9i", "Front-End Testing - Unit Testing"],
    "v12": ["https://www.youtube.com/embed/GGlzzLTLzxs?si=qZ-Oyr9r8uOh1ppl", "Front-End Testing - End-to-End Testing"],
    "v13": ["https://www.youtube.com/embed/GGlzzLTLzxs?si=tHpVjhYp6g3h0k6Z", "Node.js Fundamentals"],
    "v14": ["https://www.youtube.com/embed/pHI4PBFM0wY?si=ezH0tbPeI7wj_eSf", "Express.js Framework"],
    "v15": ["https://www.youtube.com/embed/tSzDHVWG1hI?si=WEPpjxPtMrREFBqd", "Database Management with SQL"],
    "v16": ["https://www.youtube.com/embed/ovKVqo-L2EM?si=X_TlpqJMdLFGQlg5", "Database Management with NoSQL"],
    "v17": ["https://www.youtube.com/embed/NrhP53Divco?si=zJl-8BThEDHV5aCF", "RESTful API Development"],
    "v18": ["https://www.youtube.com/embed/uJbYqm7W_mA?si=InW1EDXEJu_-sOZy", "Authentication and Authorization"],
    "v19": ["https://www.youtube.com/embed/uJbYqm7W_mA?si=ylV-Ozu_h9fSplmS", "Deployment Strategies"],
    "v20": ["https://www.youtube.com/embed/IFZZAaiatcQ?si=74V7wGPlb0HO__cY", "Continuous Integration and Deployment (CI/CD)"],
};

$(".accordion-item").click(function(event) {
    const eleId = $(this).attr('id');
    const videoUrl = video[eleId][0];
    const courseDetails = video[eleId][1];
    $("iframe").attr("src", videoUrl);
    $(".coursedetails").text(courseDetails);
});

