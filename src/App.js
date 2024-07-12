import { Container,  Row, Col, Card, Image, CardTitle, CardFooter } from 'react-bootstrap';

import image1 from './img/profile.jpg';
import stack1 from './img/word.jpg';
import stack2 from './img/excel.jpg';
import stack3 from './img/html5.png';
import stack4 from './img/css.png';
import stack5 from './img/bootstrap.png';
import stack6 from './img/js.png';

function App() {

  return (
    <div className="App">
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary shadow py-3 border-bottom border-2 border-success">
        <div className="container-fluid">
            <a className="navbar-brand ms-2 poppins-semibold" href="/">Jennifer Gemina - <i className='poppins-light text-purple'>InfoTech</i> </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i className="bi bi-list fs-4 "></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto gap-4 poppins-bold text-center">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current='page' href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#services">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#experience">Experience</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
        </nav>

        <Container className="content" id='content'>
            <section id='home' className='border-bottom border-success'>
                <Row lg={2} xs={1} className="section mt-lg-5">
                    <Col className='order-2 order-lg-1 d-flex align-items-center'>
                        <Card className='zero border-0 bg-transparent'>
                            <Card.Body className='mt-lg-5'>
                                    <div className='mt-lg-5'>
                                        <Card.Title className='fs-1 fw-bold text-center text-lg-start'>Hi,</Card.Title>
                                        <Card.Title className='fs-1 fw-bold text-center text-lg-start'>I'm Jennifer Gemina</Card.Title>
                                        <p className='fs-5 lh-1 poppins-extralight'>Bachelor of Science in Information Technology</p>
                                        <Card.Text className='text-justify py-lg-5 fs-4 lh-1'>
                                        <p>Central Philippines State University (CPSU)</p>
                                        <p>Main Campus-Kabankalan City</p>
                                        </Card.Text>
                                        <div className='m-auto text-center'>
                                        <a className='m-lg-1 text-center w-50 btn btn-outline-success rounded-pill btn-nav py-2' href="#contact">Contact Me</a>
                                        </div>
                                    </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='order-1 order-lg-2'>
                        <Card className='bg-transparent border-0'>
                            <Image src={image1} alt='Image 1' fluid className='m-auto w-75 rounded-circle bg-shadow' />
                        </Card>
                    </Col>
                </Row>
            </section>

            <section id="about" className='border-bottom border-success'>
                    <h1 className='poppins-bold'>About</h1>
            <Row lg={1} xs={1} id="about">
            <Col>
                <Card className="radius-0 bg-transparent border-0">
                <Card.Body>
                <Card.Title className='poppins-bold text-center text-lg-start'>About Me</Card.Title>
                <Card.Text className='p-lg-3 text-lg-justify'>
                    <p>
                    Hello! I'm Jennifer Gemina, an IT graduate from Central Philippines State University (CPSU), Class of 2023-2024. With a passion for technology and a drive to innovate, I have dedicated myself to mastering the field of Information Technology. My academic journey has equipped me with a solid foundation in various IT disciplines, and I am eager to apply my skills in real-world scenarios.</p>
                    <p>
                    I am driven by great ambitions and a commitment to continuous learning. My goal is to make a significant impact in the tech industry, contributing to solutions that enhance people's lives.

Thank you for visiting my portfolio. I look forward to connecting with like-minded individuals and exploring exciting opportunities in the world of technology.                    </p>
                <Row lg={4} xs={2}>
                    <Col className="m-auto">
                        <p>
                        <i class="bi bi-geo-alt text-danger"></i> Kabankalan City
                        </p>
                    </Col>
                    <Col className="m-auto">
                        <p>
                        <i class="bi bi-google text-info"></i> jennifergimena10@gmail.com
                        </p>
                    </Col>
                    <Col className="m-auto">
                        <p>
                        <i class="bi bi-telephone text-primary"></i> +639673195810
                        </p>
                    </Col>
                    <Col className="m-auto">
                        <p>
                        <i class="bi bi-buildings text-success"></i> <a href="https://www.cpsu.edu.ph/" target="_blank" rel="noreferrer" className="text-primary text-decoration-none">CPSU Main Campus</a>
                        </p>
                    </Col>
                </Row>
                </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="radius-0 border-0 bg-transparent">
                <Card.Body>
                    <Card.Title className='poppins-bold text-center text-lg-start'>Technology Stack</Card.Title>
                    <Card.Text className='p-lg-4 text-justify'>
                        <Row lg={6} xs={3} className='g-3'>
                            <Col>
                                <Card>
                                    <div className='overflow-hidden'>
                                        <Image src={stack1} className='scale-up' fluid alt='Bootstrap' />
                                    </div>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <div className='overflow-hidden'>
                                        <Image src={stack2} className='scale-up' fluid alt='HTML5' />
                                    </div>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <div className='overflow-hidden'>
                                        <Image src={stack3} className='scale-up' fluid alt='CSS' />
                                    </div>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <div className='overflow-hidden'>
                                        <Image src={stack4} className='scale-up' fluid alt='CSS' />
                                    </div>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <div className='overflow-hidden'>
                                        <Image src={stack5} className='scale-up' fluid alt='BOOTSTRAP' />
                                    </div>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <div className='overflow-hidden'>
                                        <Image src={stack6} className='scale-up' fluid alt='JS' />
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            </Row>
            </section>

            <section id="services" className='border-bottom border-success'>
            <Row id="projects">
            <Col>
                <Card className="bg-transparent border-0">
                <Card.Body>
                <h1 className='poppins-bold'>Services</h1>
                    <Card.Text>
                        <Row lg={2} xs={1}>
                            <Col lg={12} className='m-auto my-2 lh-100'>
                                <Card className='border-0 bg-transparent lh-100 m-auto'>
                                    <Card.Title className='text-justify'>
                                    As an IT graduate specializing in technical support and data management, I offer a range of services to help you manage and optimize your documents and data efficiently. My hands-on experience during my OJT has equipped me with practical skills and a deep understanding of various IT solutions. Here’s how I can assist you:                                    </Card.Title>
                                </Card>
                            </Col>
                            <Col className='m-auto my-2 lh-100'>
                                <Card className='border-0 project lh-100 m-auto'>
                                    <CardTitle className='poppins-bold'>
                                    Data Encoding and Files Compiling
                                    </CardTitle>
                                    <ul>
                                        <li className='text-justify'>
                                        <b>Word Files Compiling and Organizing:</b> Gathering, compiling, and organizing Word documents into coherent and accessible formats. I ensure all documents are systematically arranged and easy to retrieve.
                                        </li>
                                        <li className='text-justify'>
                                        <b>Excel Files Compiling and Organizing:</b> Expertly compiling and organizing Excel files, including data entry, formatting, and structuring spreadsheets for optimal use. I focus on creating organized and efficient workbooks that meet your needs.
                                        </li>
                                        <li className='text-justify'>
                                        <b>Data Encoding:</b> Accurately entering and organizing data into digital formats, ensuring it is accessible and easy to manage. My meticulous approach ensures data integrity and reliability.
                                        </li>
                                        <li className='text-justify'>
                                        <b>Document Management:</b> Implementing effective document management systems to keep your files structured and easy to navigate. My attention to detail ensures that your documents are well-organized and up-to-date.
                                        </li>
                                    </ul>
                                </Card>
                            </Col>
                            <Col className='m-auto my-2'>
                                <Card className='border-0 project m-auto'>
                                    <CardTitle className='poppins-bold'>
                                    Custom IT Solutions
                                    </CardTitle>
                                    <ul>
                                        <li className='text-justify'>
                                        <b>Tailored Support:</b> Offering customized technical support solutions to meet your specific needs and requirements. Whether you need help with specific software or a comprehensive IT strategy, I am here to assist you.
                                        </li>
                                    </ul>
                                </Card>
                            </Col>
                        </Row>
                    </Card.Text>
                </Card.Body>
                <CardFooter className='text-justify'>
                I am committed to delivering high-quality support and innovative solutions. Let's work together to ensure your documents and data are managed efficiently and effectively.  
                </CardFooter>
                </Card>
            </Col>
            </Row>
            </section>

            <section id="experience" className='border-bottom border-success'>
            <Row id="experience">
            <Col>
                <Card className="bg-transparent border-0">
                <Card.Body>
                    <Card.Title className='fs-1 fw-bold text-center'>Experience</Card.Title>
                        <Row lg={3} xs={1} className='g-3'>
                            <Col lg={12} className='m-auto my-2'>
                                <Card className='border-0 bg-transparent m-auto'>
                                    <Card.Title className='text-justify w-lg-75 m-auto py-2'>
                                    During my On-the-Job Training (OJT), I had the opportunity to immerse myself in a professional environment, where I honed my skills in technical support, data management, and document organization. Here are some key highlights from my OJT experience:                                 
                                    </Card.Title>
                                </Card>
                            </Col>
                            <Col className='h-100'>
                                <Card className='border-0 p-2 m-auto'>
                                    <Row lg={1} xs={1}>
                                        <Col >
                                            <div className='overflow-hidden p-lg-3 text-justify'>
                                            <b>Word and Excel Files Compiling and Organizing</b>
                                            <ul>
                                               <li> <b>Document Compilation:</b> I was responsible for gathering and compiling Word and Excel files from various sources. </li> 
                                               <li> <b>Spreadsheet Management: </b>I structured and formatted Excel spreadsheets to enhance data readability and usability. </li> 
                                               <li> <b>Data Entry and Encoding:</b> I accurately entered and encoded data into digital formats, ensuring that the information was up-to-date and easily retrievable. </li> 
                                               <li> <b>Organizing Systems: </b>I implemented efficient document management systems, categorizing files systematically for quick access and easy navigation. </li></ul>
                                                </div>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col className='h-100'>
                                <Card className='border-0 p-2 '>
                                    <Row lg={1} xs={1} className='lh-100'>
                                        <Col className='h-100'>
                                            <div className='overflow-hidden p-lg-3 text-justify'>
                                            <b>Technical Assistance</b>
                                            <ul>
                                                <li> <b>IT Support: </b>I provided technical support to staff, diagnosing and troubleshooting hardware and software issues. My proactive problem-solving approach minimized downtime and ensured smooth operations.</li>
                                                <li> <b>System Maintenance:</b> I assisted in regular maintenance tasks, including software updates and hardware checks, to ensure the optimal performance of IT infrastructure.</li>
                                                <li> <b>User Training:</b> I educated users on best practices for utilizing IT systems and software, enhancing their productivity and confidence in handling technical tasks.</li></ul>
                                                </div>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col className='h-100'>
                                <Card className='border-0 p-2 lh-100'>
                                    <Row lg={1} xs={1} className='lh-100'>
                                       
                                        <Col className='h-100'>
                                            <div className='overflow-hidden p-lg-3 text-justify h-100'>
                                            <b>Skills Developed</b> 
                                            <ul>
                                               <li><b>Attention to Detail:</b> Ensuring the accuracy and reliability of compiled files and data.</li> 
                                               <li><b>Organizational Skills:</b> Structuring and categorizing documents for efficient retrieval and use. </li> 
                                               <li><b>Technical Proficiency: </b>Troubleshooting and maintaining IT systems effectively.</li>
                                               <li><b>Communication:</b>Providing clear and helpful instructions to users</li></ul>
                                                </div>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        </Row>
                </Card.Body>
                </Card>
            </Col>
            </Row>
            <Row lg={1} xs={1}>
                <Col>
                <Card className='border-0 bg-transparent m-auto'>
                                    <Card.Title className='text-justify w-lg-75 m-auto py-2'>
                                    My OJT experience was instrumental in shaping my technical expertise and enhancing my ability to deliver high-quality IT support. It provided a solid foundation for my future career in the tech industry, and I am excited to continue building on these skills.</Card.Title>
                                </Card>    
                </Col>
            </Row>
            </section>

            
            <footer>
                <section id="contact">
                    <p className='poppins-bold fs-3 text-center'>
                        Contact:
                    </p>
                    <Row className='gap-5'>
                        <Col className='m-auto text-center'>
                            <p>Facebook: <a href='https://web.facebook.com/jennifer.gimena.73' rel='noreferrer' className='text-primary' target='_blank'>JeNnifer Gemina</a></p>
                            <p>Github: <a href='https://github.com/JenniferGimena?tab=repositories' rel='noreferrer' className='text-primary' target='_blank'>JenniferGimena</a></p>
                        </Col>
                        <Col className='m-auto text-center'>
                            <p>Mobile No.: <code className='text-primary fs-6'>+639673195810</code></p>
                            <p>Email: <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSDZctpfsGSngnQFLGRDzVGQtlVCncNbKbpjPXlBLJzjdJkQzqCSjTNlCnDBdtgCCVXVJSNz" rel='noreferrer' className='text-primary' target='_blank'>jennifergimena10@gmail.com</a></p>
                        </Col>
                    </Row>
                    <p className='text-center'><small className='poppins-light'>
                        JenniferGemina @ All Rights Reserved © 2024
                    </small></p>
                </section>
            </footer>
        </Container>
    </div>
  );
}

export default App;
