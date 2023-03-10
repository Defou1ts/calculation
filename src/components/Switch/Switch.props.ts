export interface SwitchProps extends React.HTMLAttributes<HTMLButtonElement> {
	onClick: () => void;
	active: boolean;
}
