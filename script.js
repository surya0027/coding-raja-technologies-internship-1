


function sbtn() {

    alert("submitted successfully");
    let color = document.getElementsByClassName("title")

    let name = document.getElementById("name").value;
    let profilename1 = document.getElementById("profile-name-1");
    profilename1.innerHTML = name;

    let profilename2 = document.getElementById("profile-name-2");
    profilename2.innerHTML = name;


    document.getElementById("form").style.display = "none";

    //  console.log(name); 
    document.getElementById("form-template").style.display = "block";

    // again needs to adds manually style prperty as diplay flex - not working when doing display : none 
    document.getElementById("form-template").style.display = "flex";
    document.getElementById("profile-name-1").style.color = "green"

    // phone number access 
    document.getElementById("phone-number-t").innerHTML = document.getElementById("phone-number").value

    // adress acess
    document.getElementById("address-t").innerHTML = document.getElementById("address").value

    //acess insta
    document.getElementById("insta-t").innerHTML = document.getElementById("insta").value

    // acess fb
    document.getElementById("fb-t").innerHTML = document.getElementById("fb").value

    // access linkdin
    document.getElementById("linkdin-t").innerHTML = document.getElementById("linkdin").value



    //access work experience
    document.getElementById("work-experience-t").innerHTML = document.getElementById("work-experience").value

    // acess acadmic qualification
    document.getElementById("acadmic-qualification-t").innerHTML = document.getElementById("acadmic-qualification").value

    // access objective value and setting new value manuall
    document.getElementById("one-t").innerHTML = document.getElementById("one").value

    // printing resume 


    //dynamic button creation
    let pbtn = document.createElement("button")
    pbtn.style.height = "50px"
    pbtn.style.width = "100px"
    pbtn.innerText = "print"
    pbtn.style.marginTop = "100px"
    pbtn.style.textAlign = "center"
    pbtn.style.backgroundColor = "yellow"
    pbtn.style.marginLeft="500px"
    console.log(pbtn)

    // button added below acadmic qualification
    let conntent = document.querySelector(".heading3-content")
    conntent.after(pbtn)


    // btn fuction
    pbtnfun = function btnacess() {
        console.log("button working");
        window.print();
    }

    // acess dynamic button by setting attribute and passing function as atribute value
     pbtn.setAttribute("onclick", "pbtnfun()")

    














}


