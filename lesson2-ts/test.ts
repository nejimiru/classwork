export namespace lesson2 {

  // function check<TTT>(val:TTT):TTT {
  //   return val;
  // }

  // check<string>('asasfwafawfaw');
  // check<number[]>([1,2,3]);

  // type person<TTT> = {
  //   age: number;
  //   name: string;
  //   accountId: TTT;
  // }

  // let user: person<number>;
  // user.name = 'wdwadwad';
  // user.accountId = 344;

  // let a: (string|number)[] = [1,2,2,'2332',2323,'23222222'];
  // let c: string[]|number[];
  // c = ['2eq3q','312312']
  // typeof a[2] === 'string'

  // type role = "user" | "admin" | "manager";
  // let b: role = 'user'

  // type sumFunc = (a: number, b: number) => number;

  // let sum: sumFunc = (a, b) => {
  //   return a+b;
  // }

  // Decorators
  @sealed
  export class Greeter {
    @logProperty
    greetings: string;

    constructor(message: string) {
      this.greetings = message;
    }

    @enumerable(true)
    greet(@logParam text: string) {
      return "Hello, " + this.greetings;
    }
  }
  
  function sealed(constructor : Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
  }

  function  enumerable(value: boolean) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor):void {
      descriptor.enumerable = value;
    }
  }

  function logParam(target: any, propertyKey: string, parameterIndex: number){
    console.log('target: ' + target);
    console.log('propertyKey: ' + propertyKey);
    console.log('parameterIndex: ' + parameterIndex);
    
  }

  function logProperty(target: any, key: string) {
    let val = target[key]
    Object.defineProperty(target, key, {
      get: () => {
        console.log('GET greetings');
        
        return val;
      },
      set: (newValue) => {
        console.log('SET greetings');
        
        val = newValue;
      }
    })
  }

}

let gr = new lesson2.Greeter('wdawdawd');
// lesson2.Greeter['somethis'] = 5;

// for(let key in gr) {
//   console.log(key);
// }
gr.greetings = 'jim'