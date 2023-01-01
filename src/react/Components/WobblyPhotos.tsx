import classname from 'classnames'

interface WobblyPhotosProps {
  photos: string[]
}

export const WobblyPhotos = (props: WobblyPhotosProps) => {
  const { photos } = props
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {photos.map((src, index) => (
          <div
            key={`${index}-${src}`}
            className={classname(
              'relative aspect-[9/10] w-40 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:rounded-2xl',
              rotations[index % rotations.length]
            )}
          >
            <img
              src={src}
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div >
  )
}