import gsap from 'gsap'
import { useEffect } from 'react'

const MyComponent = () => {
	useEffect(() => {
		const blendEases = (startEase, endEase, blender) => {
			const s = gsap.parseEase(startEase)
			const e = gsap.parseEase(endEase)
			const blenderFunc = gsap.parseEase(blender || 'power3.inOut')
			return function (v) {
				const b = blenderFunc(v)
				return s(v) * (1 - b) + e(v) * b
			}
		}

		gsap.set('#mainSVG', {
			visibility: 'visible',
		})

		const tl = gsap.timeline({
			repeat: -1,
		})

		tl.to('#leader', {
			duration: 4,
			x: 36 * 3,
			ease: blendEases('circ.in', 'expo'),
		})
			.to(
				'.follower',
				{
					duration: 2,
					svgOrigin: gsap.utils.wrap([
						'328 300',
						'364 300',
						'400 300',
						'436 300',
						'472 300',
					]),
					rotation: -180,
					stagger: {
						amount: 2,
					},
					ease: blendEases('circ.in', 'expo'),
				},
				0
			)
			.to(
				'#whole',
				{
					x: 36,
					duration: 5,
					ease: 'linear',
				},
				0
			)
			.to(
				'.follower',
				{
					duration: 1.5,
					stagger: {
						amount: 1,
						repeat: 1,
						yoyo: true,
					},
					ease: blendEases('power3.in', 'expo'),
					fillOpacity: 0,
				},
				0
			)

		tl.timeScale(3)

		// Clean up function
		return () => {
			tl.kill() // Kill the timeline to prevent memory leaks
		}
	}, [])

	return (
		<section
			style={{
				overflow: 'hidden',
				textAlign: 'center',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				height: '100vh',
				width: '100vw',
				margin: 0,
				padding: 0,
			}}
		>
			<svg
				id='mainSVG'
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 800 600'
				width='100%'
				height='100%'
			>
				<g id='whole' fill='#FEFEFE' stroke='#FEFEFE' strokeWidth='2'>
					<circle id='leader' cx='328' cy='300' r='13' />
					<circle className='follower' cx='364' cy='300' r='13' />
					<circle className='follower' cx='400' cy='300' r='13' />
					<circle className='follower' cx='436' cy='300' r='13' />
					<circle className='follower' cx='472' cy='300' r='13' />
				</g>
			</svg>
		</section>
	)
}

export default MyComponent
