//* JEST TESTING

//! Quick start
// npm install --save-dev jest babel-jest

/* Add to package.json */
// "scripts": {
//   "test": "jest"
// }

//* Run your tests
// npm test -- --watch

//* Writing tests
// describe('My work', () => {
//   test('works', () => {
//     expect(2).toEqual(2)
//   })
// })

//* BDD syntax
// describe('My work', () => {
//   it('works', () => {
//   })
// })

//* Setup
// beforeEach(() => { ... })
// afterEach(() => { ... })
// beforeAll(() => { ... })
// afterAll(() => { ... })

//* Focusing tests
// describe.only(···)
// it.only(···) // alias: fit()

//* Skipping tests
// describe.skip(···)
// it.skip(···) // alias: xit()

//* Optional flags
// --coverage	See a summary of test coverage
// --detectOpenHandles	See a summary of ports that didn’t close
// --runInBand	Run all tests one after the other


//! Expect
//* Basic expectations
// expect(value)
//   .not
//   .toBe(value)
//   .toEqual(value)
//   .toBeTruthy()

//* Snapshots
// expect(value)
//   .toMatchSnapshot()
//   .toMatchInlineSnapshot()

//* Errors
// expect(value)
//   .toThrow(error)
//   .toThrowErrorMatchingSnapshot()

//* Booleans
// expect(value)
//   .toBeFalsy()
//   .toBeNull()
//   .toBeTruthy()
//   .toBeUndefined()
//   .toBeDefined()

//* Numbers
// expect(value)
//   .toBeCloseTo(number, numDigits)
//   .toBeGreaterThan(number)
//   .toBeGreaterThanOrEqual(number)
//   .toBeLessThan(number)
//   .toBeLessThanOrEqual(number)

//* Objects
// expect(value)
//   .toBeInstanceOf(Class)
//   .toMatchObject(object)
//   .toHaveProperty(keyPath, value)

//* Objects
// expect(value)
//   .toContain(item)
//   .toContainEqual(item)
//   .toHaveLength(number)

//* Strings
// expect(value)
//   .toMatch(regexpOrString)

//* Others
// expect.extend(matchers)
// expect.any(constructor)
// expect.addSnapshotSerializer(serializer)
// expect.assertions(1)

//! More features

//* Asynchronous tests
// test('works with promises', () => {
//   return new Promise((resolve, reject) => {
//   })
// })

// test('works with async/await', async () => {
//   const hello = await foo()
// })

//* Snapshots
// it('works', () => {
//   const output = something()
//   expect(output).toMatchSnapshot()
// })


//* React test renderer
// import renderer from 'react-test-renderer'
// it('works', () => {
//   const tree = renderer.create(
//     <Link page="https://www.facebook.com">Facebook</Link>
//   ).toJSON()

//   expect(tree).toMatchSnapshot()
// })

//* Timers
// jest.useFakeTimers()
// it('works', () => {
//   jest.runOnlyPendingTimers()
//   jest.runTimersToTime(1000)
//   jest.runAllTimers()
// })

//! Mock functions

//* Mock functions
// const fn = jest.fn()
// const fn = jest.fn(n => n * n)

//* Assertions
// expect(fn)
//   .toHaveBeenCalled()
//   .toHaveBeenCalledTimes(number)
//   .toHaveBeenCalledWith(arg1, arg2, ...)
//   .toHaveBeenLastCalledWith(arg1, arg2, ...)

// expect(fn)
//   .toHaveBeenCalledWith(expect.anything())
//   .toHaveBeenCalledWith(expect.any(constructor))
//   .toHaveBeenCalledWith(expect.arrayContaining([ values ]))
//   .toHaveBeenCalledWith(expect.objectContaining({ props }))
//   .toHaveBeenCalledWith(expect.stringContaining(string))
//   .toHaveBeenCalledWith(expect.stringMatching(regexp))

//* Instances
// const Fn = jest.fn()

// a = new Fn()
// b = new Fn()
// Fn.mock.instances // → [a, b]

//* Calls
// const fn = jest.fn()
// fn(123)
// fn(456)

// fn.mock.calls.length   // → 2
// fn.mock.calls[0][0]    // → 123
// fn.mock.calls[1][0]    // → 456

//* Return values
// const fn = jest.fn(() => 'hello')

// jest.fn().mockReturnValue('hello')
// jest.fn().mockReturnValueOnce('hello')

//* Mock implementations
// const fn = jest.fn()
//   .mockImplementationOnce(() => 1)
//   .mockImplementationOnce(() => 2)

// fn()    // → 1
// fn()    // → 2
