import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squares: any[];
  xIsNext: boolean;
  winner: string;

  // global scores
  scoreX = 0;
  scoreO = 0;
  isXfirst = true;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.newGame();
  }

  newGame(): void{
    this.squares = Array(9).fill(null); // init the game board with null values
    this.winner = null; // init the winner
    // this.xIsNext = true; // O is always the first player

    // change first player every turn
    this.xIsNext = this.isXfirst; // O is always the first player
    this.isXfirst = !this.isXfirst;
  }

  get player(): string{
    return this.xIsNext ? 'O' : 'X';
  }

  makeMove(idx: number): void{
    if(!this.squares[idx]){
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }

    this.winner = this.calculateWinner();

    if(this.winner){
      this.openDialog(this.winner)
      if(this.winner === 'O'){
        this.scoreO++;
      }else{
        this.scoreX++;
      }
    }

  }

  calculateWinner(): any{
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++){
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ){
        return this.squares[a];
      }
    }
    return null;
  }

  openDialog(winner: string): void {
    const dialogRef = this.dialog.open(WinnerDialogComponent, {
      width: '250px',
      data: winner
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.newGame();
    });
  }

  resetScores(){
    this.scoreO = 0;
    this.scoreX = 0;
    this.newGame();
  }
}

@Component({
  selector: 'app-winner-dialog',
  templateUrl: '../winner-dialog.html',
})
export class WinnerDialogComponent {
  public winner: string;

  constructor(
    public dialogRef: MatDialogRef<WinnerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

    this.winner = data;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
