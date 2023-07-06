import github from '../../src/icons/github-icon-1.svg'
import git from '../../src/icons/git.svg'
import slack from '../../src/icons/slack.svg'
import filezilla from '../../src/icons/filezilla.svg'

const teamworkPills = [
    {
        id: 1,
        content: "Git",
        theme: "git",
        li_class: "border-git",
        img_src: git,
        img_alt: "icono de git",
        img_class: "i-git",
    },
    {
        id: 2,
        content: "GitHub",
        theme: "github",
        li_class: "border-github",
        img_src: github,
        img_alt: "icono de github",
        img_class: "i-github",
    },
    {
        id: 3,
        content: "FileZilla",
        theme: "filezilla",
        li_class: "border-filezilla",
        img_src: filezilla,
        img_alt: "icono de filezilla",
        img_class: "i-filezilla",
    },
    {
        id: 4,
        content: "Slack",
        theme: "slack",
        li_class: "border-slack",
        img_src: slack,
        img_alt: "icono de slack",
        img_class: "i-slack",
    },
]

export default teamworkPills