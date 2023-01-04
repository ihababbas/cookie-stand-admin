export const hourlysales =[48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36] 
//export const hourlysales = genetate()

function genetate(){
  let data = []
  for (let i = 0; i < 14; i++) {
    let x = Math.floor((Math.random() * 60) + 20);
    data.push(x)
    
  }
  return data
}