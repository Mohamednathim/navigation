import '../App.css'



const cardList = [
    {
        url: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp',
        title: 'Top Ways to Assess Soft Skills in Full Stack Developers in 2024',
        description: 'When you’re hiring a full-stack developer, what are the most important things you look for?'
    },
    {
        url: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Horizontal-vs-Vertical-Scaling-for-Efficient-System-Design.webp',
        title: 'Horizontal vs Vertical Scaling for Efficient System Design',
        description: 'A Full Stack Developer is a tech all-rounder and skills needed to thrive as a full-stack developer'
    },
    {
        url: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp',
        title: 'Top Differences: Full Stack Developer vs Software Engineer 2024',
        description: 'In the world of system design, envision a digital skyscraper – a multifaceted structure built'
    },
    {
        url: 'https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-Books-to-Learn-Full-Stack-Development.webp',
        title: 'Best Books to Learn Full-Stack Development',
        description: 'Are you interested in becoming a full-stack developer but not sure where to start?'
    },
    {
        url: 'https://www.guvi.in/blog/wp-content/uploads/2023/10/Featured-Image-top-product-based-companies-for-full-stack-developers.webp',
        title: 'Top 10 Product-Based Companies for Full-Stack Developers [2024]',
        description: 'In the dynamic landscape of technology, full-stack developers are the architects of the digital world'
    },
    {
        url: 'https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp',
        title: '7 Best Full-Stack Development Online Courses [2024]',
        description: 'Today’s world is rapidly evolving into a technological landscape to thrive as a full-stack developer'
    },
]



const FullStackDevelopment = () => {

    return (
        <div className="d-flex flex-wrap ">
            {cardList.map((item) => {
                return (

                    < div className='card mb-3 d-flex flex-wrap justify-content-center align-items-center text-center border-0 m-4 pt-3 m' >
                        <img src={item.url} width='100%' height='200px' />
                        <div className="card-body">
                            <h3 className="card-title">{item.title}</h3>
                            <p className="card-title">{item.description}</p>
                            <button class='btn btn-primary'>Read more</button>
                        </div>
                    </div >
                )
            })}
        </div>
    )
}

export default FullStackDevelopment;