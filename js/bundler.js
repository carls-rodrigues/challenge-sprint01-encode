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
function decrypt(str) {
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
const textArea = document.getElementById('text-input');
const addTextToPTag = document.getElementById('message');

btnEncrypt.addEventListener('click', () => {
  const hasValue = hideElements(!!textArea.value)
  if (!hasValue) return
  addTextToPTag.innerHTML = encrypt(textArea.value)
  textArea.value = ''
})
btnDecrypt.addEventListener('click', () => {
  const hasValue = hideElements(!!textArea.value)
  if (!hasValue) return
  addTextToPTag.innerHTML = decrypt(textArea.value)
  textArea.value = ''
})

btnCopy.addEventListener('click', async () => { 
  const asideTextP = document.querySelector('.message')
  await navigator.clipboard.writeText(asideTextP.innerHTML.trim())
})

function hideElements(hasValue) {
  if (hasValue) { 
    document.querySelector('.empty-message-content').style.display = 'none'
    document.querySelector('.filled-message-content').style.display = 'flex'
    return true
  }
  document.querySelector('.filled-message-content').style.display = 'none'
  document.querySelector('.empty-message-content').style.display = 'flex'
  return false
}
