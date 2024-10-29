import { signOut } from '../auth'

export function SignOut() {
	return (
		<form
			action={async () => {
				'use server'
				await signOut({ redirectTo: '/' })
			}}
		>
			<button
				className='inline-block rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 capitalize'
				type='submit'
			>
				Sign Out
			</button>
		</form>
	)
}
