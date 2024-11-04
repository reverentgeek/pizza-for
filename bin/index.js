#!/usr/bin/env node
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import howManyPizza from "how-many-pizza";
import chalk from "chalk";
import boxen from "boxen";

const boxenOptions = {
	padding: 1,
	margin: 1,
	borderStyle: "round"
};

const options = yargs( hideBin( process.argv ) )
	.usage( "$0 <number-of-people> [--slices-per-person=3] [--slices-per-pizza=8]" )
	.demand( 1 )
	.default( "slices-per-pizza", 8 )
	.default( "slices-per-person", 3 )
	.parse();

if ( options._.length === 0 ) {
	console.log( "number of people eating pizza is required!" );
}
const people = options._[0];

const pizzas = howManyPizza( people, options.slicesPerPerson, options.slicesPerPizza );
const pizzaText = ( pizzas === 1 ) ? "pizza!" : "pizzas!";
const output = [
	chalk.cyan( "You're gonna need at least" ),
	chalk.white.bold( pizzas ),
	chalk.cyan( pizzaText )
];

console.log( chalk.green( boxen( output.join( " " ), boxenOptions ) ) );
