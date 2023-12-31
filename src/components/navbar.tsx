'use client'
import Link from 'next/link'
import { MaxWidthWrapper } from './max-width-wrapper'
import { buttonVariants } from './ui/button'
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs'
import { ArrowRight } from 'lucide-react'

export function NavBar() {
  return (
    <nav className='sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
      <MaxWidthWrapper>
        <header className='flex h-14 items-center justify-between border-b border-zinc-200'>
          <Link href='/' className='flex z-40 font-semibold'>
            <span>quill.</span>
          </Link>

          {/* Mobile nav */}

          <ul className='hidden items-center space-x-4 sm:flex'>
            <li>
              <Link
                href='/pricing'
                className={buttonVariants({
                  size: 'sm',
                  variant: 'ghost',
                })}
              >
                Pricing
              </Link>
            </li>
            <li>
              <LoginLink
                className={buttonVariants({
                  variant: 'ghost',
                  size: 'sm',
                })}
              >
                Sign In
              </LoginLink>
            </li>
            <li>
              <RegisterLink
                className={buttonVariants({
                  size: 'sm',
                })}
              >
                Get Started <ArrowRight className='ml-1.5  size-5' />
              </RegisterLink>
            </li>
          </ul>
        </header>
      </MaxWidthWrapper>
    </nav>
  )
}
