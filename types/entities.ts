export type MatchEntity = {
    kills: number,
    deaths: number,
    assists: number,
    hero_avatar: string,
    hero_name: string,
    duration: number,
    hero_id: number,
    status: 'lose' | 'win' | 'abandoned',
    player_slot: number,
    radiant_win: boolean,
    leaver_status: number,
}

export type UserEntity = {
    profile: {
        avatarfull: string,
        personaname: string,
    },
    mmr_estimate: {
        estimate: number,
    },
    rank_tier: number,
    win: number,
    lose: number,
}

export type HeroesEntity = Record<string, {
    img: string,
    localized_name: string,
}>