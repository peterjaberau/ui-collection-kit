import { LanguageSelect } from '@/components/language-select';

export default function AuthFooter() {
  return (
    <div className='-mx-2 mt-auto flex items-center justify-between gap-4 pb-4 lg:mx-0 lg:pb-0'>
      <div className='text-paragraph-sm text-text-sub-600'>
        © 2024 Synergy HR
      </div>

      <LanguageSelect />
    </div>
  );
}
