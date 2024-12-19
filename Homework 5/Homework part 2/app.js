const book = {
    title: prompt("Enter the book title:"),
    author: prompt("Enter the author's name:"),
    readingStatus: confirm("Have you read this book? (click OK for Yes, Cancel for No)"),
    getInfo: function() {
        if (this.readingStatus) {
            return `Already read '${this.title}' by ${this.author}.`;
        } else {
            return `You still need to read '${this.title}' by ${this.author}.`;
        }
    }
};


console.log(book.getInfo());
