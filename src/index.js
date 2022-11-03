import "./style.css";

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

    deleteEntry(deleteThis) {
        if (deleteThis > theCollection.length - 1) {
            alert("No such entry");
            return;
        }
        // going to update the class index properties?
        theCollection.splice(deleteThis - 1, 1);
    }

    getAllOfOneType(type) {
        let typeArray = [];
        theCollection.forEach((entry) => {
            if (entry.entryType == type) {
                typeArray.push(entry);
            }
        });
        console.log(typeArray);
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
    let newEntry = new Entry("Entry", "A pair of jeans", "Faithful denim.");
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
