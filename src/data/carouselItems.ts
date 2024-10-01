import { Item } from "@/types";

// The data for the carousel items in the portfolio section .
const firstItems: Item[] = [
    { id: '1', img:'/React.webp', title: 'ReactJS projects', description: `It's a repository focused on making projects using React JS`,},
    { id: '2', img:'/Pag-1.png', title: 'Project 1 - GuitarLA', description: 'In this project, a guitar shopping cart was created. The initial hooks were used, and later the project was migrated from JavaScript to TypeScript.' },
    { id: '3', img:'/Pag-2.png', title: 'Project 2 - TipCalculator ', description: 'This project manages orders, allowing users to add orders, remove existing ones, and clear the state. Additionally, the main feature is that tips can be added to the total amount.' },
    { id: '4', img:'/pag-3.png', title: 'Project 3 - CalorieCounter', description: 'In this project, we developed a calorie counter where we can log the foods we eat along with their corresponding calorie amounts. Additionally, it allows us to input the amount of exercise done and the calories burned. This way, we can accurately track whether, by the end of the day, we have consumed more calories than we have burned' }
]

export {
    firstItems
}