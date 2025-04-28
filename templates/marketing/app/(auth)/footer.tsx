import { LanguageSelect } from '@/components/language-select';

export default function AuthFooter() {
  return (
    <div className='mt-auto flex items-center justify-between gap-4 pb-4 lg:pb-0'>
      <div className='text-paragraph-sm text-text-sub-600'>
        © 2024 Catalyst
      </div>

      <LanguageSelect />
    </div>
  );
}
