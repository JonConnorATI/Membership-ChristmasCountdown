/*Declare the function */
function Clock(){
    let d1 = new Date();
    let d2 = new Date("25 December 2022 00:00");

    let difference = Math.abs(d1 - d2); //to get absolute value
    //calculate for each one
    let Days = Math.floor(difference / ( 1000 * 60 * 60 * 24 ));
    let Hours = Math.floor((difference / ( 1000 * 60 * 60 )) % 24);
    let Mins = Math.floor((difference / ( 1000 * 60 )) % 60);
    let Seconds = Math.floor((difference / ( 1000 )) % 60);

    //getting nodes and change the text inside
    let getday = document.querySelector(".big_text_days");
    let gethour = document.querySelector(".big_text_hours");
    let getmins = document.querySelector(".big_text_mins");
    let getsec = document.querySelector(".big_text_sec");

    getday.textContent = Check_Zero(Days); 
    gethour.textContent = Check_Zero(Hours);
    getmins.textContent = Check_Zero(Mins)
    getsec.textContent = Check_Zero(Seconds);
}

//call the funcion for every 1 second
setInterval(Clock , 1000);


//check and add zero in front, if it is lessthan 10
function Check_Zero(mytime){
    return mytime < 10 ? "0"+mytime : mytime;

}

