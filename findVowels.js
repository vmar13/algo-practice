const findVowelsCount1 = str => {
    const foundVs = str.match(/[aeiou]/gi)
    return foundVs ? foundVs.length : 0
}

findVowelsCount1('ocean')