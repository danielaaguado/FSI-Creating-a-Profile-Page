let content = document.querySelector('.js-generated.content')

let dogName = document.createElement("h1")
dogName.setAttribute("class", "dog-name")
dogName.textContent = "Rizzo"
content.append(dogName)

let dogContent = document.createElement("div")
dogContent.setAttribute("class", "dog-content")
content.append(dogContent)

let dogImage = document.createElement("img")
dogImage.setAttribute("class", "dog-image")
dogImage.setAttribute("src", "./assets/rizzo.jpg")
dogContent.append(dogImage)

let dogDetails = document.createElement("div")
dogDetails.setAttribute("class", "dog-details")
dogContent.append(dogDetails)

let descriptionHeader = document.createElement("h3")
descriptionHeader.textContent = "Description:"
dogDetails.append(descriptionHeader)

let pTag = document.createElement("p")
pTag.textContent = "This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals."
dogDetails.append(pTag)

let feedingHeader = document.createElement("h3")
feedingHeader.textContent = "Feeding Times:"
dogDetails.append(feedingHeader)

let list = document.createElement("ul")

let item1 = document.createElement("li")
let item2 = document.createElement("li")
let item3 = document.createElement("li")
item1.textContent = "9AM"
item2.textContent = "12PM"
item3.textContent = "5PM"
list.append(item1)
list.append(item2)
list.append(item3)

dogDetails.append(list)
