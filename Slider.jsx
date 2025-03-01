import React from 'react'

function Slider() {
    return (
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="500">
                    <img src="https://media.istockphoto.com/id/1043604390/photo/butter-chicken-pizza.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZPtRBbcQDKIGQEdtAGaH4BwzshBFIL-IlIuRXXjzXYQ=" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="500">
                    <img src="https://images.unsplash.com/photo-1528279027-68f0d7fce9f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhc3QlMjBmb29kfGVufDB8fDB8fHww" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="500">
                    <img src="https://media.istockphoto.com/id/1140147080/photo/chicken-fry-hot-and-spicy.webp?a=1&b=1&s=612x612&w=0&k=20&c=TxK8DA8GnwtRiGQ5fpDnEAOTDUvx34doR9eoW_Rm8V8=" class="d-block w-100" alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Slider