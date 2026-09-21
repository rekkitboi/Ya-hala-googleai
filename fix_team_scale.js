const fs = require('fs');
const file = 'src/components/about/MeetOurTeamSection.tsx';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(
  'transform: isActiveHover ? `scale(1.05)` : `scale(${member.portraitScale || 1})`,',
  'transform: isActiveHover ? `scale(${(member.portraitScale || 1) + 0.04})` : `scale(${member.portraitScale || 1})`,'
);
fs.writeFileSync(file, content);
