export type SkipLinkData = {
	id: string;
	label: string;
	listIndex?: number;
	onBeforeNavigate?: () => void;
	isHidden?: boolean;
};
