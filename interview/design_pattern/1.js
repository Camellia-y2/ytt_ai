// 圆形
class Circle {
    constructor(radius) {
        this.radius = radius
    }
    area(){
        return Math.PI * this.radius ** 2
    }

}
// 长方形
class Rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height
    }
    area() {
        return this.width * this.height
    }
}
// 工厂类
class ShapeFactory {
    static createShape(type, options){
        switch(type){
            case 'circle':
                return new Circle(options.radius);
            case 'rectangle':
                return new Rectangle(options.width, options.height);
            default:
                throw new Error('Unknown shape type');
        }
    }
}
// 统一的工厂接口
const circle = ShapeFactory.createShape('circle', { radius: 5 });
const rectangle = ShapeFactory.createShape('rectangle', { width: 3, height: 4 });

console.log(circle.area());
console.log(rectangle.area());