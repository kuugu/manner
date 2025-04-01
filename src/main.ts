let letters = [
    'ಅ', 'ಆ', 'ಇ', 'ಈ', 'ಉ', 'ಊ', 'ಋ', 'ಎ', 'ಏ', 'ಐ', 'ಒ', 'ಓ', 'ಔ', 'ಅಂ', 'ಅಃ', 
    'ಕ', 'ಖ', 'ಗ', 'ಘ', 'ಙ' , 
    'ಚ', 'ಛ', 'ಜ', 'ಝ', 'ಞ' , 
    'ಟ', 'ಠ', 'ಡ', 'ಢ', 'ಣ' , 
    'ತ', 'ಥ', 'ದ', 'ಧ', 'ನ' , 
    'ಪ', 'ಫ', 'ಬ', 'ಭ', 'ಮ', 
    'ಯ', 'ರ', 'ಲ', 'ವ', 'ಶ', 'ಷ', 'ಸ', 'ಹ', 'ಳ'
]; 

for (let i=0; i<letters.length; i++) {
    let curr_elem = document.createElement('div');
    let link = document.createElement('a'); 
    
    link.className = "letter-link"; 
    link.href = "pages/" + letters[i] + ".html"; 
    link.textContent = letters[i];
    
    curr_elem.className = "letter"; 
    curr_elem.appendChild(link); 

    document.getElementById("letters")!.appendChild(curr_elem); 
}