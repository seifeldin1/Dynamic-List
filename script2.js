function addItemToList(){
    
        const item = document.getElementById(`text`);
        const itemValue = item.value.trim();

        if(itemValue === ``){
            alert(`You can't add an empty item`);
            return;
        }

        const newItem = document.createElement(`div`);
        newItem.textContent=itemValue;
        newItem.classList.add(`item`);
        const list = document.querySelector(`.list`);
        list.appendChild(newItem);

        item.value = '';


    

}