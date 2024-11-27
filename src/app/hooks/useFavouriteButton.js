import courpusStyle from '@widgets/Schedule/Corpus/Corpus.module.scss'
import favouritedStyle from '@features/Schedule/Favourited/Favourited.module.scss'

export const useFavouritedButton = (pair) => {
    if (!pair) return

    let container = pair.closest('.' + courpusStyle.corpus)
    if (!container) container = pair.closest('.' + favouritedStyle.favourited)

    const button = container.querySelector('.corpus__add-favourite-button')
    return button
}

