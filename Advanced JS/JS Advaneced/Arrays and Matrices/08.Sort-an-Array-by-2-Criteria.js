function main(elements) {
    let sortedElements = sortElements(elements);
    
    console.log(sortedElements.join("\n"));

    function sortElements(elements) {
        let sorted = elements.sort((e1, e2) => {
            let result = e1.length - e2.length;
            if (result == 0) {
                result = e1.localeCompare(e2);
            }

            return result;
        });

        return sorted;
    }
}
