"use client";
import Nav from '@/components/Nav';
import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Message sent!');
        setForm({ name: '', email: '', message: '' });
    };

    return (
        <main className="min-h-screen bg-gray-900 flex flex-col items-center">
        <Nav />
        <div className="max-w-md w-full mx-auto mt-12 p-8 bg-gray-800 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-6 text-white text-center">Contact Me</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    className="border border-gray-600 bg-gray-900 text-white rounded p-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    className="border border-gray-600 bg-gray-900 text-white rounded p-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={form.message}
                    onChange={handleChange}
                    className="border border-gray-600 bg-gray-900 text-white rounded p-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    rows={4}
                    required
                />
                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded p-3 transition-colors"
                >
                    Send
                </button>
            </form>
        </div>
        </main>
    );
};

export default Contact;