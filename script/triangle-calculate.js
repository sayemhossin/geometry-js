/* 
1 get base value of the triangle
2 added an id in the base input field
3 use getElementById to access the input field
4 get value from the input field (value is string now)
5 convert the value to a number .use parseFloat



*/



function calculateTriangleArea(){
    // get triangle base value
    const triangleBaseInput = document.getElementById('triangle-base')
    const triangleBaseText = triangleBaseInput.value
    const base = parseFloat(triangleBaseText)
    console.log(base)

    // get triangle height 
    const triangleHeightInput = document.getElementById('triangle-height')
    const triangleHeightText = triangleHeightInput.value
    const height = parseFloat(triangleHeightText)
    console.log(height)

    // calculate triangle area
    const area = 0.5 * base * height
    console.log(area)

    // display triangle area
    const triangleAreaSpan = document.getElementById('triangle-area')
    triangleAreaSpan.innerText= area
}