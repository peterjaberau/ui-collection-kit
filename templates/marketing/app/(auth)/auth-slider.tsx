'use client';

import * as React from 'react';
import { EmblaCarouselType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';

import { cn } from '@/utils/cn';
import * as Avatar from '@/components/ui/avatar';

type Slide = {
  avatar: {
    name: string;
    title: string;
    image: string;
    color?: React.ComponentPropsWithoutRef<typeof Avatar.Root>['color'];
  };
  content: React.ReactNode;
};

const slides: Slide[] = [
  {
    avatar: {
      image: '/images/avatar/memoji/sophia.png',
      color: 'yellow',
      name: 'Sophia Williams',
      title: 'CEO / Catalyst',
    },
    content: (
      <>
        <span className='text-white'>
          The Marketing Management app has revolutionized our tasks.
        </span>{' '}
        It&apos;s efficient and user-friendly, streamlining planning to
        tracking.
      </>
    ),
  },
  {
    avatar: {
      image: '/images/avatar/memoji/sophia.png',
      color: 'blue',
      name: 'Sophia Williams',
      title: 'CEO / Catalyst',
    },
    content: (
      <>
        <span className='text-white'>
          The Marketing Management app has revolutionized our tasks.
        </span>{' '}
        It&apos;s efficient and user-friendly, streamlining planning to
        tracking.
      </>
    ),
  },
  {
    avatar: {
      image: '/images/avatar/memoji/sophia.png',
      color: 'red',
      name: 'Sophia Williams',
      title: 'CEO / Catalyst',
    },
    content: (
      <>
        <span className='text-white'>
          The Marketing Management app has revolutionized our tasks.
        </span>{' '}
        It&apos;s efficient and user-friendly, streamlining planning to
        tracking.
      </>
    ),
  },
];

type UseDotButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
};

const useDotButton = (
  emblaApi: EmblaCarouselType | undefined,
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  const onDotButtonClick = React.useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  const onInit = React.useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = React.useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  React.useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};

const DotButton = (props: React.ComponentPropsWithRef<'button'>) => {
  const { className, ...rest } = props;

  return (
    <button
      type='button'
      className={cn(
        'size-1 shrink-0 rounded-full bg-orange-800 transition-all duration-200 ease-out',
        className,
      )}
      {...rest}
    />
  );
};

export default function AuthSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <div className='relative flex h-full flex-col items-center justify-center'>
      <img
        src='/images/auth-bg-pattern.svg'
        width={596}
        height={596}
        alt=''
        className='absolute right-0 top-0 size-full object-contain object-right-top'
      />

      <section className='embla relative w-full max-w-[452px] select-none pb-11'>
        <div className='embla__viewport' ref={emblaRef}>
          <div className='embla__container'>
            {slides.map(({ avatar, content }, i) => (
              <div className='embla__slide relative w-full ' key={i}>
                <div className='flex w-full flex-col gap-10 px-6'>
                  <Avatar.Root size='48' color={avatar.color}>
                    <Avatar.Image src={avatar.image} />
                  </Avatar.Root>

                  <div className='flex w-full flex-col gap-7'>
                    <div className='font-inter-var text-title-h5 text-white/[.72]'>
                      {content}
                    </div>

                    <div>
                      <div className='text-label-md text-white'>
                        {avatar.name}
                      </div>
                      <div className='mt-1 text-label-sm text-white/[.72]'>
                        {avatar.title}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='absolute bottom-0 left-6 flex gap-1.5'>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={cn(
                index === selectedIndex ? 'w-4 bg-static-white' : '',
              )}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
