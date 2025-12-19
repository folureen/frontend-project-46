import { Command } from 'commander'


const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .usage("[options]")
  .option('-V', '--version', 'output the version number')
  .helpOption('-h', '--help', 'display help for command')


  program.parse();