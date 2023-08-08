export let greeting = "Hello, Sean!";
export const subjectsList = [
    {
        code: "CMSC 12",
        title: "Foundations of Computer Science",
        desc: "An overview of the major areas of computer science.",
        units: 3,
        sem_offered: [
            "1",
            "2"
        ]
    },
]

export function getGreeting() {
    return greeting;
}

export function getSubjectsList() {
    return subjectsList;
}

export function addSubject(subjectData) {
    subjectsList.push(subjectData)
}

export function deleteSubject(code) {
    let index = subjectsList.findIndex((subject) => subject.code === code)
    subjectsList.splice(index, 1)
}