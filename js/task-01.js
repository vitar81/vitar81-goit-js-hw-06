const categoriesEl = document.querySelector('#categories');
const itemEl = categoriesEl.querySelectorAll('.item');

console.log(`Number of categories: ${itemEl.length}`);

itemEl.forEach(item => {
const title = item.querySelector('h2').textContent;
const elements = item.querySelectorAll('li').length;
console.log(`Category: ${title}`);
console.log(`Elements: ${elements}`);
});