import { useMemo } from 'react';

import { FieldLinksValue } from '@twenty-modules/object-record/record-field/types/FieldMetadata';
import { ExpandableList } from '@twenty-modules/ui/layout/expandable-list/components/ExpandableList';
import { checkUrlType } from '@twenty-ui/front/utils/checkUrlType';
import {
  getAbsoluteUrlOrThrow,
  getUrlHostnameOrThrow,
  isDefined,
} from '@ui-collection-kit/twenty-shared/src/utils';
import { LinkType, RoundedLink, SocialLink } from '@twenty-ui/navigation';

type LinksDisplayProps = {
  value?: FieldLinksValue;
};

export const LinksDisplay = ({ value }: LinksDisplayProps) => {
  const links = useMemo(
    () =>
      [
        value?.primaryLinkUrl
          ? {
              url: value.primaryLinkUrl,
              label: value.primaryLinkLabel,
            }
          : null,
        ...(value?.secondaryLinks ?? []),
      ]
        .filter(isDefined)
        .map(({ url, label }) => {
          let absoluteUrl = '';
          let hostname = '';
          try {
            absoluteUrl = getAbsoluteUrlOrThrow(url);
            hostname = getUrlHostnameOrThrow(absoluteUrl);
          } catch {
            absoluteUrl = '';
            hostname = '';
          }
          return {
            url: absoluteUrl,
            label: label || hostname,
            type: checkUrlType(absoluteUrl),
          };
        }),
    [value?.primaryLinkLabel, value?.primaryLinkUrl, value?.secondaryLinks],
  );

  return (
    <ExpandableList>
      {links.map(({ url, label, type }, index) =>
        type === LinkType.LinkedIn || type === LinkType.Twitter ? (
          <SocialLink key={index} href={url} type={type} label={label} />
        ) : (
          <RoundedLink key={index} href={url} label={label} />
        ),
      )}
    </ExpandableList>
  );
};
