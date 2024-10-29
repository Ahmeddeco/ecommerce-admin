import Image from 'next/image'
import { auth } from '../auth'

export default async function UserAvatar() {
	const session = await auth()

	if (!session?.user) return null

	return (
		<div>
			<Image
				src={session?.user?.image}
				alt='User Avatar'
				width={40}
				height={40}
				className='rounded-full object-contain'
			/>
		</div>
	)
}
