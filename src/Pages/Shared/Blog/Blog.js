import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
    return (
        <Accordion className='mt-5'>
            <Accordion.Item eventKey="0">
                <Accordion.Header><span className='fw-bold'>What is cors?</span></Accordion.Header>
                <Accordion.Body>
                Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header><span className='fw-bold'>Why are you using firebase? What other options do you have to implement authentication?</span></Accordion.Header>
                <Accordion.Body>
                Indeed, Firebase is a less technical and time-saving alternative to writing full-fledged backend code for dynamic apps. You might also want to consider leveraging this tool if you eventually wish to host and manage your app in the cloud. Being serverless, Firebase removes the need to worry about the technicalities of cloud server configuration.    
                Here are the top 5 tools and software that are the best alternatives of Firebase: 
                UXCam,
                Supabase,
                Back4app,
                Backendless,
                Flurry Analytics
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header><span className='fw-bold'>How does the private route work?</span></Accordion.Header>
                <Accordion.Body>

                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header><span className='fw-bold'>What is Node? How does Node work?</span></Accordion.Header>
                <Accordion.Body>

                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default Blog;