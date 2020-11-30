
// images have to be loaded this way due to react not allowing dynamic image paths
// all images located in Abhi Gupta Portfolio/assets/projectImages
// ASSIGN IMAGE TO VARIABLE AND THEN ADD THE VARIABLE TO IMG KEY 
// import imageForSquirl from '../assets/projectImages/squirl.gif';
// import imageForGenerative from '../assets/projectImages/general.gif';
// link is optional
const obj =  {
	title: 'Projects',
	projects: [
		{
			title: 'SQUIRL: Robust and Efficient Learning from Video Demonstration of Long-Horizon Robotic Manipulation Tasks',
			contributors: ['Bohan Wu', 'Feng Xu', 'Zhanpeng He', 'Abhi Gupta', 'Peter K. Allen'],
			presented: 'International Conference on Intelligent Robots and Systems (IROS)',     
			year: '2020',
			// img: imageForSquirl,
			link: 'https://google.com',
			additionalDataToHighlight: '15-Minute Oral Presentation, Acceptance Rate: 47%'
		},
		{
			title: 'Generative Attention Learning: A "GenerAL" Framework for High-Performance Multi-Fingered Grasping in Clutter',
			contributors: ['Bohan Wu', 'Iretiayo Akinola', 'Abhi Gupta', 'Feng Xu', 'Jacob Varley', 'David Watkins-Valls', 'Peter K. Allen', 'Iretiayo Akinola', 'Abhi Gupta', 'Feng Xu', 'Jacob Varley', 'David Watkins-Valls', 'Peter K. Allen'],
			presented: 'Journal of Autonomous Robots (AURO)',     
			year: '2020',
			// img: imageForGenerative
		},
		{
			title: 'SQUIRL: Robust and Efficient Learning from Video Demonstration of Long-Horizon Robotic Manipulation Tasks',
			contributors: ['Bohan Wu', 'Feng Xu', 'Zhanpeng He', 'Abhi Gupta', 'Peter K. Allen'],
			presented: 'International Conference on Intelligent Robots and Systems (IROS)',     
			year: '2020',
			link: 'https://youtube.com',
			additionalDataToHighlight: '15-Minute Oral Presentation, Acceptance Rate: 47%'
		},
	]
};

export default obj;