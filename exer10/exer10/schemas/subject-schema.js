export default {
    name: "subject",
    title: "Subject",
    type: "document",
    fields: [
        {
            name: "code",
            title: "Code",
            type: "string"
        },
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "desc",
            title: "Description",
            type: "string"
        },
        {
            name: "units",
            title: "Units",
            type: "number"
        },
        {
            name: "sem_offered",
            title: "Sem Offered",
            type: "array",
            of: [{type: "string"}]
        }
    ]
}