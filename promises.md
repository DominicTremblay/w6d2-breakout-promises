# Promises

## What is a promise

## Why a promise

- Better interface than callbacks to handle multiple async calls

### A Future Value

- Order at Tim Horton

### 3 states

- Promises can have 3 states

1. Pending
2. Fulfilled
3. Rejected

- [Promise states](./JavaScript-Promise-state.png)

### 2 parts

1. Executor Function
2. Consuming a Promise


#### Executor Function

```js
const promiseObj = new Promise = (executorFn);
```

```js
const executorFn = (resolutionFn, rejectionFn) => {
  // Some asynchronous operations

  // promise fulfilled
  resolutionFn(someValue);
  
  // promise rejected
  rejectionFn(someErrorMsg);

}

const promiseObj = new Promise = (executorFn);
```

- Having the executor function in-line

```js
const promiseObj = ((resolve, reject) => {

  resolve(someValue);

  reject()

})
```
#### Consuming a promise

- How a promise can be used

```js
promiseObj
  .then(successCallbackFn)
  .catch(errorCallbackFn)
```

```js
promiseObj
  .then(result => {
    // do something with the result
    console.log(result);
  })
  .catch(err => {
    // do something with the error
    console.log(err);
  })
```

##### Promise Chaining

- Using muttiple promises can be chained
- each .then() can also return a promise for the next .then()

```js
promiseObj
  .then(result => {
    // do someting with result

    return value

  })
  .then(value => {

    // getting the value here
    // do domething with the value

  })
  .catch(err => console.log(err))
```

##### Promise.all

- Useful when we need multiple promises to be all fulfilled before we can do something with the result

```js
Promise
  .all([promise1, promise2, promise3])
  .then(results => {
    // results is an array containing the result of each fulfilled promise.

    // result of promise 1 => results[0]
    // result of promise 2 => results[1]
    // result of promise 3 => results[2]

  })
  .catch(err => console.log(error))


```



