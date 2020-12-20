export type Quiz = {
    category:string
    correct_answer: string
    difficulty: string
    incorrect_answers:string[]
    question: string
    type: string
}

export type QuestionType={
    question:string
    answer:string
    option:string[]
    correctAnswer:string
}

export type QuestionPropsType={
    options:string[]
     question:string
     callback:(e:React.FormEvent<EventTarget>,ans:string)=>void
}