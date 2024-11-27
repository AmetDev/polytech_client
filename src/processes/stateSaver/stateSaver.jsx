const { getSchedule } = require("@app/store/schedule/schedule.slice");
const { useLocalStorage } = require("@uidotdev/usehooks");
const { useSelector } = require("react-redux");

export const stateSave = () => {
    const scheduleStateFavourited = useSelector(getSchedule).favourited
    const [favourited, saveFavourited] = useLocalStorage('favourited', { group: [], lecturer: [], cabinet: [] })

    window.addEventListener('beforeunload', () => saveFavourited(scheduleStateFavourited))
}

