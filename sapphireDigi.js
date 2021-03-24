document.addEventListener('DOMContentLoaded', e => {

    const getMostRecentDeploys = () => {
        fetch('https://gist.githubusercontent.com/gretchenziegler/853c4f709d45176aa44c8e5aee864cac/raw/010a4c44455ffc93b8039935cfc4e0dff41ae502/hcsc.json')
        .then(res => res.json())
        .then(data => {
            data.client_environments.forEach(objEle => {
                let mostRecentDeploys = objEle.most_recent_deploys
                
                for(let keyObj in mostRecentDeploys) {
                    if(keyObj === 'platform-api'){
                        let platAPIObjs = mostRecentDeploys[keyObj]
                        console.log(platAPIObjs.deployed_at)
                    }
                }
            })      
        })  
    }

    
getMostRecentDeploys()

})

document.addEventListener('DOMContentLoaded', () => {
    const getDeployedDates = () => {
        fetch('https://gist.githubusercontent.com/gretchenziegler/853c4f709d45176aa44c8e5aee864cac/raw/010a4c44455ffc93b8039935cfc4e0dff41ae502/hcsc.json')
        .then(res => res.json())
        // .then(clientEnvirons => console.log(clientEnvirons))
        // .then(data => console.log(data.client_environments))
        .then(data => {
            let clientEnvirons = data.client_environments //AoO
            let mostRecDeploys = clientEnvirons.map(objEle => objEle.most_recent_deploys)
            let platAPI = mostRecDeploys.map(depEle => depEle['platform-api'])
            let deployedDates = platAPI.map(dateObj => dateObj.deployed_at)
            deployedDates.forEach(date => console.log(date))
        })
    }

    getDeployedDates()
})