let htmlString = '<html><body><div><a></a></div></body></html>'


function parseHtml(string) {
  let arr = string.match(/\<.*?\>/g)
  if(arr.length % 2 != 0) {
    console.log('Invalid formatting')
  }
  else {
    let space = ''
    let validFormat = true;
    for(let y = 0; y < arr.length/2; y++) {
      let opening = arr[y].replace(/\<|>/g, '');
      let closing = arr[arr.length - y - 1];
      if(!closing.includes(opening)) {
        console.log('Invalid formatting')
      }
      else {
        arr[y] = (space + arr[y])
        arr[arr.length - y - 1] = (space + arr[arr.length - y - 1])
        space += '  '
      }
    }

    arr.forEach((item) => {
      console.log(item)
    })
  }

}

parseHtml(htmlString)

// Not real familiar with regex but took them from these pages:
// https://theprogrammingexpert.com/remove-brackets-from-string-javascript/
// https://stackoverflow.com/questions/16576983/replace-multiple-characters-in-one-replace-call
