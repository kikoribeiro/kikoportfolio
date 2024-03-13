'use client'
import BlackSvg from "../../public/kikosvg_black.svg"
import WhiteSvg from "../../public/kikosvg_white.svg"
import Image from "next/image"
import { useTheme } from "next-themes";

export default function Logo() {
  const { resolvedTheme } = useTheme();

  return (
    <>
      {resolvedTheme === 'dark' ? (
        <Image
          src={WhiteSvg}
          alt="whitelogo"
          height={50}
          width={50}
        />
      ) : (
        <Image
          src={BlackSvg}
          alt="blacklogo"
          height={50}
          width={50}
        />
      )}
    </>
  )
}
