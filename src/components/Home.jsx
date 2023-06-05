import s from './css/Home.module.css';

export default function Home() {
  return (
      <div className={s.wrapper}>
        <div className={s.hero_section}>
          <p className={s.sub_heading}>so, you want to travel to</p>
          <h1>SPACE</h1>
          <p className={s.herotext}>Let’s face it; if you want to go to space, you might as well genuinely go to
          outer space and not hover kind of on the edge of it. Well sit back, and relax
          because we’ll give you a truly out of this world experience!</p>
        </div>
        <button type="button" className={s.explore}>EXPLORE</button>
      </div>
  )
}
