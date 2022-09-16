const animals = document.querySelectorAll('h2');
console.log(`Number of categories:`, animals.length);

const listItems = document.querySelectorAll('li.item');
// console.log(listItems);

listItems.forEach((item) => {
    // console.log(`Category:`, item.firstElementChild.textContent);
    
    const titleRef = item.querySelector('h2');
    console.log(`Category:`,titleRef.textContent);
    const itemsList = item.querySelectorAll('li');
    console.log(`Elements:`, itemsList.length);
});