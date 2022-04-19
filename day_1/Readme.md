# JavaScript Basics Revision

## JS Variables

>const

>var

>let

## JS Arrays and Maps

Indexed

Key Indexed

## JS Class

### Date Object

new Date('month day, year timestamp')

>set()

>get()

## JS Text manipulation

>split()

>slice()

>includes()

>charAt()

>indexOf()

>concat()

>substr()

>match()

>matchAll()

>search()

>toLowerCase()


>toUpperCase()

>trim()

## JS Regular Expression


## JS DOM (Document Object Model)

### JS DOM access methods:

>document.getElementById()

>document.getElementByClassName() => returns collection

>document.getElementByTagName() => returns collection

## JS Promises

object representing the eventual completion or failure of an asynchronous operation.

 ``createAudioFileAsync(audioSettings, successCallback, failureCallback);`` 
 
 to promise based code:

 ``createAudioFileAsync(audioSettings).then(successCallback, failureCallback);``

Good Example:

```
doSomething()
.then(function(result) {
  return doSomethingElse(result);
})
.then(newResult => doThirdThing(newResult))
.then(() => doFourthThing())
.catch(error => console.error(error));
```

Provides advantages like:

* Guarantees
* Chaining
* Error Propagation
* Handle Rejections

## JS Iterators

In JavaScript an iterator is an object which defines a sequence and potentially a return value upon its termination.

Example for iterators:

```
function makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let nextIndex = start;
    let iterationCount = 0;

    const rangeIterator = {
       next() {
           let result;
           if (nextIndex < end) {
               result = { value: nextIndex, done: false }
               nextIndex += step;
               iterationCount++;
               return result;
           }
           return { value: iterationCount, done: true }
       }
    };
    return rangeIterator;
}
```

usage of iterator:

```
const it = makeRangeIterator(1, 10, 2);

let result = it.next();
while (!result.done) {
 console.log(result.value); // 1 3 5 7 9
 result = it.next();
}

console.log("Iterated over sequence of size: ", result.value); // [5 numbers returned, that took interval in between: 0 to 10]
```

## JS Generator

While custom iterators are a useful tool, their creation requires careful programming due to the need to explicitly maintain their internal state. Generator functions provide a powerful alternative: they allow you to define an iterative algorithm by writing a single function whose execution is not continuous. Generator functions are written using the __**function\***__ syntax.

When called, generator functions do not initially execute their code. Instead, they return a special type of iterator, called a Generator. When a value is consumed by calling the generator's next method, the Generator function executes until it encounters the yield keyword.

Example for generator function:

```
function* makeRangeIterator(start = 0, end = 100, step = 1) {
    let iterationCount = 0;
    for (let i = start; i < end; i += step) {
        iterationCount++;
        yield i;
    }
    return iterationCount;
}
```

