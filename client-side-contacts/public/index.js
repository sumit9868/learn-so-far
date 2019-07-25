let contactState = [
    {
      name: "sumit",
      number: "987457665466",
      photo: "img.jpeg"
    }
  ];
  
  const render = () => {
    return contactState.reduce((acc, data) => {
      return (
        acc +
        `<div><div>Name:${data.name}</div><div>Number:${
          data.number
        }</div><div>Photo:${data.photo}</div></div>`
      );
    }, "");
  };
  const paint = () => {
    const html = render();
    document.getElementById("cards").innerHTML = html;
  };
  paint();
  console.log(render());
  