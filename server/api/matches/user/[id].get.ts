import {fetchAPI} from "~/server/utils/fetchAPI";
import {HeroesEntity, MatchEntity} from "~/types/entities";

export default defineEventHandler(async (event) => {
    const id = event.context.params?.id
    const query = getQuery(event)

    const [matches, heroes] = await Promise.all([
        fetchAPI<MatchEntity[]>(`players/${id}/matches`, {
            params: {
                limit: query.limit,
                offset: query.offset,
            }
        }),
        fetchAPI<HeroesEntity>('constants/heroes')
    ])

    const getStatus = (player_slot: number, radiant_win: boolean, leaver_status: number) => {
        if (leaver_status > 0) {
            return 'abandoned'
        }

        if ((player_slot <= 127 && radiant_win) || (player_slot > 127 && !radiant_win)) {
            return 'win'
        }

        return 'lose'
    }


    return matches.map((match) => {
        const heroData = heroes[match.hero_id]

        return {
            kills: match.kills,
            deaths: match.deaths,
            assists: match.assists,
            hero_avatar: heroData.img,
            hero_name: heroData.localized_name,
            duration: match.duration,
            status: getStatus(
                match.player_slot,
                match.radiant_win,
                match.leaver_status
            )
        }
    })
})