// console.log("Hello World");
// const api_url = "https://anapioficeandfire.com/api/books/2/";
// const data = fetch(api_url)
//   .then((res) => res.json())
//   .then((data) => {
//     document.getElementById(
//       "loading"
//     ).innerHTML = `Name of the book : ${data.name}`;
//     document.getElementById("details").innerHTML = data.country;
//     console.log(data);
//   });

// console.log();

// const api_url = "https://anapioficeandfire.com/api/books/1/";

// async function getapi(url) {
//   // Storing response
//   const response = await fetch(url);

//   // Storing data in form of JSON
//   var data = await response.json();
//   console.log(data);
//   if (response) {
//     hideloader();
//   }
//   show(data);
// }
// // Calling that async function
// getapi(api_url);

// function hideloader() {
//   document.getElementById("loading").style.display = "none";
// }

// function show(data) {
//   let tab = `<tr>
//           <th>Name</th>
//           <th>numberOfPages</th>
//           <th>Position</th>
//           <th>Salary</th>
//          </tr>`;

//   // Loop to access all rows
//   for (let r of data) {
//     tab += `<tr>
//     <td>${r.name} </td>
//     <td>${r.numberOfPages}</td>
//     <td>${r.position}</td>
//     <td>${r.salary}</td>
// </tr>`;
//   }
//   // Setting innerHTML as tab variable
//   document.getElementById("details").innerHTML = tab;
// }

// const fetchBooks = async () => {
//   const resposne = await fetch("https://anapioficeandfire.com/api/books");
//   const resJson = await resposne.json();

//   const [bookOne] = resJson;

//   const bookEle = document.getElementById("tbody");

//   for (let r = 0; r < bookOne.lenghth; r++) {
//     let row = document.createElement("tr");
//     let col1 = document.createElemnet("td");
//     col1.innerHTML = r.name;
//     let col2 = document.createElemnet("td");
//     col1.innerHTML = r.authors.join(", ");
//     let col3 = document.createElemnet("td");
//     col1.innerHTML = r.numberOfPages;
//     let col4 = document.createElemnet("td");
//     col1.innerHTML = r.publisher;
//     let col5 = document.createElemnet("td");
//     col1.innerHTML = r.released.slice(0, 10);
//     // let col6 = document.createElemnet("td");
//     // col1.innerHTML =
//     row.append(col1, col2, col3, col4, col5);
//     bookEle = append(row);
//   }

//   // Name: ${bookOne.name}<br />
//   // ISBN: ${bookOne.isbn}<br />
//   // Authors: ${bookOne.authors.join(", ")}<br />
//   // Number Of Pages: ${bookOne.numberOfPages}<br />
//   // Publisher: ${bookOne.publisher}<br />
//   // Release Date: ${bookOne.released.slice(0, 10)}<br />

//   //   const { characters } = bookOne;

//   //   let charStr = "Characters: ";

//   //   const charArr = await Promise.all(
//   //     characters.slice(0, 5).map(async (element) => {
//   //       const characterResposne = await fetch(element);
//   //       const { name, gender } = await characterResposne.json();
//   //       return `${name} (${gender})`;
//   //     })
//   //   );

//   bookEle.innerHTML = innerContent + charStr + charArr.join(", ");

//   document.body.append(bookEle);
// };

// fetchBooks();

// const fetchBooks = async () => {
//   const resposne = await fetch("https://anapioficeandfire.com/api/books");
//   const resJson = await resposne.json();

//   const [bookOne] = resJson;

//   const bookEle = document.createElement("div");

//   let innerContent = `
//     Name: ${bookOne.name}<br />
//     ISBN: ${bookOne.isbn}<br />
//     Authors: ${bookOne.authors.join(", ")}<br />
//     Number Of Pages: ${bookOne.numberOfPages}<br />
//     Publisher: ${bookOne.publisher}<br />
//     Release Date: ${bookOne.released.slice(0, 10)}<br />
//     `;
//   const { characters } = bookOne;

//   let charStr = "Characters: ";

//   const charArr = await Promise.all(
//     characters.slice(0, 5).map(async (element) => {
//       const characterResposne = await fetch(element);
//       const { name, gender } = await characterResposne.json();
//       return `${name} (${gender})`;
//     })
//   );

//   bookEle.innerHTML = innerContent + charStr + charArr.join(", ");

//   document.body.append(bookEle);
// };

// fetchBooks();

// const fetchBooks1 = async () => {
//   const resposne = await fetch("https://anapioficeandfire.com/api/books/");
//   const resJson = await resposne.json();

//   const [booktwo] = resJson;

//   const bookEle1 = document.getElementById("details");

//   let innerContent = `
//       Name: ${booktwo.name}<br />
//       ISBN: ${booktwo.isbn}<br />
//       Authors: ${booktwo.authors.join(", ")}<br />
//       Number Of Pages: ${booktwo.numberOfPages}<br />
//       Publisher: ${booktwo.publisher}<br />
//       Release Date: ${booktwo.released.slice(0, 10)}<br />
//       `;
//   const { characters } = booktwo;

//   let charStr = "Characters: ";

//   const charArr = await Promise.all(
//     characters.slice(0, 5).map(async (element) => {
//       const characterResposne = await fetch(element);
//       const { name, gender } = await characterResposne.json();
//       return `${name} (${gender})`;
//     })
//   );

//   bookEle.innerHTML = innerContent + charStr + charArr.join(", ");

//   document.body.append(bookEle1);
// };

// fetchBooks1();

const fetchBooks = async () => {
  const resposne = await fetch("https://anapioficeandfire.com/api/books");
  const resJson = await resposne.json();

  const [bookOne] = resJson;

  const bookEle = document.createElement("div");
  bookEle.setAttribute("class", "books");

  let innerContent = `
    Name: ${bookOne.name}<br />
    ISBN: ${bookOne.isbn}<br />
    Authors: ${bookOne.authors.join(", ")}<br />
    Number Of Pages: ${bookOne.numberOfPages}<br />
    Publisher: ${bookOne.publisher}<br />
    Release Date: ${bookOne.released.slice(0, 10)}<br />
    `;
  const { characters } = bookOne;

  let charStr = "Characters: ";

  const charArr = await Promise.all(
    characters.slice(0, 5).map(async (element) => {
      const characterResposne = await fetch(element);
      const { name, gender } = await characterResposne.json();
      return `${name} (${gender})`;
    })
  );

  bookEle.innerHTML = innerContent + charStr + charArr.join(", ");

  document.body.append(bookEle);
};

fetchBooks();

const fetchBook = async () => {
  const resposnes = await fetch("https://anapioficeandfire.com/api/books/");
  const resJson = await resposnes.json();

  const [bookTwo] = resJson;

  const bookEle2 = document.createElement("div");
  bookEle2.setAttribute("class", "book2");

  let innerContent2 = `
      Name: ${bookTwo.name}<br />
      ISBN: ${bookTwo.isbn}<br />
      Authors: ${bookTwo.authors.join(", ")}<br />
      Number Of Pages: ${bookTwo.numberOfPages}<br />
      Publisher: ${bookTwo.publisher}<br />
      Release Date: ${bookTwo.released.slice(0, 10)}<br />
      `;
  const { characters } = bookTwo;

  let charStr = "Characters: ";

  const charArr = await Promise.all(
    characters.slice(0, 5).map(async (element) => {
      const characterResposne = await fetch(element);
      const { name, gender } = await characterResposne.json();
      return `${name} (${gender})`;
    })
  );

  bookEle2.innerHTML = innerContent2 + charStr + charArr.join(", ");

  document.body.append(bookEle2);
};

fetchBook();
