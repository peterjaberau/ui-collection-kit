'use client';

import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { motion } from 'framer-motion';
import { useKeenSlider } from 'keen-slider/react';

import { cn } from '@/utils/cn';
import * as DotStepper from '@/components/ui/dot-stepper';
import { ThemedImage } from '@/components/themed-image';

const SCALE_FACTOR = 0.09;

const MThemedImage = motion(ThemedImage);

type CardDeckSliderProps = {
  slides: {
    image: {
      default: string;
      dark?: string;
    };
    title: string;
    description: string;
  }[];
};

export default function CardDeckSlider({ slides }: CardDeckSliderProps) {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: slides.length,
    loop: true,
    initial: 0,
    drag: false,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const moveToIdx = (idx: number) => {
    instanceRef.current?.moveToIdx(idx);
  };

  return (
    <TabsPrimitive.Root
      value={`${currentSlide}`}
      onValueChange={(v) => moveToIdx(Number.parseInt(v))}
      className='flex size-full flex-col items-center justify-center pb-10 pt-20'
    >
      {/* cards */}
      <div className='relative flex w-full justify-center py-[120px]'>
        <img
          src='/images/auth-pattern.svg'
          alt=''
          className='pointer-events-none absolute left-1/2 top-1/2 w-full max-w-[824px] -translate-x-1/2 -translate-y-1/2 object-contain'
          width={824}
          height={318}
        />
        <div className='relative h-[380px] w-[352px]'>
          <div className='absolute bottom-0 left-1/2 h-2 w-[280px] -translate-x-1/2 translate-y-full rounded-b-full bg-bg-soft-200' />
          <div ref={sliderRef} className='absolute size-full'>
            {slides.map(({ image }, i) => {
              const isActive = i === currentSlide;
              const isNext = i === (currentSlide + 1) % slides.length;

              // Set the zIndex and scale based on the slide's position relative to the current slide.
              // - The active slide (currentSlide) is given the highest zIndex (3) to ensure it is on top.
              // - The slide immediately following the active slide (next) gets a medium zIndex (2) for a slight overlap effect.
              // - All other slides are given the lowest zIndex (1) to position them behind the active and next slides.
              const zIndex = isActive ? 3 : isNext ? 2 : 1;

              // For scaling:
              // - The active slide is scaled to its normal size (scale = 1).
              // - The next slide is slightly scaled down (scale = 0.91) to create a visual cue of its proximity to the active slide.
              // - All other slides are further scaled down (scale = 0.82) to push them further back visually.
              const scale = isActive
                ? 1
                : isNext
                  ? 1 - SCALE_FACTOR
                  : 1 - SCALE_FACTOR * 2;

              return (
                <MThemedImage
                  key={image.default}
                  src={image.default}
                  srcDark={image.dark}
                  className={cn(
                    'absolute h-auto w-full origin-bottom cursor-grab touch-none rounded-2xl object-contain',
                    {
                      'shadow-regular-xs': isActive,
                      'pointer-events-none': !isActive,
                    },
                  )}
                  style={{
                    opacity: !hasMounted && i > 0 ? 0 : 1,
                  }}
                  animate={{
                    scale: scale,
                    zIndex: zIndex,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.25, 0.63, 0.44, 0.87],
                  }}
                  drag={isActive ? 'y' : false}
                  dragConstraints={{
                    top: 0,
                    bottom: 0,
                  }}
                  onDragEnd={() => instanceRef.current?.next()}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* texts */}
      <div className='w-full max-w-[624px] px-5 text-center'>
        <motion.div
          key={currentSlide}
          initial={{ opacity: hasMounted ? 0 : 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <h3 className='text-title-h5'>{slides[currentSlide].title}</h3>
          <p className='mt-2 min-h-12 text-paragraph-md text-text-sub-600'>
            {slides[currentSlide].description}
          </p>
        </motion.div>
      </div>

      {/* dots */}
      <div className='mt-12'>
        <DotStepper.Root asChild>
          <TabsPrimitive.List>
            {Array.from({ length: slides.length }, (_, i) => (
              <DotStepper.Item key={i} active={i === currentSlide} asChild>
                <TabsPrimitive.Trigger value={`${i}`} />
              </DotStepper.Item>
            ))}
          </TabsPrimitive.List>
        </DotStepper.Root>
      </div>
    </TabsPrimitive.Root>
  );
}
