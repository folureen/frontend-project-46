import { Command } from 'commander'


const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .usage("[options] <filepath1> <filepath2>")
  .option('-V, --version', 'output the version number')
  .option('-f, --format [type]', 'output format')
  .helpOption('-h, --help', 'display help for command')


  program.parse();