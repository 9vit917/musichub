import { FC } from 'react';

type TrackProgressProps = {
	left: number;
	right: number;
	onChange: (e) => void;
}

const TrackProgress: FC<TrackProgressProps> = ({ left, right, onChange }) => {
	return (
		<div style={{ display: 'flex' }}>
			<input
				type='range'
				min={0}
				max={right}
				value={left}
				onChange={onChange}
			/>
			<div>{left} / {right}</div>
		</div>
	)
}

export default TrackProgress;