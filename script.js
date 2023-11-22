const salary = [20000, 50000, 30000];
const amountWithoutTax = [];
for (let i = 0; i < salary.length; i++) {
    const element = salary[i] * 0.87;
    amountWithoutTax.push(element);
}
console.log(amountWithoutTax);

const shortNameOptions = ['Тома', 'Тама', 'Мара']
const contentEl = document.querySelector('.content');
shortNameOptions.forEach(element => {
    const p1El = document.createElement('p');
    p1El.textContent = element;
    contentEl.append(p1El);
});
