import { LanguageSelect } from '@/components/language-select';

export default function OnboardingFooter() {
  return (
    <div className='mt-auto flex items-center justify-between gap-4 px-4 pb-4 lg:px-5 lg:pb-6'>
      <div className='text-paragraph-sm text-text-sub-600'>
        © 2024 Synergy HR
      </div>

      <LanguageSelect />
    </div>
  );
}
