const difficulties = {
    easy:   { moves: 30, target: 500 },
    medium: { moves: 25, target: 800 },
    hard:   { moves: 20, target: 1100 }
};
const FRUITS = {
    easy:   ['🍎', '🍌', '🍊', '🍇', '🍉'],
    medium: ['🍎', '🍌', '🍊', '🍇', '🍉', '🍓'],
    hard:   ['🍎', '🍌', '🍊', '🍇', '🍉', '🍓', '🥭', '🍍']
};

let gameState = {
    difficulty: null,
    score: 0,
    movesLeft: 0,
    targetScore: 0,
    selectedTile: null,
    board: [],
    size: 8,
    shuffling: false
};
let gameIsOver = false;

// 页面切换
function showDifficultyModal() {
    document.getElementById('difficultyModal').classList.add('active');
}
function closeDifficultyModal() {
    document.getElementById('difficultyModal').classList.remove('active');
}
function confirmExit() {
    document.getElementById('exitModal').classList.add('active');
}
function closeExitModal() {
    document.getElementById('exitModal').classList.remove('active');
}
function exitGame() {
    document.getElementById('exitModal').classList.remove('active');
    document.getElementById('gameOverModal').classList.remove('active');
    document.getElementById('gameScreen').classList.remove('active');
    document.getElementById('mainMenu').classList.add('active');
}

// 开始游戏
function startGame(difficulty) {
    gameState.difficulty = difficulty;
    gameState.score = 0;
    gameState.movesLeft = difficulties[difficulty].moves;
    gameState.targetScore = difficulties[difficulty].target;
    gameState.selectedTile = null;
    gameIsOver = false;

    // 设置棋盘尺寸
    gameState.size = { easy: 6, medium: 8, hard: 10 }[difficulty];

    closeDifficultyModal();
    document.getElementById('mainMenu').classList.remove('active');
    document.getElementById('gameScreen').classList.add('active');
    document.getElementById('gameOverModal').classList.remove('active');
    generateBoard();
    updateUI();
    updateShuffleBtn();
}

// 生成棋盘（保证初始无三连）
function generateBoard() {
    const boardEl = document.getElementById('board');
    boardEl.innerHTML = '';
    gameState.board = [];
    const { size, difficulty } = gameState;
    const fruits = FRUITS[difficulty];

    boardEl.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    let tiles = [];

    for(let i = 0; i < size * size; i++) {
        let fruit;
        do {
            fruit = fruits[Math.floor(Math.random() * fruits.length)];
        } while (
            (i % size >= 2 && fruit === tiles[i - 1] && fruit === tiles[i - 2]) ||
            (i >= size * 2 && fruit === tiles[i - size] && fruit === tiles[i - 2 * size])
        );
        tiles.push(fruit);
    }
    gameState.board = tiles;

    for(let i = 0; i < tiles.length; i++) {
        const tile = document.createElement('div');
        tile.className = 'tile animate__animated';
        tile.dataset.index = i;
        tile.textContent = tiles[i];
        tile.addEventListener('click', onTileClick);
        boardEl.appendChild(tile);
    }
}

// 方块点击事件
function onTileClick(e) {
    if (gameState.shuffling || gameIsOver) return;
    const tileEl = e.currentTarget;
    const idx = parseInt(tileEl.dataset.index);
    const size = gameState.size;
    if (gameState.selectedTile === null) {
        tileEl.classList.add('selected');
        gameState.selectedTile = tileEl;
    } else if (gameState.selectedTile !== tileEl) {
        const firstIndex = parseInt(gameState.selectedTile.dataset.index);
        if (isAdjacent(firstIndex, idx, size)) {
            if (isValidSwap(firstIndex, idx, size)) {
                swapTiles(firstIndex, idx);
                playAudio('swap');
                gameState.movesLeft--;
                gameState.score -= 10;
                updateUI();
                setTimeout(() => {
                    if (checkMatches()) {
                        setTimeout(() => {
                            fillEmptyTiles();
                        }, 320);
                    }
                    checkGameEnd();
                }, 200);
            } else {
                // 交换不合法，shake动画+音效
                tileEl.classList.add('shake');
                playAudio('invalid');
                setTimeout(() => tileEl.classList.remove('shake'), 350);
            }
        }
        gameState.selectedTile.classList.remove('selected');
        gameState.selectedTile = null;
    }
}

// 判断相邻
function isAdjacent(a, b, size) {
    const rowA = Math.floor(a / size), colA = a % size;
    const rowB = Math.floor(b / size), colB = b % size;
    return (Math.abs(rowA - rowB) === 1 && colA === colB) ||
           (Math.abs(colA - colB) === 1 && rowA === rowB);
}

// 交换并更新DOM
function swapTiles(i1, i2) {
    [gameState.board[i1], gameState.board[i2]] = [gameState.board[i2], gameState.board[i1]];
    const tiles = document.getElementsByClassName('tile');
    tiles[i1].textContent = gameState.board[i1];
    tiles[i2].textContent = gameState.board[i2];
    tiles[i1].classList.add('animate__pulse');
    tiles[i2].classList.add('animate__pulse');
    setTimeout(() => {
        tiles[i1].classList.remove('animate__pulse');
        tiles[i2].classList.remove('animate__pulse');
    }, 350);
}

// 检查交换是否能消除
function isValidSwap(i1, i2, size) {
    [gameState.board[i1], gameState.board[i2]] = [gameState.board[i2], gameState.board[i1]];
    const valid = checkMatches(true);
    [gameState.board[i1], gameState.board[i2]] = [gameState.board[i2], gameState.board[i1]];
    return valid;
}

// 检查消除，只检测直线
function checkMatches(isPreview = false) {
    const { board, size } = gameState;
    let matches = new Set();
    // 横向
    for(let row = 0; row < size; row++) {
        let count = 1;
        for(let col = 1; col < size; col++) {
            const cur = row * size + col;
            const prev = row * size + (col - 1);
            if (board[cur] && board[cur] === board[prev]) {
                count++;
                if (count >= 3 && col === size - 1) {
                    for (let k = 0; k < count; k++) matches.add(cur - k);
                }
            } else {
                if (count >= 3) for (let k = 1; k <= count; k++) matches.add(prev - (k - 1));
                count = 1;
            }
        }
    }
    // 纵向
    for(let col = 0; col < size; col++) {
        let count = 1;
        for(let row = 1; row < size; row++) {
            const cur = row * size + col;
            const prev = (row - 1) * size + col;
            if (board[cur] && board[cur] === board[prev]) {
                count++;
                if (count >= 3 && row === size - 1) {
                    for (let k = 0; k < count; k++) matches.add(cur - k * size);
                }
            } else {
                if (count >= 3) for (let k = 1; k <= count; k++) matches.add(prev - (k - 1) * size);
                count = 1;
            }
        }
    }
    if (!isPreview && matches.size > 0) {
        // 消除动画
        const tiles = document.getElementsByClassName('tile');
        matches.forEach(idx => {
            board[idx] = null;
            tiles[idx].textContent = '';
            tiles[idx].classList.add('eliminate');
        });
        playAudio('eliminate');
        setTimeout(() => {
            matches.forEach(idx => tiles[idx].classList.remove('eliminate'));
        }, 400);
        calculateScore(matches.size);
    }
    return matches.size > 0;
}

// 得分
function calculateScore(cnt) {
    if (cnt >= 3) gameState.score += 20 * (cnt - 2);
    updateUI();
    checkGameEnd(); // 立刻判断胜负
}

// 下落补齐
function fillEmptyTiles() {
    const { board, size, difficulty } = gameState;
    let filled = false;
    const tiles = document.getElementsByClassName('tile');
    // 每列从下往上
    for(let col = 0; col < size; col++) {
        let write = size - 1;
        for(let row = size - 1; row >= 0; row--) {
            let idx = row * size + col;
            if (board[idx] !== null) {
                board[write * size + col] = board[idx];
                if (write !== row) {
                    board[idx] = null;
                    tiles[idx].textContent = '';
                    tiles[write * size + col].textContent = board[write * size + col];
                }
                write--;
            }
        }
        // 顶部补新
        for(let row = write; row >= 0; row--) {
            let idx = row * size + col;
            board[idx] = getRandomFruit(difficulty);
            tiles[idx].textContent = board[idx];
            tiles[idx].classList.add('animate__fadeInDown');
            setTimeout(() => tiles[idx].classList.remove('animate__fadeInDown'), 300);
            filled = true;
        }
    }
    setTimeout(() => {
        if (checkMatches()) {
            setTimeout(fillEmptyTiles, 350);
        }
    }, 370);
}

// 随机水果
function getRandomFruit(difficulty) {
    const arr = FRUITS[difficulty];
    return arr[Math.floor(Math.random() * arr.length)];
}

// 音效
function playAudio(type) {
    let audio;
    if (type === 'swap') audio = document.getElementById('swapSound');
    if (type === 'eliminate') audio = document.getElementById('eliminateSound');
    if (type === 'invalid') audio = document.getElementById('invalidSound');
    if (type === 'win') audio = document.getElementById('winSound');
    if (type === 'lose') audio = document.getElementById('loseSound');
    if (audio) { audio.currentTime = 0; audio.play(); }
}

// UI更新
function updateUI() {
    document.getElementById('score').textContent = gameState.score;
    document.getElementById('moves').textContent = gameState.movesLeft;
    document.getElementById('target').textContent = gameState.targetScore;
    updateShuffleBtn();
}

// 检查游戏结束
function checkGameEnd() {
    if (gameIsOver) return;
    if (gameState.score >= gameState.targetScore) {
        showGameOverModal(true);
        gameIsOver = true;
        gameState.movesLeft = 0;
        disableBoard();
    } else if (gameState.movesLeft <= 0) {
        showGameOverModal(false);
        gameIsOver = true;
        disableBoard();
    }
}

// 禁用棋盘
function disableBoard() {
    const tiles = document.getElementsByClassName('tile');
    for (let i = 0; i < tiles.length; i++) {
        tiles[i].onclick = null;
        tiles[i].style.pointerEvents = 'none';
    }
}

// 游戏结束模态框（居中框内）
function showGameOverModal(isWin) {
    if (isWin) {
        playAudio('win');
    } else {
        playAudio('lose');
    }
    const modal = document.getElementById('gameOverModal');
    const content = document.getElementById('gameOverContent');
    content.innerHTML = `
        <h2 style="color:${isWin ? '#2ecc71':'#e84a5f'}">${isWin ? '🎉 游戏胜利！' : '😢 游戏失败！'}</h2>
        <p>最终得分: <b>${gameState.score}</b></p>
        <p>目标分数: <b>${gameState.targetScore}</b></p>
        <button class="cute-btn" onclick="exitGame()">确认</button>
    `;
    modal.classList.add('active');
}

// 检查当前棋盘是否还有可消除
function hasPossibleMoves() {
    const { board, size } = gameState;
    for(let i = 0; i < board.length; i++) {
        if ((i % size) < size - 1) {
            [board[i], board[i+1]] = [board[i+1], board[i]];
            if (checkMatches(true)) {
                [board[i], board[i+1]] = [board[i+1], board[i]];
                return true;
            }
            [board[i], board[i+1]] = [board[i+1], board[i]];
        }
        if (i + size < board.length) {
            [board[i], board[i+size]] = [board[i+size], board[i]];
            if (checkMatches(true)) {
                [board[i], board[i+size]] = [board[i+size], board[i]];
                return true;
            }
            [board[i], board[i+size]] = [board[i+size], board[i]];
        }
    }
    return false;
}

// 小道具：打乱棋盘
function shuffleBoard() {
    if (gameState.shuffling || gameIsOver) return;
    if (gameState.movesLeft <= 0) return;
    if (gameState.score < Math.ceil(gameState.targetScore * 0.1)) {
        showToolTip('分数不足，无法打乱！');
        return;
    }
    // 判断是否无可消除才允许打乱
    if (hasPossibleMoves()) {
        showToolTip('还有可消除的组合，不能打乱！');
        return;
    }
    gameState.shuffling = true;
    let arr = gameState.board.filter(x=>x);
    // 打乱
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    // 重新分配到棋盘
    for(let i=0;i<arr.length;i++) gameState.board[i]=arr[i];
    // 更新DOM
    const tiles = document.getElementsByClassName('tile');
    for(let i=0;i<arr.length;i++) {
        tiles[i].textContent = arr[i];
        tiles[i].classList.add('animate__flash');
        setTimeout(() => tiles[i].classList.remove('animate__flash'), 400);
    }
    // 扣分
    gameState.score -= Math.ceil(gameState.targetScore * 0.1);
    if (gameState.score < 0) gameState.score = 0;
    updateUI();
    setTimeout(()=>{
        // 打乱后补齐可能三连
        if (checkMatches()) {
            setTimeout(fillEmptyTiles, 360);
        }
        gameState.shuffling = false;
        updateShuffleBtn();
    }, 400);
}

// 更新道具按钮状态和提示
function updateShuffleBtn() {
    const btn = document.getElementById('shuffleBtn');
    const tip = document.getElementById('shuffleTip');
    let cost = Math.ceil(gameState.targetScore * 0.1);
    if (btn) {
        btn.disabled = !(gameState.movesLeft > 0 && !hasPossibleMoves() && gameState.score >= cost && !gameIsOver);
    }
    if (tip) {
        tip.textContent = `（无可消除时可用，消耗${cost}分）`;
    }
}
function showToolTip(msg) {
    const tip = document.getElementById('shuffleTip');
    if (!tip) return;
    tip.textContent = msg;
    tip.style.color = "#e84a5f";
    setTimeout(() => {
        tip.style.color = "#ff8b6a";
        updateShuffleBtn();
    }, 1800);
}