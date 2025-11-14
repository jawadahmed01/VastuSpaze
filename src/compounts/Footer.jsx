function Footer (){
    return (
        <footer className="py-5">
            <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
                 <div className="flex justify-center items-center gap-3">
                    <a href=""><i class="ri-facebook-fill"></i></a>
                    <a href=""><i class="ri-twitter-fill"></i></a>
                    <a href=""><i class="ri-instagram-fill"></i></a>
                    <a href=""><i class="ri-linkedin-fill"></i></a>
                 </div>
                 <p className="text-center">@ 2025 VastuSpaze, All right reserved</p>
            </div>
        </footer>
    );
}
export default Footer;