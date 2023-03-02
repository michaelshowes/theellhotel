import scss from './gridPlacement.module.scss';
import cx from 'classnames';

type GridPlacementProps = {
	children: React.ReactNode;
	position: string;
};

export const GridPlacement = ({ children, position }: GridPlacementProps) => {
	return (
		<div
			className={cx(scss.gridPlacement, {
				[scss.full]: position === 'full',
				[scss.leftBleed]: position === 'left',
				[scss.rightBleed]: position === 'right'
			})}
		>
			{children}
		</div>
	);
};
