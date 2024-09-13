'use client'
import Link from "next/link"
import { usePathname } from "next/navigation";
interface LinkProps{
    link: { 
        url: string;
    text: string;
    blank: boolean;
    }
}

function LinkRouter({link}: LinkProps) {
    const pathName = usePathname()
    const active = pathName.startsWith(link.url)
  return (
<Link
      className={`flex gap-4 items-center py-2.5 px-4 my-1 rounded transition duration-200 ${active ? 'bg-cyan-500 text-white' : 'hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white'} mt-auto w-full`}
      href={link.url}
      target={link.blank ? '_blank' : undefined}
    >
      {link.text}
    </Link>
  )
}

export default LinkRouter