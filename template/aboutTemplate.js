
// brackets mean apply special class
// https://react-icons.github.io/react-icons/
import { AiOutlineMail, AiOutlineFileText, AiFillGithub } from 'react-icons/ai';
import { SiGooglescholar } from 'react-icons/si';
export default {
	title: 'about',
	img: './images/avatar.png',
	main: [
		// each item is a paragraph
		'Hi! I am studying {Computer Science & Operations Research link=http://www.cs.columbia.edu/ class=emphasis-color inline-text} in the engineering school at Columbia University. I have worked on research problems in discrete optimization, computer vision, and robotics where decision-making is necessary. {I am looking to join a research lab as a PhD student to advance both the theory and application of reinforcement learning. class=white-emphasis inline-text}',
		'My primary research advisor is {Dr. Shipra Agrawal link=http://www.columbia.edu/~sa3305/ class=emphasis-color inline-text}. I have also worked with {Dr. Hod Lipson link=//hodlipson.com/ class=emphasis-color inline-text}, {Dr. Shuran Song link=//cs.columbia.edu/~shurans/ class=emphasis-color inline-text}, and {Dr. Peter Allen link=//cs.columbia.edu/~allen/ class=emphasis-color inline-text}.',
		'In my freetime, you can find me watching ESPN or building my next hack.'
	],
	'contact': {
		title: 'contact',
		content: [
			{link: 'mailto:abhi.gupta@columbia.edu', icon: AiOutlineMail}, 
			{link: 'https://github.com/ScrypticLabs', icon: AiFillGithub}, 
			{link: '/contact/Abhi_Gupta_CV.pdf', icon: AiOutlineFileText}, 
			{link: 'https://scholar.google.com/citations?user=ynyPc1kAAAAJ&hl=en', icon: SiGooglescholar}
		]
	},
	sections: [
		// content must be an array
		{
			title:'News',
			content:[
				'I am the CA of the graduate class taught by Dr. Shipra Agrawal, Reinforcement Learning: Theory & Practice.', 
				'I interned with the science & interactions team at Ctrl-Labs, now part of Facebook Reality Labs.', 
				'I declined an engineering internship at Facebook to pursue research at the Columbia Data Science Institute.'
			],
			// has bullets
			type: 'list'
		},
		{
			title: 'Research Goals',
			content: ['I aim to leverage reinforcement learning to solve the challenges of real life that cannot be simulated. With a focus on the theory of optimization in sequential decision-making, I hope to extend online algorithms to learn from real-world interaction and generalize to all situations, including those that cannot be predetermined.']
		},
	]
};
