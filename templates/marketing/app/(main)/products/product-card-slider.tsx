'use client';

import React, {
  ComponentPropsWithRef,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { EmblaCarouselType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';

import { cn } from '@/utils/cn';

type UseDotButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
};

const useDotButton = (
  emblaApi: EmblaCarouselType | undefined,
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
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

const DotButton = (props: ComponentPropsWithRef<'button'>) => {
  const { className, ...rest } = props;

  return (
    <button
      type='button'
      className={cn(
        'size-1 shrink-0 rounded-full bg-text-disabled-300 transition-all duration-200 ease-out',
        className,
      )}
      {...rest}
    />
  );
};

type CarouselProps = {
  slides: string[];
};

export const ProductImagesSlider = ({ slides }: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <section className='embla'>
      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container'>
          {slides.map((slide, i) => (
            <div className='embla__slide w-full' key={i}>
              <img
                src={slide}
                alt=''
                height={146}
                width={146}
                className='mx-auto h-[146px] w-auto min-w-0 object-contain'
              />
            </div>
          ))}
        </div>
      </div>

      <div className='absolute left-4 top-4 flex gap-1.5'>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={cn(
              index === selectedIndex ? 'w-4 bg-text-soft-400' : '',
            )}
          />
        ))}
      </div>
    </section>
  );
};
