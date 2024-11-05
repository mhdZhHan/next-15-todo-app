"use client"

import { SignOutButton, UserButton, useClerk, useUser } from "@clerk/nextjs"
import Link from "next/link"

const Navbar = () => {
	const { isSignedIn, user } = useUser()
	const { signOut } = useClerk()

	return (
		<nav className="border-b h-[8vh] flex items-center">
			<div className="container flex items-center justify-between">
				<Link href="/">
					<h1 className="font-bold text-3xl">ToDo App</h1>
				</Link>
			</div>
			{isSignedIn ? (
				<>
					<button
						className="w-[100px] bg-gray-200 p-2 rounded-md text-center"
						onClick={() => signOut}
					>
						<SignOutButton />
					</button>

					<UserButton />
				</>
			) : (
				<>
					<div className="flex items-center gap-x-5">
						<Link href="/sign-in">
							<button className="w-[100px] bg-gray-200 p-2 rounded-md text-center">
								Sign in
							</button>
						</Link>

						<Link href="/sign-up">
							<button className="w-[100px] bg-gray-200 p-2 rounded-md text-center">
								Sign up
							</button>
						</Link>
					</div>
				</>
			)}
		</nav>
	)
}
export default Navbar