let age=25;
isMember=true;

if(age>=18 && isMember){
    console.log("Full access — welcome member!");
}else if(age>=18 && !isMember){
    console.log("Guest access — consider joining");
}else if(age<18 && isMember){
    console.log("Junior member access");
}else{
    console.log("No access");
}