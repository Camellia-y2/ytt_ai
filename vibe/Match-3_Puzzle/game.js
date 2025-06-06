const difficulties = {
    easy: { moves: 30, target: 500, successRate: 0.9 },
    medium: { moves: 25, target: 800, successRate: 0.7 },
    hard: { moves: 20, target: 1000, successRate: 0.6 }
};

let gameState = {
    selectedTile: null,
    score: 0,
    movesLeft: 0,
    targetScore: 0,
    board: []
};

// 初始化游戏
function startGame(difficulty) {
    gameState.movesLeft = difficulties[difficulty].moves;
    gameState.targetScore = difficulties[difficulty].target;
    gameState.score = 0;
    
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('gameScreen').style.display = 'block';
    generateBoard(difficulty);
    updateUI();
}

// 生成游戏棋盘
function generateBoard(difficulty) {
    const board = document.getElementById('board');
    board.innerHTML = '';
    gameState.board = [];
    
    // 根据难度设置棋盘尺寸
    const size = { easy: 6, medium: 8, hard: 10 }[difficulty];
    const tileTypes = ['🍎', '🍌', '🍊', '🍇', '🍉']; // 水果类型
    
    // 生成棋盘
    for(let i = 0; i < size * size; i++) {
        const tile = document.createElement('div');
        tile.className = 'tile';
        tile.dataset.index = i;
        
        // 随机生成水果（确保初始可消除）
        let fruit;
        do {
            fruit = tileTypes[Math.floor(Math.random() * tileTypes.length)];
        } while (i >= 2 && 
               gameState.board[i-1] === fruit && 
               gameState.board[i-2] === fruit);
        
        tile.textContent = fruit;
        tile.addEventListener('click', function() {
            if(!gameState.selectedTile) {
                gameState.selectedTile = this;
                this.classList.add('selected');
            } else {
                // 交换逻辑
                const firstIndex = parseInt(gameState.selectedTile.dataset.index);
                const secondIndex = parseInt(this.dataset.index);
                
                if(isAdjacent(firstIndex, secondIndex, size)) {
                    swapTiles(firstIndex, secondIndex);
                    checkMatches();
                }
                
                gameState.selectedTile.classList.remove('selected');
                gameState.selectedTile = null;
            }
        });
        
        board.appendChild(tile);
        gameState.board.push(fruit);
    }
    
    // 设置棋盘网格布局
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

// 辅助函数：判断是否相邻
function isAdjacent(a, b, size) {
    const rowA = Math.floor(a / size);
    const colA = a % size;
    const rowB = Math.floor(b / size);
    const colB = b % size;
    
    return (Math.abs(rowA - rowB) === 1 && colA === colB) || 
           (Math.abs(colA - colB) === 1 && rowA === rowB);
}

// 方块交换处理
function swapTiles(index1, index2) {
    // 执行交换动画
    const temp = gameState.board[index1];
    gameState.board[index1] = gameState.board[index2];
    gameState.board[index2] = temp;
    
    // 更新DOM
    const tiles = document.getElementsByClassName('tile');
    tiles[index1].textContent = gameState.board[index1];
    tiles[index2].textContent = gameState.board[index2];
}

// 检查匹配项
function checkMatches() {
    const size = Math.sqrt(gameState.board.length);
    let matches = new Set();
    
    // 横向检查
    for(let row = 0; row < size; row++) {
        for(let col = 0; col < size - 2; col++) {
            const index = row * size + col;
            if(gameState.board[index] && 
               gameState.board[index] === gameState.board[index+1] && 
               gameState.board[index] === gameState.board[index+2]) {
                matches.add(index);
                matches.add(index+1);
                matches.add(index+2);
            }
        }
    }
    
    // 纵向检查（类似逻辑）
    // ... 此处添加纵向和斜向检查代码
    
    if(matches.size >= 3) {
        // 消除匹配项并补充新方块
        matches.forEach(index => {
            gameState.board[index] = tileTypes[Math.floor(Math.random()*tileTypes.length)];
            const tile = document.getElementsByClassName('tile')[index];
            tile.style.transform = 'scale(1.2)';
            setTimeout(() => tile.style.transform = '', 300);
        });
        calculateScore(matches.size);
    } else {
        // 无效交换则恢复原状
        swapTiles(firstIndex, secondIndex);
    }
}

// 得分计算
function calculateScore(matchedCount) {
    const baseScore = matchedCount >= 3 ? 20 * (matchedCount - 2) : 0;
    gameState.score += baseScore - 10; // 每步消耗10分
    gameState.movesLeft--;
    
    if(gameState.score >= gameState.targetScore) alert('胜利！');
    if(gameState.movesLeft <= 0) alert('游戏结束');
    updateUI();
}

// AI驱动提示（示例）
function getAISuggestion() {
    // 此处可集成AI算法给出消除建议
    const bestMove = findBestMove();
    highlightSuggestion(bestMove);
}

function updateUI() {
    document.getElementById('score').textContent = gameState.score;
    document.getElementById('moves').textContent = gameState.movesLeft;
}