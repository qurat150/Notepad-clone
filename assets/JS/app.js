const addNoteBtn = document.querySelector(".addNote-btn");
const addTitle = document.querySelector(".note-title");
const titleModal = document.querySelector(".titleModal");
// When Modals opens Background opacity should loww;
let backgroundOpacity = document.querySelector(".opacity");
let gettingContent = document.querySelector("#textArea");

// LOCAL STORAGE HANDLINGG
let notes = [];
const updateLSDate = () => {
    const noteData = document.querySelectorAll("textArea")
    noteData.forEach((curData) => {
        console.log(curData);
    })
    localStorage.setItem("notes", gettingNoteTitle)
}

// Open Modal when add Note button clicked ! For Asking note Title
const displayModalForGettingNoteTitle = () => {
    titleModal.style.display = "flex";
    backgroundOpacity.style.display = "flex"
}
addNoteBtn.addEventListener("click", () => {
    displayModalForGettingNoteTitle()
})
// Note Creation
let i = 0;
let notesIdStored = [];
const createNote = document.querySelector("#addNote");
const addNoteHandler = () => {
    let gettingNoteTitle = document.querySelector("#gettingNoteTitle").value
    console.log(gettingNoteTitle);
    let noteDivCreation = document.createElement("div")
    noteDivCreation.classList.add("note")
    noteDivCreation.classList.add("relative")
    let htmlNoteData =
        `
        <div class="contentModal flex" id="imNote${i}">
            <div class="openModal relative">
                <textarea name="textArea" id="textArea" placeholder="Write the Content" cols="129" rows="30"></textarea>
                <button class="flex saveBtn">Save</button>
            </div>
        </div>
        <div class="text">
            <img class="notepad-img" id="imNote${i}" src="./assets/images/ui2.jfif" alt="Notepad">
            <div class="note-title flex">${gettingNoteTitle ? gettingNoteTitle : "untitled"}</div>
        </div>`
    noteDivCreation.innerHTML = htmlNoteData;
    document.querySelector(".note-main").append(noteDivCreation)
    notesIdStored.push(noteDivCreation.childNodes[1].id);
    i++;
    document.querySelector("#gettingNoteTitle").value = ""
    // Note Creation and append Finished !
}
createNote.addEventListener("click", addNoteHandler)

// Open Modal For Writing the content when click on Note
const notePressed = (e) => {
    // console.log(notesIdStored);
    // console.log(e.target.id);
    notesIdStored.forEach((gettingOneNote) => {
        if (e.target.id == gettingOneNote) {
            console.log("trued");

            let contentmodal = document.querySelector(`[id=${CSS.escape(gettingOneNote)}]`);
            console.log(contentmodal);
            contentmodal.style.display = "flex"
            const closeWritingModal = () => {
                console.log("I am save button p clicked");
                contentmodal.style.display = "none"
                updateLSDate()
            }
            document.querySelectorAll(".saveBtn").forEach((e) => {
                e.addEventListener("click", closeWritingModal)
            })
        }
    })
}
document.querySelector(".note-main").addEventListener("click", notePressed)

const displayNoneModalHandler = () => {
    titleModal.style.display = "none";
    document.querySelector(".opacity").style.display = "none"
    document.querySelector("#gettingNoteTitle").value = ""

}
const cancelNote = document.querySelector("#cancelNote");
cancelNote.addEventListener("click", displayNoneModalHandler)
createNote.addEventListener("click", displayNoneModalHandler)

// localStorage.clear()
    // // EDIT NOTE TITLE
    // document.querySelector(".note-title").addEventListener("click", displayModalForGettingNoteTitle)