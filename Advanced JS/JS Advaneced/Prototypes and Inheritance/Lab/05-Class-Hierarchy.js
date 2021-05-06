function solve() {
    class Figure {
        constructor(units = 'cm') {
            this.units = units;
        }

        toScale(param) {
            switch (this.units) {
                case 'cm':
                    break;
                case 'mm':
                    param = param * 10;
                    break;
                case 'm':
                    param = param / 1000;
                    break;
                default:
                    break;
            }
            return param;
        }

        get area() {
            return null;
        }

        changeUnits(unit) {
            if (unit === 'm' || unit == 'cm' || unit == 'mm') {
                this.units = unit;
            }
        }

        toString() {
            return `Figures units: ${this.units}`
        }
    }

    class Circle extends Figure {
        constructor(radius, units) {
            super(units);
            this._radius = radius;
        }

        get radius() {

            return this.toScale(this._radius);
        }

        get area() {
            return Math.PI * this.radius * this.radius;
        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius}`
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this._width = width;
            this._height = height;
        }

        get width() {
            return this.toScale(this._width);
        }

        get height() {
            return this.toScale(this._height);
        }

        get area() {
            return this.width * this.height;
        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`
        }
    }

    return { Figure, Circle, Rectangle }
}
