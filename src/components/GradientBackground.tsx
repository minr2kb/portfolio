const GradientBackground = ({ filter }: { filter?: boolean }) => {
	return (
		<div className='gradient-bg'>
			{filter && (
				<filter xmlns='http://www.w3.org/2000/filter'>
					<defs>
						<filter id='goo'>
							<feGaussianBlur
								in='SourceGraphic'
								stdDeviation='6'
								result='blur'
							/>
							<feColorMatrix
								in='blur'
								mode='matrix'
								values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8'
								result='goo'
							/>
							<feBlend in='SourceGraphic' in2='goo' />
						</filter>
					</defs>
					<defs>
						<filter id='noiseFilter'>
							<feTurbulence
								type='fractalNoise'
								baseFrequency='0.88'
								numOctaves='2'
								stitchTiles='stitch'
							/>
						</filter>
					</defs>
				</filter>
			)}
			<div className='gradients-container'>
				<div className='g1'></div>
				<div className='g2'></div>
				<div className='g3'></div>
				<div className='g4'></div>
				<div className='g5'></div>
				<div className='interactive'></div>
			</div>
		</div>
	);
};

export default GradientBackground;
