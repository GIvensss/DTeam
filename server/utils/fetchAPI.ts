export const fetchAPI = <T>(path: string, options = {}): Promise<T> => {
    const config = useRuntimeConfig()

    return $fetch(path, { baseURL: config.public.apiBaseURL, ...options})
}
