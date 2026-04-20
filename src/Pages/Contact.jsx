import React, { useState } from 'react'

    const Contact = () => {

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleChange = (e) => {
        setForm({
        ...form,
        [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form)

        setForm({
        name: "",
        email: "",
        message: ""
        })
    }

    return (
        <div className="bg-gradient-to-br from-gray-900 to-black min-h-screen flex justify-center items-center text-white relative overflow-hidden">

        <div className="absolute w-[400px] h-[400px] bg-pink-500 opacity-20 blur-3xl rounded-full top-[-100px] left-[-100px]"></div>
        <div className="absolute w-[400px] h-[400px] bg-amber-400 opacity-20 blur-3xl rounded-full bottom-[-100px] right-[-100px]"></div>

        <form
            onSubmit={handleSubmit}
            className="backdrop-blur-md bg-white/10 border border-white/20 p-8 rounded-2xl shadow-xl w-96"
        >

            <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-amber-400 to-pink-500 text-transparent bg-clip-text">
            Contact Us
            </h2>

            <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 mb-4 rounded bg-gray-800 outline-none focus:ring-2 focus:ring-amber-400 transition"
            />

            <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 mb-4 rounded bg-gray-800 outline-none focus:ring-2 focus:ring-amber-400 transition"
            />

            <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 mb-4 rounded bg-gray-800 outline-none focus:ring-2 focus:ring-amber-400 transition"
            />

            <button
            type="submit"
            className="w-full bg-gradient-to-r from-amber-400 to-pink-500 text-black py-3 rounded-lg font-bold hover:scale-105 hover:shadow-lg transition"
            >
            Send Message 🚀
            </button>

        </form>

        </div>
    )
}

export default Contact