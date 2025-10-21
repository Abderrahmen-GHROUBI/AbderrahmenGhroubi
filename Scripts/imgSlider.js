/*a slider that only works manually*/ 
function initializeSlider(imageArray, sliderContainer) {
    const slider = sliderContainer;
    let imgContainer = sliderContainer.querySelector('.img_container');
    const btn_forward = sliderContainer.querySelector('.forward');
    const btn_backward = sliderContainer.querySelector('.backward');

    let indexImg = 0;

    // Initialize the first image
    const img = document.createElement('img');
    img.src = imageArray[indexImg];
    imgContainer.appendChild(img);

    btn_forward.addEventListener('click', () => {
        let imgContainer = sliderContainer.querySelector('.img_container');
        if (imgContainer.classList.contains('animating')) {
            return; // Prevent button click during animation
        }

        imgContainer.classList.add('animating'); // Add class to indicate animation
        btn_forward.classList.add('disabled');
        btn_backward.classList.add('disabled');

        indexImg = (indexImg + 1) % imageArray.length;

        // Create a new .next-img container
        let nextImgContainer = document.createElement('div');
        nextImgContainer.classList.add('img_container', 'next');
        const nextImg = document.createElement('img');
        nextImg.src = imageArray[indexImg];
        nextImgContainer.appendChild(nextImg);
        slider.appendChild(nextImgContainer);

        // Apply the slide-left animation to both containers
        imgContainer.classList.add('previous');
        nextImgContainer.style.animation = 'slide-left 1s ease-in-out both';

        // Remove the current container after animation completes
        nextImgContainer.addEventListener('animationend', () => {
            imgContainer.remove();
            nextImgContainer.classList.remove('next', 'animating');
            nextImgContainer.style.animation = '';

            btn_forward.classList.remove('disabled');
            btn_backward.classList.remove('disabled');
        });
    });

    btn_backward.addEventListener('click', () => {
        let imgContainer = sliderContainer.querySelector('.img_container');
        if (imgContainer.classList.contains('animating')) {
            return; // Prevent button click during animation
        }

        imgContainer.classList.add('animating'); // Add class to indicate animation
        btn_forward.classList.add('disabled');
        btn_backward.classList.add('disabled');

        indexImg = (indexImg - 1 + imageArray.length) % imageArray.length;

        // Create a new .previous-img container
        const previousImgContainer = document.createElement('div');
        previousImgContainer.classList.add('img_container', 'previous');
        const previousImg = document.createElement('img');
        previousImg.src = imageArray[indexImg];
        previousImgContainer.appendChild(previousImg);
        slider.appendChild(previousImgContainer);

        imgContainer.classList.add('next');
        previousImgContainer.style.animation = 'slide-right 1s ease-in-out both';

        // Remove the current container after animation completes
        previousImgContainer.addEventListener('animationend', () => {
            imgContainer.remove();
            previousImgContainer.classList.remove('previous', 'animating');
            previousImgContainer.style.animation = '';

            btn_forward.classList.remove('disabled');
            btn_backward.classList.remove('disabled');
        });
    });
}

/*a slider that have an interval*/ 
function initializeSlider2(imageArray, sliderContainer) {
    const slider = sliderContainer;
    let imgContainer = sliderContainer.querySelector('.img_container');
    const btn_forward = sliderContainer.querySelector('.forward');
    const btn_backward = sliderContainer.querySelector('.backward');

    let indexImg = 0;
    let autoSlideInterval;

    // Initialize the first image
    const img = document.createElement('img');
    img.src = imageArray[indexImg];
    imgContainer.appendChild(img);

    // Function to handle next slide
    function nextSlide() {
        let imgContainer = sliderContainer.querySelector('.img_container');
        if (imgContainer.classList.contains('animating')) {
            return; // Prevent slide during animation
        }

        imgContainer.classList.add('animating'); // Add class to indicate animation
        btn_forward.classList.add('disabled');
        btn_backward.classList.add('disabled');

        indexImg = (indexImg + 1) % imageArray.length;

        // Create a new .next-img container
        let nextImgContainer = document.createElement('div');
        nextImgContainer.classList.add('img_container', 'next');
        const nextImg = document.createElement('img');
        nextImg.src = imageArray[indexImg];
        nextImgContainer.appendChild(nextImg);
        slider.appendChild(nextImgContainer);

        // Apply the slide-left animation to both containers
        imgContainer.classList.add('previous');
        nextImgContainer.style.animation = 'slide-left 1s ease-in-out both';

        // Remove the current container after animation completes
        nextImgContainer.addEventListener('animationend', () => {
            imgContainer.remove();
            nextImgContainer.classList.remove('next', 'animating');
            nextImgContainer.style.animation = '';

            btn_forward.classList.remove('disabled');
            btn_backward.classList.remove('disabled');
        });
    }

    // Function to handle previous slide
    function previousSlide() {
        let imgContainer = sliderContainer.querySelector('.img_container');
        if (imgContainer.classList.contains('animating')) {
            return; // Prevent slide during animation
        }

        imgContainer.classList.add('animating'); // Add class to indicate animation
        btn_forward.classList.add('disabled');
        btn_backward.classList.add('disabled');

        indexImg = (indexImg - 1 + imageArray.length) % imageArray.length;

        // Create a new .previous-img container
        const previousImgContainer = document.createElement('div');
        previousImgContainer.classList.add('img_container', 'previous');
        const previousImg = document.createElement('img');
        previousImg.src = imageArray[indexImg];
        previousImgContainer.appendChild(previousImg);
        slider.appendChild(previousImgContainer);

        // Apply the slide-right animation to both containers
        imgContainer.classList.add('next');
        previousImgContainer.style.animation = 'slide-right 1s ease-in-out both';

        // Remove the current container after animation completes
        previousImgContainer.addEventListener('animationend', () => {
            imgContainer.remove();
            previousImgContainer.classList.remove('previous', 'animating');
            previousImgContainer.style.animation = '';

            btn_forward.classList.remove('disabled');
            btn_backward.classList.remove('disabled');
        });
    }

    // Function to start auto slide
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000); // Set up auto slide every 5 seconds
    }

    // Event listeners for manual navigation
    btn_forward.addEventListener('click', () => {
        clearInterval(autoSlideInterval); // Clear the auto slide interval
        nextSlide();
        startAutoSlide(); // Restart auto slide after manual navigation
    });

    btn_backward.addEventListener('click', () => {
        clearInterval(autoSlideInterval); // Clear the auto slide interval
        previousSlide();
        startAutoSlide(); // Restart auto slide after manual navigation
    });

    // Start auto slide initially
    startAutoSlide();
}




let TestiniProjectImages = [
    "./images/project captures/Testini/testini1.png",
    "./images/project captures/Testini/testini2.png",
    "./images/project captures/Testini/testini3.png"
];

let DatesClassificationProjectImages = [
    "./images/project captures/DatesClassification/dates1.png",
    "./images/project captures/DatesClassification/dates2.png",
    "./images/project captures/DatesClassification/dates3.png"
];

let CompetitionMicroserviceProjectImages = [
    "./images/project captures/CompetitionMicroservice/competition1.png",
    "./images/project captures/CompetitionMicroservice/competition2.png",
    "./images/project captures/CompetitionMicroservice/competition3.png"
];

let projectSpringbootGestionStageImages = [
    "./images/project captures/Gestion stage Spring/login.png",
    "./images/project captures/Gestion stage Spring/admin interface.png",
    "./images/project captures/Gestion stage Spring/adding notif.png",
    "./images/project captures/Gestion stage Spring/filter.png",
    "./images/project captures/Gestion stage Spring/interface student.png",
    "./images/project captures/Gestion stage Spring/contact info.png"
];


let JavaFXAstronomyCenterImage = [
    "./images/project captures/AstroCenter/Ast1.png",
    "./images/project captures/AstroCenter/astr2.png",
    "./images/project captures/AstroCenter/astr3.png",
    "./images/project captures/AstroCenter/astr4.png",
    
   
];

let projectbtyCenterImages = [
    "./images/project captures/btyCenter/C++.png",
    "./images/project captures/btyCenter/c++1.png"
];

let projectgraylogImages = [
    "./images/project captures/graylog/Grafana.png",
    "./images/project captures/graylog/graylog1.png",
    
];

let projectOracleImages = [
    "./images/project captures/Oracle/or0.png",
    "./images/project captures/Oracle/or1.png",
    "./images/project captures/Oracle/or2.png",
    "./images/project captures/Oracle/or3.png",
    "./images/project captures/Oracle/or4.png",
    
];


const TestiniProjectSliderContainer = document.querySelector('#TestiniProject .img_slider');
initializeSlider2(TestiniProjectImages, TestiniProjectSliderContainer);

const DatesClassificationProjectSliderContainer = document.querySelector('#DatesClassificationProject .img_slider');
initializeSlider2(DatesClassificationProjectImages, DatesClassificationProjectSliderContainer);

const CompetitionMicroserviceProjectSliderContainer = document.querySelector('#CompetitionMicroserviceProject .img_slider');
initializeSlider2(CompetitionMicroserviceProjectImages, CompetitionMicroserviceProjectSliderContainer);

const project_SpringbootStage_SliderContainer = document.querySelector('#SpringBootStage .img_slider');
initializeSlider2(projectSpringbootGestionStageImages, project_SpringbootStage_SliderContainer);

const projectJavaFXAstronomyCenterSliderContainer = document.querySelector('#JavaFXAstronomyCenter .img_slider');
initializeSlider2(JavaFXAstronomyCenterImage, projectJavaFXAstronomyCenterSliderContainer);

const projectDeliveryManagementStageSliderContainer = document.querySelector('#DeliveryManagementStage .img_slider');
initializeSlider(projectOracleImages, projectDeliveryManagementStageSliderContainer);

const projectBeautyCenterManagementSliderContainer = document.querySelector('#BeautyCenterManagement .img_slider');
initializeSlider2(projectbtyCenterImages, projectBeautyCenterManagementSliderContainer);

const projectLogServerProjectContainer = document.querySelector('#LogServerProject .img_slider');
initializeSlider2(projectgraylogImages, projectLogServerProjectContainer);

