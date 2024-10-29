import { signIn } from '../auth'

export function SignIn() {
	return (
		<form
			action={async () => {
				'use server'
				await signIn('google', { redirectTo: '/dashboard' })
			}}
		>
			<button
				className='inline-block rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 capitalize'
				type='submit'
			>
				Sign in with google
			</button>
		</form>
	)
}
