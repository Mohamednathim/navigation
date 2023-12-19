
import '../App.css'



const cardList = [
    {
        url: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/top_product_based_companies_that_don_t_require_coding.webp',
        title: 'UI/UX Designer Job Description and Roles & Responsibilities',
        description: 'UI/UX designer job descriptions and roles and responsibilities that can help you understand more about this domain and set your career path straight.'
    },
    {
        url: 'https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Economics-Students.webp',
        title: 'Top 5 IT Jobs for Economics Students',
        description: 'In today’s digital age, the intersection of economics and technology offers exciting career opportunities for students with a background in economics'
    },
    {
        url: 'https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students.webp',
        title: 'Top IT Jobs for Commerce Students: A Lucrative Career Path',
        description: 'The intersection of commerce and technology offers a wide range of job prospects that can provide both financial stability and personal growth.'
    },
    {
        url: 'https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Automation-Test-Engineer-Resume-Important-Things-To-Consider.webp',
        title: 'Automation Test Engineer Resume: 10 Important Things To Consider',
        description: 'The world is moving towards automating the testing of products in order to increase work efficiency'
    },
    {
        url: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/FEATURE-IMAGE-1-3-2048x1072.webp',
        title: 'Professional Civil Engineer Resume: A Guide To Attract Employers in 2024',
        description: 'The world is moving towards modernization leading to an increase in the popularity of civil engineering'
    },
    {
        url: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/Featured-Image-2048x1072.webp',
        title: '9 Best Product-Based Companies for Project Management',
        description: 'In today’s tech-driven world, the demand for project managers is higher than before.'
    },
]


const Career = () => {

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

export default Career;