import project1Image from './photos/project1.JPG'
import project2Image from './photos/project2.jpg'
import project3Image from './photos/project3.png'
import project4Image from './photos/project4.png'

// Paste each project URL into `link` (e.g. https://github.com/you/repo).
// Leave empty or use '#' until you have a link — the card won’t navigate away.
export const projects = [
  {
    id: 'project-1',
    title: 'ReVision',
    date: '2024',
    description: 'Real-time smart glasses that describe surroundings using computer vision and proximity sensors to help visually impaired users navigate safely',
    imageUrl: project1Image,
    link: 'https://devpost.com/software/revision-v9y65g',
  },
  {
    id: 'project-2',
    title: 'Snore No More',
    date: '2024',
    description: 'A brainwave-powered water gun that detects tiredness using EEG signals and sprays the user to keep them productive',
    imageUrl: project2Image,
    link: 'https://devpost.com/software/you-snooze-you-lose-we-dont-lose',
  },
  {
    id: 'project-3',
    title: 'A Helping Hand',
    date: '2023',
    description: 'A servo-driven prosthetic arm that mirrors finger movements using computer vision for intuitive, real-time control and accessibility',
    imageUrl: project3Image,
    link: 'https://devpost.com/software/the-touch-of-god',
  },
  {
    id: 'project-4',
    title: 'Garbage bAIn',
    date: '2023',
    description: 'An intelligent trash bin that uses computer vision and servo mechanisms to automatically sort waste for efficient, hands-free recycling',
    imageUrl: project4Image,
    link: 'https://devpost.com/software/bubble-sort-qzaocp',
  },
]
