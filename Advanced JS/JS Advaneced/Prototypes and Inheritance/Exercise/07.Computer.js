function createComputerHierarchy() {
    //TODO: implement all the classes, with their properties

    class Keyboard {
        constructor(manufacturer, responseTime) {
            this.manufacturer = manufacturer;
            this.responseTime = responseTime;
        }
    }

    class Monitor {
        constructor(manufacturer, width, height) {
            this.manufacturer = manufacturer;
            this.width = width;
            this.height = height;
        }
    }

    class Battery {
        constructor(manufacturer, expectedLife) {
            this.manufacturer = manufacturer;
            this.expectedLife = expectedLife;
        }
    }

    class Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            // Attempting to instantiate an abstract class should throw an Error, attempting to pass an object that is not of the expected instance 
            // (ex. an object that is not an instance of Battery to the laptop as a battery) should throw a TypeError.
            if (new.target === Computer) {
                throw new Error('Error')
            }
            this.manufacturer = manufacturer;
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }

    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            if (new.target === Computer) {
                throw new TypeError('TypeError')
            }
            super(manufacturer, processorSpeed, ram, hardDiskSpace)
            this.weight = weight;
            this.color = color;
            this.battery = battery;
        }

        get battery() {
            return this._battery;
        }

        set battery(value) {
            if (!(value instanceof Battery)) {
                throw new TypeError;
            }

            this._battery = value;
        }
        // battery - an instance of the Battery class containing the laptop's battery. 
        // There should be a getter and a setter for the property and validation that the passed in argument is actually an instance of the Battery class.
        // to do = getter
        // to do = setter

    }

    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            if (new.target === Computer) {
                throw new TypeError('TypeError')
            }
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.keyboard = keyboard;
            this.monitor = monitor;
        }


        // 1. keyboard - an instance of the Keyboard class containing the Desktop PC's Keyboard. 
        // There should be a getter and a setter for the property and validation that the passed in argument is actually an instance of the Keyboard class.
        get keyboard() {
            return this._keyboard;
        }

        set keyboard(value) {
            if (!(value instanceof Keyboard)) {
                throw new TypeError;
            }
            this._keyboard = value;
        }
        get monitor() {
            return this._monitor;
        }

        set monitor(value) {
            if (!(value instanceof Monitor)) {
                throw new TypeError;
            }
            this._monitor = value;
        }

    }

    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}
