export interface WorksCardProps {
    title: string;
    description: string;
    technologies: string[];
    links?: {
        label: string;
        url: string;
    }[];
}
