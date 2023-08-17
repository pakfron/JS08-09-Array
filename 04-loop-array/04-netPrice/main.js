log=console.log

const summary = []


const sales = [
    { price: 1000, discount: 0.1 },
    { price: 500, discount: 0.05 },
    { price: 100 }
];

const newArr = []


// log(sales[1].price)

sales.forEach(function(element,index,array){
    netPrice=0  
    discount ={}
  if(array[index].discount!==undefined){

      netPrice= sales[index].price*(1-(sales[index].discount))
      discount['netPrice']=netPrice
      summary.push(discount)
    }
    else{
        netPrice= sales[index].price
        discount['netPrice']=netPrice
      summary.push(discount)
        // summary.push(discount)
    }
}) 
log(summary)

for(let productObj of sales){
  let price = productObj.price
  let discount = productObj.discount
  let netPrice = price 
  if(discount){
    netPrice=price* (1-discount)
  }
  const newObj ={netPrice: netPrice}
  newArr.push(newObj)
  
}
console.log(newArr)