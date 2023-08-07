export const getUnifiedString = (items: (string|number)[], separator: string = ' ') => {
    return items.filter(Boolean).join(separator)
}