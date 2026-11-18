use KnowledgeDB

db.documents.insertMany([
  {
    title: "Leave policy",
    Category: "HR",
    content: "Employees can apply for annual leave",
    Keywords: ["Leave", "employees", "HR"]
  },
  {
    title: "Security policy",
    Category: "IT",
    content: "Users must protect their passwords",
    Keywords: ["security", "password", "IT"]
  }
])

db.document.createIndex({
  title: "text",
  content: "text"
})

db.document.find({
  $text: { $search: "password" }
})