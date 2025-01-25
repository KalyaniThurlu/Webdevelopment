
let num =[1,2,3,4,6]
console.log(num.push(5),num)
let Num=[1,2,3,4]
console.log(Num.pop(1),Num)

let fruites= ["latha", "geetha", "suma"]
console.log(fruites.shift("latha"),fruites)
let veg =["tamoto", "oinion","mirchi"]
console.log(veg.unshift("banana"),veg)
let books=["this is first class"]
console.log(books.splice(5,10),books)
let my1= ["telugu", "hindhi", "hindhi","english"]
console.log(my1.slice(1-2),my1)
let good=["sjma","preethi","rama","geetha"]


let cars=[
    {name:"vivo",price:10000},
    {name:"samsung",price:20000},
    {name:"apple",price:3000}
]
let excars=cars.map(function(e){
    return e.price

})
console.log(excars)
let nums=[1,2,3,4,5,6,7,8,9,10]
let Nums=nums.filter(function(v){
    return v%2===0


})
console.log(Nums)

let frt= ["rama","suma","geetha"]
let exfrt=frt.join("*")
console.log(exfrt)

var name="prethi";
function good1(){
    var name="pooja";

}
good1()
console.log(name)

let Name="latha";
function bad(){
    let Name="geetha"
    console.log(Name)
}
bad()
const numbers=[1,2,3,4,6]
console.log(numbers)

function myFun(a,b){
    return a+b

}
let rst=myFun(1,3)
console.log(rst)

function myFun1(){
    return "wellcome"
}
console.log(myFun1());
function myFun2(){
    console.log("this is my first class")
}
myFun2()
function myFun3(){
    return "hello"
}
console.log(myFun3())
const emp={
    name:"latha",
    id:1,
    salary:1000,

}
console.log(emp)


const employee={
    name:"suma",
    age:20,
    Address:{
        village:"gollapalli",
        mandal:"n p kunta",

        dis:"ananthapur"
    },
    Address2:{
        village:"nakkalavandlapalli",
        mandal:"galiveedu",
        dis:"kadapa"
    }
}


let a=10, b=20, c=30
function good3(){
    if(a>b){
        console.log("a num is big num")

    }else if(a===b){
        console.log("both are equal")


    }else if(c<b||c===b){
        console.log("this is currect")

    }else{
        console.log("all are wrong")
    }
}
good3()

let numss=-3
let myre=numss>0?"positive":"negtive"
console.log(myre)


let str="hello";
console.log(str.toUpperCase())
let str2="HELLO";
console.log(str2.toLowerCase())
let str3="first";
console.log(str3.charAt(3))
let str5=["banana","apple","mango","garapes"]
console.log(str5.includes("banana"))
let str6=["mango","orange","grapes"]
console.log(str6.splice(1,2))

let rr="this is first class"

console.log(rr.slice(4-10))
let res="hello"
    let res9="kalyani"
    let combain=res+res9
    console.log(combain)
    let h="how"
    console.log(h.replace("how","hi"))





