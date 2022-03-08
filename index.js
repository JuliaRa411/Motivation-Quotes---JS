const btn = document.querySelector("#btn");
const par = document.querySelector("#par");
const quotes = [
    "Believe in yourself",
    "Work hard",
    "Don’t wait! Sometimes later becomes never                                                                                                                                                       Do it now!",
    "Step outside your comfort zone! Great things never come from comfort zones",
     "Dream it. Wish it. Do it",
    "Success doesn’t just find you. You have to go out and get it. Take action!",
    "Don’t give up",
    "Dream bigger. Do bigger",
    "Don’t stop when you’re tired. Stop when you’re done",
    "Do something today that your future self will thank you for"
];

btn.addEventListener("click", ()=>{
 let randomQuote = quotes[Math.floor(Math.random()*quotes.length)]
 par.textContent = randomQuote;
 par.style.display = "block";

})



let timeline = new TimelineMax({}),
    electrons = document.querySelectorAll('.electron'),
    paths = document.querySelectorAll('.path'),
    atom = document.querySelectorAll('#atom'),
    startDuration = 2,
    delay = 0.5;

for(let i = 0; i < electrons.length; i++) {
  var myDelay = (i * delay);  
  orbit(electrons[i], paths[i], myDelay);    
  
}

function orbit(electron, path, delay) {
 
  let e = TweenMax.to(electron, startDuration, {rotationY:'-360', ease:Linear.easeNone, repeat:1 });
 let p = TweenMax.to(path, startDuration, {rotationZ:'360', ease:Linear.easeNone, repeat:1});
 
  timeline.add([e,p], delay);
}

 
let lastTweenStartTime = (electrons.length-1) * delay;
let lastTweenEndTime = lastTweenStartTime + startDuration;
console.log(lastTweenStartTime, lastTweenEndTime);

 
timeline.add(repeat, lastTweenEndTime)

 
function repeat() {
   timeline.play(lastTweenStartTime);
}










