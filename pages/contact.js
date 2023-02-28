import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Header, Template } from "../components";
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
	return (
		<div>
			<Header title="Khadam Ikhwanus Shofa Site" />
			<Template menu="/contact">
				<div className="flex items-center justify-center flex-col h-full my-10">
					<h2 className="text-orange-500 font-bold text-xl mb-5">MY CONTACT</h2>
					<div className="text-center">
						<p>Kampung Rumbut</p>
						<p>Jl.Sangging, Rt.12 Rw.01</p>
						<p>Kelurahan Pasir Gunung Selatan</p>
						<p>Cimanggis, Depok</p>
						<p>16951</p>
						<a target="_blank" rel='noreferrer' href="https://wa.me/+6289643849077" className='mx-3 text-lg'><p>+62 896 4384 9077</p></a>
						<a target="_blank" rel='noreferrer' href="mailto:kh.adham01@gmail.com" className='mx-3 text-lg'><p>kh.adham01@gmail.com</p></a>
					</div>
							<h2 className="text-orange-500 font-bold text-xl mt-10">SOCIAL MEDIA</h2>
							<div className="flex-1 flex-row justify-center items-center mt-5">
								<a target="_blank" rel='noreferrer' href="https://www.facebook.com/mbahpocong/" className='mx-3 text-lg'>
									<FontAwesomeIcon icon={faFacebook} />
								</a>
								<a target="_blank" rel='noreferrer' href="https://www.instagram.com/kh_adham/" className='mx-3 text-lg'>
									<FontAwesomeIcon icon={faInstagram} />
								</a>
								<a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/kh-adham/" className='mx-3 text-lg'>
									<FontAwesomeIcon icon={faLinkedin} />
								</a>
							</div>
					</div>

			</Template>
		</div>
	);
};

export default Contact;
