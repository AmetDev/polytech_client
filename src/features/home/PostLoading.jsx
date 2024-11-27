import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'


import style from './Post.module.scss'

const PostLoading = () => {
  return (
    <article className={style.postLoading}>
      <SkeletonTheme baseColor='#202020' highlightColor='#444'>
        <Skeleton className={style.imageLoading} />

        <div className={style.info}>
            <Skeleton className={style.titleLoading} />
            <Skeleton className={style.descLoading} />
        </div>

      </SkeletonTheme>
    </article>
  )
}

export default PostLoading
