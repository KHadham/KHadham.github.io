import { Footer, Header, Menu, Profile, Template } from "../components";

const ProfilePage = () => {
	return (
		<div>
			<Header title="Khadam Ikhwanus Shofa Site" />
			<Template menu="/profile">
				<h2 className="text-orange-500 font-bold text-xl my-5">ABOUT ME</h2>
				<table className="table-fixed mt-5">
					<tbody>
						<tr>
							<td className="text-left text-sm w-[180px]">Name</td>
							<td className="text-right font-semibold">
								Andrio Pratama Sirait, S.T
							</td>
						</tr>
						<tr>
							<td className="text-left text-sm w-[180px]">Date of Birth</td>
							<td className="text-right font-semibold">September, 7th 1998</td>
						</tr>
						<tr>
							<td className="text-left text-sm w-[180px]">Phone</td>
							<td className="text-right font-semibold">+62 812 2669 6696</td>
						</tr>
						<tr>
							<td className="text-left text-sm w-[180px]">Email</td>
							<td className="text-right font-semibold">
								andriopratama16@gmail.com
							</td>
						</tr>
						<tr>
							<td className="text-left text-sm w-[180px]">Web</td>
							<td className="text-right font-semibold">www.andriosirait.com</td>
						</tr>
						<tr>
							<td className="text-left text-sm w-[180px]">Address</td>
							<td className="text-right font-semibold">Jakarta, Indonesia</td>
						</tr>
					</tbody>
				</table>
				<h2 className="text-orange-500 font-bold text-xl mt-20 mb-5">EDUCATION</h2>
				<ol className="relative border-l border-orange-200 dark:border-orange-700">
					<li className="mb-10 ml-4">
						<div className="absolute w-3 h-3 bg-orange-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-orange-900 dark:bg-orange-700"></div>
						<time className="mb-1 text-sm font-normal leading-none text-orange-400 dark:text-orange-500">
							2016 - 2022
						</time>
						<h3 className="text-base font-semibold text-orange-900">
							Bachelor Degree / Riau University
						</h3>
						<p className="text-sm font-normal text-orange-500 dark:text-orange-400">
							Bachelor Degree of Informatics Engineering Department from Riau
							University. Graduated with 3.71 GPA.
						</p>
					</li>
					<li className="mb-10 ml-4">
						<div className="absolute w-3 h-3 bg-orange-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-orange-900 dark:bg-orange-700"></div>
						<time className="mb-1 text-sm font-normal leading-none text-orange-400 dark:text-orange-500">
							2013 - 2016
						</time>
						<h3 className="text-base font-semibold text-orange-900">
							Senior High School / SMA Plus Taruna Andalan
						</h3>
						<p className="text-sm font-normal text-orange-500 dark:text-orange-400">
							Science major. Continue my interest into computer, won some blog
							design competition on provincial level. Also, start to learn a
							programming language with Pascal
						</p>
					</li>
					<li className="mb-10 ml-4">
						<div className="absolute w-3 h-3 bg-orange-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-orange-900 dark:bg-orange-700"></div>
						<time className="mb-1 text-sm font-normal leading-none text-orange-400 dark:text-orange-500">
							2010 - 2013
						</time>
						<h3 className="text-base font-semibold text-orange-900">
							Junior High School / SMP Global Andalan
						</h3>
						<p className="text-sm font-normal text-orange-500 dark:text-orange-400">
							Started liked in computer, tried graphic design. Made a lot of
							projects in graphic design and video editing
						</p>
					</li>
					<li className="mb-10 ml-4">
						<div className="absolute w-3 h-3 bg-orange-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-orange-900 dark:bg-orange-700"></div>
						<time className="mb-1 text-sm font-normal leading-none text-orange-400 dark:text-orange-500">
							2007 - 2010
						</time>
						<h3 className="text-base font-semibold text-orange-900">
							Elementary School / SD Global Andalan
						</h3>
						<p className="text-sm font-normal text-orange-500 dark:text-orange-400">
							Take part in the provincial level math olympiad
						</p>
					</li>
				</ol>
				<h2 className="text-orange-500 font-bold text-xl mt-10 mb-5">HOBBIES</h2>
				<p className="text-center md:mx-20 mb-14">
					Enjoy playing video games a little while to refresh myself from the
					exhausting coding. Also enjoy watching video on YouTube
				</p>
			</Template>
		</div>
	);
};

export default ProfilePage;
