/*let people=[
  {person:"Todd", boy:"yes", glasses:"yes", hairBlonde:"yes", hairShort:"yes", noBeard:"no",noBow:"no,"},
  {person:"Mike", boy:"yes", glasses:"yes", noHairBlonde:"no", noHairShort:"no", beard:"yes", noBow:"no",},
  {person:"Ben", boy:"yes", noGlasses:"no", hairBlonde:"yes", noHairShort:"no", beard:"yes",noBow:"no",},
  {person:"Angela", girl:"yes", glasses:"yes",hairBlonde:"yes", hairShort:"yes", noBeard:"no", noBow:"no",},
  {person:"Emily", girl:"yes", glasses:"yes", noHairBlonde:"no", noHairShort:"no", noBeard:"no", noBow:"no",},
  {person:"Ruth", girl:"yes", noGlasses:"no", hairBlonde:"yes", hairShort:"yes", noBeard:"no", bow:"yes",},
];*/
let people=[
  {person:"Todd", boy:"", glasses:"", hairBlonde:"", hairShort:"", noHairBrown:"",noBeard:"",noBow:"",},

  {person:"Mike", boy:"", glasses:"", beard:"", hairBrown:"",  noHairBlonde:"", noHairShort:"", noBow:"",},

  {person:"Ben", boy:"", hairBlonde:"", beard:"", noHairBrown:"", noGlasses:"", noHairShort:"", noBow:"",},

  {person:"Angela", girl:"", glasses:"",hairBlonde:"", hairShort:"", noHairBrown:"", noBeard:"", noBow:"",},

  {person:"Emily", girl:"", glasses:"", hairBrown:"", noHairBlonde:"", noHairShort:"", noBeard:"", noBow:"",},

  {person:"Ruth", girl:"", hairBlonde:"", hairShort:"", noHairBrown:"",noGlasses:"", noBeard:"", bow:"",},
];
let possibilities=[];
let questions=[
  {question:"Is it a boy?",  compareKeyPositive:"boy", compareKeyNegative:"girl",  category:"sex", status:"not asked",},
  {question:"Is it a girl?", compareKeyPositive:"girl", compareKeyNegative:"boy",category:"sex",status:"not asked",},

  {question:"Are they wearing glasses?", compareKeyPositive:"glasses",  compareKeyNegative:"noGlasses",category:"glasses",status:"not asked",},
  {question:"Is she wearing glasses?",   compareKeyPositive:"glasses", compareKeyNegative:"noGlasses", category:"glasses",status:"not asked",},
  {question:"Is he wearing glasses?",    compareKeyPositive:"glasses", compareKeyNegative:"noGlasses", category:"glasses",status:"not asked",},

  {question:"Are they blonde?",         compareKeyPositive:"hairBlonde",   compareKeyNegative:"hairBrown", category:"hairBlonde",status:"not asked",},
  {question:"Do they have brown hair?", compareKeyPositive:"hairBrown",  compareKeyNegative:"hairBlonde", category:"hairBlonde",status:"not asked",},
  {question:"Is she blonde?",           compareKeyPositive:"hairBlonde",   compareKeyNegative:"hairBrown", category:"hairBlonde",status:"not asked",},
  {question:"Has he got brown hair?",   compareKeyPositive:"hairBrown", compareKeyNegative:"hairBlonde", category:"hairBlonde",status:"not asked"},

  {question:"Do they have short hair?", compareKeyPositive:"hairShort",  compareKeyNegative:"noHairShort", category:"hairShort",status:"not asked",},
  {question:"Do they have long hair?",   compareKeyPositive:"hairShort",compareKeyNegative:"noHairShort", category:"hairShort",status:"not asked",},

  {question:"Do they have a beard?",  compareKeyPositive:"beard", compareKeyNegative:"noBeard", category:"beardOrBow",status:"not asked",},
  {question:"Have they got a bow?",   compareKeyPositive:"bow", compareKeyNegative:"noBow", category:"beardOrBow",status:"not asked",},
];
const startBtn=document.querySelector("#startBtn");
const yesBtn=document.querySelector("#yesBtn");
const noBtn=document.querySelector("#noBtn");
const questionDisplay1=document.querySelector("#questionDisplay1");
const questionDisplay2=document.querySelector("#questionDisplay2");

let guessing="";

                                          //code for starting game.
startBtn.addEventListener('click', ()=>{
  askQuestion();
});

                                          //code for gameplay
yesBtn.addEventListener('click', ()=>{
  if(guessing=="guessing"){
    questionDisplay2.textContent="Congrats Robot!";
  }else{
  yes(currentQuestionObject);
  }
});
noBtn.addEventListener('click', ()=>{
  no(currentQuestionObject);
});


function askQuestion(){
  if(people.length==1){
    guessPerson()
  }else{
  x=questions;
  let randomizer=Math.floor(Math.random()*x.length);
  currentQuestionObject=x[randomizer];
  question=x[randomizer].question;
  questionDisplay1.textContent=question;
  console.log(question);
  //reduceQuestions(question);
  }
};

function createPossibleAnswersPositive(x){
  currentQuestion=x;
  key=currentQuestion.compareKeyPositive;
    for(let i=0;i<=people.length-1;i++){
      person=people[i];
      item=Object.keys(people[i]);
        for(z=0;z<=item.length;z++){
          if(item[z]==key){
            possibilities.push(person);
          }
        }
      } people=possibilities;
        possibilities=[];
};
function createPossibleAnswersNegative(x){
  currentQuestion=x;
  key=currentQuestion.compareKeyNegative;
    for(let i=0;i<=people.length-1;i++){
      person=people[i];
      item=Object.keys(people[i]);
        for(z=0;z<=item.length;z++){
          if(item[z]==key){
            possibilities.push(person);
          }
        }
      } people=possibilities;
        possibilities=[];
};

function reduceQuestions(x){
  currentQuestion=x
  questionsAsked=questions.filter(category => (category.category==currentQuestion.category));
  questionsAsked.forEach(item =>{
      item.status="asked";
  });
  questions=questions.filter(question => (question.status=="not asked"));
};



function yes(x){
  if(people.length==1){
    guessPerson()
  }
  question=x
  createPossibleAnswersPositive(question);
  reduceQuestions(question);
  askQuestion();
}
function no(x){
  if(people.length==1){
    guessPerson()
  }
  question=x
  createPossibleAnswersNegative(question);
  reduceQuestions(question);
  askQuestion();
}


function guessPerson(){
      guess="Is it "+people[0].person+"?";
      guessing="guessing";
        questionDisplay1.textContent=guess;
        //after Guess is displayed yes button does something else (display the robot& dog?)
        //disable yes/no buttons
        //start button shows again'new game'.

};