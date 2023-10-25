const data = [
    {
        id: 1,
        author: "mg mhat",
        title: "There is in the air",
        description: null,
        releaseDate: "12-3-2023",
        genres: [
            "fantasy",
            "high-fantasy",
            "adventure",
            "fiction",
            "thirll",
           "literature"
                
        ],
        hasMovie: false,
        pages: 1242,
        translation: {
            english: "THis is in the air",
            spanish: "လေ‌ထဲကအိမ်",
            japan : "ari ga tho go zike mak"
        }
    }, 
    {
        id: 2,
        author: "mg mhat",
        title: "There is on the ground",
        description: "This is a test for the app",
        releaseDate: "12-3-2023",
        genres: [
            "fantasy",
            "high-fantasy",
            "adventure",
            "fiction",
            "thirll",
           "literature"
                
        ],
        hasMovie: true,
        pages: 1242,
        translation: {
           english: "THis is in the air",
            spanish: "လေ‌ထဲကအိမ်",
            japan : "ari ga tho go zike mak"
        }
    },  
    {
        id: 3,
        author: "mg mhat",
        title: "There is in the water",
        description: "This is a test for the app",
        releaseDate: "12-3-2023",
        genres: [
            "fantasy",
            "high-fantasy",
            "adventure",
            "fiction",
            "thirll",
           "literature"
                
        ],
        hasMovie: true,
        pages: 1242,
        translation: {
            english: "THis is in the air",
            spanish: "လေ‌ထဲကအိမ်",
            japan : "ari ga tho go zike mak"
        },
        review : 12
    },  
]

function getBooks() {
    return data;
}

function getBook(id) {
    return data.find(d => d.id === id)
}

const books = getBooks();
const book = getBook(1);
book
const { title, author,description,hasMovie,genres,releaseDate,pages } = book
console.log(title, author, description, hasMovie, data);
const [ primary,secondary,...otherGeneres] = genres;
console.log(primary,secondary,otherGeneres)
    


//adding new property and update existing one by using spread operator
const updatedBook = {...book,author:"heinnthantsin",pages:1232,hasMovie:false,...book?.translation,korea: "ar nyor har sal yo",};
console.log(updatedBook);
const summary = `${title} is a book which is published on ${releaseDate.replaceAll('-','/')} written by ${author.toUpperCase()}`;
summary
pages > 1000 ? console.log(`Pages are more than 1000 pages and this book has ${pages}`) : "This book is less than 1000 pages";

console.log(hasMovie && "there is a movie based on this book")

const des = description ?? "There is no description";
des
console.log(des)
console.log("hello owrld");
