import { Badge } from "@/components/ui/badge";
import { skills } from "@/data/skills";

export function SkillsGrid() {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
      {skills.map((skill) => (
        <Badge key={skill} variant="secondary" className="justify-center py-2">
          {skill}
        </Badge>
      ))}
    </div>
  );
}


