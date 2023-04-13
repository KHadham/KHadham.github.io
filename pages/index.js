import { Header, Services, Template } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
	return (
		<div>
			<Header title="Khadam Ikhwanus Shofa Site" />
			<Template menu="/">
				<div className="flex items-center justify-center flex-col h-full my-10">
					<p className="mb-2 mt-5">Hello, I’m</p>
					<h2 className="font-bold text-2xl mb-2 text-orange-500">
						Khadam Ikhwanus Shofa
					</h2>
					<p className="text-xl mb-5">Mobile Developer</p>
					<p className="mt-10 mb-20 mx-0 md:mx-4 lg:mx-10 text-center">
					A professional Mobile Developer with experience in back-end development, currently residing in Jakarta, Indonesia. I have 3 years of experience working on StartUps, and have completed more than 10 projects. I am passionate about using technology to create a positive impact on others, and I enjoy coding to solve problems and streamline processes with efficient code. I always strive to give my best in each project I work on, providing creative and innovative solutions through my applications.					</p>
					{/* <a
						target="_blank"
						rel="noreferrer"
						href="/assets/CV-dan-Portolio-Andrio-Sirait - Jan 2023.pdf"
						className="mt-0 mb-10 bg-orange-500 hover:bg-orange-700 px-5 py-3 text-white rounded-full text-sm">
						<FontAwesomeIcon icon={faDownload} className="mr-3" />
						Download CV
					</a> */}
				</div>
				<Services />
			</Template>
		</div>
	);
};

export default Home;
