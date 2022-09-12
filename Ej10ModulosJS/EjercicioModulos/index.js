import * as Controller from './Modulos/controller.js'
import chalk from 'chalk';

let sum1 = Controller.suma(1, 2)
let sum2 = Controller.suma(4, 5)
let mult = sum1 * sum2

console.log(chalk.green(mult));