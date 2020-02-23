export default function saveToLocalStorage() {

    formEmail.value = localStorage.getItem('email');
    formEmail.oninput = () => {
        localStorage.setItem('email', formEmail.value)
    }
}