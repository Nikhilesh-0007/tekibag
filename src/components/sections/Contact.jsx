import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: location.state?.selectedCourse || '',
    message: '',
  });

  useEffect(() => {
    if (location.state?.selectedCourse) {
      setFormData((prev) => ({
        ...prev,
        course: location.state.selectedCourse
      }));
    }
  }, [location.state]);

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const coursesOptions = [
    'Full Stack Development',
    'Java Development',
    'Python Programming',
    'React JS',
    'Node JS',
    'AWS Cloud',
    'DevOps',
    'Docker & Kubernetes',
    'Data Structures & Algorithms',
    'Machine Learning',
    'Artificial Intelligence',
    'Data Science',
    'SQL & Databases',
    'Git & GitHub',
    'UI/UX Design',
    'Cyber Security',
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';

    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+() -]{10,15}$/.test(formData.phone)) {
      tempErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.course) tempErrors.course = 'Please select a course';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // WhatsApp Redirect
      let whatsappText = `Hello TEKIBAG! I would like to make an inquiry.\n\n` +
        `*Name:* ${formData.name}\n` +
        `*Email:* ${formData.email}\n` +
        `*Phone:* ${formData.phone}\n` +
        `*Course:* ${formData.course}`;

      if (formData.message && formData.message.trim()) {
        whatsappText += `\n*Message:* ${formData.message}`;
      }

      const encodedText = encodeURIComponent(whatsappText);
      const whatsappUrl = `https://wa.me/917793972779?text=${encodedText}`;
      window.open(whatsappUrl, '_blank');

      setFormData({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: '',
      });
      // Clear success banner after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1800);
  };

  return (
    <section id="contact" className="relative py-24 bg-white dark:bg-slate-900 transition-colors duration-300 overflow-hidden">

      {/* Background radial gradient */}
      <div className="absolute right-[-10%] top-[20%] w-[35vw] h-[35vw] rounded-full bg-primary/5 dark:bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute left-[-10%] bottom-[10%] w-[35vw] h-[35vw] rounded-full bg-accent/5 dark:bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-primary dark:text-accent bg-primary/10 dark:bg-accent/10 px-3.5 py-1.5 rounded-full">
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary dark:text-white leading-tight">
            Get In Touch With Our Mentors
          </h2>
          <p className="text-base text-slate-550 dark:text-slate-400">
            Have questions about fees, syllabus, or placement? Shoot us a message or contact us directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

          {/* Left Column: Contact details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-8 p-8 bg-slate-50 dark:bg-slate-950/40 rounded-tekibag border border-slate-200/50 dark:border-slate-850 shadow-premium"
          >
            {/* Quick Cards Info */}
            <div className="space-y-6 text-left">
              <h3 className="text-xl font-bold text-secondary dark:text-white pb-3 border-b border-slate-200 dark:border-slate-800">
                Contact Information
              </h3>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-150/50 dark:border-slate-800 text-primary dark:text-accent shadow-sm">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase">Call Us</div>
                  <a href="tel:+916302284725" className="text-base font-bold text-secondary dark:text-white hover:text-primary transition-colors">
                    +91 6302284725
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-150/50 dark:border-slate-800 text-primary dark:text-accent shadow-sm">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase">Email Us</div>
                  <a href="mailto:tekibag@gmail.com" className="text-base font-bold text-secondary dark:text-white hover:text-primary transition-colors">
                    tekibag@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-150/50 dark:border-slate-800 text-primary dark:text-accent shadow-sm">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase">Location</div>
                  <p className="text-base font-bold text-secondary dark:text-white">
                    Bengalore, India
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}


          </motion.div>

          {/* Right Column: Modern Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 p-8 sm:p-10 bg-slate-50 dark:bg-slate-950/40 rounded-tekibag border border-slate-200/50 dark:border-slate-850 shadow-premium relative flex flex-col justify-center"
          >
            <AnimatePresence mode="wait">
              {submitSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center space-y-4 py-8"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center border border-emerald-500/20 shadow-md">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-secondary dark:text-white">
                    Inquiry Submitted Successfully!
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm">
                    Thank you for reaching out. One of our career mentors will contact you shortly via phone or email.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-slate-800 focus:ring-primary dark:focus:ring-accent'
                          } focus:outline-none focus:ring-2 focus:border-transparent text-sm text-secondary dark:text-white transition-all`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-2xs text-red-500 font-semibold">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-slate-800 focus:ring-primary dark:focus:ring-accent'
                          } focus:outline-none focus:ring-2 focus:border-transparent text-sm text-secondary dark:text-white transition-all`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="text-2xs text-red-500 font-semibold">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                        Phone
                      </label>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border ${errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-slate-800 focus:ring-primary dark:focus:ring-accent'
                          } focus:outline-none focus:ring-2 focus:border-transparent text-sm text-secondary dark:text-white transition-all`}
                        placeholder="+91 9876543210"
                      />
                      {errors.phone && <p className="text-2xs text-red-500 font-semibold">{errors.phone}</p>}
                    </div>

                    {/* Course Interested */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                        Course Interested
                      </label>
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border ${errors.course ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-slate-800 focus:ring-primary dark:focus:ring-accent'
                          } focus:outline-none focus:ring-2 focus:border-transparent text-sm text-secondary dark:text-white transition-all`}
                      >
                        <option value="">Select Course</option>
                        {coursesOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      {errors.course && <p className="text-2xs text-red-500 font-semibold">{errors.course}</p>}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                      Message <span className="text-2xs text-slate-400 font-normal lowercase">(optional)</span>
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-slate-800 focus:ring-primary dark:focus:ring-accent'
                        } focus:outline-none focus:ring-2 focus:border-transparent text-sm text-secondary dark:text-white transition-all`}
                      placeholder="Hi, I would like to know about batch timings and installment options..."
                    />
                    {errors.message && <p className="text-2xs text-red-500 font-semibold">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-tekibag text-sm font-semibold text-white bg-primary hover:bg-primary/95 disabled:bg-slate-400 dark:disabled:bg-slate-800 transition-colors shadow-premium cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting Inquiry...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
