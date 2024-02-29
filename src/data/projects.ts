import BulinComms from "../assets/img/BulinComms.png"
import Crappo from "../assets/img/Crappo.png"
import DoctorCare from "../assets/img/DoctorCare.png"
import OpenAdamawa from "../assets/img/OpenAdamawa.png"
import TrackBorno25 from "../assets/img/TrackBorno25.png"

type Project = {
    title: string;
    url: string;
    figmaUrl?: string;
    detail: string;
    imgUrl: string;
}
export const projects: Project[] = [
    {
        title: "Bulin Communications",
        url: "https://bulin-comms.netlify.app/",
        detail: "A Progressive web app built for a hardware store for the management of their products.",
        imgUrl: BulinComms
    },
    {
        title: "Open Adamawa Project",
        url: "https://crappo-challenge.netlify.app/",
        detail: "An open source project aimed at increasing citizens' engagement on issues of budget allocations, fiscal transparency in Adamawa State, Nigeria.",
        imgUrl: OpenAdamawa
    },
    {
        title: "TrackBorno25",
        url: "https://trackborno25.netlify.app/",
        detail: "An admin dashboard for tracking non-governmental activities in the north-eastern state of Nigeria ravaged by insurgency",
        imgUrl: TrackBorno25
    },
    {
        title: "Crappo",
        figmaUrl: "https://www.figma.com/file/TNUU39bIJx9RQOl4w0kSu0/CRAPPO---Free-Cryptocurrency-Website-(Community)?node-id=1%3A55",
        url: "https://crappo-challenge.netlify.app/",
        detail: "Landing page for a crypto-currency site",
        imgUrl: Crappo
    },
    {
        title: "DoctorCare",
        figmaUrl: "https://www.figma.com/file/VWDt2LVp6JyZUizE6DYljF/DoctorCare-(Community)?node-id=1716%3A251",
        url: "https://doctorcare-react.netlify.app/",
        detail: "Landing page for a Medical service provider.",
        imgUrl: DoctorCare
    },
]