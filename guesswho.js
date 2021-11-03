let peopleMasterCopy=[
  {person:"Todd",   id:0,  boy:"x",    glasses:"x",     blondeHair:"x",notBrownHair:"",notRedHair:"", notBlackHair:"",   shortHair:"x",notLongHair:"",  notBald:"",  noBeard:"",noBow:"", status:'notDisplayed',},
  {person:"Mike",   id:1,  boy:"x",    glasses:"x",     brownHair:"x",notBlondeHair:"",notRedHair:"", notBlackHair:"",   longHair:"x", notShortHair:"", notBald:"",  beard:"x", noBow:"",status:'notDisplayed', },
  {person:"Ben",    id:2,  boy:"x",    noGlasses:"",    blondeHair:"x",notBrownHair:"",notRedHair:"", notBlackHair:"",   longHair:"x", notShortHair:"", notBald:"",  beard:"x", noBow:"",status:'notDisplayed', },
  {person:"Angela", id:3,  girl:"x",  glasses:"x",     blondeHair:"x",notBrownHair:"",notRedHair:"", notBlackHair:"",   shortHair:"x", notLongHair:"", notBald:"",  noBeard:"", noBow:"",status:'notDisplayed', },
  {person:"Emily",  id:4,  girl:"x",  glasses:"x",     brownHair:"x",notBlondeHair:"",notRedHair:"", notBlackHair:"",   longHair:"x", notShortHair:"", notBald:"",  noBeard:"", noBow:"",status:'notDisplayed', },
  {person:"Ruth",   id:5,  girl:"x",  noGlasses:"",    blondeHair:"x",notBrownHair:"",notRedHair:"", notBlackHair:"",   shortHair:"x", notLongHair:"", notBald:"",  noBeard:"", bow:"",status:'notDisplayed',   },
  {person:"Victoria",id:6, girl:"x", noGlasses:"x",   redHair:"x", notBlondeHair:"",notBrownHair:"",notBlackHair:"",   longHair:"x", notShortHair:"", notBald:"",  noBeard:"",noBow:"",status:'notDisplayed',   },
  {person:"Matt",   id:7,  boy:"x",   noGlasses:"x",   brownHair:"x",notBlondeHair:"",notRedHair:"",notBlackHair:"",    shortHair:"x",notLongHair:"",  notBald:"",  noBeard:"", noBow:"",status:'notDisplayed', },
  {person:"Edu",    id:8,  boy:"x",   glasses:"x",     blackHair:"x",notBlondeHair:"",notBrownHair:"",notRedHair:"",    shortHair:"x",notLongHair:"",  notBald:"",  noBeard:"", noBow:"",status:'notDisplayed', },
  {person:"Abdulrahman",id:9, boy:"x", glasses:"x",  blackHair:"x",notBlondeHair:"",notBrownHair:"",notRedHair:"",    shortHair:"x",notLongHair:"",  notBald:"",  beard:"x",  noBow:"", status:'notDisplayed',  },
  {person:"Cheryl", id:10, girl:"x",  glasses:"x",    redHair:"x",notBlondeHair:"", notBrownHair:"",notBlackHair:"",   longHair:"x", notShortHair:"", notBald:"",  noBeard:"", bow:"x", status:'notDisplayed',  },
  {person:"Lucía",  id:11, girl:"x",  noGlasses:"x",  blackHair:"x",notBlondeHair:"",notBrownHair:"",notRedHair:"",    longHair:"x", notShortHair:"", notBald:"",  noBeard:"", noBow:"x",status:'notDisplayed', },

  {person:"Max",    id:12,  boy:"x",    noGlasses:"x",  brownHair:"x", notBlondeHair:"",notRedHair:"",notBlackHair:"",   shortHair:"x",notLongHair:"",  notBald:"",  beard:"x",  noBow:"",status:'notDisplayed',},
  {person:"Javier", id:13,  boy:"x",    noGlasses:"x",  brownHair:"x", notBlondeHair:"",notRedHair:"",notBlackHair:"",   longHair:"x", notShortHair:"", notBald:"",  noBeard:"", noBow:"", status:'notDisplayed', },
  {person:"Phillip", id:14,  boy:"x",    glasses:"x",    redHair:"x",   notBlondeHair:"",notBrownHair:"",notBlackHair:"", shortHair:"x",notLongHair:"",  notBald:"",  noBeard:"", noBow:"",status:'notDisplayed', },
  {person:"Renato", id:15,  boy:"x",    noGlasses:"x",  bald:"x",      notBlackHair:"", notBlondeHair:"",notBrownHair:"",notRedHair:"", notLongHair:"", notShortHair:"",beard:"x",noBow:"",status:'notDisplayed', },
  {person:"Kate",   id:16,  girl:"x",   glasses:"x",    redHair:"x",   notBlondeHair:"",notBrownHair:"",notBlackHair:"", shortHair:"x",notLongHair:"",  notBald:"",  noBeard:"", noBow:"", status:'notDisplayed', },
  {person:"Jiao-Hu",id:17,  girl:"x",   noGlasses:"x",  blackHair:"x", notBlondeHair:"",notBrownHair:"",notRedHair:"",   longHair:"x", notShortHair:"", notBald:"",  noBeard:"", bow:"x", status:'notDisplayed',  },
  {person:"Kiara",  id:18,  girl:"x",   noGlasses:"x",  brownHair:"x", notBlondeHair:"",notRedHair:"",notBlackHair:"",   longHair:"x", notShortHair:"", notBald:"",  noBeard:"", noBow:"",status:'notDisplayed',  },
  {person:"James",  id:19,  boy:"X",    noGlasses:"X",  blackHair:"x", notBlondeHair:"",notBrownHair:"",notRedHair:"",   longHair:"x", notShortHair:"", notBald:"",  noBeard:"", noBow:"",status:'notDisplayed',  },
  {person:"Isabel", id:20,  girl:"x",   noGlasses:"x",  blackHair:"x", notBlondeHair:"",notBrownHair:"",notRedHair:"",   shortHair:"x",notLongHair:"",  notBald:"",  noBeard:"", noBow:"",status:'notDisplayed',  },

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
let genderedQuestions=[
  {question:"Is she wearing glasses?",  compareKeyPositive:"girlGlasses",   compareKeyNegative:"noGlasses",  category:"glasses",  gender:"female", status:"not asked",},
  {question:"Is he wearing glasses?",   compareKeyPositive:"boyGlasses",   compareKeyNegative:"noGlasses",  category:"glasses",  gender:"male",   status:"not asked",},
  {question:"Is she blonde?",           compareKeyPositive:"girlBlondeHair",compareKeyNegative:"brownHair",  category:"hairColor",gender:"female", status:"not asked",},
  {question:"Has he got brown hair?",   compareKeyPositive:"boyBrownHair", compareKeyNegative:"blondeHair", category:"hairColor",gender:"male",   status:"not asked"},
]

const startBtn=document.querySelector("#startBtn");
const yesBtn=document.querySelector("#yesBtn");
const noBtn=document.querySelector("#noBtn");
const questionDisplay1=document.querySelector("#questionDisplay1");
const questionDisplay2=document.querySelector("#questionDisplay2");
const gameBoard=document.querySelector(".gameBoard");

let gameState="";
let answer='';

let sex='';
let hairColor='';
let hairLength='';
let relevant=0;


                                          //code for starting game.
      startBtn.addEventListener('click', ()=>{
        if (gameState=="gameover"){
          questionDisplay2.textContent="";
          questionDisplay1.textContent="";
          gameState="playing";
          clearGameBoard();
          displayCharacters();
          askQuestion(questions);
        }else if(gameState=="playing"){
          gameOver();
          questionDisplay2.textContent="";
          questionDisplay1.textContent="";
          gameState="playing";
          clearGameBoard();
          displayCharacters();
          askQuestion(questions);
        }else{
          displayCharacters();
          askQuestion(questions);

        }
      });


              function displayCharacters(){
                while(gameBoard.childElementCount<21){
                  let gameBoardCard=document.createElement('div');
                  gameBoard.appendChild(gameBoardCard);
                  gameBoardCard.classList.add('gameBoardCard')
                  selectCharacterBackground(gameBoardCard);
                }
              }

                  function selectCharacterBackground(gameBoardCard){
                    available=people.filter(individual=>(individual.status=='notDisplayed'));
                    number=Math.floor(Math.random()*available.length);
                    name=available[number].person.toLowerCase();
                    gameBoardCard.classList.add(name);
                    available[number].status='displayed';
                  };


                function clearGameBoard(){
                  while(gameBoard.childElementCount!=0){
                      gameBoard.removeChild(gameBoard.firstChild);
                  }
                }




                                              //code for yes and no buttons events:
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
        askQuestion(questions);

      }

      function no(currentQuestionObject){
        question=currentQuestionObject;
        answer='no;'
        createPossibleAnswersNegative(question);
        askQuestion(questions);
      }

                                                  //askQuestions() fired when 'start'/'new game' or 'yes' or 'no' buttons pressed.

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
            relevant=0;
          for(i=0;i<=people.length-1;i++){
            person=people[i];
            items=Object.keys(people[i])
              for(z=0;z<=items.length-1;z++){
                if(items[z]==currentQuestionObject.compareKeyPositive){
                  relevant +=1;
                }
              }
            }
            askOrEliminate(currentQuestionObject,relevant);
        };

                function askOrEliminate(currentQuestionObject,relevant){
                  if(relevant>0 && relevant!=people.length){
                    question=currentQuestionObject.question;
                    questionDisplay1.textContent=question;
                  }else if(relevant==0 || relevant==people.length){
                    console.log(currentQuestionObject);
                    console.log("irrelevant question...trying again")
                    askQuestion(questions);
                  }
                }



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
  people.forEach(item=>{
    item.status='notDisplayed';
  })
  possibilities=[];
  updatedQuestions=[];
  questions.forEach(item => {
      item.status="not asked";
  });
}