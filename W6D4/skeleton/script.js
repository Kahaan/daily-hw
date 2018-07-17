document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  const handleSubmit = (e) => {
    e.preventDefault()
    const favoriteInput = document.getElementsByClassName("favorite-input")[0]
    const input = favoriteInput.value
    favoriteInput.value = ""

    const newLi = document.createElement("li")
    newLi.textContent = input

    const ulList = document.querySelectorAll("#sf-places")[0]
    ulList.appendChild(newLi)
  }

  const submit = document.getElementsByClassName("favorite-submit")[0]
  submit.addEventListener("click",handleSubmit)

  // adding new photos

  // --- your code here!



});
