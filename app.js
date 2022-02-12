const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
// const seach = document.querySelector(".search");
// console.log(seach);
const search = document.querySelector(".search input");
//console.log(search);

const generateTemplate = (todo) => {
  return `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>`;
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(addForm.add.value.trim());
  if (addForm.add.value.trim()) {
    const li = document.createElement("li");
    li.innerHTML = generateTemplate(addForm.add.value.trim());
    list.append(li);
    addForm.reset();
  }
  //li.textContent = addForm.inpp.value.trim();
});

const trash = document.querySelector(".delete");

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) e.target.parentElement.remove();
});

const filterTodos = (term) => {
  Array.from(list.children)
    .filter((todo) => !todo.textContent.includes(term))
    .forEach((todo) => todo.classList.add("filtered"));

  Array.from(list.children)
    .filter((todo) => todo.textContent.includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
};

//keyup event:
search.addEventListener("keyup", (e) => {
  const term = search.value.trim();
  //console.log(list.children[0].innerText);
  filterTodos(term);
});
