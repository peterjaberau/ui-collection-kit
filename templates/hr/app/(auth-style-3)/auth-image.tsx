import { ThemedImage } from '@/components/themed-image';

export default function AuthImage() {
  return (
    <ThemedImage
      src='/images/auth-style-2-image.png'
      srcDark='/images/auth-style-2-image-dark.png'
      alt=''
      className='max-h-none min-h-[626px] w-[135%] max-w-none object-cover object-left-top'
    />
  );
}
