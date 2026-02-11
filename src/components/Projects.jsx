import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import TextConvert from './TextConvert'

import kyberMin from "../pics/kyber_dispositivos.jpg"
import walletfyMin from "../pics/walletfy_min.jpg"
import blueocean from '../pics/blueocean_min2.jpg'
import thorkey from '../pics/thorkey_min.jpg'
import bsz from '../pics/bzStore-min.jpg'
import clean from '../pics/cleanhouse-mockup1.jpg'

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    { id: 1, img: clean, link: '/cleanhouse', title: 'CleanHouse' },
    { id: 2, img: bsz, link: '/bszstore', title: 'BszStore' },
    { id: 3, img: walletfyMin, link: '/walletfy', title: 'Walletfy' },
    { id: 4, img: kyberMin, link: '/kyber', title: 'Kyber' },
    { id: 5, img: blueocean, link: '/blueocean', title: 'BlueOcean' },
    { id: 6, img: thorkey, link: '/thorkey', title: 'ThorKey' },
  ];

  return (
    <>
      <section className='container pt-4 pb-5'>
        <h3 className='title-home m-5'>{t("projects.title")}</h3>
        <p className='project-subtitle'>
          <TextConvert text={t("projects.subtitle")} />
        </p>

        <div className="row justify-content-center my-5 projects-wrapper">
          {projects.map((project) => (
            <div className="col-12 col-lg-5 m-2 miniatura shadow" key={project.id}>
              <Link to={project.link}>
                <img src={project.img} className="w-100 miniatura-pic" alt={`Project ${project.title}`} />
              </Link>
            </div>
          ))}
        </div>

      </section>

    </>
  )
}

export default Projects
