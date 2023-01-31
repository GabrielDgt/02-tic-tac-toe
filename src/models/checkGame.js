const WINNER_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8]
]

export function checkWinner(board){
    for(const combinations of WINNER_COMBINATIONS){
        const [a, b, c] = combinations

        if(
            board[a] && 
            board[a] === board[b] && 
            board[a] === board[c] 
        ){
            return board[a]
        }
    }
    return null
}

export function checkEndGame(board){
    return board.every(square => square !== null)
} 