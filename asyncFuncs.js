module.exports = class asyncFuncs
{
  resolveAfter2Seconds() {
    return new Promise(resolve => {
      //setTimeout not required, only used here to simulate a time consuming process.
      //resolve(your function / data) is required.
      setTimeout(() => {
        resolve({ output1: 'Hello', output2: 'World'});
      }, 2000);
    });
  }
  
  async asyncCall() {
    console.log('calling');
    const result = await this.resolveAfter2Seconds();
    console.log(`${result.output1} ${result.output2}`);
    // expected output: "resolved"
  }
}