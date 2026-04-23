export interface SkillItem {
    genre: string;
    list: string[];
}

export interface SkillCardProps {
    title: string;
    items: (string | SkillItem)[];
}
