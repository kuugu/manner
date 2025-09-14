export function create_letters() {
  const letters = [
    ['ಅ', 'ಆ', 'ಇ', 'ಈ', 'ಉ', 'ಊ', 'ಋ', 'ಎ', 'ಏ', 'ಐ', 'ಒ', 'ಓ', 'ಔ', 'ಅಂ', 'ಅಃ'],
    ['ಕ', 'ಖ', 'ಗ', 'ಘ', 'ಙ'],
    ['ಚ', 'ಛ', 'ಜ', 'ಝ', 'ಞ'],
    ['ಟ', 'ಠ', 'ಡ', 'ಢ', 'ಣ'],
    ['ತ', 'ಥ', 'ದ', 'ಧ', 'ನ'],
    ['ಪ', 'ಫ', 'ಬ', 'ಭ', 'ಮ'],
    ['ಯ', 'ರ', 'ಲ', 'ವ', 'ಶ', 'ಷ', 'ಸ', 'ಹ', 'ಳ']
  ];

  const letters_done = new Set(['ಔ', 'ಅಂ', 'ಅಃ']);


  for (let i=0; i<letters.length; i++) {
    let row = document.createElement('div');
    row.className = "letters-row";

    for (let j=0; j<letters[i].length; j++) {
      let curr_elem = document.createElement('div');
      let link = document.createElement('a');

      if (letters_done.has(letters[i][j])) {
        link.className = "letter-link-done";
        link.href = "pages/" + letters[i][j] + ".html";
      } else {
        link.className = "letter-link-yts";
      }

      link.textContent = letters[i][j];

      curr_elem.className = "letter";
      curr_elem.appendChild(link);

      row.appendChild(curr_elem);
    }

    document.getElementById("letters").appendChild(row);
  }
}
