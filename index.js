/* Не забывайте про defer атрибут у тэга script, 
или положение тэга script

Добавление текста и html:
1) Напишите в html элемент с id
2) найдите этот элемент из JS
3) добавьте разметку внутрь этого элемента (добавьте 
    тэг div, span или p, или любой другой тэг)
4) измените цвет текста внутри найденного элемента на 
другой цвет (строковыми стилями style)
Посмотрите изменился ли цвет текста

5) добавьте новый тэг в html с новым id
И найдите его из JS
6) добавьте структуру из JS внутри нового элемента:
ul
    li * 3 (3 пункта списка)
        Пункт списка (в каждом из которых текст)
7) найдите все li элементы на странице из JS, получите массив
8) дайте всем элементам массива стиль текста курсив (или css 
    классом или строковыми стилями style)

Создание элементов из JS:
1) создайте элемент с тэгом span
2) добавьте ему текст внутрь
3) добавьте стили для этого span (css класс)
4) добавить span в конец body
5) создать тэги div 3 шт c атрибутом id = ("divElem"+index) 
зависящим от индекса
добавить элементы в конец body
Сдать в виде github репозитория */


const firstElement = document.getElementById("qwerty");
const secondElement = document.getElementById("asdfg");

const ul = document.createElement('ul');
for (let i = 0; i < 3; i++) {
    let li = document.createElement('li');
    li.className = 'liElem';
    
    li.style.fontStyle = "italic";
    
    //добавил через js так, как при использывании 
    //style (index.html: 9-13) в fontStyle 
    //(NodeList(3) [li.liElem, li.liElem, li.liElem] > 
    // li.liElem > style > fontStyle) 
    //было пусто, а так быть не должно, если я правильно 
    //понял задание
    li.textContent = `lorem ${i}`
    ul.append(li);
}
secondElement.append(ul);

const allLi = document.querySelectorAll('li')
console.log(allLi);


