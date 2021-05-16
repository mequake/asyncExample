const asyncFuncs = require('./asyncFuncs');
class startUp
{
  constructor()
  {
    this.started = false;
    this.asyncFuncs = new asyncFuncs();
  }
  async start()
  {
    this.started = true;
    console.log(`Started: ${this.started}`);
    this.asyncFuncs.asyncCall();
  }
}

startup = new startUp();
startup.start();