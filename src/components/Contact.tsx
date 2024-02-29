import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaRocket} from "react-icons/fa"

export const Contact = (): JSX.Element => {
    const [sent, setSent] = React.useState(false)
    const [error, setError] = React.useState("")
    const [submitted, setSubmitted] = React.useState(false)
    const form:any = useRef();

    const sendEmail = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setSubmitted(true)
        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID as string,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string,
            form.current,
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY as string)
        .then(() => {
            setSent(true);
        }, (error) => {
            setError(error);
        });
    };

    return (
        <>{sent ? (
                <p className="text-sm font-medium text-left">Thanks for reaching, I will be sure to reply back soon.</p>
            ) : (
                <div className="max-w-xs text-grey-99">
                    <h4 className="text-xl font-bold text-center md:text-3xl">Send me a message!</h4>
                    <p className="text-sm font-medium text-center">Have a question or proposal! or just want to say hello?</p>
                    <form ref={form} onSubmit={sendEmail} className="space-y-4">
                    <div className="">
                        <label htmlFor="from_name" className="font-medium">Name</label>
                        <input required name="from_name" type="text" className="w-full px-3 py-3 text-black rounded-lg bg-grey-D8 placeholder:font-medium placeholder:text-sm"/>
                    </div>
                    <div className="">
                        <label htmlFor="from_email" className="font-medium">Email</label>
                        <input required name="from_email" type="text" className="w-full px-3 py-3 text-black rounded-lg bg-grey-D8 placeholder:font-medium placeholder:text-sm"/>
                    </div>
                    <div className="">
                        <label htmlFor="subject" className="font-medium">Subject</label>
                        <input required name="subject" type="text" className="w-full px-3 py-3 text-black rounded-lg bg-grey-D8 placeholder:font-medium placeholder:text-sm"/>
                    </div>
                    <div className="">
                        <label htmlFor="message" className="font-medium">Message</label>
                        <textarea required name="message" rows={4} className="w-full px-3 py-3 text-black rounded-lg bg-grey-D8 placeholder:font-medium placeholder:text-sm"/>
                    </div>
                    <div>
                        <button type="submit" className="z-10 flex items-center justify-center w-full py-3 space-x-1 font-bold bg-grey-2E text-grey-99 rounded-xl">
                            {submitted ? <span>Launching...</span> : <span>Launch</span>}
                            <FaRocket className={`text-grey-7E ${submitted && "transform -translate-y-2 duration-1000 delay-100"}`}/>
                        </button>
                        {error && <p className="font-medium text-center text-red-500">{error}</p>}
                    </div>
                    </form>	
			    </div>
            )
        }
        </>
    );
};