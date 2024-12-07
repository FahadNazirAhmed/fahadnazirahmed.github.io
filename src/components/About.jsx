import { motion } from 'framer-motion';
import React from 'react';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles/';
import { fadeIn, textVariant } from '../utils/motion';

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview.</h2>
			</motion.div>

			<motion.p
				variants={fadeIn('', '', 0.2, 1)}
				className='mt-4 text-primary text-[17px] max-w-3xl leading-[30px]'
			>
				With over 3.5 years of experience in Unity development, I have contributed to high-profile projects 
				like BMW's AR Ride at CES 2024 and Virtua Prime Metaverse. My passion lies in creating immersive AR, 
				VR, and XR experiences, and I’ve successfully launched 5+ projects across various platforms.
				<br />
				I specialize in leveraging cutting-edge technologies like ARCore, ARKit, and OpenXR to craft engaging 
				digital worlds. I am also proficient in multiplayer networking solutions such as Photon Unity Networking
				 and Fusion, ensuring seamless, real-time user interactions in the virtual environment.
				<br />
				Having worked in diverse industries like automotive, gaming, and mobile app development, I thrive in 
				fast-paced environments. My background in game design, efficient coding practices, and data-driven optimization
				 helps me deliver high-performance solutions across various platforms.

			</motion.p>
		</>
	);
};

export default SectionWrapper(About, 'about');
