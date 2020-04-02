let backButton = document.querySelector("#back")
let nextButton = document.querySelector("#next")
let randomButton = document.querySelector("#random")



let students = [
  {
   profileImage:"https://cdn.glitch.com/a8dfcf86-1197-4347-bea7-8e37dd1f86b3%2FIMG_2474.PNG?v=1585173419007",
   name: "Theirno",
   quote: "'I'm a goat'",
   superlative: "Most Kind",
   },
  {
   profileImage:"https://cdn.glitch.com/a8dfcf86-1197-4347-bea7-8e37dd1f86b3%2F44AF9AB6-126B-4BAD-8328-8739B573111C.jpg?v=1585174556716",
   name: "Nick",
   quote: "'It is what it is'",
   superlative: "Too Tall",
   },
   {
   profileImage:"https://cdn.glitch.com/a8dfcf86-1197-4347-bea7-8e37dd1f86b3%2FIMG_4725.JPG?v=1585173391167",
   name: "Hazel",
   quote: "'It's none of your bussiness, I do my own bussiness'",
   superlative: "Most Sassy",
   },
{
   profileImage:"https://cdn.glitch.com/a8dfcf86-1197-4347-bea7-8e37dd1f86b3%2Ffaee7a52-217b-4bc4-87a4-56eda65d5393.jpg?v=1585173368626",
   name: "Anthony",
   quote: "'Something edgy'",
   superlative: "Best Animal Lover",
   },
{
   profileImage:"https://cdn.glitch.com/a8dfcf86-1197-4347-bea7-8e37dd1f86b3%2FFFC24657-A67E-447A-A364-617B90D9C2D9.jpg?v=1585173381051",
   name: "Brian",
   quote: "'Bro...I'm going back to sleep.Gn.'",
   superlative: "'Sleeps too much'",
   },
{
   profileImage:"https://cdn.glitch.com/a8dfcf86-1197-4347-bea7-8e37dd1f86b3%2F8250916D-E4A1-4004-AEB0-21C3A309B041.jpg?v=1585174550037",
   name: "Ronel",
   quote: "'Always smile because I am here'",
   superlative: "tik tok connoisseur",
   },
{
   profileImage:"https://cdn.glitch.com/a8dfcf86-1197-4347-bea7-8e37dd1f86b3%2FA24EED9C-551F-4853-BDC2-F424ED12B04E.jpg?v=1585173353875",
   name: "Mahel",
   quote: "'You think you caught time but time has you in its grasp'",
   superlative: "Tech Savy",
   },
{
   profileImage:"https://cdn.glitch.com/a8dfcf86-1197-4347-bea7-8e37dd1f86b3%2FScreen%20Shot%202020-03-30%20at%2012.44.23%20AM.png?v=1585543523387",
   name: "Daniela",
   quote: "'Everyone looks good with a smile'",
   superlative: "Most patient",
   },
{
   profileImage:"https://cdn.glitch.com/a8dfcf86-1197-4347-bea7-8e37dd1f86b3%2FScreen%20Shot%202020-03-30%20at%2012.40.43%20AM.png?v=1585543422471",
   name: "Jeordy",
   quote: "'Top'",
   superlative: "Most Artistic",
   },
{
   profileImage:"https://cdn.glitch.com/a8dfcf86-1197-4347-bea7-8e37dd1f86b3%2FScreen%20Shot%202020-03-30%20at%2012.46.20%20AM.png?v=1585544228918",
   name: "Desyrae",
   quote: "'Something Friends'",
   superlative: "Most generous",
   },
{
   profileImage:"https://cdn.glitch.com/a8dfcf86-1197-4347-bea7-8e37dd1f86b3%2FScreen%20Shot%202020-03-30%20at%2012.35.11%20AM.png?v=1585543430867",
   name: "Lesslie",
   quote: "'Hello'",
   superlative: "Most intelligent",
   },
{
   profileImage:"https://cdn.glitch.com/a8dfcf86-1197-4347-bea7-8e37dd1f86b3%2FScreen%20Shot%202020-03-30%20at%2012.56.24%20AM.png?v=1585544203707",
   name: "Brandon",
   quote: "'Nothing here'",
   superlative: "Most meme",
   },
{
   profileImage:"https://cdn.glitch.com/a8dfcf86-1197-4347-bea7-8e37dd1f86b3%2FScreen%20Shot%202020-03-30%20at%2012.46.49%20AM.png?v=1585544217810",
   name: "Edison",
   quote: "'I'm here",
   superlative: "That guy",
   },
{
   profileImage:"https://cdn.glitch.com/a8dfcf86-1197-4347-bea7-8e37dd1f86b3%2FScreen%20Shot%202020-03-30%20at%2012.44.44%20AM.png?v=1585543517501",
   name: "Lesroy",
   quote: "'Yup'",
   superlative: "Talent man",
   },
{
   profileImage:"https://cdn.glitch.com/a8dfcf86-1197-4347-bea7-8e37dd1f86b3%2FIMG_4742.PNG?v=1585178815492",
   name: "Jacob",
   quote: "'Oof'",
   superlative: "Too quiet",
   }
]

let count = 0
let lastStudent = students.length -1


nextButton.addEventListener("click",()=>{
  console.log('next')
  count ++
  console.log(count)
  if(count > lastStudent){
    count=0
  }
  document.querySelector("#pic").src = students[count].profileImage
  document.querySelector("#name").innerHTML = students[count].name
  document.querySelector("#quote").innerHTML = students[count].quote
  document.querySelector("#superlative").innerHTML = students[count].superlative  
})

backButton.addEventListener("click",()=>{
  console.log('back')
  count --
  console.log(count)
  
  if(count < lastStudent){
    count=lastStudent
  }
  document.querySelector("#pic").src = students[count].profileImage
  document.querySelector("#name").innerHTML = students[count].name
  document.querySelector("#quote").innerHTML = students[count].quote
  document.querySelector("#superlative").innerHTML = students[count].superlative
})

let picDiv= document.querySelector ("#Random")
console.log(picDiv)

daniela, desyrae, lesslie, edison, lesroy, andrew, brandon