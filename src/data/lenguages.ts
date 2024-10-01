import { Lenguage } from "@/types";

// The data for the programming lenguages in the rightSideBar.
const programmingLenguages: Lenguage[] = [
    {
        id: '1',
        name: 'HTML',
        progress: 90
    },
    {
        id: '2',
        name: 'CSS',
        progress: 80
    },
    {
        id: '4',
        name: 'JavaScript',
        progress: 80
    },
    {
        id: '3',
        name: 'TypeScript',
        progress: 70
    },
    {
        id: '5',
        name: 'Python',
        progress: 50
    }
]

// The data for the other lenguages in the rightSideBar.
const otherLenguages: Lenguage[] = [
    {
        id: '6',
        name: 'Spanish',
        progress: 100
    },
    {
        id: '7',
        name: 'English',
        progress: 40
    }
]

export {
    programmingLenguages,
    otherLenguages
}