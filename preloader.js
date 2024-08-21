const overlay = document.createElement('div');
overlay.id = 'loader';
overlay.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #FFFFFF;
    z-index: 999;
`;

const lottieContainer = document.createElement('div');
lottieContainer.id = 'lottieContainer';
lottieContainer.style.cssText = `
    max-width: 100%;
    max-height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

overlay.appendChild(lottieContainer);

document.body.appendChild(overlay);

function showLoader() {
    overlay.style.display = 'flex';
    lottieContainer.style.display = 'block';
    lottie.loadAnimation({
        container: lottieContainer,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://joseadelmo.github.io/preloaderJSLottie/iSOW_web_preload.lottie.json',
    });
}

function hideLoader() {
    overlay.style.display = 'none';
}

showLoader();

window.addEventListener('load', hideLoader);
