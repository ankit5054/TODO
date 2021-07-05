
// static data = []

const result = []
new URLSearchParams(window.location.search).forEach((value,name)=>{
    result.push(value)
})
// window.location.replace('http://127.0.0.1:5500/');

if(result[0] != undefined && result[0].length != 0 )
{localStorage.setItem(result[0], result)}

const table = document.querySelector(".table1")

keys  = Object.keys(localStorage)

 
const literal = (result) =>{
    return `
    
    <td>
        <input type="checkbox" id= ${result[0]} class= "checkbox">
    </td>
    <td>
        ${result[0]}
    </td>
    <td>
        ${result[1]}
    </td>
    <td>
        ${result[2]}
    </td>    
`;
};

keys.forEach((item)=>{
    temp = localStorage.getItem(item).split(',')
    if(item.length != 0){
    tr = document.createElement('tr')
    tr.id = item
    tr.innerHTML  = literal(temp)
    table.appendChild(tr)}
})



function remove(){
    console.log('inside remove1')
    document.querySelectorAll('.checkbox').forEach((checker)=>{
        if(checker.checked === true){
            localStorage.removeItem(checker.id)
            console.log(checker.id)
            console.log('inside remove2')

        }
    })
    console.log('inside remove3')
    window.location.replace('http://127.0.0.1:5500/');

}