import { BoltIcon, ChatBubbleLeftIcon, MagnifyingGlassIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

export const getCollectionStyles = (collection: any) => {
  switch (collection) {
    case 'events':
      return { color: 'orange', Icon: BoltIcon };
    case 'commands':
      return { color: 'blue', Icon: ChatBubbleLeftIcon };
    case 'queries':
      return { color: 'green', Icon: MagnifyingGlassIcon };
    default:
      return { color: 'gray', Icon: EnvelopeIcon };
  }
};

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

export interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  placeholder?: string;
  totalResults?: number;
  totalItems?: number;
}

export interface TypeFilterProps {
  selectedTypes: any[];
  onTypeChange: (types: any[]) => void;
  filteredCount?: number;
  totalCount?: number;
}
