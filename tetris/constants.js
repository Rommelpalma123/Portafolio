export const BLOCK_SIZE = 20
export const BOARD_WIDTH = 14
export const BOARD_HEIGTH = 30

export const EVENT_MOVEMENTS = {
  LEFT: 'ArrowLeft',
  RIGHT: 'ArrowRight',
  DOWN: 'ArrowDown',
  ROTATE: 'ArrowUp'
}

export const pieces = [
  [
    [1, 1],
    [1, 1]
  ],
  [
    [1, 1, 1, 1]
  ],
  [
    [0, 1, 0],
    [1, 1, 1]
  ],
  [
    [1, 1, 0],
    [0, 1, 1]
  ],
  [
    [1, 0],
    [1, 0],
    [1, 1]
  ],
  [
    [0, 1],
    [0, 1],
    [0, 1]
  ]
]

export const piece = {
  position: { x: 6, y: 2 },
  shape: [
    [1, 1],
    [1, 1]
  ]
}

export const board = Array.from({ length: BOARD_HEIGTH }, () => Array(BOARD_WIDTH).fill(0))
