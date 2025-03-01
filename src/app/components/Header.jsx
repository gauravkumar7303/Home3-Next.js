'use client';
import { useEffect, useState, useRef } from 'react';

const Header = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselInnerRef = useRef(null);
    const autoSlideInterval = useRef(null);

    const updateCarousel = () => {
        const offset = -currentIndex * 100;
        if (carouselInnerRef.current) {
            carouselInnerRef.current.style.transform = `translateX(${offset}%)`;
        }
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 2));
        resetAutoSlide();
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex < 2 ? prevIndex + 1 : 0));
        resetAutoSlide();
    };

    const autoSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex < 2 ? prevIndex + 1 : 0));
    };

    const resetAutoSlide = () => {
        clearInterval(autoSlideInterval.current);
        autoSlideInterval.current = setInterval(autoSlide, 3000);
    };

    useEffect(() => {
        updateCarousel();
    }, [currentIndex]);

    useEffect(() => {
        autoSlideInterval.current = setInterval(autoSlide, 3000);
        return () => clearInterval(autoSlideInterval.current);
    }, []);

    return (
        <header className='header'>
            <div className="carousel overflow-hidden relative w-full max-w-lg" style={{ maxWidth: `100%`, height: `800px` }}>
                <div ref={carouselInnerRef} className="carousel-inner flex">
                    <div className="carousel-item relative min-w-full transition-transform duration-500" style={{ maxWidth: `100%`, height: `800px` }}>
                        <img
                            src="images/slider/pexels-life-of-pix-2489.jpg"
                            alt="Slide 1"
                            className="w-full h-full object-cover"
                        />
                        <div className="carousel-content absolute top-0 left-0 w-full h-full flex  bg-black bg-opacity-50 text-white">
                            <div className="header-info px-16" style={{ paddingTop: `10rem` }}>
                                <div className="row flex flex-wrap">
                                    <div className="columns text-center" style={{ width: `400px` }}>
                                        <h1 className="text-4xl pt-10 pb-2">Project</h1>
                                    </div>
                                    <div className="columns" style={{ width: `700px` }}>
                                        <div className="row flex flex-wrap">
                                            <div className="header-top mb-6">
                                                <div className="row flex flex-wrap">
                                                    <h1 className='w-96'>FEATURED</h1>
                                                    <h1 className='w-96'>GOURAV DESIGN AND COO.</h1>
                                                </div>
                                                <div className="heading pt-8 pb-8">
                                                    <h1 className="text-5xl">
                                                        AMBER <br />
                                                        PROJECT <br /> PROGRESS <br />
                                                        8/2024
                                                    </h1>
                                                </div>
                                                <div className="par pb-10">
                                                    <p>
                                                        Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. <br />
                                                        Iusto dolorem saepe eum deleniti.
                                                    </p>
                                                </div>
                                                <div className="header-last flex flex-wrap justify-between" style={{ width: `500px` }}>
                                                    <div className="box3">
                                                    <div
                                                        className="box w-20 h-20 text-center p-4 pr-4"
                                                        style={{ backgroundColor: "orange" }}
                                                    >
                                                        <span style={{ fontSize: "50px" }}>&#8599;</span>
                                                    </div>
                                                    </div>
                                                    <div className="buttons mt-16 w-96">
                                                        <button
                                                            id="prev"
                                                            onClick={prevSlide}
                                                            className="top-1/2 transform -translate-y-1/2 text-white"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 320 512"
                                                                className="h-9 w-9"
                                                            >
                                                                <path
                                                                    fill="#f7f9fc"
                                                                    d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
                                                                />
                                                            </svg>
                                                        </button>
                                                        <button
                                                            id="next"
                                                            onClick={nextSlide}
                                                            className="top-1/2 transform -translate-y-1/2 text-white"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 320 512"
                                                                className="h-9 w-9"
                                                            >
                                                                <path
                                                                    fill="#f4f5f6"
                                                                    d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5 12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                                                                />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item relative min-w-full transition-transform duration-500" style={{ maxWidth: `100%`, height: `800px` }}>
                        <img
                            src="images/slider/pexels-quang-nguyen-vinh-222549-2138126.jpg"
                            alt="Slide 2"
                            className="w-full h-full object-cover"
                        />
                        <div className="carousel-content absolute top-0 left-0 w-full h-full  bg-black bg-opacity-50 text-white">
                            <div className="header-info px-16" style={{ paddingTop: "10rem" }}>
                                <div className="row flex flex-wrap">
                                    <div className="columns text-center" style={{ width: "400px" }}>
                                        <h1 className="text-4xl pt-10 pb-4">News</h1>
                                    </div>
                                    <div className="columns" style={{ width: "700px" }}>
                                        <div className="header-top mb-6">
                                            <div className="row flex flex-wrap justify-between">
                                                <h1>FEATURES</h1>
                                                <h1>GOURAV DESIGN & COO.</h1>
                                            </div>
                                            <div className="heading pt-8 pb-8">
                                                <h1 className="text-5xl">
                                                    OHIO <br />
                                                    FINACE OFFICE <br />
                                                    BULIDING
                                                </h1>
                                            </div>
                                            <div className="par pb-10">
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. <br />
                                                    Iusto dolorem saepe eum deleniti.
                                                </p>
                                            </div>
                                            <div className="header-last flex flex-wrap justify-between">
                                                <div
                                                    className="box w-20 h-20 text-center p-4"
                                                    style={{ backgroundColor: "orange" }}
                                                >
                                                    <span style={{ fontSize: "50px" }}>&#8599;</span>
                                                </div>
                                                <div className="buttons mt-16">
                                                    <button
                                                        id="prev"
                                                        onClick={prevSlide}
                                                        className="top-1/2 transform -translate-y-1/2 text-white"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 320 512"
                                                            className="h-9 w-9"
                                                        >
                                                            <path
                                                                fill="#f7f9fc"
                                                                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
                                                            />
                                                        </svg>
                                                    </button>
                                                    <button
                                                        id="next"
                                                        onClick={nextSlide}
                                                        className="top-1/2 transform -translate-y-1/2 text-white"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 320 512"
                                                            className="h-9 w-9"
                                                        >
                                                            <path
                                                                fill="#f4f5f6"
                                                                d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5 12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                                                            />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item relative min-w-full transition-transform duration-500" style={{ maxWidth: `100%`, height: `800px` }}>
                        <img
                            src="images/slider/pexels-rezwan-1078884.jpg"
                            alt="Slide 3"
                            className="w-full h-full object-cover"
                        />
                        <div className="carousel-content absolute top-0 left-0 w-full h-full  bg-black bg-opacity-50 text-white">
                            <div className="header-info px-16" style={{ paddingTop: "10rem" }}>
                                <div className="row flex flex-wrap">
                                    <div className="columns text-center" style={{ width: "400px" }}>
                                        <h1 className="text-4xl pt-10 pb-4">BUILD</h1>
                                    </div>
                                    <div className="columns" style={{ width: "700px" }}>
                                        <div className="header-top mb-6">
                                            <div className="row flex flex-wrap justify-between">
                                                <h1>PHILOSOPHY</h1>
                                                <h1>GOURAV DESIGN & COO.</h1>
                                            </div>
                                            <div className="heading pt-8 pb-8">
                                                <h1 className="text-5xl">
                                                    TIMELESS <br />
                                                    SUSTANABLE & <br />
                                                    STABLE
                                                </h1>
                                            </div>
                                            <div className="par pb-10">
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                                                    Iusto dolorem saepe eum deleniti.
                                                </p>
                                            </div>
                                            <div className="header-last flex flex-wrap justify-between">
                                                <div
                                                    className="box w-20 h-20 text-center p-4"
                                                    style={{ backgroundColor: "orange" }}
                                                >
                                                    <span style={{ fontSize: "50px" }}>&#8599;</span>
                                                </div>
                                                <div className="buttons mt-16">
                                                    <button
                                                        id="prev"
                                                        onClick={prevSlide}
                                                        className="top-1/2 transform -translate-y-1/2 text-white"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 320 512"
                                                            className="h-9 w-9"
                                                        >
                                                            <path
                                                                fill="#f7f9fc"
                                                                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
                                                            />
                                                        </svg>
                                                    </button>
                                                    <button
                                                        id="next"
                                                        onClick={nextSlide}
                                                        className="top-1/2 transform -translate-y-1/2 text-white"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 320 512"
                                                            className="h-9 w-9"
                                                        >
                                                            <path
                                                                fill="#f4f5f6"
                                                                d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5 12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                                                            />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nav p-6 absolute top-0 left-0" style={{ width: `100%` }}>
                    <div className="row flex flex-wrap justify-between">
                        <div className="columns inline-block w-96 mb-4">
                            <img src="images/logo.png" alt="" />
                        </div>
                        <div className="columns inline-block w-96 mb-4">
                            <select name="" id="" className="p-2 text-slate-950">
                                <option value="client">Private client1</option>
                                <option value="client">Private client2</option>
                            </select>
                        </div>
                        <div className="columns inline-block flex justify-end p-2">
                            <a href="#" className="border p-2 text-white hover:bg-white hover:text-black">
                                free Consultation
                                <i className="fa-light fa-arrow-up-right" style={{ color: '#fcfcfc' }}></i>
                            </a>
                            <a href="#" className="border p-2 hover:bg-white hover:text-black">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 hover:color-black">
                                    <path
                                        fill="#fafcff"
                                        d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"
                                    />
                                </svg>
                            </a>
                            <a href="#" className="border p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 text-white">
                                    <path
                                        fill="#fafcff"
                                        d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                                    />
                                </svg>
                            </a>
                            <a href="#" className="border p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5">
                                    <path
                                        fill="#f7f7f7"
                                        d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;