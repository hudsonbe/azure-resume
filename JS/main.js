window.addEventListener('DomContentLoaded', (event) =>{
    getVisitCount();
})

const functionApi = '';

const getVisitCount = () =>{
    let count = 100;
    fetch(functionApi).then(response =>{
        return response.json()
    }).then(response =>{
        console.log("The Api website");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}