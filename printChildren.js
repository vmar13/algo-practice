const printChildrenRecursive = tree => {
    if (tree.children.length === 0) return;
    tree.children.forEach(child => {
        console.log(child.name);
        printChildrenRecursive(child)
    })
}

const arbol = {
    name: 'John',
    children: [
        {
            name: 'Jim',
            children: []
        },
        {
            name: 'Zoe',
            children: [
                { name: 'Kyle', children: [] },
                { name: 'Sophia', children: [] }
            ]
        }
    ]
}

console.log(printChildrenRecursive(arbol))