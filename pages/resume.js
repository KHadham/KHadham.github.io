import { Header, Template } from "../components";
import Image from "next/image";

const Skill = ({ src, nama, level }) => {
	return (
		<div className="mb-5 text-center">
			<Image alt={nama} src={src} width={100} height={80} objectFit="contain" />
			<p>{nama}</p>
			<p className="text-sm text-gray-600 text-center">{level}</p>
		</div>
	);
};

const Resume = () => {
	return (
		<div>
			<Header title="Khadam Ikhwanus Shofa Site" />
			<Template menu="/resume">
				<h1 className="text-orange-500 font-bold text-xl mb-10 mt-5">
					WORK EXPERIENCE
				</h1>
				<ol className="relative border-l border-gray-200">
					<li className="mb-10 ml-6">
						<span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white">
							<svg
								className="w-3 h-3 text-blue-600"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg">
								<path
									fillRule="evenodd"
									d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
									clipRule="evenodd"></path>
							</svg>
						</span>
						<time className="block mb-2 text-sm font-normal leading-none text-gray-400">
							Nov 2020 - now <span className="text-gray-400">| Full time</span>
						</time>
						<h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
							Software Engineer - PT. Mitratech Indonesia
						</h3>
						<p className="mb-4 text-sm font-normal text-gray-500">
							Mitra Tech Indonesia is a Leading Solution Provider & System
							Integrator that Focuses on Providing Comprehensive Solution to the
							Client to Answer Business Needs & Operational Challenges.
						</p>
					</li>
					<li className="mb-10 ml-6">
						<span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white">
							<svg
								className="w-3 h-3 text-blue-600"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg">
								<path
									fillRule="evenodd"
									d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
									clipRule="evenodd"></path>
							</svg>
						</span>
						<time className="block mb-2 text-sm font-normal leading-none text-gray-400">
							June 2022 - Dec 2022 <span className="text-gray-400">| Part time</span>
						</time>
						<h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
							Mobile Developer - Dinas Cipta Karya, Tata Ruang dan Pertanahan Provinsi DKI Jakarta
						</h3>
						<p className="mb-4 text-sm font-normal text-gray-500">
							DCKTRP is a government agency responsible for managing and overseeing the development of public works, spatial planning, and land affairs in the DKI Jakarta Province of Indonesia. The department is responsible for planning, implementing, and monitoring public infrastructure projects such as roads, bridges, drainage systems, and public buildings.
						</p>
					</li>
					<li className="mb-10 ml-6">
						<span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white">
							<svg
								className="w-3 h-3 text-blue-600"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg">
								<path
									fillRule="evenodd"
									d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
									clipRule="evenodd"></path>
							</svg>
						</span>
						<time className="block mb-2 text-sm font-normal leading-none text-gray-400">
							Oct 2019 - now <span className="text-gray-400">| Part time</span>
						</time>
						<h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
							Mobile Developer - PT. Agritech Retail Indonesia
						</h3>
						<p className="mb-4 text-sm font-normal text-gray-500">
							WarungSegar is a StartUp that focus to
							cut food products supply chain. we make fresh products, easy to
							get for you, directly from farmers.
						</p>
					</li>

					<li className="mb-10 ml-6">
						<span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white">
							<svg
								className="w-3 h-3 text-blue-600"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg">
								<path
									fillRule="evenodd"
									d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
									clipRule="evenodd"></path>
							</svg>
						</span>
						<time className="block mb-2 text-sm font-normal leading-none text-gray-400">
							Oct 2021 - Nov 2022{" "}
							<span className="text-gray-400">| Part time</span>
						</time>
						<h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
							Front-end Developer - Nginvite.com
						</h3>
						<p className="mb-4 text-sm font-normal text-gray-500">
							Nginvite is a StartUp for online
							invitation based on web application with self-service concept
							which allow user to create and choose design for their invitation.
							Nginvite have some invitation type such as wedding, meeting,
							informal and formal events
						</p>
					</li>

					<li className="mb-10 ml-6">
						<span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white">
							<svg
								className="w-3 h-3 text-blue-600"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg">
								<path
									fillRule="evenodd"
									d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
									clipRule="evenodd"></path>
							</svg>
						</span>
						<time className="block mb-2 text-sm font-normal leading-none text-gray-400">
							Oct 2019 - Feb 2023{" "}
							<span className="text-gray-400">| Full time</span>
						</time>
						<h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
							Mobile Developer - Telkom Indonesia
						</h3>
						<p className="mb-4 text-sm font-normal text-gray-500">
							Telkom Indonesia, also known as PT Telekomunikasi Indonesia Tbk, is a state-owned telecommunications company in Indonesia. It is the largest telecommunications and network provider in the country, offering a wide range of services such as fixed line and mobile telephony, internet, data communication, and digital services. Telkom Indonesia has a significant presence in the Indonesian market and is a key player in the country's telecommunications industry, serving both consumer and corporate customers.
						</p>
					</li>
				</ol>

				<h1 className="text-orange-500 font-bold text-xl mt-5 mb-7">TOOLS & SKILLS</h1>

				<div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center mb-10 w-full">
					<Skill
						src="/assets/images/javascript.png"
						nama="JavaScript"
						level=" "
					/>
					{/* <Skill src="/assets/images/php.svg" nama="Php" level=" " /> */}
					<Skill
						src="/assets/images/react.png"
						nama="React Native"
						level=" "
					/>
					<Skill
						src="/assets/images/react.png"
						nama="React.js"
						level=" "
					/>
					<Skill
						src="/assets/images/next.png"
						nama="Next.js"
						level=" "
					/>
					<Skill
						src="/assets/images/express.png"
						nama="Express.js"
						level=" "
					/>
					<Skill
						src="/assets/images/vscode.png"
						nama="VSCode"
						level=" "
					/>
					<Skill
						src="/assets/images/github.jpg"
						nama="GitHub"
						level=" "
					/>
					<Skill
						src="/assets/images/bitbucket.png"
						nama="BitBucket"
						level=" "
					/>
					<Skill
						src="/assets/gitlab.png"
						nama="GitLab"
						level=" "
					/>
					<Skill
						src="/assets/dbeaver.jpg"
						nama="DBeaver"
						level=" "
					/>
					<Skill
						src="/assets/cloudinary.png"
						nama="Cloudinary"
						level=" "
					/>
					<Skill
						src="/assets/firebase.png"
						nama="FireBase"
						level=" "
					/>
					<Skill
						src="/assets/GCP.png"
						nama="Google Cloud Platform"
						level=" "
					/>
				</div>

			</Template>
		</div>
	);
};

export default Resume;
