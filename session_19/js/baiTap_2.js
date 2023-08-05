function showTime() {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds()

    document.getElementById("hours").innerHTML = `${hours}`
    document.getElementById("minutes").innerHTML = `${minutes}`
    document.getElementById("seconds").innerHTML = `${seconds}`
    setInterval(showTime, 1000);
}
setInterval(()=>{
    console.log("xin chào")
},2000)
setInterval(()=>{
    let color = 100+Math.floor(Math.random()*899);
    document.getElementById("seconds").parentNode.style.background = `#${color}`

},2000)

