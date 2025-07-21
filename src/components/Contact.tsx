import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send, MapPin, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Generates a mailto: link dynamically
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mailtoLink = `mailto:Kowsihash@gmail.com?subject=New Message from ${encodeURIComponent(
      formData.name
    )}&body=From: ${encodeURIComponent(formData.email)}%0D%0A%0D%0A${encodeURIComponent(
      formData.message
    )}`;

    window.location.href = mailtoLink;
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '9489551222',
      href: 'tel:+919489551222',
      color: 'from-green-500 to-emerald-500',
      hoverColor: 'hover:shadow-green-500/25'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'Kowsihash@gmail.com',
      href: 'mailto:Kowsihash@gmail.com',
      color: 'from-blue-500 to-cyan-500',
      hoverColor: 'hover:shadow-blue-500/25'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://www.linkedin.com/in/kowsihash-p-07a867282/',
      color: 'from-blue-600 to-indigo-600',
      hoverColor: 'hover:shadow-blue-600/25'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'View my repositories',
      href: 'https://github.com/KOWSIHASH',
      color: 'from-gray-600 to-slate-600',
      hoverColor: 'hover:shadow-gray-500/25'
    }
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Let's work together or chat about a project! I'm always excited to discuss new opportunities and innovative ideas.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/20 transition-all duration-300">
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Send me a message</h3>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <button
                type="submit"
                className="group w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
              >
                <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-8">Get in touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`group flex items-center space-x-4 p-4 rounded-xl bg-gray-700/30 hover:bg-gray-700/50 transition-all duration-300 border border-gray-600/30 hover:border-purple-500/30 ${info.hoverColor}`}
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${info.color}`}>
                      <info.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{info.label}</p>
                      <p className="text-white font-medium group-hover:text-purple-400 transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white">Location</h4>
              </div>
              <div className="text-gray-400 space-y-1">
                <p className="font-medium">Dr. N.G.P. Institute of Technology</p>
                <p>Tamil Nadu, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
