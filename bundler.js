function encrypt(str) {
  const key = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
  }
  let result = '';
  result = str.replace(/[aeiou]/g, (match) => key[match]);
  return result;
}
function descriptor(str) {
  const key = {
    "enter": "e",
    "imes": "i",
    "ai": "a",
    "ober": "o",
    "ufat": "u"
  }
  let result = str;
  result = result.replace(/enter/g, key["enter"]);
  result = result.replace(/imes/g, key["imes"]);
  result = result.replace(/ai/g, key["ai"]);
  result = result.replace(/ober/g, key["ober"]);
  result = result.replace(/ufat/g, key["ufat"]);
  return result;
}

const btnEncrypt = document.getElementById('btn-encrypt');
const btnDecrypt = document.getElementById('btn-decrypt');
const btnCopy = document.getElementById('btn-copy');
const textArea = document.getElementById('text-area');
const asideTextArea = document.querySelector('.aside-text')
const asideTextP = document.querySelector('.result')

btnEncrypt.addEventListener('click', () => { 
  hideElements()
  asideTextArea.style.display = 'flex'
  asideTextP.innerHTML = encrypt(textArea.value)
  textArea.value = ''
})
btnDecrypt.addEventListener('click', () => {
  hideElements()
  asideTextArea.style.display = 'flex'
  asideTextP.innerHTML = descriptor(textArea.value)
  textArea.value = ''
})

btnCopy.addEventListener('click', async () => { 
  const asideTextP = document.querySelector('.result')
  await navigator.clipboard.writeText(asideTextP.innerHTML.trim())
})

function hideElements() {
  const image = document.querySelector('.empty-bg')
  image.style.display = 'none'
  const asideMessages = document.querySelector('.aside-messages')
  asideMessages.style.display = 'none'
}
