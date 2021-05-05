import Container from "./container"
import Link from 'next/link'

type Props = {
  surah: any
}

const SurahFooter = ({ surah }: Props) => {
  return (
    <footer className="bg-accent-1 border-t border-accent-2 sticky bottom-0 py-5">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="justify-center items-center lg:pl-4">
            {surah.prev && <Link as={`/surah/${surah.prev}`} href="/surah/[slug]">
              <a className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-1 px-5 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0">&laquo; {surah.prev}</a>
            </Link>}
            {surah.next && <Link as={`/surah/${surah.next}`} href="/surah/[slug]">
              <a className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-1 px-5 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0">{surah.next} &raquo;</a>
            </Link>}
          </div>
        </div>
    </footer>
  )
}

export default SurahFooter