import {fetchAPI} from "~/server/utils/fetchAPI";
import {UserEntity} from "~/types/entities";

export default defineEventHandler(async (event) => {
    const id = event.context.params?.id

    const [playerData, winLosesData] = await Promise.all([
        fetchAPI<Omit<UserEntity, 'win' | 'lose'>>(`players/${id}`),
        fetchAPI<Pick<UserEntity, 'win' | 'lose'>>(`players/${id}/wl`)
    ])

    return {
        ...playerData,
        ...winLosesData
    }
})