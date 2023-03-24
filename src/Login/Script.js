import './LoginPage'
import './RegisterPage'

/*export default function demo(){
    

    /* ------------  NAME ---------------- 
    var correct = /^[A-Za-z]+$/;
    let a = document.getElementById('in1').value;
    
    if(a.match(correct)){
        return true;
    }
    else if(a === ""){
        document.getElementById('p1').innerHTML = "** please fill your name"
        return false;
    }
    else if(a !== correct){
        document.getElementById('p1').innerHTML = "Enter only characters";
        return false;
    }

    /* ------------  EMAIl ------------------ 

    var validMail = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    let b = document.getElementById('in2').value;
    
    if(b === validMail){
        return true;
    }
    else if(b === ""){
        document.getElementById('p2').innerHTML = "please enter a Email";   
    }
    else if(b !== validMail){
        document.getElementById('p2').innerHTML = "It is not a valid Email";
        return false;
    }  
    

    /* ------------------ NUMBER ----------------------- 

    var phoneno = /^\d{10}$/;
    let c = document.getElementById('in3').value;

    if(c.match(phoneno)){
        return true;
    }
    else if(c === ""){
        document.getElementById('p3').innerHTML="** please enter mobile number";
        return false;
    }
    else{
        document.getElementById('p3').innerHTML="** Enter a valid mobile number";
        return false;
    }
    
    /* ------------------- PASSWORD -----------------------

    var passw =  /^[A-Za-z]\w{7,14}$/;
    let d = document.getElementById('in4').value;
    let e = document.getElementById('in5').value;
    
    if(d.match(passw)){
        return true;
    }
    else if(d === ""){
        document.getElementById('p4').innerHTML="** Please enter password"
        return false;
    }
    else if(d !== passw){
        document.getElementById('p4').innerHTML="**Enter a strong password"
        return false;
    }

    if(d !== e){
        document.getElementById('p5').innerHTML="** password does't match"
        return false;
   }
    else{
        return false;
    }
      
    
};  */


export default function validateForm() {
    var user = document.getElementById('emailp').value;
    
    

    if(user == ""){
        document.getElementById("emaili").innerHTML="** Please Fill The Username";
        return false;
    }

    
        if(user.replace(/\s/g,"").length<=0){
            document.getElementById("emaili").innerHTML="** White Space Are Not Allowed";
            return false;
        }

        if(user.indexOf('@') <=0){
            document.getElementById("emaili").innerHTML="** emailid is not Ok";
            return false;
        }

        if((user.charAt(user.length-4)!='.') && (user.charAt(user.length-3)!='.')){
            document.getElementById("emaili").innerHTML="** emailid is not Ok";
            return false;
        }

        if((user.length <=2) || (user.length >25)){
            document.getElementById("emaili").innerHTML="** Length Shoud be beetween 3 and 25";
            return false;
        }

        if(!isNaN(user)) {
            document.getElementById("emaili").innerHTML="** numbers are not allowd";
            return false;
        }



    


}