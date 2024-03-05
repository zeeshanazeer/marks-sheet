var fullName=prompt("Please Enter your name");
var math= Number(prompt("Enter Your Math Marks"));
var urdu= Number(prompt("Enter Your Urdu Marks"));
var english= Number(prompt("Enter Your English Marks"));
var grade;
var reMark;
    var obtian= math + urdu + english;
    alert(obtian);
    var total= Number(prompt("Enter Your total Marks"));
    var par = obtian / total * 100; 

    alert("Your Parsentage Marks = " + par + "%");
    if(par>=80){
        grade="A+";
    }
    else if(par>=70){
        grade="A";
    }
    else if(par>=60){
        grade="B";
    }
    else if(par>=50){
        grade="C";
    }
    else if(par>=40){
        grade="D";
    }
    else if(par>=33){
        grade="E";
    }
    else{
        grade="Fail";
    }
    if(grade=="A+" ){
        reMark="Your Excellent";
    }
    else if(grade=="A"){
        reMark="Your need to Improve";
    }
    else if(grade=="B"){
        reMark="Your need to Head Improve";
    }
    else if(grade=="C"){
        reMark="Your need to Head Work";
    }
    else if(grade=="D"){
        reMark="Your need to Very Head Work";
    }
    else if(grade=="E"){
        reMark="Please Focase your Stady";
    }
    else{
        reMark="Please Repeat Class";
    }
    alert("Your Grade is " + grade);
    alert(reMark);
    document.write("<h1>Your Name = " + fullName + "</h1>");
    document.write("<h1>Your Math Marks = " + math + "</h1>");
    document.write("<h1>Your Urdu Marks = " + urdu + "</h1>");
    document.write("<h1>Your Englsih Marks = " + english + "</h1>");
    document.write("<h1>Your Obtain Marks = " + obtian + "</h1>");
    document.write("<h1>Your Total Marks = " + total + "</h1>");
    document.write("<h1>Your Parsentage  = " + par + "%</h1>");
    document.write("<h1>Your Grade = " + grade + "</h1>");
    document.write("<h1>Your Remark = " + reMark + "</h1>");
    
 