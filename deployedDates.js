document.addEventListener('DOMContentLoaded', () => {
    const getDeployedDates = () => {
        fetch('https://gist.githubusercontent.com/gretchenziegler/853c4f709d45176aa44c8e5aee864cac/raw/010a4c44455ffc93b8039935cfc4e0dff41ae502/hcsc.json')
        .then(res => res.json())
        .then(clientEnvirons => console.log(clientEnvirons))
       
    }

    getDeployedDates()
})