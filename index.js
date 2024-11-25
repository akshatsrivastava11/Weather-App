console.log("js connected");
// variables
let locninput=document.getElementById("locn-input");
let submit=document.getElementById("Submit-button");
let temp0=document.getElementById("temp-0");
let cond0=document.getElementById("cond-0");
let temp1=document.getElementById("temp-1");
let cond1=document.getElementById("cond-1");
let temp2=document.getElementById("temp-2");
let cond2=document.getElementById("cond-2");
let temp3=document.getElementById("temp-3");
let cond3=document.getElementById("cond-3");
let temp4=document.getElementById("temp-4");
let cond4=document.getElementById("cond-4");
let day1=document.getElementById("day-1");
let day2=document.getElementById("day-2");
let day3=document.getElementById("day-3");
let day4=document.getElementById("day-4");
let fl1=document.getElementById("fl-1");
let fl2=document.getElementById("fl-2");
let fl3=document.getElementById("fl-3");
let fl4=document.getElementById("fl-4");
let v0=document.getElementById("v-0");
let v1=document.getElementById("v-1");
let v2=document.getElementById("v-2");
let v3=document.getElementById("v-3");
let v4=document.getElementById("v-4");
let p0=document.getElementById("p-0");
let h0=document.getElementById("h-0");
let u0=document.getElementById("u-0");
let img1=document.getElementById("img-1");
let img2=document.getElementById("img-2");
let img3=document.getElementById("img-3");
let img4=document.getElementById("img-4");
let cw=document.getElementById("current_weath");
let b0=document.getElementById("b-0");
let b1=document.getElementById("b-1");
let b2=document.getElementById("b-2");
let b3=document.getElementById("b-3");
let b4=document.getElementById("b-4");
let b5=document.getElementById("b-5");
let b6=document.getElementById("b-6");


const day=new Date();
const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const Months=["January","February","March","April","May","June","July","August","September","October","November","December"];
const area1=document.getElementById("left-Area");
const area2=document.getElementById("right-Area");
submit.addEventListener("click",()=>{
    reset();
    const locn=locninput.value;
    if(locn.trim()===''){
        alert("Please Enter a Location");
        return;
    }
    fetchWeather(locn);
   
});
async function fetchWeather(location){
    let url1=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=8VSK6SAUP77Q4SFUFMQVL8K3D&unitGroup=metric`;
    let url2=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=8VSK6SAUP77Q4SFUFMQVL8K3D&include=days&elements=datetime,tempmax,tempmin,icon`;
    try{
        const res=await fetch(url1);
        const data=await res.json();
        const res2=await fetch(url2);
        const data2=await res2.json();
        if(res.ok){
            console.log(data);
            changeWeather(location,data,data2);
        }
        else{
            alert("City not Found");
        }
    }
    catch(e){
        alert("Error fetching Data",e);
    }
};
function changeWeather(locn,data,data2){
    area1.textContent=locn.toUpperCase();
    area2.textContent=locn.toUpperCase();
    console.log(data);
    cond0.innerHTML=data.days[0].conditions;
    temp0.innerHTML=`${data.days[0].temp}<sup>C</sup>`;
    cond1.innerHTML=data.days[1].conditions;
    temp1.innerHTML=`${data.days[1].temp}<sup>C</sup>`;
    cond2.innerHTML=data.days[2].conditions;
    temp2.innerHTML=`${data.days[2].temp}<sup>C</sup>`;
    cond3.innerHTML=data.days[3].conditions;
    temp3.innerHTML=`${data.days[3].temp}<sup>C</sup>`;
    cond4.innerHTML=data.days[4].conditions;
    temp4.innerHTML=`${data.days[4].temp}<sup>C</sup>`;
    day1.innerHTML=data.days[1].datetime;
    day2.innerHTML=data.days[2].datetime;
    day3.innerHTML=data.days[3].datetime;
    day4.innerHTML=data.days[4].datetime;
    fl1.innerHTML=`Feels-like:${data.days[1].feelslike}°<sup>C</sup>`;
    fl2.innerHTML=`Feels-like:${data.days[2].feelslike}°<sup>C</sup>`;
    fl3.innerHTML=`Feels-like:${data.days[3].feelslike}°<sup>C</sup>`;
    fl4.innerHTML=`Feels-like:${data.days[4].feelslike}°<sup>C</sup>`;
    v0.innerHTML=`Visibility:${data.days[0].visibility}`;    
    v1.innerHTML=`Visibility:${data.days[1].visibility}`;
    v2.innerHTML=`Visibility:${data.days[2].visibility}`;
    v3.innerHTML=`Visibility:${data.days[3].visibility}`;
    v4.innerHTML=`Visibility:${data.days[4].visibility}`;
    p0.src=`images/images2/${data2.days[0].icon}.png`;
    u0.innerHTML=`UV-INDEX:${data.days[0].uvindex}`;
    h0.innerHTML=`HUMIDITY:${data.days[0].humidity}`;
    img1.src=`images/images2/${data2.days[1].icon}.png`;
    img2.src=`images/images2/${data2.days[2].icon}.png`;
    img3.src=`images/images2/${data2.days[3].icon}.png`;
    img4.src=`images/images2/${data2.days[4].icon}.png`;
    console.log(typeof(data.days[0].temp));
    if((data.days[0].temp)>20.0){
        cw.textContent="Current Weather☀";
        cw.style=" text-shadow: 2px 2px 4px rgba(255, 165, 0, 0.5);";
        temp0.style=" text-shadow: 2px 2px 4px rgba(255, 165, 0, 0.5);";
        cond0.style=" text-shadow: 2px 2px 4px rgba(255, 165, 0, 0.5);";
        h0.style=" text-shadow: 2px 2px 4px rgba(255, 165, 0, 0.5);";
        v0.style=" text-shadow: 2px 2px 4px rgba(255, 165, 0, 0.5);";
        u0.style=" text-shadow: 2px 2px 4px rgba(255, 165, 0, 0.5);";
        b0.style.backgroundColor="#faed61";
        b1.style.backgroundColor="#faed61";
        b2.style.backgroundColor="#faed61";
        b3.style.backgroundColor="#FCDC3B";
        b4.style.backgroundColor="#FCDC3B";
        b5.style.backgroundColor="#FCDC3B";
        b6.style.backgroundColor="#FCDC3B";
    }
    else{
        cw.textContent="Current Weather❄"
    }

};
function reset(){
    b0.style.backgroundColor="#c5e0e2";
    b1.style.backgroundColor="#c5e0e2";
    b2.style.backgroundColor="#c5e0e2";
    b3.style.backgroundColor="#c5e0e2";
    b4.style.backgroundColor="#c5e0e2";
    b5.style.backgroundColor="#c5e0e2";
    b6.style.backgroundColor="#c5e0e2";


}