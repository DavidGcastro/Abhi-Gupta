
// images have to be loaded this way due to react not allowing dynamic image paths
// all images located in Abhi Gupta Portfolio/assets/projectImages
// ASSIGN IMAGE TO VARIABLE AND THEN ADD THE VARIABLE TO IMG KEY 
import imageForSquirl from '../assets/projectImages/squirl.gif';
// import imageForGenerative from '../assets/projectImages/general.gif';
// link is optional
const obj =  {
	title: 'Research',
	projects: [
		{
			title: 'Generative Attention Learning: A “GenerAL” Framework for High-Performance Multi-Fingered Grasping in Clutter',
			contributors: ['Bohan Wu', 'Iretiayo Akinola', 'Abhi Gupta', 'Feng Xu', 'Jacob Varley', 'David Watkins', 'Peter Allen'],
			presented: 'Journal of Autonomous Robots (AURO) 2020',     
			year: '2020',
			img: imageForSquirl,
			links: {
				arXiv: 'google.com',
				Website: 'youtube.com',
				Video: 'facebook.com'
			},
		},
		{
			title: 'SQUIRL: Robust and Efficient Learning from Video Demonstration of Long-Horizon Robotic Manipulation Tasks',
			contributors: ['Bohan Wu', 'Feng Xu', 'Zhanpeng He', 'Abhi Gupta', 'Peter Allen'],
			presented: 'International Conference on Intelligent Robots and Systems (IROS) 2020',     
			year: '2020',
			img: imageForSquirl,
			links: {
				arXiv: 'google.com',
				Website: 'youtube.com',
				Video: 'facebook.com'
			},
		},
		{
			title: 'Leveraging Uncertainty-Aware Dynamics Models to Refine Actor-Critic Methods',
			contributors: ['Robert Kwiatkowski',  'Abhi Gupta',  'Wonjun Sun', 'Boyuan Chen', 'Hod Lipson'],
			year: '2020',
			img: imageForSquirl,
			links: {
				arXiv: 'google.com',
				Website: 'youtube.com',
				Video: 'facebook.com'
			},
			additionalDataToHighlight: 'Work in progress. Pre-print coming soon.'
		},
	]
};

export default obj;