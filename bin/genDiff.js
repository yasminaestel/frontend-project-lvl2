#!/usr/bin/env node

import { Command } from 'commander';
import genDiff from '../src/index.js';
import formater from '../src/stylish.js';

const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format', 'stylish')
  .action((filepath1, filepath2, stylish = formater) => {
    console.log(genDiff(filepath1, filepath2, stylish));
  });

program.parse();
