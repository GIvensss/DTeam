const rankNames: Record<number, string> = {
    1: "Herald",
    2: "Guardian",
    3: "Crusader",
    4: "Archon",
    5: "Legend",
    6: "Ancient",
    7: "Divine",
    8: "Immortal",
}

const rankTiers: Record<number, string> = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
}

export const getUserRank = (rank: number): string => {
    const [rankNameId, rankTierId] = [...rank.toString()].map(Number)

    return getUnifiedString([
        rankNames[rankNameId],
        rankTiers[rankTierId]
    ])
}