'use strict'
class TicktacToe {
 constructor(grid) {
 this.grid = [
 [new Square(), new Square(), new Square()],
 [new Square(), new Square(), new Square()],
 [new Square(), new Square(), new Square()]
 ];
 }
 isFull() {
 let count = 0;
 for (let i = 0; i < 3; i++) {
 for (let j = 0; j < 3; j++) {
 if (this.grid[i][j].state != "") { count++ }
 }
 }
 if (count == 9) {

 return true;
 }
 else {
 return false;
 }
 }
 check_win() {
 for (let i = 0; i < 3; i++) {
 if (this.grid[i][0].state == this.grid[i][1].state && this.grid[i][0].state == this.grid[i][2].state && this.
grid[i][0].state != "") {
 print_winner();
 }
 }
 for (let j = 0; j < 3; j++) {
 if (this.grid[0][j].state == this.grid[1][j].state && this.grid[0][j].state == this.grid[2][j].state && this.
grid[0][j].state != "") {
 print_winner();
 }
 }
 if ((this.grid[0][0].state == this.grid[1][1].state && this.grid[0][0].state == this.grid[2][2].state && th
is.grid[0][0].state != "") ||
 (this.grid[0][2].state == this.grid[1][1].state && this.grid[0][2].state == this.grid[2][0].state && this
.grid[0][2].state != "")) {
 print_winner();
 }
 if (this.isFull()) {
 print_tie();

 }
 }
}
class Square {
 constructor(state) {
 this.state = "";
 }
 whoseTurn() {
 if (counter == 0) {
 return this.state = "x";
 }
 else {
 return this.state = "o";
 }
 }
}
class Player {
 constructor(symbol) {
 this.symbol = symbol;
 }
}
class Game {
 constructor() {
 this.TicktacToe = new TicktacToe();

 this.players = [
 new Player("x"),
 new Player("o")
 ];
 }
}
'use strict'
var g = new Game();
var counter = 0;
function play() {
 let bd = document.getElementById('board');
 bd.addEventListener('click', (event) => {
 // console.log(event.target);
 event.target.innerHTML = g.players[counter].symbol;
 var squareNum = event.target.id.split('');
 var row = squareNum[0];
 var col = squareNum[1];
 g.TicktacToe.grid[row][col].whoseTurn();
 g.TicktacToe.check_win();
 if (counter == 0) { counter = 1 }
 else { counter = 0 }
 });
}
function print_winner() {

 let winner = g.players[counter].symbol;
 document.getElementById("winner").innerHTML=(`${winner} wins`);
}
function print_tie() {
 document.getElementById("winner").innerHTML= ("It's a tie");
}
function play_again() {
 let bt = document.getElementById('new-game');
 bt.addEventListener('click', () => {
 for (let i = 0; i < 9; i++) {
 document.querySelectorAll('.square')[i].innerHTML = "";
 }
 g = new Game();
 });
}
play();
play_again();