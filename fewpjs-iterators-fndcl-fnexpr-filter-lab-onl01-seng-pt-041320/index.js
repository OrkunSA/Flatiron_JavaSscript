const findMatching = (drivers, string) => {
    return drivers.filter(possibleMatch =>
        possibleMatch.toLowerCase() === string.toLowerCase())
}

const fuzzyMatch = (drivers, string) => {
    return drivers.filter(possibleMatch =>
        possibleMatch.startswith(string) === string.startswith(string))
}

const matchName = (drivers, string) => {
    return drivers.filter(possibleMatch =>
        possibleMatch.name === string)
}