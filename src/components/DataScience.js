import '../App.css'

const cardList = [
    {
        url: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp',
        title: 'Top 10 High Paying Non-Coding Jobs in Data Science in 2024',
        description: 'Are you someone who’s not interested in coding, but wants to get placed and earn a handsome salary?'
    },
    {
        url: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-1-2048x1024.webp',
        title: 'Impact of Certification Programs on Hiring Data Scientists',
        description: 'Data scientists are the creators behind transforming the raw data into edible data insights'
    },
    {
        url: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp',
        title: 'Top Product-Based Companies for Data Science Freshers',
        description: 'In today’s data-driven world, data science has emerged as a crucial field and make informed decisions'
    },
    {
        url: 'https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Difference-between-Data-Science-and-Data-Engineering.webp',
        title: 'What is the Difference between Data Science and Data Engineering?',
        description: 'India has been making some serious waves in the world of data.'
    },
    {
        url: 'https://www.guvi.in/blog/wp-content/uploads/2023/07/best-data-science-frameworks.webp',
        title: 'Top 10 Data Science Tools in 2024',
        description: 'Data Science is an in-demand profession and will continue growing in the coming years'
    },
    {
        url: 'https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-books-to-learn-data-science.webp',
        title: 'Best Data Science Books to Learn in 2024',
        description: 'Today, we’re going to talk about something really cool: data science'
    },
]



const DataScience = () => {

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

export default DataScience;