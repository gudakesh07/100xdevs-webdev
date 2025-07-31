class Rectangle{
    constructor(width,height,color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    area(){
        const area = this.width * this.height
        return area;
    }

    paint(){
        console.log(`Painting with color ${this.color}`)
    }
}

const rect = new Rectangle(20,35,"Red")
console.log(rect.width)
const area = rect.area()
console.log(area)







const rect1 ={
    width : 2,
    height : 5,
    color: "Red"
}

function areaa(rect1){
    return rect1.width * rect1.height;
}

let ans  = areaa(rect1)
console.log(ans)


const now = new Date();
console.log(now.toISOString())
console.log(now.getDay())


const map = new Map();
map.set('name', "Raj")
map.set('age','20')
console.log(map.get('name'))

const firstname = map.get('name')
console.log(firstname)

class circle{
    constructor(radius, color){
        this.radius = radius;
        this.color = color
    }

    area(){
        const area = 3.1415 * this.radius * this.radius;
        return area;
    }
    paint(){
        return(`So the color of the Circle is ${this.color}`)
    }
}

const button = new circle(23,"White")
console.log(button)
let size = button.area()
console.log(size)
let aacha = button.paint()
console.log(aacha)