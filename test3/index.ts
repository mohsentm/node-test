export enum RankPosition { A, B, C, D, E, F, G}

export enum FilePosition { ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT}

export type  ChessboardPosition = {
    rank: RankPosition,
    file: FilePosition
}

export const canAttack = (knightA: ChessboardPosition, knightB: ChessboardPosition): boolean => {

    const rankPosition = Math.abs(knightA.rank - knightB.rank)
    const filePosition = Math.abs(knightA.file - knightB.file)

    return (rankPosition == 1 && filePosition == 2) || (rankPosition == 2 && filePosition == 1)
};
