let anotherPhoto = prompt('Does Santa throw horns?')

let picURL = "https://previews.123rf.com/images/deagreez/deagreez1810/deagreez181000040/109885875-heavy-metal-rock-on-stylish-grandfather-mature-aged-beard-santa.jpg"

if (anotherPhoto.toLowerCase() == "yes") {
    document.write('<img src="' + picURL +'">')
}