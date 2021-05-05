import React from "react"
import SurahTitle from "./surah-title"

type Props = {
  title: string
}

const SurahHeader = ({ title }: Props) => {
  return (
    <>
      <SurahTitle>{title}</SurahTitle>
    </>
  )
}
export default SurahHeader