const cats = ["Milo", "Otis", "Garfield"]
const newCat = "Broom"
function appendCat(name) {
    return cats.append(name)
}

function destructivelyRemoveFirstCat(name) {
    return cats.shift(name)
}
const removeFirstClass = () => {
    return cats.slice(-1)
}