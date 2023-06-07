const sent = '|/-\|/';
let i = 0;

const spinner = () => {
  setTimeout( () => {
    process.stdout.write(`\r${sent[i++]}     `);
    if (i < sent.length) {
      spinner();
    }
    if (i === sent.length) {
      process.stdout.write('\n')
    }
  
}, 200);
}


spinner();