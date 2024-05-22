export type QuestionAnswers = {
    id: number, 
    title: string, 
    questions: string[],
    currect: number,
    image: string,
    description: string,
}

export const questions_answers:  QuestionAnswers[] = [
  

            {
                id: 1, 
                title: 'Qual o País inventou o Futebol?',

                questions: [
                    ' a) Brasil ',
                    ' b) Argentina',
                    ' c) Inglaterra',
                    ' d) Japão', 
                ],

                currect: 2,
                image: 'https://lncimg.lance.com.br/cdn-cgi/image/width=1300,height=750,quality=75,background=white,fit=pad/uploads/2020/04/29/5ea9bd774548a.jpeg',
                description: 'De forma oficial, quem inventou o futebol moderno foram os ingleses em 1863.',
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

                currect: 3,
                image: 'https://i0.wp.com/www.blogueirinho.com/wp-content/uploads/2024/02/Como-Albert-Einstein-morreu.webp?resize=1200%2C720&ssl=1',
                description: 'As ideias apresentadas por Einstein há mais um século ainda ecoam e vibram nos estudos científicos mais modernos que você imaginar.',


            },

            {
                id: 4, 
                title: "  Qual é a derivada de  𝑓(𝑥) = + 2𝑥 + 1? ",
                questions: [
                     'a) 3x + 2',
                     'b) 6x + 2',
                     'c) 6x + 1',
                     'd) 3x^2', 
                ],

                currect: 1,
                image: 'https://economiamainstream.com.br/wp-content/uploads/2022/03/Capturar5-1.jpg',
                description: 'A resposta é 6x + 2'

            },
            
            {
                id: 5, 
                title: " Qual é o rio mais longo do mundo? ",
                questions: [
                     'a) Amazonas',
                     'b) Nilo',
                     'c) Yangtzé',
                     'd) Mississipi', 
                ],
// John von Neumann
                currect: 0,
                image: 'https://s4.static.brasilescola.uol.com.br/be/2022/05/floresta-amazonica-rio-amazonas.jpg',
                description: 'A resposta é Rio Amazonas'

            },
            
            {
                id: 6, 
                title: " Quem desenvolveu arquitetura de computação atual? ",
                questions: [
                     'a) Alan Turing',
                     'b) John von Neumann',
                     'c) Ada Lovelace',
                     'd) Charles Babbage', 
                ],

                currect: 1,
                image: 'https://t.ctcdn.com.br/1qst09KVV2OuxdhglAzrznnSK2M=/1024x0/smart/i841659.jpeg',
                description: 'John von Neumann desenvolveu a arquitetura que leva seu nome: Von Neumann'

            },

            {
                id: 7, 
                title: "Qual é o principal objetivo do Telescópio Espacial James Webb?",
                questions: [
                     'a) Verificar se a Terra é Plana',
                     'b) Captar radiação vindo de exoplanetas',
                     'c) Verificar se há vida inteligente',
                     'd) Explorar as primeiras galáxias e estrelas.', 
                ],

                currect: 3,
                image: 'https://science.nasa.gov/wp-content/uploads/2023/06/jwst-spacecraftpotentialtargetsmontageflip-1200px-4-jpg.webp?w=1200',
                description: ' o James Webb é otimizado para observações no infravermelho. Isso permite que ele veja galáxias e estrelas através de nuvens de poeira interestelar'

            },

            {
                id: 8, 
                title: "O que é a lei de Coulomb e onde ela é usado?",
                questions: [
                     'a) Uma lei da termodinâmica',
                     'b) Usado p/calcular a densidade da massa de um corpo',
                     'c) força de atração ou repulsão',
                     'd) Uma fórmula pra calcular a circunferência.', 
                ],

                currect: 2,
                image: 'https://i0.wp.com/fisicaparaoenem.com/wp-content/uploads/_pda/2021/05/002-Lei-de-Coulomb.png?fit=1920%2C1080&ssl=1',
                description: ' A lei de Coulomb descreve a força de atração ou repulsão entre duas cargas elétricas pontuais. '

            },
            {
                id: 9, 
                title: "Qual evento é considerado o marco inicial da Revolução Francesa?",
                questions: [
                     'a) A tomada da Bastilha',
                     'b) A Declaração dos Direitos do Homem e do Cidadão',
                     'c) A morte de Luis XVI',
                     'd)  A Convenção Nacional', 
                ],

                currect: 0,
                image: 'https://static.historiadomundo.com.br/2021/05/revolucao-francesa.jpg',
                description: ' A queda da Bastilha marcou o início da queda do antigo regime e a ascensão das ideias de liberdade, igualdade e fraternidade.'
                
            },
            
    
]