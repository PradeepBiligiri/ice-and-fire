
const fetchBooks = async () => {
  const resposne = await fetch("https://anapioficeandfire.com/api/books");
  const resJson = await resposne.json();

  const allBooks = resJson;

  allBooks.forEach(async (bookOne) => {
    const bookEle = document.createElement("div");

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

    bookEle.style.margin = "16px";

    bookEle.innerHTML = innerContent + charStr + charArr.join(", ");

    document.body.append(bookEle);
  });
};

fetchBooks();
