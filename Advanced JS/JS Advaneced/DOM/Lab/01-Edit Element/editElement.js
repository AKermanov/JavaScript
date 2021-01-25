function editElement(reference, element, replacer) {
    const content = reference.textContent;
    const edited = content.replace(new RegExp(element, 'g'), replacer);
    reference.textContent = edited;
}
