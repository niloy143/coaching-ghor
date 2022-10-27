import { Accordion } from 'flowbite-react';
import React, { useContext } from 'react';
import { ContextCreator } from '../../ContextProvider/ContextProvider';

const QuestionsAnswers = () => {
    const { dark } = useContext(ContextCreator);
    return (
        <div className={`max-w-7xl mx-2 sm:mx-5 xl:mx-auto my-5 sm:my-12 border rounded-md ${dark ? 'text-slate-100' : 'text-slate-700'}`}>
            <Accordion flush={true}>
                <Accordion.Panel>
                    <Accordion.Title className={`${dark ? 'text-white' : 'text-slate-700'}`}>
                        What is 'cors'?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic iure tenetur eligendi voluptate soluta non, temporibus quam! Aliquid quo nesciunt assumenda aut, blanditiis quia illo aperiam veniam nihil repellendus labore.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title className={`${dark ? 'text-white' : 'text-slate-700'}`}>
                        Why are you using firebase? What other options do you have to implement authentication?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic iure tenetur eligendi voluptate soluta non, temporibus quam! Aliquid quo nesciunt assumenda aut, blanditiis quia illo aperiam veniam nihil repellendus labore.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title className={`${dark ? 'text-white' : 'text-slate-700'}`}>
                        How does the private route work?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic iure tenetur eligendi voluptate soluta non, temporibus quam! Aliquid quo nesciunt assumenda aut, blanditiis quia illo aperiam veniam nihil repellendus labore.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title className={`${dark ? 'text-white' : 'text-slate-700'}`}>
                        What is Node? How does Node work?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic iure tenetur eligendi voluptate soluta non, temporibus quam! Aliquid quo nesciunt assumenda aut, blanditiis quia illo aperiam veniam nihil repellendus labore.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </div>
    );
};

export default QuestionsAnswers;