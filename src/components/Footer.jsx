function Footer() {
  return (
    <div className="bg-dark text-light fixed-bottom mt-5">
      <div className="container-fluid d-flex justify-content-center align-items-center gap-5 py-3 ">
        <p className="mb-0">
          © <span>{new Date().getFullYear()}</span> mgDev
        </p>
        <p className="mb-0">All Rights Reserved</p>
      </div>
    </div>
  );
}
export default Footer;
