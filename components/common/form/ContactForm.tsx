import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface ContactFormProps {
    phone?: boolean;
    subject?: boolean;
    title: string;
    buttonTitle: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
    phone,
    subject,
    title,
    buttonTitle,
}) => {
    const validationSchema = Yup.object({
        name: Yup.string().required("Name is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        phoneNo: phone
            ? Yup.string().required("Phone number is required")
            : Yup.string(),
        subject: subject ? Yup.string().required("Subject is required") : Yup.string(),
        message: Yup.string().required("Message is required"),
    });

    const initialValues = {
        name: "",
        email: "",
        phoneNo: "",
        subject: "",
        message: "",
    };

    const handleSubmit = () => {
        alert("Form Submitted");
    };

    return (
        <section className="bg-white w-full flex-1 text-black border rounded-md px-3 border-gray-200 font-nunito">
            <div className="py-4 lg:py-6 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-8 text-2xl sm:text-4xl tracking-tight font-bold text-center text-gray-800 ">
                    {title}
                </h2>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <Form className="space-y-8">
                        <div>
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium text-gray-900 "
                            >
                                Name
                            </label>
                            <Field
                                type="text"
                                id="name"
                                name="name"
                                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  focus:outline-none"
                                placeholder="John Doe"
                                required
                            />
                            <ErrorMessage
                                name="name"
                                component="div"
                                className="text-red-500"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 "
                            >
                                Your email
                            </label>
                            <Field
                                type="email"
                                id="email"
                                name="email"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 focus:outline-none"
                                placeholder="name@flowbite.com"
                                required
                            />
                            <ErrorMessage
                                name="email"
                                component="div"
                                className="text-red-500"
                            />
                        </div>
                        {phone && (
                            <div>
                                <label
                                    htmlFor="phoneNo"
                                    className="block mb-2 text-sm font-medium text-gray-900 "
                                >
                                    Phone Number
                                </label>
                                <Field
                                    type="text"
                                    id="phoneNo"
                                    name="phoneNo"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 focus:outline-none"
                                    placeholder="Phone Number"
                                    required
                                />
                                <ErrorMessage
                                    name="phoneNo"
                                    component="div"
                                    className="text-red-500"
                                />
                            </div>
                        )}
                        {subject && (
                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block mb-2 text-sm font-medium text-gray-900 "
                                >
                                    Subject
                                </label>
                                <Field
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 focus:outline-none"
                                    placeholder="Let us know how we can help you"
                                    required
                                />
                                <ErrorMessage
                                    name="subject"
                                    component="div"
                                    className="text-red-500"
                                />
                            </div>
                        )}
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="message"
                                className="block mb-2 text-sm font-medium text-gray-900 "
                            >
                                Your message
                            </label>
                            <Field
                                as="textarea"
                                id="message"
                                name="message"
                                rows="6"
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 focus:outline-none"
                                placeholder="Leave a comment..."
                                required
                            />
                            <ErrorMessage
                                name="message"
                                component="div"
                                className="text-red-500"
                            />
                        </div>
                        <button
                            type="submit"
                            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#155744]  hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 w-full"
                        >
                            {buttonTitle}
                        </button>
                    </Form>
                </Formik>
            </div>
        </section>
    );
};

export default ContactForm;
