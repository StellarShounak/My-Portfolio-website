// Import images
import Image1 from '../images/ui-project-11.png';
import Image2 from '../images/web-project-22.png';
import Image3 from '../images/mobile-project-22.png';
import Image4 from '../images/mobile-project-11.png';
import Image5 from '../images/web-project-11.png';
import Image6 from '../images/ui-project-22.png';
// Import icons
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const singleProjectData = {
	ProjectHeader: {
		title: 'All Project Ideas',
		publishDate: '2023',
		tags: 'Frontend/ ML Applications',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Kabul Project Management UI',
			img: Image1,
		},
		{
			id: 2,
			title: 'Kabul Project Management UI',
			img: Image2,
		},
		{
			id: 3,
			title: 'Kabul Project Management UI',
			img: Image3,
		},
	],
	ProjectInfo: {
		ClientHeading: '',
		CompanyInfo: [
			{
				id: 1,
				title: '',
				details: '',
			},
			{
				id: 2,
				title: '',
				details: '',
			},
			{
				id: 3,
				title: '',
				details: '',
			},
			{
				id: 4,
				title: '',
				details: '',
			},
		],
		ObjectivesHeading: '',
		ObjectivesDetails:
			'',
		Technologies: [
			{
				title: '',
				techs: [
					
				],
			},
		],
		ProjectDetailsHeading: 'Descriptions',
		ProjectDetails: [
			{
				id: 1,
				details:
				' 1. The WhatsApp Chat Analyzer:- It is a Python-based project designed to provide valuable insights and statistics by analyzing the conversation history of WhatsApp chats. With this project, users can gain a deeper understanding of their chat interactions and extract meaningful information from the data.The project leverages the power of Streamlit, a user-friendly web application framework, to create an intuitive and interactive interface. Through this web application, users can conveniently visualize and explore their chat data, making it easier to comprehend the patterns and trends within their conversations. Link :- https://stellar-chat-analyzer.onrender.com',
				
				},
					{id: 2,
				details:
					'2. The Hotstar clone:- It is a web application developed using React.js, Redux, and Tailwind CSS. It replicates the features and functionality of the popular streaming platform Disney Hotstar. The clone allows users to browse and stream a wide range of movies, TV shows, and live sports events.The frontend of the application is built using React.js, a popular JavaScript library for building user interfaces. Redux is utilized for state management, providing a predictable and centralized way to handle the application data and actions. Tailwind CSS is used for styling, enabling rapid and efficient UI development with its utility-first approach.Link:-https://disney--hotstar-clone.web.app/',
			},
			{
				id: 3,
				details:
					'3. Stellar Travels:- It is a modern and personalized travel website built using React.js. It is designed to provide a seamless and engaging experience for users looking to plan their dream vacations. The website incorporates various features and functionalities to enhance the travel booking process and make it more enjoyable. The frontend of Stellar Travels is developed using React.js, a powerful JavaScript library for building user interfaces. React.js allows for the creation of interactive and dynamic components, enabling a smooth and responsive user experience. The website design is clean, intuitive, and aesthetically pleasing, with attention to detail to ensure a visually appealing interface.Link:-https://stellar-travels-101.netlify.app/',
			},
			
		],
		SocialSharingHeading: 'Share This',
		SocialSharing: [
			{
				id: 1,
				name: 'Twitter',
				icon: <FiTwitter />,
				url: 'https://twitter.com/realstoman',
			},
			{
				id: 2,
				name: 'Instagram',
				icon: <FiInstagram />,
				url: 'https://instagram.com/realstoman',
			},
			{
				id: 3,
				name: 'Facebook',
				icon: <FiFacebook />,
				url: 'https://facebook.com/',
			},
			{
				id: 4,
				name: 'LinkedIn',
				icon: <FiLinkedin />,
				url: 'https://linkedin.com/',
			},
			{
				id: 5,
				name: 'Youtube',
				icon: <FiYoutube />,
				url: 'https://www.youtube.com/c/StomanStudio',
			},
		],
	},
	RelatedProject: {
		title: 'Related Projects',
		Projects: [
			{
				id: 1,
				title: 'Mobile UI',
				img: Image4,
			},
			{
				id: 2,
				title: 'Web Application',
				img: Image5,
			},
			{
				id: 3,
				title: 'UI Design',
				img: Image6,
			},
			{
				id: 4,
				title: 'Kabul Mobile App UI',
				img: Image3,
			},
		],
	},
};
