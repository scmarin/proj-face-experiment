export default subjectPage = {
    name: "subjectItem",
    title: "Subject Item",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string"
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            Options: { source: "name" }
        },
    ]
}