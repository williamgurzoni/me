export type Image = {
    alt?: string;
    caption?: string;
    src?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'William Gurzoni',
    subtitle: 'A curious mind and passionate developer',
    description:
        'Personal blog and portfolio of William Gurzoni, a software developer based in New Zealand. He writes about software development, AI, and other tech topics.',
    image: {
        src: '/hero.jpg', // Image used when sharing on social media
        alt: 'Author sitting at a desk with a laptop',
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
        // {
        //     text: 'Projects',
        //     href: '/projects'
        // },
        // {
        //     text: 'Blog',
        //     href: '/blog'
        // },
        // {
        //     text: 'Tags',
        //     href: '/tags'
        // }
    ],
    footerNavLinks: [
        // {
        //     text: 'About',
        //     href: '/about'
        // },
        {
            text: 'Contact',
            href: '/contact'
        }
        // {
        //     text: 'Terms',
        //     href: '/terms'
        // }
    ],
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/william-gurzoni/'
        },
        {
            text: 'Instagram',
            href: 'https://www.instagram.com/william.gurzoni/'
        },
        {
            text: 'X/Twitter',
            href: 'https://x.com/williamgurzoni'
        }
    ],
    hero: {
        title: 'Hi There & Welcome to My Corner of the Web!',
        text: "With over a decade of experience in tech, I've had the opportunity to try my hand at a variety of roles. Right now, I'm having a blast as a Full Stack Developer, with a focus on hybrid mobile development. My diverse background has made me a pro at handling all aspects of a project, from understanding what the client needs to bringing the solution to life.",
        image: {
            alt: 'Author sitting at a desk in front of a computer',
            caption: ''
        },
        actions: [
            {
                text: "Let's Talk",
                href: '/contact'
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to my Newsletter',
        text: 'All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
