export type QuestionAnswers = {
    id: number, 
    title: string, 
    questions: string[],
    currect: number
}


export const questions_answers:  QuestionAnswers[] = [
  

            {
                id: 1, 
                title: 'Qual o País que inventou o Futebol?',

                questions: [
                    ' a) Brasil ',
                    ' b) Argentina',
                    ' c) Inglaterra',
                    ' d) Japão', 
                ],

                currect: 2,
            },

            {
                id: 2, 
                title: 'Quem descobriu a teoria da Relatividade',
                questions: [
                     'a) Isaac Newton',
                     'b) Sócrates',
                     'c) Bleise Pascal',
                     'd) Albert Einstein', 
                ],

                currect: 3
            },

            {
                id: 4, 
                title: 'Qual número é usado para calcular a área da circunferência?',
                questions: [
                     'a) 2,72',
                     'b) 17,28',
                     'c) 3,14',
                     'd) 1,34', 
                ],

                currect: 2
            }     
    
]