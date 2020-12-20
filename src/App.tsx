import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import QuestionCard from './Components/QuestionCard';
import { getQuizdetails } from './services/quiz_service';
import { QuestionType } from './Types/quiz_types'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import galaxy from './../src/galaxy.png';

const useStyles = makeStyles((theme) => ({
  App:{
    backgroundImage:`url(${galaxy})`,
    width:'100%',
    backgroundSize:'cover',
    height:'656px',
    paddingTop:'1px'
  },
  resultcard: {
    width: '500px',
    marginTop: '3%',
    marginLeft: '30%',
    paddingTop: '10px',
    paddingBottom: '5px',
    paddingLeft: '5px',
    paddingRight: '8px',
    backgroundColor: '#c7dada',
    textAlign: 'center'
  },
  btn: {
    marginTop: '132px',
    backgroundColor:'#e866d6',
    padding: '12px 10px 12px 10px',
    marginLeft: '39%',
    width: '20%',
    bordeRadius: '15px',
    border: 'transparent',
    fontVariant: 'all-petite-caps',
    fontSize: 'larger',
  }
}))

function App() {
  const classes = useStyles();
  const [quiz, setQuiz] = useState<QuestionType[]>([])
  let [currentStep, setcurrentStep] = useState(0)
  let [score, setScore] = useState(0)
  let [showResult, setshowResult] = useState(false)
  let [gameOver, setgameOver] = useState(true)
  let [startQuiz, setstartQuiz] = useState(false)



  useEffect(() => {

    async function fetchData() {
      const questions: QuestionType[] = await getQuizdetails(5, 'easy');
      setQuiz(questions)

    }
    fetchData();
  }, []);

  const startingQuiz = () => {
    setstartQuiz(true);
    setgameOver(false);
    setcurrentStep(0);
      setScore(0);
      setshowResult(false);
  }

  const handleSubmit = (e: React.FormEvent<EventTarget>, userAns: string) => {
    e.preventDefault();

    let currentQuestion: QuestionType = quiz[currentStep];
    // console.log(userAns + "---" + currentQuestion.correctAnswer);


    if (userAns === currentQuestion.correctAnswer) {
      setScore(++score);
    }


    if (currentStep !== quiz.length - 1)
      setcurrentStep(++currentStep)

    else {
      // alert("you got "+score+" out of"+quiz.length)
      
      setshowResult(true);
      setgameOver(true)
    }
  }


  if (!quiz.length) {
    return <h3> Loading...</h3>
  }
  if (showResult) {
    return (
      <div className={classes.App}>
        <div>
          <button className={classes.btn} onClick={startingQuiz}>
            Start
         </button>
        </div>
        <Paper className={classes.resultcard}>
          <h3>Result</h3>
          <p>You got <b>{score}</b> out of <b>{quiz.length}</b></p>
        </Paper>
      </div>
    )
  }


  return (
    <div className={classes.App}>
     
      <h1 style={{ textAlign: 'center' ,color:'whitesmoke'}}>REACT QUIZ</h1>

      {gameOver ? (
        <button className={classes.btn} onClick={startingQuiz} >
          Start
        </button>) : null}

      {!gameOver && startQuiz && (
        <QuestionCard
          options={quiz[currentStep].option}
          question={quiz[currentStep].question}
          callback={handleSubmit}
        />)}
    </div>
  );
}
export default App;
