const normalFunction = () => {
    asyncFunction1(); // Asynchronous Execution
    console.log('normalFunction(): end');
};
const asyncFunction1 = async () => {
    await asyncFunction2(); // Synchronous Execution
    console.log('asyncFunction1(): end');
};
const asyncFunction2 = async () => {
    await promise; // Synchronous Execution
    console.log('asyncFunction2(): end');
};
const promise = new Promise(resolve => {
    setTimeout(resolve, 1000); // Wait for 1 sec
});

normalFunction(); 

/** The output */ 
// normalFunction(): end
// asyncFunction2(): end
// asyncFunction1(): end
