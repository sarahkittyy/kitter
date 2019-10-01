/**
 * @brief Returns a random MOTD string to display atop the TopBar logo.
 */
export default function motd(): string
{
	let motds: string[] = [
		'release ur inner cate',
		'release ur inner kitty',
		'headpats are cozy',
		'so basically im baby'
	];
	return motds[Math.floor(Math.random() * motds.length)];
}