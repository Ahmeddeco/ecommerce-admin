import { SignIn } from "../components/signin-button"

export default function HomePage() {
	return (
		<>
			<div className='flex flex-col min-h-screen justify-center items-center max-w-4xl mx-auto'>
				<h1 className='text-4xl font-bold max-w-lg text-center'>
					Welcome to the admin of the website
				</h1>
				<p className='font-medium my-4'>
					An account is needed to view this page .
				</p>
			<SignIn/>
			</div>
		</>
	)
}
