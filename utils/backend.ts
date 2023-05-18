const data = [
    {
      "id": "36e06d4a-e12b-418a-9f2f-f56157ad5e32",
      "title": "Unifying Theories of Programming",
      "author": "Charles Antony Richard Hoare",
      "description": "This book provides a synthesis of the theory of programming. It aims to use mathematical theory of programming to provide a similar basis for specification, design and implementation of programs. It is wide ranging both in its subject matter and also in its approach and style. The first five chapter...",
      "status": "to_read",
      "tags": [
        "ios",
        "html",
        "ada",
        "styles",
        "mobile",
        "c#",
        "unit"
      ]
    },
    {
      "id": "a4b9f1a8-8e88-4795-9c1e-d0cffe718565",
      "title": "Scala",
      "author": "Thomas Much",
      "description": "Now in its fifth edition, JAVASCRIPT guides beginning programmers through Web application development using the JavaScript programming language. As with previous editions of this book, Don Gosselin introduces key Web authoring techniques with a strong focus on industry application. A real-world proj. undefined...",
      "status": "finished",
      "tags": [
        "c++"
      ]
    },
    {
      "id": "5e307166-8b99-49e9-8016-2f2eab5b6852",
      "title": "CSS Hacks and Filters",
      "author": "Joseph Lowery",
      "description": "Cascading Style Sheets (CSS) is a method of describing how a Web page should look in a Web browser, but a growing number of browsers do not support CSS in the same way, forcing developers to constantly play catch-up to keep their sites consistent Bestselling author Joe Lowery eases the pain for thos...",
      "status": "to_read",
      "tags": [
        "php",
        "digital",
        "less",
        "latest"
      ]
    },
    {
      "id": "ddf138c4-f55c-438d-82cd-893eb75224f6",
      "title": "Il Libro di Rut, volgarizzato in dialetto Siciliano dall' Avv. Luigi Scala",
      "author": "Матросов Александр Васильевич",
      "description": "Представлен весь спектр технологий создания Web-документов (начиная от простейших - статических - и до документов на основе динамического HTML), включая форматирование текста, создание списков, таблиц, форм, применение графики, каскадных таблиц стилей, встраивание различных объектов, использование с...",
      "status": "finished",
      "tags": []
    },
    {
      "id": "c36037b0-fbc8-4cba-87f8-c6e75760ddce",
      "title": "Черные дыры и молодые вселенные",
      "author": "Стивен Хокинг",
      "description": "Впервые лекция под названием «Черные дыры и молодые вселенные» была прочитана в Калифорнийском университете в Беркли. Дополненная размышлениями Стивена Хокинга на эту и смежные темы, она стала частью настоящего сборника, составленного из 13 эссе и развернутого интервью.На этих страницах самый извест...",
      "status": "to_read",
      "tags": [
        "mobile",
        "jar",
        "unit",
        "js",
        "awesome",
        "tree"
      ]
    }
]



export async function getBooks() {
    return {
        status: 200, 
        data: data 
    };
}

export async function updateBook(id, title, status, tags, author, description) {
    console.log('trust me, its updated')
    return {
        status: 200
    }
}

export async function deleteBook(id) {
    console.log('trust me, its deleted')
    return {
        status: 204
    }
}

export async function getUser(id) {
    return {
        status: 200,
        data: {
            name: 'test',
            password: 'test123',
            role: 'admin', 
        }
    }
}