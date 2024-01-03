'use client'
import { trpc } from '@/app/_trpc/client'
import { UploadButton } from './upload-button'
import { Ghost, MessageSquare, Plus, Trash } from 'lucide-react'
import { Skeleton } from './ui/skeleton'
import Link from 'next/link'
import { Button } from './ui/button'

export function Dashboard() {
  const { data: files, isLoading } = trpc.getUserFiles.useQuery()

  return (
    <main className='mx-auto max-w-7xl md:p-10'>
      <div className='mt-8 flex flex-col items-start justify-between gap-4 border-b border-gray-200 pb-5 sm:flex-row sm:items-center sm:gap-0'>
        <h1>My files</h1>
        <UploadButton />
      </div>

      {files && files.length !== 0 ? (
        <ul className='mt-8 grid grid-cols-1 gap-6 divide-y divide-zinc-200 md:grid-cols-2 lg:grid-cols-3'>
          {files.map((file) => (
            <li
              key={file.id}
              className='col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow transition hover:shadow-lg'
            >
              <Link
                href={`/dashboard/${file.id}`}
                className='flex flex-col gap-2'
              >
                <div className='pt-6 px-6 flex w-full items-center justify-between space-x-6'>
                  <div className='size-10 flex-shrink-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500'></div>
                  <div className='flex-1 truncate'>
                    <div className='flex items-center space-x-3'>
                      <h3 className='truncate text-lg font-medium text-zinc-900'>
                        {file.name}
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>

              <div className='px-6 mt-4 grid grid-cols-3 place-items-center py-2 gap-6 text-xs text-zinc-500'>
                <div className='flex items-center gap-2'>
                  <Plus className='size-4' />
                  {new Intl.DateTimeFormat('en-us', {
                    month: 'short',
                    year: 'numeric',
                  }).format(new Date(file.createdAt))}
                </div>

                <div className='flex items-center gap-2'>
                  <MessageSquare className='size-4' />
                  mocked
                </div>

                <Button size='sm' className='w-full' variant='destructive'>
                  <Trash className='size-4' />
                </Button>
              </div>
            </li>
          ))}
        </ul>
      ) : isLoading ? (
        <div className='flex flex-col gap-2'>
          <Skeleton className='w-full h-[100px] bg-zinc-300 block' />
          <Skeleton className='w-full h-[100px] bg-zinc-300 block' />
          <Skeleton className='w-full h-[100px] bg-zinc-300 block' />
        </div>
      ) : (
        <div className='mt-16 flex flex-col items-center gap-2'>
          <Ghost className='size-8 text-zinc-800' />
          <h3 className='font-semibold text-xl'>Pretty empty around here</h3>

          <p>Let&apos;s upload your first PDF.</p>
        </div>
      )}
    </main>
  )
}
