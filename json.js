let obj = {
    name: 'Abhishek',
    email: "abhishek@gmail.com",
    favourite: ["apple", "mango"],
    quantity:  10,
 }
 console.log(obj)
 
 // convert it to json:
 
 
 // numbers, string(""), arrays, objects, boolean
 
 let jsonData = JSON.stringify(obj)
 
 
 // " "
 
 console.log(jsonData, typeof jsonData)
 
 // console.log(jsonData[1])
 
 
 let covertedObj = JSON.parse(jsonData)
 
 
 console.log(covertedObj, typeof covertedObj)
 