// function ff(){
//     console.log("hi")
// }
// ff()
// console.log(typeof ff)

// let a = "3";
// const b = () => {
//     if(a==3){
//         console.log("hi");
//     }
//     else{
//         console.log("hello");
//     }
    
// };

// b(); 
// console.log(typeof a);
// console.log(typeof b);



// let a=function(p,q){
//     return p+q;
// }
// console.log(a(2,4))


// console.log("hi")
// setTimeout(function(){
// console.log("hello")
// setTimeout(function(){
//     console.log("hey")
//     },3000)
//     setTimeout(function(){
//         console.log("h")
//         },1000)
// },1000)








const apiKey="d864fc5b7668231fb6532d832fa7403b";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
async function checkweather(city){
    const response=await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data= await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";
}
searchBtn.addEventListener("click", ()=>{
    checkweather(searchBox.value);
})
