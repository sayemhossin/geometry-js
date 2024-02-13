



function calculateRhombus(){
    const input = document.getElementById('rhombus-d1');
    const text = input.value
     const now = parseFloat(text)


     const input2 = document.getElementById('rhombus-d2')
     const text2 = input2.value 
     const now2 = parseFloat(text2)

     const area = 0.5 * now * now2

     const total = document.getElementById('total')
     total.innerText = area
}