// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  title: string
  desc: string
  experience: number
  noopen: number
  location: string[]
  availabel: boolean
  hired: number
  image: string
  type: string
  pg: string
  timing: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json([
    {
      title: 'Job at hotel TAJ .',
      desc: "Taj Hotels is a chain of luxury hotels and a subsidiary of the Indian Hotels Company Limited, headquartered at Express Towers, Nariman Point in Mumbai. Incorporated by the founder of the Tata Group, Jamsetji Tata, in 1903, the company is a part of the Tata Group, one of India's largest business conglomerates.",
      experience: 2,
      noopen: 3,
      location: [
        'Express Towers',
        'Nariman Point',
        'Mumbai',
        'Maharashtra',
        'India',
      ],
      availabel: true,
      hired: 1,
      image:
        'https://www.bing.com/th?id=OIP.6kuyjlILbvHDolIY6BSaUAHaFj&w=215&h=160&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2',
      type: 'helper',
      pg: 'male',
      timing: '10-6',
    },
    {
      title: 'Barbeque Nation.',
      desc: 'Barbeque Nation is a company that values relationships and satisfaction, both among its customers and employees. The brand was awarded one of the Top 37 best places to work in Indi',
      experience: 2,
      noopen: 3,
      location: [
        '1st outlet in Kakinada',
        'Andhra Pradesh',
        'SRMT Mall',
        'Pithampuram Road',
        'India',
      ],
      availabel: false,
      hired: 1,
      image:
        'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/5/h/a/p532-15773519235e047af31a57e.jpg?tr=tr:n-xlarge',
      type: 'receptioonist',
      pg: 'male/female',
      timing: '12-9',
    },
    {
      title: 'Iran Mall',
      desc: 'The biggest mall in the world is the massive Iran Mall that covers a whopping 21 million square feet of leasable space. The second biggest mall in the world can be found in Dongguan in China.',
      experience: 2,
      noopen: 13,
      location: [
        'Shahid Hemmat West',
        'Shahid Kharazi Highway',
        'Tehran 11369',
        'China',
      ],
      availabel: true,
      hired: 12,
      image:
        'https://th.bing.com/th/id/R.d9e8c6a37ebcb53066ceb9ee38b89ac4?rik=4TX%2fayEv2g5PSQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-cDGzM8FDqC8%2fVENmEnj8vKI%2fAAAAAAAAOQo%2fQdNikEtApKI%2fs1600%2f25s1ily.jpg&ehk=zVFo8RJxw8IvrjY5bBDsR1804LCOYKkzYdaPeIAb8Pg%3d&risl=&pid=ImgRaw&r=0',
      type: 'security guard',
      pg: 'female',
      timing: '11-5',
    },
    {
      title: 'Ahlcon International School',
      desc: 'All India Survey conducted by Education World and C-Fore 2016, 2014 ranked the school number 1. Ahlcon International School has many awards like these in its grasp. Hence, proving the fact of being one of the best schools in Delhi.',
      experience: 4,
      noopen: 7,
      location: [
        'Mayur Vihar,',
        'Opp Una Enclave',
        ' Near Delhi Police Apartment',
        'Block F',
        'Delhi',
      ],
      availabel: false,
      hired: 7,
      image:
        'https://brainfeedmagazine.com/wp-content/uploads/2018/12/alcon-international-School-960x451.jpg',
      type: 'staff',
      pg: 'male/female',
      timing: '10-6',
    },
    {
      title: 'Tropical Islands Resort',
      desc: 'What is the number one waterpark in the world? Tropical Islands Resort is the biggest indoor water park in the world, and manages to keep its visitors warm (though not dry) all year. What is the best water park?',
      experience: 0,
      noopen: 13,
      location: ['Tropical-Islands-Allee 1', 'Krausnick'],
      availabel: true,
      hired: 2,
      image:
        'https://r-cf.bstatic.com/images/hotel/max1024x768/123/123208074.jpg',
      type: 'food server',
      pg: 'male/female',
      timing: '18-7',
    },
  ])
}
