import scss from './gridContainer.module.scss';

export const GridContainer = ({ children }: { children: React.ReactNode }) => {
	return <div className={scss.gridContainer}>{children}</div>;
};
