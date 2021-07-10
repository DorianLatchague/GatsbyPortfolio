import axios from 'axios';

export default function submitContactForm(recaptchaToken: string, form: {
    subject: string,
    message: string,
    email: string,
    name: string
}) {
    return axios.post('https://api.dorianlatchague.com/portfolio/message',{ ...form, recaptchaToken});
}