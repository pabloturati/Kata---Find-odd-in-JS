function findOdd(A) {
  const itemSet = [...new Set(A)]
  let pos = -1
  itemSet.map(u=>(A.filter(e=>e === u).length)).forEach((e,i)=>{if(e%2>0)pos=i})
  return itemSet[pos];
}

findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])