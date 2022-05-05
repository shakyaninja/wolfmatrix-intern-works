Day 14 (2079-01-21|| Thursday) 
---

# Redux implementation using slice and ``useSelector`` and ``useDispatch`` hooks

## Slicer file

we use slice file as to export the reducers with actions to trigger that specific reducer combined together as:


``@createSlice.js``

```
import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
```

## ``configureStore`` API

* We must pass the list of reducers as arguement for ``configureStore`` from redux-toolkit for creation of a redux store.

* we can pass in all of the different reducers in an object. The key names in the object will define the keys in our final state value.

```
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})
```

## ``useSelector`` hook

Reading Data with ``useSelector``
First, the ``useSelector`` hook lets our component extract whatever pieces of data it needs from the Redux store state.

Earlier, we saw that we can write "selector" functions, which take state as an argument and return some part of the state value.

```
const count = useSelector(selectCount)
```
where, selectCount is imported as:
```
export const selectCount = state => state.counter.value
```

OR if not exported then can be written inline wy as:

```
const countPlusTwo = useSelector(state => state.counter.value + 2)
```
Any time an action has been dispatched and the Redux store has been updated, ``useSelector`` will re-run our selector function. If the selector returns a different value than last time, ``useSelector`` will make sure our component re-renders with the new value.

## ``useDispatch`` hook

Dispatching Actions with useDispatch
Similarly, we know that if we had access to a Redux store, we could dispatch actions using action creators, like store.dispatch(increment()). Since we don't have access to the store itself, we need some way to have access to just the dispatch method.

The useDispatch hook does that for us, and gives us the actual dispatch method from the Redux store:

```
const dispatch = useDispatch()
```

and in Counter.js:

```
<button
  className={styles.button}
  aria-label="Increment value"
  onClick={() => dispatch(increment())}
>
  +
</button>
```

## Rules for reducers

We said earlier that reducers must always follow some special rules:

* They should only calculate the new state value based on the state and action arguments
* They are not allowed to modify the existing state. Instead, they must make immutable updates, by copying the existing state and making changes to the copied values.
* They must not do any asynchronous logic or other "side effects"


# Symfony continued ...

