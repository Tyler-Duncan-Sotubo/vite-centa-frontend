import { useState } from "react";
import SayHelloStyle from "./SayHello.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import ContactImg from "../../../assets/images/contact/contact-img.png";
import ShapeImg1 from "../../../assets/images/contact/shape-1.svg";
import ShapeImg2 from "../../../assets/images/contact/shape-2.svg";
import SmsTrackingImg from "../../../assets/images/icons/sms-tracking-2.svg";
import CallOutgoingImg from "../../../assets/images/icons/call-outgoing.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const API_BASE = import.meta.env.VITE_API_BASE || "";

const SayHello = () => {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", msg: "" });

    const form = e.currentTarget;

    // simple honeypot: bots fill hidden field, humans won't
    if (form.company?.value) {
      setStatus({ type: "error", msg: "Submission blocked." });
      return;
    }

    const name = form["user-name"].value.trim();
    const email = form["email-address"].value.trim();
    const phone = form["phone-number"].value.trim();
    let website = form["website"].value.trim();
    const message = form["message"].value.trim();

    // Normalize website (optional)
    if (website && !/^https?:\/\//i.test(website)) {
      website = `https://${website}`;
    }

    // Basic client-side validation (server still validates)
    if (!name || !email || !message) {
      setStatus({ type: "error", msg: "Please fill the required fields." });
      return;
    }

    const payload = {
      name,
      email,
      phone: phone || undefined,
      website: website || undefined,
      message,
    };

    try {
      setSubmitting(true);
      const res = await fetch(`${API_BASE}/email-contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(text || `Request failed with ${res.status}`);
      }

      setStatus({
        type: "success",
        msg: "Thanks! We’ve received your message.",
      });
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus({
        type: "error",
        msg: "Sorry, something went wrong. Please try again in a moment.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SayHelloStyle>
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6">
            <ScrollAnimate delay={200}>
              <div className="contact-img">
                <img src={ContactImg} alt="contact-img" />
                <div className="overlay-item shape-1">
                  <img src={ShapeImg1} alt="shape-img" />
                  <div className="icon">
                    <img src={SmsTrackingImg} alt="icon" />
                  </div>
                </div>
                <div className="overlay-item shape-2">
                  <img src={ShapeImg2} alt="shape-img" />
                  <div className="icon">
                    <img src={CallOutgoingImg} alt="icon" />
                  </div>
                </div>
              </div>
            </ScrollAnimate>
          </div>

          <div className="col-lg-6">
            <div className="contact-content">
              <ScrollAnimate>
                <SectionTitle
                  subtitle="Say Hello!"
                  title="We'd pleased to hear"
                />
              </ScrollAnimate>

              <ScrollAnimate>
                <div className="contact-content-body">
                  <form onSubmit={handleSubmit} noValidate>
                    {/* honeypot (hidden) */}
                    <input
                      type="text"
                      name="company"
                      tabIndex="-1"
                      autoComplete="off"
                      style={{ position: "absolute", left: "-9999px" }}
                      aria-hidden="true"
                    />

                    <div className="form-input-between">
                      <div className="form-input mb-20">
                        <label htmlFor="user-name">Your Name *</label>
                        <input
                          type="text"
                          name="user-name"
                          id="user-name"
                          placeholder="e.g. Roe Smith"
                          required
                          disabled={submitting}
                        />
                      </div>
                      <div className="form-input mb-20">
                        <label htmlFor="email-address">Email Address *</label>
                        <input
                          type="email"
                          name="email-address"
                          id="email-address"
                          placeholder="e.g. example@mail.com"
                          required
                          disabled={submitting}
                        />
                      </div>
                    </div>

                    <div className="form-input-between">
                      <div className="form-input mb-20">
                        <label htmlFor="phone-number">Phone Number</label>
                        <input
                          type="text"
                          name="phone-number"
                          id="phone-number"
                          placeholder="e.g. +55 695 6965"
                          disabled={submitting}
                        />
                      </div>
                      <div className="form-input mb-20">
                        <label htmlFor="website">Website</label>
                        <input
                          type="text"
                          name="website"
                          id="website"
                          placeholder="e.g. website.com"
                          disabled={submitting}
                        />
                      </div>
                    </div>

                    <div className="form-input mb-30">
                      <label htmlFor="message">Message *</label>
                      <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="5"
                        placeholder="Type your message"
                        required
                        disabled={submitting}
                      ></textarea>
                    </div>

                    {/* status message */}
                    <div aria-live="polite" className="mb-20">
                      {status.msg && (
                        <p
                          style={{
                            color:
                              status.type === "error" ? "#c0392b" : "#2ecc71",
                            marginBottom: 0,
                          }}
                        >
                          {status.msg}
                        </p>
                      )}
                    </div>

                    <div className="item-button">
                      <button
                        type="submit"
                        className="template-btn primary-bg"
                        disabled={submitting}
                      >
                        {submitting ? "Sending..." : "Submit Message"}
                      </button>
                    </div>
                  </form>
                </div>
              </ScrollAnimate>
            </div>
          </div>
        </div>
      </div>
    </SayHelloStyle>
  );
};

export default SayHello;
