var move=document.querySelectorAll(".image1  img");
var shift=document.querySelectorAll(".listimage  img");
let currentIndex=0;

move[currentIndex].classList.add('.image')

shift.forEach((imge, index)=>{
    imge.addEventListener('click',()=>{
        move.forEach(toggleimg=>toggleimg.classList.remove('.image1'))
        move[currentIndex].classList.add('.image')
        move[currentIndex].src=shift[index].src
        currentIndex=(currentIndex+1)%move.length
    })
});




// let fullaccess=document.querySelector(".foodimg")
// let left=document.getElementById("left");
// let right=document.getElementById("right");


// fullaccess.addEventListener("wheel",(evt)=>{
//     evt.preventDefault();
//     fullaccess.scrollLeft+=evt.deltaY;
// });

// right.addEventListener('click', ()=>{
    
//     fullaccess.scrollLeft+=900;
    
// });

// left.addEventListener('click', ()=>{
    
//     fullaccess.scrollLeft-=900;
// });


//submit the loginform will be disappear
window.onload=function(){
    setTimeout(function(){
        document.getElementById('loginform').style.display = 'block';
    },3000)

        const blurElement = document.querySelector('.head');
        const Element = document.querySelector('.blur');
        
        document.querySelector(".submit").addEventListener('click',function(e){
            e.preventDefault()

                
        
                document.getElementById("loginform").style.display='none';
                document.getElementById("registration").style.display='none';  
                
                blurElement.classList.remove("head")
                Element.classList.remove("blur")
                
        }) 

}


//click the login button, display the loginform
let loginButton = document.querySelector(".login");
let loginForm = document.getElementById("loginform");

loginButton.addEventListener("click", function() {
    
    if (loginForm.style.display === "none" || loginForm.style.display === "") {
        loginForm.style.display = "block"; 
    } else {
        loginForm.style.display = "none"; 
    }

    let removecontent=loginForm.querySelectorAll("input");
    removecontent.forEach(input =>{
        input.value='';
    })
});


//once we click the signup button it directly goes to registration form
let signup=document.getElementById("signup");

signup.addEventListener('click',function(e){
    e.preventDefault()
    document.getElementById('loginform').style.display='none'
    document.getElementById('registration').style.display='block'
    
})

//click forget button
let forget=document.querySelector(".forget")
forget.addEventListener('click',function(e){
    e.preventDefault()
    document.getElementById('loginform').style.display='none'
    document.getElementById("forgetpass").style.display='block'
})

//click the moveback button it goes loginform
document.getElementById("moveback").addEventListener('click',function(e){
    e.preventDefault()
    document.getElementById("registration").style.display='none'
    document.getElementById("loginform").style.display='block'
})

//click the backsignin button it directly goes to loginform
document.getElementById("backsignin").addEventListener('click',function(e){
    e.preventDefault()
    document.getElementById("forgetpass").style.display='none';
    document.getElementById("loginform").style.display='block';
})

document.getElementById("backtosignup").addEventListener('click',function(e){
    e.preventDefault()
    document.getElementById("forgetpass").style.display='none';
    document.getElementById("registration").style.display='block'
})





