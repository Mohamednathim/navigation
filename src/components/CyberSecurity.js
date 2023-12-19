import '../App.css'



const cardList = [
    {
        url: 'https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp',
        title: 'Non-Coding Jobs in Cybersecurity: A Comprehensive Guide',
        description: 'In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills are a prerequisite for success'
    },
    {
        url: 'https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp',
        title: 'What Is Hacking? Types of Hacking & More',
        description: 'Have you ever wondered what hacking is all about? It’s a big deal in today’s tech-heavy world, and it can be both fascinating and scary'
    },
    {
        url: 'https://www.guvi.in/blog/wp-content/uploads/2023/12/UX-Designer-Should-Know-feature-image.webp',
        title: 'Cybersecurity Vs Ethical Hacking: Top 10 Differences',
        description: 'Cybersecurity & Ethical hacking and have been key in making sure that your data online is secure, users are authenticated & your data'
    },
    {
        url: 'https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-The-Easiest-Programming-Languages-to-Learn.webp',
        title: 'Importance and its uses & the growing challenges in 2023! ',
        description: 'Look around today, you will witness that we are more reliant on technology and devices than ever before'
    },
    {
        url: 'https://www.guvi.in/blog/wp-content/uploads/2023/12/feature-image-1.webp',
        title: '8 Different Types of Cybersecurity and Threats Involved',
        description: 'Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organizations '
    },
    {
        url: 'https://www.guvi.in/blog/wp-content/uploads/2023/12/How-to-create-a-UI-UX-design-portfolio.webp',
        title: 'Is coding required for cybersecurity? ',
        description: 'Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well, it depends on many facets'
    },
]



const CyberSecurity = () => {

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

export default CyberSecurity;