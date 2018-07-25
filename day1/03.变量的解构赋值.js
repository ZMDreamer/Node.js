//定义一个常量对象
const game = {
    name: 'dota',
    hero: '118',
    equipment: '圣剑'
}
//将上面常量对象解构出来
// const {name: name1121,hero,equipment1} = game;
// console.log(name1121);
// console.log(hero);
//":"可以给解构后的变量重新命名
let hero = game.hero;
