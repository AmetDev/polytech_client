import Link from 'next/link'
import style from './Enrollee.module.scss'

const EnrolleRecomendations = () => {
  return (
    <section className={style.specialityes__recomendations}>
      <h2>Помощь в выборе специальности</h2>

      <div className={style.specialityes__recomendationsList}>
        <Link className={style.specialityes__recomended} href='/quiz'>
          <div>Какая специальность мне больше подходит?</div>
        </Link>

        <Link className={style.specialityes__recomended} href='/recomendations-family'>
          <div>Как выбрать профессию подростку</div>
        </Link>

        <Link className={style.specialityes__recomended} href='/recomendations'>
          <div>Советы родителям: как избежать типичных ошибок</div>
        </Link>
      </div>
    </section>
  )
}

export default EnrolleRecomendations
