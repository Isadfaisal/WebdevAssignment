// availabel at:https://www.w3schools.com/jsreF/event_onloadstart.asp [accessed:21 November 2024]
window.onload = function () {
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');
    loader.style.opacity = '0';
    setTimeout(() => {
        loader.style.display = 'none';
        content.style.display = 'block';
    }, 1300);
};

function redirectToLink1() {
    window.location.href  = 'https://discord.com/invite/9jesgZvgbt'
}
function redirectToLink2() {
    window.location.href  = 'https://x.com/jojo_wiki'
}
