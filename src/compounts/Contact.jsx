import {CONTACT_INFO} from "../constants/index.js";
function Contact() {
  return(
    <section id="contact">
        <div className="container flex flex-col gap-16">
            <div className="flex flex-col gap-3 text-center max-w-[500px] mx-auto">
                <h2>Contact Us</h2>
                <p className="max-w-[600px] mx-auto">{CONTACT_INFO.text}</p>
            </div>
            <div className="flex flex-col md:flex-row md:justify-around justify-center items-start gap-16">

                <div className="flex gap-3 items-start">
                    <i class="ri-phone-line text-[30px]"></i>
                    <div className="flex flex-col">
                        <h4>{CONTACT_INFO.phone.label}</h4>
                        <p>{CONTACT_INFO.phone.value}</p>
                    </div>
                </div>

                <div className="flex gap-3 items-start">
                    <i class="ri-mail-open-line text-[30px]"></i>
                    <div className="flex flex-col">
                        <h4>{CONTACT_INFO.email.label}</h4>
                        <p>{CONTACT_INFO.email.value}</p>
                    </div>
                </div>

                <div className="flex gap-3 items-start">
                    <i class="ri-map-pin-2-line text-[30px]"></i>
                    <div className="flex flex-col">
                        <h4>{CONTACT_INFO.address.label}</h4>
                        <p>{CONTACT_INFO.address.value}</p>
                    </div>
                </div>

            </div>

        </div>
    </section>
  );
}
export default Contact;