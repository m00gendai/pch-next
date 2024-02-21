import { NavbarItem } from "./interface_navbar";

export const navbar:NavbarItem[] = [
    {
        name: "Home",
        url: "/",
    },
    {
        name: "Anlässe",
        url: "/anlaesse",
    },
    {
        name: "Resultate",
        url: "/resultate",
    },
    {
        name: "Schiessen",
        url: "",
        sub: [
            {
                name: "Schwabenkrieg-Erinnerungsschiessen",
                url: "/schiessen/schwabenkrieg-erinnerungsschiessen",
            },
            {
                name: "Obligatorisches",
                url: "/schiessen/obligatorisches",
            },
            {
                name: "Feldschiessen",
                url: "/schiessen/feldschiessen",
            },
            {
                name: "Zugelassene Pistolen und Hilfsmittel",
                url: "/schiessen/hilfsmittel",
            },
        ]
    },
    {
        name: "Verein",
        url: "",
        sub: [
            {
                name: "Informationen",
                url: "/verein/informationen"
            },
            {
                name: "Mitmachen",
                url: "/verein/mitmachen"
            },
        ]
    },
    {
        name: "Links",
        url: "/links"
    },
]