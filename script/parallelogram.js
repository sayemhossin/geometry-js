// function calculateParallelogram(){
//     // const baseInput = document.getElementById('parallelogram-b')
//     // const baseText = baseInput.value
//     // const base = parseFloat(baseText)
//     // console.log(base)
       
//     const base = getParallelogramBase();
//     console.log(base)

// }

// function getParallelogramBase(){
//    const baseInput = document.getElementById('parallelogram-b')
//     const baseText = baseInput.value
//     const base = parseFloat(baseText)
//     return base
// }

function  calculateParallelogram(){
    const base = getInputValueById('parallelogram-b')
    // console.log('base value', base)

    const height = getInputValueById('parallelogram-h')
    // console.log(height)

    const area = base * height
    console.log('area of parallogram is',area)

    setInnerTextById('parallelogram-area',area)
}

function getInputValueById(inputFieldId){
     const inputField = document.getElementById(inputFieldId)
     const inputValueText = inputField.value
      
     const inputValue = parseFloat(inputValueText)
    //  console.log(inputValue)
    return inputValue
}

function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId)
     element.innerText = area ;
}