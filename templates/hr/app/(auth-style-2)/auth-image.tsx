import { ThemedImage } from '@/components/themed-image';

export default function AuthImage() {
  return (
    <ThemedImage
      src='/images/auth-style-2-image.png'
      srcDark='/images/auth-style-2-image-dark.png'
      alt=''
      className='h-auto max-h-full w-[1158px] max-w-none object-contain'
    />
  );
}
