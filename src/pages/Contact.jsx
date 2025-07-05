import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from 'emailjs-com'; // 👈 add this on top
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";

function isValidEmail(email) {
  return email.includes('@') && email.includes('.') && email.indexOf('@') < email.lastIndexOf('.');
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    return newErrors;
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const newErrors = validateForm();
    
  //   if (Object.keys(newErrors).length === 0) {
  //     setIsSubmitting(true);
  //     // Simulate API call
  //     await new Promise(resolve => setTimeout(resolve, 1500));
  //     setShowSuccess(true);
  //     setFormData({ name: "", email: "", message: "" });
  //     setIsSubmitting(false);
  //     setTimeout(() => setShowSuccess(false), 3000);
  //   } else {
  //     setErrors(newErrors);
  //   }
  // };


const handleSubmit = async (e) => {
  e.preventDefault();
  const newErrors = validateForm();

  if (Object.keys(newErrors).length === 0) {
    setIsSubmitting(true);

    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_mta6ofi",     // 👈 Replace this
        "template_qkuurks",    // 👈 Replace this
        templateParams,
        "Sqck7gyXmEjHxiAsu"      // 👈 Replace this
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setShowSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setShowSuccess(false), 3000);
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("Failed to send message. Try again.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  } else {
    setErrors(newErrors);
  }
};


  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-16"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              <div className="bg-card rounded-xl p-6 shadow-md border border-border/50">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <a href="mailto:your.email@example.com" className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors">
                    <Mail className="w-5 h-5" />
                    <span>mubashirbehlum606@gmail.com</span>
                  </a>
                  <a href="tel:+1234567890" className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors">
                    <Phone className="w-5 h-5" />
                    <span>+92 313 0380 799</span>
                  </a>
                  <div className="flex items-center gap-3 text-foreground/80">
                    <MapPin className="w-5 h-5" />
                    <span>Karachi, Pakistan</span>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-md border border-border/50">
                <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="bg-card rounded-xl p-6 shadow-md border border-border/50 space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                    placeholder="Shahzada"
                  />
                  {errors.name && (
                    <p className="text-destructive text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                    placeholder="mmb@example.com"
                  />
                  {errors.email && (
                    <p className="text-destructive text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full p-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 resize-none"
                    placeholder="Your message here..."
                  />
                  {errors.message && (
                    <p className="text-destructive text-sm mt-1">{errors.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>


      {/* Success Message */}
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-6 py-3 rounded-xl bg-green-600/95 text-white shadow-2xl"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <span className="font-medium tracking-wide">Message sent successfully!</span>
        </motion.div>
      )}
    </motion.section>
  );
};

export default Contact;
