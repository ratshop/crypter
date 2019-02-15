const ABC = getABC();

function getABC(){
	// alphabet with 64 symbols /[%#0-9A-Za-z]/
	let res = '%#';
	for (let i = 0; i < 10; i++) res += String.fromCharCode(48 + i);
	for (let i = 0; i < 26; i++) res += String.fromCharCode(65 + i);
	for (let i = 0; i < 26; i++) res += String.fromCharCode(97 + i);
	return res;
}

function encode(str, pwd){
  let res = '', n = str.length, c, c1, c2;
  for (let i = 0; i < n; i++) {
    c = str.charCodeAt(i) ^ pwd.charCodeAt(i % pwd.length);
    c1 = Math.floor(c / 64) % 64;
    c2 = c % 64;
    res += abc[c1] + abc[c2];
  }
  return res;
}

function decode(str, pwd){
  let res = '', n = str.length, c;
  if (n % 2 !== 0){
    alert('Error #792');
    return '';
  }
  for (let i = 0; i < n; i += 2) {
    c = abc.indexOf(str[i]) * 64 + abc.indexOf(str[i + 1]);
    res += String.fromCharCode(c ^ pwd.charCodeAt(Math.floor(i / 2) % pwd.length));
  }
  return res;
}

function encodeJSON(json, pwd){
	
}

function decodeJSON(json, pwd){
	
}
