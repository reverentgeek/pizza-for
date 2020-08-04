#!/usr/bin/env node
"use strict";

const howManyPizza = require( "how-many-pizza" );
const yargs = require( "yargs" );
const chalk = require( "chalk" );
const boxen = require( "boxen" );

const boxenOptions = {
	padding: 1,
	margin: 1,
	borderStyle: "round"
};

const options = yargs
	.usage( "$0 <number-of-people> [--slices-per-person=3] [--slices-per-pizza=8]" )
	.demand( 1 )
	.default( "slices-per-pizza", 8 )
	.default( "slices-per-person", 3 )
	.argv;

if ( options._.length === 0 ) {
	console.log( "number of people eating pizza is required!" );
}
const people = options._[0];

const pizzas = howManyPizza( people, options.slicesPerPerson, options.slicesPerPizza );
const output = [
	chalk.cyan( "You're gonna need at least" ),
	chalk.white.bold( pizzas ),
	chalk.cyan( "pizzas!" )
];

// console.log( `You're going to need at least ${ pizzas } pizzas!` );

console.log( chalk.green( boxen( output.join( " " ), boxenOptions ) ) );
