let letterArray = ['a', 'b', 'c', 'd', 'e'];

// function formatArr(arr, length) {
//   let newArr = arr;
//   if(length > 0) {
//     let newItem = arr[length -1];
//     newArr.push(newItem);
//     formatArr(arr, length);
//   }
//   let space = '';
//   for(let x = 0; x < newArr.length/2; x++) {
//     let opening = arr[x]
//     let closing = arr[x]
//     arr[x] = `${space}<${arr[x]}>`;
//     arr[arr.length - x - 1] = `${space}<${arr[arr.length - x - 1]}/>`;
//   }
//   console.log(newArr)
// }
//
//
// formatArr(letterArray, 5);
function test(arr, length)
{
    let newArr = arr;
    if(length > 0) {
        let newTest = arr[length -1];
        newArr.push(newTest)
        test(arr, length - 1);
    }
    let space = ''
    for(let x = 0; x < newArr.length; x++)
        {
            if(x <= (newArr.length/2 - 1)) {
                newArr[x] = (space + newArr[x]);
                space += '  '
            }
            else
            {
                let newSpace = space.slice(2);
                newArr[x] = (newSpace + newArr[x]);
                space = newSpace;
            }

        }
    return newArr
}

test(letterArray, )
