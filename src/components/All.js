import '../App.css'

const cardList = [
    {
        url: 'https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-UX-Designer-Resume-Examples-and-Portfolio-Guide.webp',
        title: '8 UX Designer Resume Examples and Portfolio Guide',
        description: 'If you’re into designing websites or apps, you know how important it is to create a sample '
    },
    {
        url: 'https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Effective-Ways-to-Learn-UIUX-Design.webp',
        title: '8 Effective Ways to Learn UI/UX Design [2024]',
        description: 'In the dynamic world where businesses strive to offer exceptional digital experiences'
    },
    {
        url: 'https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Competitive-Analysis-in-UI-Design-All-You-Need-To-Know.webp',
        title: 'Conducting Competitive Analysis in UI Design',
        description: 'Have you ever wondered how your app or website compares to others? That’s where competitive'
    },
    {
        url: 'https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-How-to-Download-an-Image-from-Figma.webp',
        title: 'How to Download an Image from Figma? A 5-Step Guide to Help You Out',
        description: 'Whenever you work on creative software that works with media elements'
    },
    {
        url: 'https://www.guvi.in/blog/wp-content/uploads/2023/12/feature-image-1.webp',
        title: '10 Important UI/UX Testing Tools For UI/UX Designers',
        description: 'UI/UX is the next gold rush of the tech world and a lot of people'
    },
    {
        url: 'https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-UIUX-Design-Trends.webp',
        title: 'Top UI/UX Design Trends: Embracing Innovation in 2024',
        description: 'In the fast-paced world of UI/UX design, staying ahead of the curve is crucial'
    }
]


const All = () => {

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
        </div >
    )
}

export default All;