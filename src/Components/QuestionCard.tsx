import React, { useState } from 'react'
import {QuestionPropsType} from './../Types/quiz_types'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
 question:{
     width:'500px',
     marginTop:'3%',
     marginLeft:'30%',
     paddingTop:'10px',
     paddingLeft:'5px',
     paddingRight:'8px',
     backgroundColor:'#c7dada'
 },
 submit:{
     backgroundColor:'#5e5eec',
     color:'white',
     padding:'10px',
     marginTop:'10px',
     marginLeft:'100px',
     width:'260px',
     marginBottom:'11px',
 },
 input:{
     marginTop:'10px',
     display:'block'
 }
}));


  

 const QuestionCard:React.FC<QuestionPropsType>=({options, question,callback})=>{
    const classes = useStyles();
    let [selectedAns,setSelectedAns]=useState("");
    const handleSelection=(ev:any)=>{
        // console.log(ev.target.value);
        setSelectedAns(ev.target.value)
    }
    return(
        <div className="question-container">
            {/* className="question" */}
            
               <Paper className={classes.question} elevation={9}><b>{question}</b>
            
            <form onSubmit={(e:React.FormEvent<EventTarget>)=>callback(e,selectedAns)}>
                {
                    options.map((opt:string,ind:number)=>{
                        return(
                            <div className={classes.input} key={ind}>
                            <label >
                                <input type="radio" 
                                name="opt"
                                value={opt}
                                // className={classes.input}
                                required
                                checked={selectedAns===opt}
                                onChange={handleSelection} />
                                {opt}
                                
                            </label>
                            </div>
                        )
                    })
                }
                <input type="submit" className={classes.submit} />

            </form>
            </Paper>
        </div>
    )
}
export default QuestionCard;