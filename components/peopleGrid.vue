<template>
  <center-l size="wide">
    <div class="grid">
      <kluz-card v-for="i in people" :card="i"/>
    </div>
  </center-l>

</template>

<script setup>
const people = [
  {
    name: 'Ana Carolina González',
    job: 'Co-founder and Director at the Magnolia Foundation for Peace and Wellness',
    linkedin: 'https://linkedin.com/in/anacaro26/',
    headshot: '/assets/images/Ana Carolina González.jpeg',
    bio: "Ana Carolina González is a journalist, with a master's degree in International Cooperation and Development (Spain). She has 15 years of experience in the development of social projects related to Latin America, mental health and wellness. She also serves as the Diversity, Equity and Inclusion Coordinator at the Princeton Senior Resource Center (USA).'",
  },
  {
    name: 'Artur Kluz',
    job: 'Founder & CEO of Kluz Ventures',
    linkedin: 'https://linkedin.com/in/akluz',
    headshot: '/assets/images/Artur Kluz.jpeg',
    bio: "Artur Kluz is an investor and entrepreneur. He is an ardent believer that breakthrough technologies can shape the future of humanity and the world, and should be used to empower human flourishing, improve lives, and safeguard human dignity and universal rights. Investments in these technologies can build a global movement and culture of genuine human growth that meets the current and future needs of all people, and serve new generations. '",
  },
  {
    name: 'Bradley Tusk',
    job: 'Co-Founder & Managing Partner of Tusk Venture Partners, Founder of Tusk Strategies',
    linkedin: 'https://www.bradleytusk.com/',
    headshot: '/assets/images/Bradley Tusk.jpeg',
    bio: "Bradley Tusk is a venture capitalist, political strategist, philanthropist and writer. In his former political career, he served as: campaign manager for New York City mayor Michael Bloomberg’s 2009 re-election bid; Deputy Governor of Illinois; and Communications Director to US Senator Chuck Schumer. '",
  },
  {
    name: 'Chris Larsen',
    job: 'Angel Investor and Business Executive',
    linkedin: 'https://en.m.wikipedia.org/wiki/Chris_Larsen',
    headshot: '/assets/images/Chris Larsen.webp',
    bio: "Chris Larsen is a serial entrepreneur known for co-founding a number of Silicon Valley financial technology startups. He co-founded E-Loan, Prosper Marketplace and Ripple Labs, Inc.. Larsen is a strong advocate for financial privacy. In 2001, he co-founded the Californiana for Privacy Now coalition to advocate for consumer privacy protections.'",
  },
  {
    name: 'Daniel Wilhelm',
    job: 'President of The Harry Frank Guggenheim Foundation',
    linkedin: 'https://linkedin.com/in/danielfwilhelm/',
    headshot: '/assets/images/daniel-wilhelm.jpg',
    bio: "Daniel F. Wilhelm is President of The Harry Frank Guggenheim Foundation, a leader in creating and disseminating knowledge on the nature of, and responses to, violence in its many forms in the United States and globally. Wilhelm previously served as Vice President and Chief Program Officer of the Vera Institute of Justice, and has written and testified widely on crime and justice issues. '",
  },
  {
    name: 'Evelyne Tauchnitz',
    job: "Senior Research Fellow at the University of Lucerne’s Institute of Social Ethics",
    linkedin: 'https://linkedin.com/in/evelyne-tauchnitz-0a2a637',
    headshot: '/assets/images/Evelyne Tauchnitz.jpeg',
    bio: "Dr. Evelyne Tauchnitz is conducting research on the impact of the digital transformation on peace and war from an ethics of human rights perspective. Evelyne has experience working as an expert and consultant for the public sector, civil society, and international organizations. Evelyne is also a MAG member of the UN Internet Governance Forum (IGF). '",
  },
  {
    name: 'Kay Firth-Butterfield',
    job: 'Executive Director of the Centre for Trustworthy Technology',
    linkedin: 'https://en.m.wikipedia.org/wiki/Kay_Firth-Butterfield',
    headshot: '/assets/images/Kay Firth-Butterfield.png',
    bio: "Kay Firth-Butterfield is one of the foremost experts in the world on the governance of artificial intelligence (AI). She is the former head of Artificial Intelligence and a Member of the Executive Committee at the World Economic Forum. With a background in law and entrepreneurship, she has an abiding interest in how humanity can equitably benefit from new technologies. '",
  },
  {
    name: 'Simona Paravani-Mellinghoff',
    job: 'Global CIO of Solutions - Multi-Asset Strategies & Solutions at BlackRock',
    linkedin: 'https://linkedin.com/in/simona-paravani-cfa-5129524',
    headshot: '/assets/images/Simona Paravani-Mellinghoff.jpg',
    bio: "In addition to her leadership role in the financial industry, Simona Paravani-Mellinghoff is a Professor at the Faculty of Economics at Cambridge University, where she teaches a master level course in AI applied to Finance. Ms. Paravani-Mellinghoff is also a published author of children’s books aimed to explain technical subjects to a younger audience and is a Trustee of the award-winning financial education charity, MyBnk. '",
  },
  {
    name: 'Stefaan Verhulst',
    job: 'Co-Founder & Chief Research & Development Officer of The GovLab',
    linkedin: 'https://www.linkedin.com/in/stefaan-verhulst',
    headshot: '/assets/images/Stefaan Verhulst.jpeg',
    bio: " Dr. Stefaan G. Verhulst is the co-founder of The GovLab (at New York University) and The Data Tank (in Brussels). He focuses on using advances in science and technology to improve decision-making and problem-solving. He is also the Editor-in-Chief of the open-access journal Data & Policy and has served as a member of several expert groups on data and technology. '",
  },
  {
    name: 'Stephen Roberts',
    job: 'Professor of Machine Learning at University of Oxford & Co-Founder of Mind Foundry',
    linkedin: 'https://linkedin.com/in/stephen-roberts-b0985a17',
    headshot: '/assets/images/Stephen Roberts.jpeg',
    bio: "Professor Stephen Roberts’ main area of research lies in machine learning approaches to data analysis. He has particular interests in the development of machine learning theory for problems in time series analysis and dynamical systems. He co-leads Oxford University's Schmidt AI in Science Postdoctoral Fellowship programme.'",
  },
  {
    name: 'Stuart E. Eizenstat',
    job: 'Senior Counsel at Covington & Burling',
    linkedin: 'https://en.m.wikipedia.org/wiki/Stuart_E._Eizenstat',
    headshot: '/assets/images/Stuart E. Eizenstat.webp',
    bio: "Ambassador Stuart Eizenstat is senior counsel to Covington & Burling’s international practice. His work focuses on resolving international trade problems and business disputes. During a decade and a half of public service in five US administrations, Ambassador Eizenstat has held a number of key senior positions, including at the White House, and the State and the Treasury departments.'",
  }
]

</script>

<style lang="scss" scoped>

</style>
