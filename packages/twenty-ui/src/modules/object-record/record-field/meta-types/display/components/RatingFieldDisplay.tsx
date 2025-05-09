import { useRatingFieldDisplay } from '@twenty-modules/object-record/record-field/meta-types/hooks/useRatingFieldDisplay';
import { RatingInput } from '@twenty-modules/ui/field/input/components/RatingInput';

export const RatingFieldDisplay = () => {
  const { rating } = useRatingFieldDisplay();

  return <RatingInput value={rating} readonly />;
};
