let letters = [
    'ಅ', 'ಆ', 'ಇ', 'ಈ', 'ಉ', 'ಊ', 'ಋ', 'ಎ', 'ಏ', 'ಐ', 'ಒ', 'ಓ', 'ಔ', 'ಅಂ', 'ಅಃ', 
    'ಕ', 'ಖ', 'ಗ', 'ಘ', 'ಙ' , 
    'ಚ', 'ಛ', 'ಜ', 'ಝ', 'ಞ' , 
    'ಟ', 'ಠ', 'ಡ', 'ಢ', 'ಣ' , 
    'ತ', 'ಥ', 'ದ', 'ಧ', 'ನ' , 
    'ಪ', 'ಫ', 'ಬ', 'ಭ', 'ಮ', 
    'ಯ', 'ರ', 'ಲ', 'ವ', 'ಶ', 'ಷ', 'ಸ', 'ಹ', 'ಳ'
]; 

let letter_wip = 'ಅಂ'; 

const letters_done = new Set<string>(['ಔ']); 


for (let i=0; i<letters.length; i++) {
    let curr_elem = document.createElement('div');
    let link = document.createElement('a'); 
    
    if (letters_done.has(letters[i])) {
        link.className = "letter-link-done"; 
        link.href = "pages/" + letters[i] + ".html"; 
    } else if (letter_wip === letters[i]) {
        link.className = "letter-link-wip"; 
    } else {
        link.className = "letter-link-yts"; 
    }

    link.textContent = letters[i];
    
    curr_elem.className = "letter"; 
    curr_elem.appendChild(link); 

    document.getElementById("letters")!.appendChild(curr_elem); 
}