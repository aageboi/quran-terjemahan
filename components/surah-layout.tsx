import Meta from "./meta"
import SurahFooter from "./surah-footer"

type Props = {
  surah: any
  children: React.ReactNode
}

const SurahLayout = ({ surah, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <SurahFooter surah={surah} />
    </>
  )
}

export default SurahLayout