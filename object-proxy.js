// object proxy
const person = {
  name: 'Andrew',
  age: 25
}

const objectHandlers = {  
  get(obj, prop) {
    if (this.propExist(obj, prop)) {
      this.logValue(obj, prop);
      return obj[prop];
    } else {
      this.propDoesNotExistError(prop);
      return;
    }
  },
  set(obj, prop, value) {
    if (this.propExist(obj, prop)) {
      obj[prop] = value;
      this.logValue(obj, prop);
      return obj[prop];
    } else {
      this.propDoesNotExistError(prop);
      return;
    }
  },
  deleteProperty(obj, prop) {
    if(this.propExist(obj, prop)) {
      this.logValue(obj, prop);
      delete obj[prop];
      return obj;
    } else {
      this.propDoesNotExistError(prop);
      return;
    }
  },
  propExist(obj, prop) {
    return Object.keys(obj).includes(prop);
  },
  propDoesNotExistError(prop) {
    console.error(`${prop} does not exist on object`);
  },
  logValue(obj, prop) {
    console.log(obj[prop]);
  }
}

const objectProxy = new Proxy(person, objectHandlers);
objectProxy.age;
objectProxy.age = 27;
delete objectProxy.name;
console.log(objectProxy);
