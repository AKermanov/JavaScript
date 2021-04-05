function extract(content) {
    return document.getElementById(content).textContent.match(/\((?<name>[\s\w]+)\)/gmi)
        .map( x => /\((?<name>[\s\w]+)\)/gmi.exec(x).groups.name)
        .join('; ')
}
