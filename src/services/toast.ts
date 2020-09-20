export const toast = async (message: string, duration = 2000) => {
    const toast = document.createElement("ion-toast");
    toast.classList.add('ion-text-center')
    toast.message = message;
    toast.duration = duration;

    document.body.appendChild(toast);
    return toast.present();
};
