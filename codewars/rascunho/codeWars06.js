function findOutlier(integers){
  
    var even = integers.filter(a => a % 2 === 0)
    var odd = integers.filter(a => a % 2 !== 0)

    return even.length === 1 ? even[0] : odd[0]
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))