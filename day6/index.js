const addBtn = document.querySelector(".addBtn");
const container = document.querySelector(".container");

const saveNotes = () => {
  const notes = document.querySelectorAll(".card textarea");
  const data = [];
  notes.forEach((note) => {
    data.push(note.value);
  });

  if (data.length == 0) localStorage.removeItem("Notes");
  else localStorage.setItem("Notes", JSON.stringify(data));
};

const addNotes = (text = "") => {
  const note = document.createElement("div");
  note.classList.add("card");
  note.innerHTML = `
    <div class="tool">
      <i class="trash fa fa-sharp fa-regular fa-trash"></i>
      <i class="save fa fa-sharp fa-regular fa-save"></i>
    </div>
    <textarea>${text}</textarea>`;

  note.querySelector(".trash").addEventListener("click", () => {
    note.remove();
    saveNotes();
  });
  note.querySelector(".save").addEventListener("click", saveNotes);
  container.appendChild(note);
  saveNotes();
};

addBtn.addEventListener("click", addNotes);

{
  const lsNotes = JSON.parse(localStorage.getItem("Notes"));
  if (lsNotes == null) addNotes("");
  else {
    lsNotes.forEach((item) => {
      addNotes(item);
    });
  }
}
