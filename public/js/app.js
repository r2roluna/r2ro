function contactMe(e){e.preventDefault();var t=document.getElementById("name").value,a=document.getElementById("email").value,n=document.getElementById("subject").value,l=document.getElementById("message").value,s=document.getElementById("msg");""===t||""===a||""===n||""===l?(s.className="alert alert-danger",s.innerHTML="* Required Fields"):t.lenght<3?(s.className="alert alert-danger",s.innerHTML="Name must be at least 3 characters"):(s.className="alert alert-success",s.innerHTML=t+" Thanks for the email, ill get back to you asap.",emailjs.send("default_service","from_emailjs",{name:t,email:a,subject:n,message:l}),document.getElementById("contact-form").reset())}$(document).ready(function(){$(window).scroll(function(){$(document).scrollTop()>150?$(".navbar-fixed-top").css("background-color","#1e3346"):$(".navbar-fixed-top").css("background-color","transparent")}),$(".sliding-link").click(function(e){e.preventDefault();var t=$(this).attr("href");$("html,body").animate({scrollTop:$(t).offset().top},"slow")})}),emailjs.init("user_FSrTsxd45od3oSy9Ez69r"),document.getElementById("contact-form").addEventListener("submit",contactMe,!1);