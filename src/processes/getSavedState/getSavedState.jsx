const { useLocalStorage } = require("@uidotdev/usehooks")


export const getSavedState = () => {
    const [favourited, saveFavourited] = useLocalStorage('favourited', { group: [], lecturer: [], cabinet: [] })
    return favourited
}

