import { Accordion } from 'flowbite-react';
import React, { useContext } from 'react';
import { ContextCreator } from '../../ContextProvider/ContextProvider';
import './QuestionsAnswer.css';

const QuestionsAnswers = () => {
    const { dark } = useContext(ContextCreator);
    return (
        <div className={`max-w-7xl mx-2 sm:mx-5 xl:mx-auto my-5 sm:my-12 border rounded-md ${dark ? 'text-in-dark' : 'text-in-light'}`}>
            <Accordion flush={true}>
                <Accordion.Panel>
                    <Accordion.Title className={`${dark ? 'text-in-dark' : 'text-in-light'}`}>
                        What is 'CORS'?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p>
                            CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title className={`${dark ? 'text-in-dark' : 'text-in-light'}`}>
                        Why are you using firebase? What other options do you have to implement authentication?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p>
                            I am using firebase to authenticate users and deploy or host my web applications. It's a free tool and easy practice for every single page and simple applications. There are alternative platforms that also provide these opportunities such as Heroku, backendless, NHost, AWS Amplify and etc.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title className={`${dark ? 'text-in-dark' : 'text-in-light'}`}>
                        How does the private route work?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p>
                            Private route is meant for certain people which is not accessible for everyone. Only the people who fulfill the certain conditions can visit the route. Generally in react applications, private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title className={`${dark ? 'text-in-dark' : 'text-in-light'}`}>
                        What is Node? How does Node work?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p>
                            Node. js (Node) is an open source development platform for executing JavaScript code server-side.
                        </p>

                        <h3 className='font-bold mt-3 mb-1'>How does NodeJS work:</h3>
                        <p>
                            Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </div>
    );
};

export default QuestionsAnswers;