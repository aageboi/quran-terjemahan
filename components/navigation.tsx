/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { navigation } from '../lib/menu'
import { useRouter } from 'next/router'

type Props = {
  surah: any
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navigation({ surah }: Props) {
  const { asPath } = useRouter()
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 sticky top-0 z-10 bg-gray-900">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center items-stretch justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <div className="h-8 w-auto text-white">{surah.name}</div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a 
                  key={item.name}
                  href={item.slug}
                  className={classNames(
                    asPath === '/surah/' + item.slug ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={asPath === '/surah/' + item.slug ? 'page' : undefined}>
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}