let contactState = [{
    name:'sumit',
    number:'987457665466',
    photo:'img.jpeg'}]

const render = () => {
    return contactState.reduce((acc, data) => {
        return acc +`<div><div>Name:${data.name}</div><div>Number:${data.number}</div><div>Photo:${data.photo}</div></div>`;
    },'')
}
const paint=()=>{
    const html=render();
    const cards=document.getElementById('cards').innerHTML;
    console.log(cards)
}
paint()
console.log(render());
