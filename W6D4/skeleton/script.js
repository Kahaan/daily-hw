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

  // show photo add form

  const toggleForm = (e) => {
    const photoForm = document.querySelectorAll("#form")[0]
    if (photoForm.className === "photo-form-container hidden"){
      photoForm.className = "photo-form-container"
    } else {
      photoForm.className = "photo-form-container hidden"
    }
  }

  const button = document.querySelectorAll(".photo-show-button")[0]
  button.addEventListener("click",toggleForm)


// add photos

const handleAddPhoto = (e) => {

  e.preventDefault()

  const imageFormInput = document.querySelectorAll(".photo-url-input")[0]
  const img = imageFormInput.value


  imageFormInput.value = ""

  const newImg = document.createElement("img")
  newImg.src = img

  const imgLi = document.createElement("li")
  imgLi.appendChild(newImg)

  const imgList = document.querySelectorAll(".dog-photos")[0]
  imgList.appendChild(imgLi)
  }

  const addPhotoButton = document.querySelectorAll(".photo-url-submit")[0]
  addPhotoButton.addEventListener("click",handleAddPhoto)






});
