"use strict";

class Entry {
    constructor(entryType, entryName, entryDescription) {
        this._entryType = entryType;
        this._entryName = entryName;
        this._entryDescription = entryDescription;
        this._entryIndex = theCollection.length + 1;
    }

    get entryType() {
        return this._entryType;
    }

    get entryName() {
        return this._entryName;
    }

    get entryDescription() {
        return this._entryDescription;
    }
}

class Book extends Entry {
    constructor(entryType, entryName, entryDescription, pageLength, haveRead) {
        super(entryType, entryName, entryDescription);
        this._pageLength = pageLength;
        this._haveRead = haveRead;
    }

    get pageLength() {
        return this._pageLength;
    }

    get haveRead() {
        return this._haveRead;
    }
}

let theCollection = [];

const newBtn = document.getElementById("new-entry");
const editBtn = document.getElementById("edit-entry");

newBtn.addEventListener("click", () => {
    console.log("new clicked");
    createEntry();
    console.log(theCollection[theCollection.length - 1].entryName);
});

editBtn.addEventListener("click", () => {
    console.log("edit clicked");
    createEntryBook();
    console.log(theCollection[theCollection.length - 1].entryName);
});

function createEntry() {
    let newEntry = new Entry(
        "Book",
        "Pale Fire",
        "The best novel ever written."
    );
    theCollection.push(newEntry);
}

function createEntryBook() {
    let newBook = new Book(
        "Book",
        "Bend Sinister",
        "One of my top 5 Nabokov novels.",
        221,
        true
    );
    theCollection.push(newBook);
}
