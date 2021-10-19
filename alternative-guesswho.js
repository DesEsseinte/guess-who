let peopleMasterCopy=[
  {person:"Todd",  boy:"x",    glasses:"x",     blondeHair:"x",notBrownHair:"",notRedHair:"", notBlackHair:"",   shortHair:"x",notLongHair:"",  notBald:"",  noBeard:"",noBow:"",},
  {person:"Mike",  boy:"x",    glasses:"x",     brownHair:"x",notBlondeHair:"",notRedHair:"", notBlackHair:"",   longHair:"x", notShortHair:"", notBald:"",  beard:"x", noBow:"",},
  {person:"Ben",   boy:"x",    noGlasses:"",    blondeHair:"x",notBrownHair:"",notRedHair:"", notBlackHair:"",   longHair:"x", notShortHair:"", notBald:"",  beard:"x", noBow:"",},
  {person:"Angela", girl:"x",  glasses:"x",     blondeHair:"x",notBrownHair:"",notRedHair:"", notBlackHair:"",   shortHair:"x", notLongHair:"", notBald:"",  noBeard:"", noBow:"",},
  {person:"Emily",  girl:"x",  glasses:"x",     brownHair:"x",notBlondeHair:"",notRedHair:"", notBlackHair:"",   longHair:"x", notShortHair:"", notBald:"",  noBeard:"", noBow:"",},
  {person:"Ruth",   girl:"x",  noGlasses:"",    blondeHair:"x",notBrownHair:"",notRedHair:"", notBlackHair:"",   shortHair:"x", notLongHair:"", notBald:"",  noBeard:"", bow:"",},
  {person:"Victoria",girl:"x", noGlasses:"x",   redHair:"x", notBlondeHair:"",notBrownHair:"",notBlackHair:"",   longHair:"x", notShortHair:"", notBald:"",  noBeard:"",noBow:"",  },
  {person:"Matt",   boy:"x",   noGlasses:"x",   brownHair:"x",notBlondeHair:"",notRedHair:"",notBlackHair:"",    shortHair:"x",notLongHair:"",  notBald:"",  noBeard:"", noBow:"", },
  {person:"Edu",    boy:"x",   glasses:"x",     blackHair:"x",notBlondeHair:"",notBrownHair:"",notRedHair:"",    shortHair:"x",notLongHair:"",  notBald:"",  noBeard:"", noBow:"", },
  {person:"Abdulrahman", boy:"x", glasses:"x",  blackHair:"x",notBlondeHair:"",notBrownHair:"",notRedHair:"",    shortHair:"x",notLongHair:"",  notBald:"",  beard:"x",  noBow:"", },
  {person:"Cheryl",  girl:"x",  glasses:"x",    redHair:"x",notBlondeHair:"", notBrownHair:"",notBlackHair:"",   longHair:"x", notShortHair:"", notBald:"",  noBeard:"", bow:"x",  },
  {person:"Lucía",   girl:"x",  noGlasses:"x",  blackHair:"x",notBlondeHair:"",notBrownHair:"",notRedHair:"",    longHair:"x", notShortHair:"", notBald:"",  noBeard:"", noBow:"x",},
];
let people=peopleMasterCopy;
let possibilities=[];

let questions=[
  {question:"Is it a boy?",  compareKeyPositive:"boy", compareKeyNegative:"girl",  category:"sex", status:"not asked",},
  {question:"Is it a girl?", compareKeyPositive:"girl", compareKeyNegative:"boy", category:"sex",  status:"not asked",},

  {question:"Are they wearing glasses?", compareKeyPositive:"glasses",  compareKeyNegative:"noGlasses",category:"glasses",status:"not asked",},

  {question:"Are they blonde?",          compareKeyPositive:"blondeHair", compareKeyNegative:"notBlondeHair", category:"hairColor",  status:"not asked",},
  {question:"Do they have brown hair?",  compareKeyPositive:"brownHair",  compareKeyNegative:"notBrownHair",  category:"hairColor",  status:"not asked",},
  {question:"Have they got red hair?",   compareKeyPositive: "redHair",   compareKeyNegative:"notRedHair",    category:"hairColor",  status:"not asked",},
  {question:"Have they got black hair?", compareKeyPositive: "blackHair", compareKeyNegative:"notBlackHair",  category:"hairColor",  status:"not asked",},

  {question:"Do they have short hair?",  compareKeyPositive:"shortHair",  compareKeyNegative:"notShortHair", category:"hairLength",status:"not asked",},
  {question:"Do they have long hair?",   compareKeyPositive:"longHair",   compareKeyNegative:"notLongHair",  category:"hairLength",status:"not asked",},

  {question:"Do they have a beard?",    compareKeyPositive:"beard", compareKeyNegative:"noBeard",  category:"beard",  status:"not asked",},
  {question:"Have they got a bow?",     compareKeyPositive:"bow",   compareKeyNegative:"noBow",    category:"bow",    status:"not asked",},

  {question:"Are they bald?",          compareKeyPositive:"bald", compareKeyNegative:"notBald", category:"bald",  status:"not asked",},
];

let updatedQuestions=[];


let genderedQuestions=[
  {question:"Is she wearing glasses?",  compareKeyPositive:"glasses",   compareKeyNegative:"noGlasses",  category:"glasses",  gender:"female", status:"not asked",},
  {question:"Is he wearing glasses?",   compareKeyPositive:"glasses",   compareKeyNegative:"noGlasses",  category:"glasses",  gender:"male",   status:"not asked",},
  {question:"Is she blonde?",           compareKeyPositive:"blondeHair",compareKeyNegative:"brownHair",  category:"hairColor",gender:"female", status:"not asked",},
  {question:"Has he got brown hair?",   compareKeyPositive:"brownHair", compareKeyNegative:"blondeHair", category:"hairColor",gender:"male",   status:"not asked"},
]

const startBtn=document.querySelector("#startBtn");
const yesBtn=document.querySelector("#yesBtn");
const noBtn=document.querySelector("#noBtn");
const questionDisplay1=document.querySelector("#questionDisplay1");
const questionDisplay2=document.querySelector("#questionDisplay2");

let gameState="";
let answer='';

let sex='';
let hairColor='';
let hairLength='';



                                          //code for starting game.
      startBtn.addEventListener('click', ()=>{
        if (gameState=="gameover"){
          questionDisplay2.textContent="";
          questionDisplay1.textContent="";
          gameState="playing";
          askQuestion(questions);
        }else if(gameState=="playing"){

        }else{
          askQuestion(questions);
        }
      });



                                          //code for yes and no buttons:
      yesBtn.addEventListener('click', ()=>{
        if(gameState=="guessing"){
          gameOver();
        }else if(gameState=="gameover"){

        }else{
          yes(currentQuestionObject);
        }
      });

      noBtn.addEventListener('click', ()=>{
        if(gameState=="guessing"){
          gameOver();
        }else if(gameState=="gameover"){

        }else{
          no(currentQuestionObject);
        }
      });

                                            //code executed when 'yes' or 'no' button is fired.

      function yes(currentQuestionObject){
        question=currentQuestionObject;
        answer='yes';
        createPossibleAnswersPositive(question);
        evaluateQuestion(question);
        reduceQuestionsByCategory(question);
        askQuestion(updatedQuestions);

      }

      function no(currentQuestionObject){
        question=currentQuestionObject;
        answer='no';
        createPossibleAnswersNegative(question);
        checkGirl(question);
        checkBoy(question);
        reduceQuestions(question)
        askQuestion(updatedQuestions);
      }
                                          //These functions eliminate irrelevant questions based on different criteria.

  function evaluateQuestion(currentQuestionObject){
              checkBoy(currentQuestionObject);
              checkGirl(currentQuestionObject)
              checkHairColor(currentQuestionObject);
              checkHairLength(currentQuestionObject);
              checkBald(currentQuestionObject);
            }



          function checkGirl(currentQuestionObject){
            if(answer=='yes'&&currentQuestionObject.compareKeyPositive=='girl'||currentQuestionObject.compareKeyPositive=='bow'){  //create separate funciton for bow
              sex='girl';
                questions[9].status='asked';
                questions[11].status='asked';
            }else if(answer=='no'&&currentQuestionObject.compareKeyNegative=='girl'){
              sex='girl';
                questions[9].status='asked';
                questions[11].status='asked';
                questions[0].status='asked';
                questions[1].status='asked';
              }
          }

          function checkBoy(currentQuestionObject){
            if(answer=='yes'&&currentQuestionObject.compareKeyPositive=='boy'||currentQuestionObject.compareKeyPositive=='beard'){  //create separate function for beard.
              sex='boy';
                questions[10].status='asked';
            }else if(answer=='no'&&currentQuestionObject.compareKeyNegative=='boy'){
              sex='boy';
                questions[10].status='asked';
                questions[0].status='asked';
                questions[0].status='asked';
                questions[1].status='asked';
            }
          }


          function checkHairColor(currentQuestionObject){
            if(currentQuestionObject.category=='hairColor' && answer=='yes'){
              hairColor=currentQuestionObject.compareKeyPositive;
              questions[11].status='asked';
            }
          }
          function checkHairLength(currentQuestionObject){
            if(currentQuestionObject.category=='hairLength'){
              hairLength=currentQuestionObject.compareKeyPositive;
              questions.forEach(item =>{
                if(item.category=='bald'){
                  item.status='asked';
                }
              });
            }
          }
          function checkBald(currentQuestionObject){
            if(currentQuestionObject.category=='bald'&& answer=='yes'){
                currentQuestionObject.status=='asked';
                sex='boy';
              questions.forEach(item =>{
                if(item.category=='hairColor'||item.category=='hairLength'||item.category=='bow'||item.category=='gender'){
                  item.status="asked";
                }
              });
            }
          };

                                                  //askQuestions() fired when 'start'/'new game' or 'yes' or 'no' buttons pressed.
function askQuestion(questionArray){
  if(people.length==1){
    guessPerson()
  }else{
  x=questionArray;
  let randomizer=Math.floor(Math.random()*x.length);
  currentQuestionObject=x[randomizer];
  question=x[randomizer].question;
  questionDisplay1.textContent=question;
    }
  };

/*
function askQuestion(questionArray){
  if(people.length==1){
    guessPerson()
  }else{
  x=questionArray;
  let randomizer=Math.floor(Math.random()*x.length);
  currentQuestionObject=x[randomizer];
  isQuestionRelevant(currentQuestionObject,questionArray);
    }
  };

  function isQuestionRelevant(currentQuestionObject, questionArray){
      for(i=0;i<=people.length-1;i++){
          person=people[i];
          items=Object.keys(people[i])
        for(z=0;z<=items.length-1;z++){
          if(items[z]==currentQuestionObject.compareKeyPositive){
              question=currentQuestionObject.question;
              questionDisplay1.textContent=question;
              relevant=1;
          }
        }
      }
    }
*/

                                              //code below depopulates list of people as game moves on.
function createPossibleAnswersPositive(currentQuestionObject){
  currentQuestion=currentQuestionObject;
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
function createPossibleAnswersNegative(currentQuestionObject){
  currentQuestion=currentQuestionObject;
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

                                                                    //Code below modifys question arrays.
function reduceQuestions(currentQuestionObject){
  currentQuestionObject.status='asked'
  updatedQuestions=questions.filter(question => (question.status=='not asked'));
}

function reduceQuestionsByCategory(currentQuestionObject){
  currentQuestion=currentQuestionObject;
  questionsToRemove=questions.filter(category => (category.category==currentQuestion.category));
  questionsToRemove.forEach(item =>{
      item.status="asked";
  });
  updatedQuestions=questions.filter(question => (question.status=="not asked"));
};



                                                                //code below to end game and restart next round.
function guessPerson(){
      guess="Is it "+people[0].person+"?";
      gameState="guessing";
        questionDisplay1.textContent=guess;
};

function gameOver(){
  questionDisplay2.textContent="😀 Let's play again.";
  gameState="gameover";
  startBtn.textContent="New game";
  people=peopleMasterCopy;
  possibilities=[];
  updatedQuestions=[];
  questions.forEach(item => {
      item.status="not asked";
  });
}