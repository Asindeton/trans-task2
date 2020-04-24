let selectedUserId = [];
let isSelected = false;
document.querySelector('#select-all').addEventListener('click', function(){
document.querySelectorAll('input').forEach(e => isSelected ? e.checked = false: e.checked = true)
isSelected = !isSelected;
})

function getSelectUserId(){
let idArray = [];
document.querySelectorAll('input:checked').forEach(e => idArray.push(e.parentElement.parentElement.parentElement.cells[1].innerText))
return idArray;
}