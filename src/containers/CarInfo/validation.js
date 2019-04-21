const searchStringRegex = /^[A-ZА-Я]{2}[0-9]{4}[A-ZА-Я]{2}$/

export const isSearchStringValid = searchString => searchStringRegex.test(searchString)
