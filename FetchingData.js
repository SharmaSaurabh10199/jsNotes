console.log("js loaded");
async function getData() {
  let response = await fetch("https://fakestoreapi.com/products");
  // data in json format
  let data = await response.json();
  // console.log(data);
  let html = "";
  data.forEach(function (elem) {
    html += ` <tr >
        <th scope="col">${elem.id}</th>
        <th scope="col">${elem.title}</th>
        <th scope="col">${elem.price}</th>
        <th scope="col">${elem.description}</th>
        <th scope="col">${elem.category}</th>
        <th scope="col"><img src="${elem.image}"></th>
      </tr>`;
  });
  // adding the data into the body
  document.getElementById("tbody").innerHTML = html;
}

getData();
