export function Special(constructor: Function) {
    console.log(constructor)
    constructor.prototype.hello = function () {
      console.log("added by decorator")
    }
  }

export function Component(ctor: Function){
    return class extends ctor{
        constructor(){
            super()
            this.data = {
                x: this.x
            }
            this.methods = {
                hello: this.hello
            }
        }
    }
}