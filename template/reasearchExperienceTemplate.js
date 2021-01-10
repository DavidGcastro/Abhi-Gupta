
// images have to be loaded this way due to react not allowing dynamic image paths
const obj =  {
	title: 'Research',
	projects: {
		2021 : [
			{
				title: 'Formulating Branch-and-Bound as a Reinforcement Learning Problem',
				contributors: ['Abhi Gupta', 'Yunhao Tang', 'Shipra Agrawal', 'Yuri Faenza'],
				presented: 'Working Paper',
				additionalDataToHighlight: 'Finding a feasible solution with a certificate of optimality requires two kinds of decisions: variable branching and node selecting. We show it is possible to improve over the best known heuristic, fullstrong branching, by learning policies for both decisions together.',
				year: '2021',
				img: './images/b&b.gif',
				links: {
					arXiv: './publications/B&B.pdf',
					// Website: 'TODO',
					// Video: 'TODO'
				},
			},
			{
				title: 'A Self-Supervised Framework for Online Robot-Camera Calibration',
				contributors: ['Abhi Gupta', 'Jingxi Xu', 'Peter Allen', 'Shuran Song'],
				presented: 'Working Paper',
				additionalDataToHighlight: 'An offline and cumbersome calibration procedure is required to identify camera viewpoint and robot joint states. We leverage off-the-shelf 3D CAD models in order to supervise a network that can estimate both from only real-world, unlabelled depth images. ',
				year: '2021',
				img: './images/calibration.gif',
				links: {
					arXiv: './publications/Calibration.pdf',
					// Website: 'TODO',
					// Video: 'TODO'
				},
			},
			{
				title: 'Leveraging Uncertainty-Aware Dynamics Models for Tree Search',
				contributors: ['Robert Kwiatkowski', 'Abhi Gupta', 'Wonjun Sun', 'Boyuan Chen', 'Hod Lipson'],
				presented: 'Working Paper',
				additionalDataToHighlight: 'Monte-Carlo Tree Search assumes a perfect model of the world, whether known or learned. We use the uncertainty of a probabilistic dynamics model as a way to penalize the return of rollouts simulated during planning, leading to significant gains in performance.',
				year: '2021',
				img: './images/uncertainty.gif', // TODO
				links: {
					arXiv: './publications/Uncertainty.pdf',
					// Website: 'TODO',
					// Video: 'TODO'
				},
			}
		],
		2020: [	
			{
				title: 'SQUIRL: Robust and Efficient Learning from Video Demonstration of Long-Horizon Robotic Manipulation Tasks',
				contributors: ['Bohan Wu', 'Feng Xu', 'Zhanpeng He', 'Abhi Gupta', 'Peter Allen'],
				presented: 'IROS 2020',     
				additionalDataToHighlight: 'Learning complex robotic manipulation skills like pick-pour-place requires a vast amount of real-world experiences. We directly recover a Q-function to solve a related but new task from only a single video demonstration.',
				year: '2020',
				img: './images/squirl.gif',
				links: {
					arXiv: 'https://arxiv.org/abs/2003.04956',
					Website: 'http://crlab.cs.columbia.edu/squirl/',
					// Video: 'TODO'
				},
			},
			{
				title: 'Generative Attention Learning: A Framework for High-Performance Multi-Fingered Grasping in Clutter',
				contributors: ['Bohan Wu', 'Iretiayo Akinola', 'Abhi Gupta', 'Feng Xu', 'Jacob Varley', 'David Watkins', 'Peter Allen'],
				presented: 'Autonomous Robots 2020',     
				additionalDataToHighlight: 'The search space of grasps is limited to the point cloud of the scene. We learn a policy to find high-quality grasps in pixel space, closing the sim-to-real gap that would exist if learning motor control instead.',
				year: '2020',
				img: './images/general.gif',
				links: {
					arXiv: 'http://web2.cs.columbia.edu/~allen/PAPERS/General_Auro_2020.pdf',
					Website: 'http://crlab.cs.columbia.edu/GenerAL/',
					Video: 'https://www.youtube.com/watch?v=GROLYFve9Cc'
				},
			}
		],
		2019: [
			{
				title: 'TrackIt! Self-Supervised Motion Tracking in 2D',
				contributors: ['Abhi Gupta', 'Peter Belhumeur'],
				presented: 'Project Report',     
				additionalDataToHighlight: 'The motion of perfectly elastic collisions in two dimensions can be modelled with elememtary physics. In order to track motion from pixel observations alone, we train a variety of neural networks, like autoencoders, VAEs, LSTMs, and ConvLSTMs, to predict future frames from past frames. This leads to a world model of the physics environment.',
				year: '2019',
				img: './images/trackit.gif',
				links: {
					// arXiv: 'TODO',
					Website: 'https://medium.com/@asg2233/trackit-9f9c17183838',
					// Video: 'TODO'
				}
			},	
			{
				title: 'Electromyography-Driven Hand Teleoperation',
				contributors: ['Abhi Gupta', 'Feng Xu', 'Peter Allen'],
				presented: 'Project Report',     
				additionalDataToHighlight: 'Robotic teleoperation requires several sensors to execute commands as simple as open and close. We leverage the Ctrl-Labs\' EMG armband, a single brain-computer interface, to continuously control high degree-of-freedom manipulators. Our human-to-robot joint space mapping provides enough precision to grasp tabletop objects.',
				year: '2019',
				img: './images/teleoperation.gif',
				links: {
					arXiv: './publications/EMG.pdf',
					// Website: 'TODO',
					// Video: 'TODO'
				}
			}	
		]

	}
};

export default obj;