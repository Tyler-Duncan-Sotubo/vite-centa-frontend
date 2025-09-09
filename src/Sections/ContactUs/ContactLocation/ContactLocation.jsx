import ContactLocationStyle from "./ContactLocation.style";
import Data from "../../../assets/data/contact-us/location";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const ContactLocation = () => {
  return (
    <ContactLocationStyle>
      <ScrollAnimate>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="map-content">
                <ScrollAnimate delay={200}>
                  <div className="map-info-card">
                    <ul className="list">
                      {Data?.map((location, index) => (
                        <li key={index}>
                          <div className="list-item">
                            <div className="list-icon">
                              <img src={location.icon} alt="icon" />
                            </div>
                            <div className="list-text">
                              <h4>{location.title}</h4>
                              {location.address && <p>{location.address}</p>}
                              {location.phoneNumbers &&
                                location.phoneNumbers?.map((phoneNumber, i) => (
                                  <p key={i}>{phoneNumber}</p>
                                ))}
                              {location.emails &&
                                location.emails?.map((email, i) => (
                                  <p key={i}>{email}</p>
                                ))}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollAnimate>

                <div className="contact-map">
                  <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.908943585594!2d3.330934974603163!3d6.642841921728048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93f0d969b64f%3A0x9c8fa0e5b63f6a48!2s427%20Oluwadamilola%20Fashade%20St%2C%20Omole%20Phase%201%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1693748271046!5m2!1sen!2sng"
                    width="600"
                    height="450"
                    style={{ border: 0, width: "100%", height: "450px" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimate>
    </ContactLocationStyle>
  );
};

export default ContactLocation;
